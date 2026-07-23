import OpenAI from "openai";
import type { ParsedCv } from "@/lib/cv-generator";

type EnhanceInput = {
  parsed: ParsedCv;
  rawText: string;
  targetRole?: string;
};

type EnhancementJson = {
  headlineEn?: string;
  headlineEs?: string;
  summaryEn?: string;
  summaryEs?: string;
  experience?: string[];
  skills?: string[];
};

function uniq(items: string[]) {
  return [...new Set(items.map((item) => item.trim()).filter(Boolean))];
}

function truncate(input: string, maxLength: number) {
  if (input.length <= maxLength) return input;
  return input.slice(0, maxLength);
}

export async function enhanceCvForRecruiters({
  parsed,
  rawText,
  targetRole,
}: EnhanceInput): Promise<ParsedCv> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return parsed;

  try {
    const client = new OpenAI({ apiKey });
    const model = process.env.OPENAI_CV_MODEL || "gpt-4.1-mini";

    const completion = await client.chat.completions.create({
      model,
      temperature: 0.15,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are an ATS and recruiter-focused resume editor. Rewrite conservatively. Never invent companies, dates, metrics, technologies, or achievements. Keep facts grounded in input only. Return strict JSON.",
        },
        {
          role: "user",
          content: `Improve this resume conservatively and output JSON with keys:
- headlineEn (short)
- headlineEs (short)
- summaryEn (max 95 words)
- summaryEs (max 95 words)
- experience (array of 5-8 bullets, each max 24 words)
- skills (array of max 20 skills)

Target role: ${targetRole?.trim() || "Not provided"}

Parsed CV JSON:
${JSON.stringify(parsed)}

Raw CV text (trimmed):
${truncate(rawText, 7000)}
`,
        },
      ],
    });

    const raw = completion.choices[0]?.message?.content;
    if (!raw) return parsed;

    const ai = JSON.parse(raw) as EnhancementJson;
    const headlineEn = (ai.headlineEn || "").trim();
    const headlineEs = (ai.headlineEs || "").trim();
    const summaryEn = (ai.summaryEn || "").trim();
    const summaryEs = (ai.summaryEs || "").trim();

    const bilingualSummaryParts = [
      headlineEn ? `${headlineEn}` : "",
      summaryEn ? summaryEn : "",
      headlineEs ? `Resumen (${headlineEs})` : "Resumen (ES)",
      summaryEs ? summaryEs : "",
    ].filter(Boolean);

    const improvedSummary =
      bilingualSummaryParts.join("\n\n") || parsed.summary || "";
    const improvedExperience = uniq(ai.experience ?? []).slice(0, 8);
    const improvedSkills = uniq(ai.skills ?? []).slice(0, 20);

    return {
      ...parsed,
      summary: improvedSummary,
      experience: improvedExperience.length ? improvedExperience : parsed.experience,
      skills: improvedSkills.length ? improvedSkills : parsed.skills,
    };
  } catch (error) {
    console.error("OpenAI CV enhancement failed:", error);
    return parsed;
  }
}
