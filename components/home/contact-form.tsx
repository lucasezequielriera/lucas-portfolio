"use client";

import { useState, useEffect, useCallback } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/lib/dictionaries";
import {
  EMAIL_RE,
  MAX_NAME,
  MAX_EMAIL,
  MAX_MESSAGE,
  MIN_NAME,
  MIN_MESSAGE,
} from "@/lib/validation";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

function validate(
  form: { name: string; email: string; message: string },
  t: Dictionary
): FieldErrors {
  const errors: FieldErrors = {};
  if (form.name.length > 0 && form.name.length < MIN_NAME)
    errors.name = t.contact.errorMinName;
  if (form.name.length > MAX_NAME) errors.name = t.contact.errorMaxName;
  if (form.email.length > 0 && !EMAIL_RE.test(form.email))
    errors.email = t.contact.errorEmail;
  if (form.email.length > MAX_EMAIL) errors.email = t.contact.errorEmail;
  if (form.message.length > 0 && form.message.length < MIN_MESSAGE)
    errors.message = t.contact.errorMinMessage;
  if (form.message.length > MAX_MESSAGE)
    errors.message = t.contact.errorMaxMessage;
  return errors;
}

export function ContactForm({ t }: { t: Dictionary }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<
    Partial<Record<"name" | "email" | "message", boolean>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState("");

  const errors = validate(form, t);

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleBlur = useCallback((field: "name" | "email" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    setServerError("");

    const allErrors = validate(
      {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      },
      t
    );
    if (
      Object.keys(allErrors).length > 0 ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          website: (
            document.getElementById("website") as HTMLInputElement | null
          )?.value,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error || t.contact.error);
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
    } catch {
      setServerError(t.contact.error);
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-lg border bg-neutral-950/60 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 outline-none transition-colors focus:ring-1";
  const inputOk =
    "border-neutral-800 focus:border-emerald-500/50 focus:ring-emerald-500/25";
  const inputErr =
    "border-red-600/60 focus:border-red-500/50 focus:ring-red-500/25";

  return (
    <Card className="h-full border-neutral-800 bg-neutral-900/70">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Honeypot — invisible to real users */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-neutral-300"
              >
                {t.contact.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={MAX_NAME}
                minLength={MIN_NAME}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onBlur={() => handleBlur("name")}
                placeholder={t.contact.namePlaceholder}
                aria-invalid={touched.name && !!errors.name}
                aria-describedby={
                  touched.name && errors.name ? "name-err" : undefined
                }
                className={`${inputBase} ${touched.name && errors.name ? inputErr : inputOk}`}
              />
              {touched.name && errors.name && (
                <p id="name-err" className="text-xs text-red-400" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-neutral-300"
              >
                {t.contact.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                required
                maxLength={MAX_EMAIL}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onBlur={() => handleBlur("email")}
                placeholder={t.contact.emailPlaceholder}
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={
                  touched.email && errors.email ? "email-err" : undefined
                }
                className={`${inputBase} ${touched.email && errors.email ? inputErr : inputOk}`}
              />
              {touched.email && errors.email && (
                <p
                  id="email-err"
                  className="text-xs text-red-400"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-neutral-300"
            >
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              minLength={MIN_MESSAGE}
              maxLength={MAX_MESSAGE}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onBlur={() => handleBlur("message")}
              placeholder={t.contact.messagePlaceholder}
              aria-invalid={touched.message && !!errors.message}
              aria-describedby={
                touched.message && errors.message ? "message-err" : undefined
              }
              className={`${inputBase} resize-none ${touched.message && errors.message ? inputErr : inputOk}`}
            />
            {touched.message && errors.message && (
              <p
                id="message-err"
                className="text-xs text-red-400"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          <div role="status" aria-live="polite">
            {status === "success" && (
              <div className="flex items-center gap-2 rounded-lg border border-emerald-800/50 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0" /> {t.contact.success}
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg border border-red-800/50 bg-red-950/30 px-4 py-3 text-sm text-red-300">
                <AlertCircle className="h-4 w-4 shrink-0" />{" "}
                {serverError || t.contact.error}
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-60 h-12 text-sm font-medium transition-all"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.contact.sending}
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {t.contact.send}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
