"use client";

import { useEffect, useMemo, useState } from "react";
import { Upload, FileDown, Sparkles, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/dictionaries";
import type { CvTemplate } from "@/lib/cv-pdf-document";

type Copy = {
  title: string;
  subtitle: string;
  linkedinLabel: string;
  linkedinPlaceholder: string;
  linkedinHelp: string;
  sourceOr: string;
  targetRoleLabel: string;
  targetRolePlaceholder: string;
  templateLabel: string;
  templateAts: string;
  templateModern: string;
  templateExec: string;
  uploadLabel: string;
  uploadHelp: string;
  payLabel: string;
  payingLabel: string;
  paidReady: string;
  paymentRequired: string;
  paymentCancelled: string;
  payCta: string;
  generate: string;
  generating: string;
  success: string;
  errorGeneric: string;
  noteTitle: string;
  noteText: string;
};

function getCopy(locale: Locale): Copy {
  if (locale === "fr") {
    return {
      title: "Generateur de CV ATS",
      subtitle:
        "Telechargez votre CV (PDF, DOCX ou TXT) et generez une version optimisee pour ATS/LinkedIn en PDF.",
      linkedinLabel: "URL du profil LinkedIn (optionnel)",
      linkedinPlaceholder: "https://www.linkedin.com/in/votre-profil",
      linkedinHelp:
        "Fonctionne seulement avec profils publics. Si LinkedIn bloque, utilisez un fichier.",
      sourceOr: "OU",
      targetRoleLabel: "Poste cible (optionnel)",
      targetRolePlaceholder: "Ex.: Senior Full-Stack Developer",
      templateLabel: "Modele de CV",
      templateAts: "ATS Clean (max compatibilite)",
      templateModern: "Modern Recruiter (visuel)",
      templateExec: "Executive One-Page (senior)",
      uploadLabel: "Fichier CV",
      uploadHelp: "Formats pris en charge: PDF, DOCX, TXT.",
      payLabel: "Paiement requis",
      payingLabel: "Redirection vers Stripe...",
      paidReady: "Paiement confirme. Vous pouvez maintenant generer 1 CV.",
      paymentRequired: "Paiement de 1 USD requis pour chaque generation.",
      paymentCancelled: "Paiement annule. Reessayez pour continuer.",
      payCta: "Payer 1 USD et continuer",
      generate: "Generer et telecharger PDF",
      generating: "Generation...",
      success: "CV genere avec succes.",
      errorGeneric: "Impossible de generer le CV.",
      noteTitle: "Important",
      noteText:
        "Le PDF final est optimise pour ATS et recruteurs, mais aucun outil ne peut garantir une selection automatique.",
    };
  }
  if (locale === "en") {
    return {
      title: "ATS Resume Generator",
      subtitle:
        "Upload your CV (PDF, DOCX or TXT) and generate a polished ATS/LinkedIn-friendly PDF version.",
      linkedinLabel: "LinkedIn profile URL (optional)",
      linkedinPlaceholder: "https://www.linkedin.com/in/your-profile",
      linkedinHelp:
        "Works only with public profiles. If LinkedIn blocks access, use file upload.",
      sourceOr: "OR",
      targetRoleLabel: "Target role (optional)",
      targetRolePlaceholder: "e.g. Senior Full-Stack Developer",
      templateLabel: "Resume template",
      templateAts: "ATS Clean (max compatibility)",
      templateModern: "Modern Recruiter (visual)",
      templateExec: "Executive One-Page (senior)",
      uploadLabel: "CV file",
      uploadHelp: "Supported formats: PDF, DOCX, TXT.",
      payLabel: "Payment required",
      payingLabel: "Redirecting to Stripe...",
      paidReady: "Payment confirmed. You can now generate 1 CV.",
      paymentRequired: "A $1 payment is required for each generation.",
      paymentCancelled: "Payment was canceled. Please try again.",
      payCta: "Pay $1 and continue",
      generate: "Generate and download PDF",
      generating: "Generating...",
      success: "Resume generated successfully.",
      errorGeneric: "Could not generate resume.",
      noteTitle: "Important",
      noteText:
        "The final PDF is optimized for ATS and recruiters, but no tool can guarantee automatic hiring outcomes.",
    };
  }
  return {
    title: "Generador de CV ATS",
    subtitle:
      "Subí tu CV (PDF, DOCX o TXT) y generá una versión optimizada para ATS/LinkedIn en PDF.",
    linkedinLabel: "URL de perfil de LinkedIn (opcional)",
    linkedinPlaceholder: "https://www.linkedin.com/in/tu-perfil",
    linkedinHelp:
      "Funciona solo con perfiles públicos. Si LinkedIn bloquea, usá subida de archivo.",
    sourceOr: "O",
    targetRoleLabel: "Puesto objetivo (opcional)",
    targetRolePlaceholder: "Ej: Senior Full-Stack Developer",
    templateLabel: "Plantilla de CV",
    templateAts: "ATS Clean (max compatibilidad)",
    templateModern: "Modern Recruiter (visual)",
    templateExec: "Executive One-Page (senior)",
    uploadLabel: "Archivo CV",
    uploadHelp: "Formatos soportados: PDF, DOCX, TXT.",
    payLabel: "Pago requerido",
    payingLabel: "Redirigiendo a Stripe...",
    paidReady: "Pago confirmado. Ahora podés generar 1 CV.",
    paymentRequired: "Se requiere pago de USD 1 por cada generación.",
    paymentCancelled: "El pago fue cancelado. Probá de nuevo.",
    payCta: "Pagar USD 1 y continuar",
    generate: "Generar y descargar PDF",
    generating: "Generando...",
    success: "CV generado con éxito.",
    errorGeneric: "No se pudo generar el CV.",
    noteTitle: "Importante",
    noteText:
      "El PDF final está optimizado para ATS y recruiters, pero ninguna herramienta puede garantizar contratación automática.",
  };
}

export function CvGeneratorTool({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const [file, setFile] = useState<File | null>(null);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [template, setTemplate] = useState<CvTemplate>("ats-clean");
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentSessionId, setPaymentSessionId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const t = useMemo(() => getCopy(locale), [locale]);

  useEffect(() => {
    const paymentStatus = searchParams.get("cv_payment");
    const sessionId = searchParams.get("session_id");
    if (paymentStatus === "success" && sessionId) {
      setPaymentSessionId(sessionId);
      setError("");
      setSuccess(t.paidReady);
      return;
    }
    if (paymentStatus === "cancel") {
      setPaymentSessionId("");
      setError(t.paymentCancelled);
      setSuccess("");
    }
  }, [searchParams, t.paidReady, t.paymentCancelled]);

  const handleStartPayment = async () => {
    setPaymentLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch("/api/tools/cv-generator/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale }),
      });
      if (!response.ok) {
        throw new Error(t.errorGeneric);
      }
      const data = (await response.json()) as { url?: string };
      if (!data.url) throw new Error(t.errorGeneric);
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : t.errorGeneric);
      setPaymentLoading(false);
    }
  };

  const handleGenerate = async () => {
    if (!file && !linkedinUrl.trim()) {
      setError(
        locale === "es"
          ? "Subí un archivo o pegá tu URL de LinkedIn."
          : locale === "fr"
            ? "Telechargez un fichier ou collez votre URL LinkedIn."
            : "Upload a file or paste your LinkedIn URL."
      );
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
      }
      if (linkedinUrl.trim()) {
        formData.append("linkedinUrl", linkedinUrl.trim());
      }
      formData.append("targetRole", targetRole);
      formData.append("template", template);
      formData.append("paymentSessionId", paymentSessionId);

      const response = await fetch("/api/tools/cv-generator", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || t.errorGeneric);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "cv-ats.pdf";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
      setSuccess(t.success);
      setPaymentSessionId("");
    } catch (err) {
      setError(err instanceof Error ? err.message : t.errorGeneric);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-white/10 bg-white/[0.03]">
      <CardContent className="space-y-6 p-6 md:p-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            ATS + LinkedIn
          </div>
          <h2 className="text-2xl font-semibold text-white">{t.title}</h2>
          <p className="text-sm text-white/45">{t.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/60">{t.uploadLabel}</label>
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 bg-black/40 px-4 py-5 text-sm text-white/60 transition hover:border-white/40">
              <Upload className="h-4 w-4" />
              {file ? file.name : t.uploadLabel}
              <input
                type="file"
                className="hidden"
                accept=".pdf,.docx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
                onChange={(event) => {
                  const selected = event.target.files?.[0] ?? null;
                  setFile(selected);
                }}
              />
            </label>
            <p className="text-xs text-white/35">{t.uploadHelp}</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/60">
              {t.linkedinLabel}
            </label>
            <input
              value={linkedinUrl}
              onChange={(event) => setLinkedinUrl(event.target.value)}
              placeholder={t.linkedinPlaceholder}
              className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/25"
            />
            <p className="text-xs text-white/35">{t.linkedinHelp}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs uppercase tracking-[0.16em] text-white/35">
            {t.sourceOr}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/60">
            {t.targetRoleLabel}
          </label>
          <input
            value={targetRole}
            onChange={(event) => setTargetRole(event.target.value)}
            placeholder={t.targetRolePlaceholder}
            className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/25"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/60">
            {t.templateLabel}
          </label>
          <select
            value={template}
            onChange={(event) => setTemplate(event.target.value as CvTemplate)}
            className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/25"
          >
            <option value="ats-clean">{t.templateAts}</option>
            <option value="modern-recruiter">{t.templateModern}</option>
            <option value="executive-onepage">{t.templateExec}</option>
          </select>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
            {t.noteTitle}
          </p>
          <p className="mt-2 text-sm text-white/60">{t.noteText}</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {t.payLabel}
          </p>
          <p className="mt-2 text-sm text-white/90">{t.paymentRequired}</p>
          <Button
            type="button"
            onClick={handleStartPayment}
            disabled={paymentLoading}
            className="mt-3 h-10 bg-white/10 text-white hover:bg-white/10 disabled:opacity-70"
          >
            {paymentLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.payingLabel}
              </>
            ) : (
              t.payCta
            )}
          </Button>
        </div>

        {error ? (
          <div className="rounded-lg border border-red-700/60 bg-red-950/30 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        ) : null}
        {success ? (
          <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-200">
            {success}
          </div>
        ) : null}

        <Button
          type="button"
          onClick={handleGenerate}
          disabled={loading || !paymentSessionId}
          className="h-11 w-full bg-white text-black hover:bg-white/90 disabled:opacity-40"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t.generating}
            </>
          ) : (
            <>
              <FileDown className="mr-2 h-4 w-4" />
              {t.generate}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
