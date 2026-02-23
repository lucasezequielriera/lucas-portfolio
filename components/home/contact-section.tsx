"use client";

import { MessageCircle, Calendar, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "./scroll-animation";
import { ContactForm } from "./contact-form";
import { getDictionary, type Locale } from "@/lib/dictionaries";

export function ContactSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 pb-28 pt-10">
      <ScrollAnimation>
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-semibold md:text-4xl">{t.contact.title}</h2>
          <p className="mx-auto max-w-2xl text-neutral-400">{t.contact.description}</p>
        </div>
      </ScrollAnimation>
      <div className="grid gap-8 lg:grid-cols-5">
        <ScrollAnimation delay={0} className="lg:col-span-3">
          <ContactForm t={t} />
        </ScrollAnimation>
        <ScrollAnimation delay={0.1} className="lg:col-span-2">
          <div className="flex flex-col gap-4 h-full">
            <a href="https://wa.me/34627043397" target="_blank" rel="noreferrer" className="group block flex-1">
              <Card className="h-full border-green-900/50 bg-green-950/20 transition-all hover:border-green-800/50 hover:bg-green-950/30">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="rounded-full border border-green-800/50 bg-green-950/40 p-3 shrink-0 transition-all group-hover:border-green-700/50">
                    <MessageCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-green-300">WhatsApp</p>
                    <p className="text-xs text-green-400/70">{t.contact.whatsappSub}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a href="https://calendly.com/lucasezequielriera-phfi/30min" target="_blank" rel="noreferrer" className="group block flex-1">
              <Card className="h-full border-blue-900/50 bg-blue-950/20 transition-all hover:border-blue-800/50 hover:bg-blue-950/30">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="rounded-full border border-blue-800/50 bg-blue-950/40 p-3 shrink-0 transition-all group-hover:border-blue-700/50">
                    <Calendar className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-300">{t.contact.scheduleCall}</p>
                    <p className="text-xs text-blue-400/70">{t.contact.minutes}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a href="https://instagram.com/lucasezequielriera" target="_blank" rel="noreferrer" className="group block flex-1">
              <Card className="h-full border-neutral-800 bg-neutral-900/60 transition-all hover:border-neutral-700 hover:bg-neutral-900/80">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="rounded-full border border-neutral-800 bg-neutral-950 p-3 shrink-0 transition-all group-hover:border-neutral-700">
                    <Instagram className="h-5 w-5 text-neutral-300" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-100">Instagram</p>
                    <p className="text-xs text-neutral-400">@lucasezequielriera</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
