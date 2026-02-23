"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "./scroll-animation";
import { getDictionary, type Locale } from "@/lib/dictionaries";

function StarRating({ label }: { label: string }) {
  return (
    <div className="flex gap-1 text-emerald-400" role="img" aria-label={label}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 space-y-10">
      <ScrollAnimation>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            {t.testimonials.label}
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.testimonials.title}</h2>
        </div>
      </ScrollAnimation>
      <div className="grid gap-6 md:grid-cols-2">
        <ScrollAnimation delay={0}>
          <Card className="h-full border-neutral-800 bg-neutral-900/70">
            <CardContent className="flex h-full flex-col justify-between space-y-6 p-6">
              <div className="space-y-4">
                <StarRating label={t.testimonials.starsLabel} />
                <blockquote className="text-sm leading-relaxed text-neutral-300" lang="en">
                  &ldquo;Lucas is a highly capable developer and analyst who consistently
                  demonstrated strong leadership and deep technical insight regarding best
                  practices. He excels at troubleshooting complex issues and effectively
                  conveying clear timelines to business partners. His most valuable analytical
                  skill is his ability to discern true urgency in high-pressure environments,
                  allowing him to successfully prioritize critical efforts.&rdquo;
                </blockquote>
                <p className="text-xs text-neutral-500">{t.testimonials.maryContext}</p>
              </div>
              <div className="flex items-center gap-3 border-t border-neutral-800 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-400">
                  MS
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-100">Mary Sanchez</p>
                  <p className="text-xs text-neutral-500">{t.testimonials.maryRole}</p>
                  <p className="text-[0.65rem] text-neutral-500">{t.testimonials.maryRelation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <Card className="h-full border-neutral-800 bg-neutral-900/70">
            <CardContent className="flex h-full flex-col justify-between space-y-6 p-6">
              <div className="space-y-4">
                <StarRating label={t.testimonials.starsLabel} />
                <blockquote className="text-sm leading-relaxed text-neutral-300" lang="en">
                  &ldquo;I strongly recommend Lucas based on our collaboration across multiple
                  projects. His excellent communication skills, collaborative mindset, and
                  meticulous attention to detail consistently lead to positive and successful
                  outcomes.&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3 border-t border-neutral-800 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-400">
                  NS
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-100">Nicolas Soroka</p>
                  <p className="text-xs text-neutral-500">{t.testimonials.nicolasRole}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
