import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import React from "react";
import { CvPdfDocument } from "@/lib/cv-pdf-document";
import {
  extractTextFromFile,
  extractTextFromLinkedInUrl,
  parseCvText,
} from "@/lib/cv-generator";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const file = form.get("file");
    const targetRole = (form.get("targetRole") as string | null) ?? "";
    const linkedinUrl = (form.get("linkedinUrl") as string | null) ?? "";

    if (!(file instanceof File) && !linkedinUrl.trim()) {
      return NextResponse.json(
        {
          error:
            "Debes subir un archivo CV (PDF/DOCX/TXT) o pegar un link de LinkedIn.",
        },
        { status: 400 }
      );
    }

    const extractedText =
      file instanceof File
        ? await extractTextFromFile(file)
        : await extractTextFromLinkedInUrl(linkedinUrl);
    if (!extractedText || extractedText.trim().length < 40) {
      return NextResponse.json(
        {
          error:
            "No pude extraer suficiente texto del CV/perfil. Si LinkedIn está bloqueado, prueba subir PDF/DOCX/TXT.",
        },
        { status: 400 }
      );
    }

    const parsed = parseCvText(extractedText, targetRole);
    const doc = React.createElement(CvPdfDocument, {
      cv: parsed,
    }) as unknown as React.ReactElement<DocumentProps>;
    const pdfBuffer = await renderToBuffer(doc);
    const filename = `${parsed.name.replace(/\s+/g, "-").toLowerCase()}-ats-cv.pdf`;

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("CV generator error:", error);
    return NextResponse.json(
      { error: "No se pudo generar el CV. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
