"use client";

import { getDictionary, type Locale } from "@/lib/dictionaries";

function StarRating({ label }: { label: string }) {
  return (
    <div className="flex gap-1 text-cyan-300" role="img" aria-label={label}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsPanel({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="flex h-full flex-col justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="space-y-2.5">
          <StarRating label={t.testimonials.starsLabel} />
          <blockquote className="text-xs leading-relaxed text-white/70 sm:text-sm" lang="en">
            &ldquo;Lucas is a highly capable developer and analyst who consistently demonstrated
            strong leadership and deep technical insight regarding best practices. He excels at
            troubleshooting complex issues and effectively conveying clear timelines to business
            partners.&rdquo;
          </blockquote>
          <p className="text-[0.68rem] text-white/35">{t.testimonials.maryContext}</p>
        </div>
        <div className="flex items-center gap-3 border-t border-white/10 pt-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-400/10 text-xs font-semibold text-violet-300">
            MS
          </div>
          <div>
            <p className="text-xs font-medium text-white">Mary Sanchez</p>
            <p className="text-[0.65rem] text-white/35">{t.testimonials.maryRole}</p>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="space-y-2.5">
          <StarRating label={t.testimonials.starsLabel} />
          <blockquote className="text-xs leading-relaxed text-white/70 sm:text-sm" lang="en">
            &ldquo;I strongly recommend Lucas based on our collaboration across multiple projects.
            His excellent communication skills, collaborative mindset, and meticulous attention to
            detail consistently lead to positive and successful outcomes.&rdquo;
          </blockquote>
        </div>
        <div className="flex items-center gap-3 border-t border-white/10 pt-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-semibold text-cyan-300">
            NS
          </div>
          <div>
            <p className="text-xs font-medium text-white">Nicolas Soroka</p>
            <p className="text-[0.65rem] text-white/35">{t.testimonials.nicolasRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
