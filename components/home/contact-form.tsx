"use client";

import { useState, useEffect } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/lib/dictionaries";

const MAX_NAME = 100;
const MAX_MESSAGE = 5000;

export function ContactForm({ t }: { t: Dictionary }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Card className="h-full border-neutral-800 bg-neutral-900/70">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-300">
                {t.contact.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={MAX_NAME}
                minLength={2}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.contact.namePlaceholder}
                className="w-full rounded-lg border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-colors focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-300">
                {t.contact.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                required
                maxLength={254}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t.contact.emailPlaceholder}
                className="w-full rounded-lg border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-colors focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-neutral-300">
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              minLength={10}
              maxLength={MAX_MESSAGE}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.contact.messagePlaceholder}
              className="w-full resize-none rounded-lg border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-colors focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25"
            />
          </div>

          <div role="status" aria-live="polite">
            {status === "success" && (
              <div className="flex items-center gap-2 rounded-lg border border-emerald-800/50 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0" /> {t.contact.success}
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg border border-red-800/50 bg-red-950/30 px-4 py-3 text-sm text-red-300">
                <AlertCircle className="h-4 w-4 shrink-0" /> {t.contact.error}
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
