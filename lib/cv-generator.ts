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
