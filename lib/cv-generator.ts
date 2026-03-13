import mammoth from "mammoth";
import { PdfReader } from "pdfreader";

export type ParsedCv = {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
  summary: string;
  skills: string[];
  experience: string[];
  education: string[];
  projects: string[];
  certifications: string[];
};

function decodeHtmlEntities(input: string) {
  return input
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function normalizeLinkedinUrl(url: string) {
  const trimmed = url.trim();
  if (!/^https?:\/\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

function extractPdfText(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const rows: Record<number, string[]> = {};

    new PdfReader().parseBuffer(buffer, (error, item) => {
      if (error) {
        reject(error);
        return;
      }

      if (!item) {
        const text = Object.keys(rows)
          .map(Number)
          .sort((a, b) => a - b)
          .map((y) => rows[y].join(" "))
          .join("\n");
        resolve(text);
        return;
      }

      if ("text" in item && item.text) {
        const y = Math.floor(item.y ?? 0);
        rows[y] = rows[y] || [];
        rows[y].push(item.text);
      }
    });
  });
}

const EMPTY_CV: ParsedCv = {
  name: "Your Name",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  github: "",
  website: "",
  summary: "",
  skills: [],
  experience: [],
  education: [],
  projects: [],
  certifications: [],
};

const SECTION_MAP: Record<string, keyof ParsedCv> = {
  experience: "experience",
  "work experience": "experience",
  "professional experience": "experience",
  experiencia: "experience",
  skills: "skills",
  "technical skills": "skills",
  habilidades: "skills",
  stack: "skills",
  education: "education",
  educacion: "education",
  formación: "education",
  projects: "projects",
  proyectos: "projects",
  certifications: "certifications",
  certificados: "certifications",
  summary: "summary",
  perfil: "summary",
  "about me": "summary",
};

function cleanLine(line: string) {
  return line
    .replace(/\u2022/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function uniq(items: string[]) {
  return [...new Set(items.map((i) => i.trim()).filter(Boolean))];
}

export async function extractTextFromFile(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const type = (file.type || "").toLowerCase();
  const name = (file.name || "").toLowerCase();

  if (type.includes("pdf") || name.endsWith(".pdf")) {
    return extractPdfText(buffer);
  }

  if (
    type.includes(
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) ||
    name.endsWith(".docx")
  ) {
    const result = await mammoth.extractRawText({ buffer });
    return result.value || "";
  }

  if (type.includes("text/plain") || name.endsWith(".txt")) {
    return buffer.toString("utf-8");
  }

  throw new Error("Formato no soportado. Usa PDF, DOCX o TXT.");
}

export async function extractTextFromLinkedInUrl(linkedinUrl: string) {
  const normalizedUrl = normalizeLinkedinUrl(linkedinUrl);
  if (!/linkedin\.com\/in\//i.test(normalizedUrl)) {
    throw new Error(
      "El link debe ser un perfil público de LinkedIn (linkedin.com/in/...)."
    );
  }

  const response = await fetch(normalizedUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9,es;q=0.8",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      "No pude acceder al perfil de LinkedIn. Verifica que sea público."
    );
  }

  const html = await response.text();
  if (!html || html.length < 200) {
    throw new Error(
      "No se pudo leer suficiente contenido del perfil de LinkedIn."
    );
  }

  const chunks: string[] = [];

  const ldJsonMatches = [
    ...html.matchAll(
      /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
    ),
  ];
  for (const match of ldJsonMatches) {
    const rawJson = decodeHtmlEntities(match[1]).trim();
    if (!rawJson) continue;
    try {
      const data = JSON.parse(rawJson) as Record<string, unknown>;
      const isPerson =
        data["@type"] === "Person" ||
        (Array.isArray(data["@graph"]) &&
          data["@graph"].some(
            (item) =>
              typeof item === "object" &&
              item &&
              (item as Record<string, unknown>)["@type"] === "Person"
          ));
      if (!isPerson) continue;

      const person =
        data["@type"] === "Person"
          ? data
          : ((data["@graph"] as unknown[]).find(
              (item) =>
                typeof item === "object" &&
                item &&
                (item as Record<string, unknown>)["@type"] === "Person"
            ) as Record<string, unknown> | undefined);
      if (!person) continue;

      if (typeof person.name === "string") chunks.push(person.name);
      if (typeof person.jobTitle === "string")
        chunks.push(`Target role: ${person.jobTitle}`);
      if (typeof person.description === "string") chunks.push(person.description);
      if (typeof person.url === "string") chunks.push(person.url);
    } catch {
      // ignore malformed JSON-LD blocks
    }
  }

  const title = html.match(
    /<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i
  )?.[1];
  const description = html.match(
    /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i
  )?.[1];
  if (title) chunks.push(decodeHtmlEntities(title));
  if (description) chunks.push(decodeHtmlEntities(description));

  const visibleText = decodeHtmlEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
  if (visibleText) {
    chunks.push(visibleText.slice(0, 6000));
  }

  const result = chunks.join("\n").trim();
  if (result.length < 120) {
    throw new Error(
      "LinkedIn bloqueó o limitó la extracción. Usa la opción de subir tu CV PDF/DOCX."
    );
  }
  return result;
}

export function parseCvText(raw: string, targetRole?: string): ParsedCv {
  const lines = raw
    .split(/\r?\n/)
    .map(cleanLine)
    .filter(Boolean);

  const parsed: ParsedCv = { ...EMPTY_CV };

  const email = raw.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)?.[0] ?? "";
  const phone =
    raw.match(
      /(\+?\d{1,3}[\s.-]?)?(\(?\d{2,4}\)?[\s.-]?)?[\d\s.-]{6,}\d/g
    )?.[0] ?? "";
  const linkedin = raw.match(/https?:\/\/(www\.)?linkedin\.com\/[^\s)]+/i)?.[0] ?? "";
  const github = raw.match(/https?:\/\/(www\.)?github\.com\/[^\s)]+/i)?.[0] ?? "";
  const website =
    raw.match(/https?:\/\/(www\.)?(?!linkedin|github)[a-z0-9.-]+\.[a-z]{2,}[^\s)]*/i)?.[0] ??
    "";

  parsed.email = email;
  parsed.phone = phone;
  parsed.linkedin = linkedin;
  parsed.github = github;
  parsed.website = website;

  parsed.name =
    lines.find(
      (line) =>
        line.length > 4 &&
        line.length < 60 &&
        !line.includes("@") &&
        !line.toLowerCase().includes("curriculum") &&
        !line.toLowerCase().includes("resume")
    ) ?? parsed.name;

  const locationLine = lines.find((line) =>
    /(madrid|spain|argentina|buenos aires|remote|remoto|france|paris)/i.test(
      line
    )
  );
  parsed.location = locationLine ?? "";

  let currentSection: keyof ParsedCv | null = null;
  for (const line of lines) {
    const normalized = line.toLowerCase().replace(/[:\-]/g, "").trim();
    if (SECTION_MAP[normalized]) {
      currentSection = SECTION_MAP[normalized];
      continue;
    }
    if (!currentSection) continue;

    if (currentSection === "summary") {
      parsed.summary = `${parsed.summary} ${line}`.trim();
    } else {
      const value = line.replace(/^[-*]\s*/, "");
      const sectionArray = parsed[currentSection];
      if (Array.isArray(sectionArray)) sectionArray.push(value);
    }
  }

  if (!parsed.summary) {
    const fallbackSummary = lines.slice(1, 6).join(" ").slice(0, 500);
    parsed.summary = fallbackSummary;
  }

  if (!parsed.skills.length) {
    const inferredSkills = raw
      .match(
        /\b(React|Next\.js|TypeScript|JavaScript|Node\.js|Python|PostgreSQL|MongoDB|AWS|Docker|Tailwind|GraphQL|REST|CI\/CD|Git)\b/gi
      )
      ?.map((s) => s.trim());
    parsed.skills = uniq(inferredSkills ?? []);
  } else {
    parsed.skills = uniq(
      parsed.skills
        .flatMap((line) => line.split(/[,|/]/g))
        .map((item) => item.trim())
    ).slice(0, 20);
  }

  parsed.experience = uniq(parsed.experience).slice(0, 10);
  parsed.education = uniq(parsed.education).slice(0, 6);
  parsed.projects = uniq(parsed.projects).slice(0, 8);
  parsed.certifications = uniq(parsed.certifications).slice(0, 8);

  if (targetRole?.trim()) {
    const role = targetRole.trim();
    const roleLine = `Target role: ${role}`;
    if (!parsed.summary.toLowerCase().includes(role.toLowerCase())) {
      parsed.summary = `${roleLine}. ${parsed.summary}`.trim();
    }
    if (!parsed.skills.some((s) => s.toLowerCase() === role.toLowerCase())) {
      parsed.skills = [role, ...parsed.skills].slice(0, 20);
    }
  }

  return parsed;
}
