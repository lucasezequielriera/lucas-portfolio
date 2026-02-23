# lucasriera.com

Personal portfolio and professional website for Lucas Riera — full-stack software developer based in Madrid.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- **Bilingual (ES/EN)** — dictionary-based i18n with locale detection and middleware routing
- **Accessible** — skip-to-content, ARIA labels, `prefers-reduced-motion` support, focus management
- **SEO-optimized** — JSON-LD structured data, dynamic metadata, sitemap, hreflang alternates
- **Secure** — XSS sanitization, rate limiting, honeypot spam protection, security headers (HSTS, X-Frame-Options, etc.)
- **Legal compliance** — GDPR privacy policy, LSSI-CE legal notice, cookie policy with consent banner
- **Contact form** — server-side validation, inline error feedback, structured logging, powered by Resend
- **Performance** — H.264 video, static generation, optimized assets

## Tech Stack

| Layer       | Technology                              |
|-------------|-----------------------------------------|
| Framework   | Next.js 16 (App Router)                 |
| UI          | React 19, Tailwind CSS v4, Framer Motion|
| Language    | TypeScript (strict)                     |
| Email       | Resend                                  |
| Analytics   | Vercel Analytics + Speed Insights       |
| Testing     | Vitest, Testing Library                 |
| CI/CD       | GitHub Actions                          |
| Hosting     | Vercel                                  |

## Getting Started

```bash
git clone https://github.com/lucasezequielriera/lucas-portfolio.git
cd lucas-portfolio
npm install
cp .env.example .env.local   # Add your RESEND_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command              | Description                    |
|----------------------|--------------------------------|
| `npm run dev`        | Start development server       |
| `npm run build`      | Production build               |
| `npm run start`      | Start production server        |
| `npm run lint`       | Run ESLint                     |
| `npm test`           | Run tests                      |
| `npm run test:watch` | Run tests in watch mode        |
| `npm run test:coverage` | Run tests with coverage     |

## Project Structure

```
app/
  [locale]/          # Locale-scoped pages (es, en)
    page.tsx         # Homepage (server component)
    proyectos/       # Projects section
    privacidad/      # Privacy policy
    aviso-legal/     # Legal notice
    cookies/         # Cookie policy
  api/
    contact/         # Contact form endpoint
    health/          # Health check
components/
  home/              # Homepage section components
  ui/                # Shared UI primitives (shadcn/ui)
  cookie-banner.tsx  # GDPR cookie consent
lib/
  dictionaries.ts    # i18n strings (es/en)
  projects.ts        # Project data
  colors.ts          # Shared color config
  rate-limit.ts      # API rate limiter
  validation.ts      # Input validation utils
__tests__/           # Unit tests
```

## Environment Variables

| Variable         | Required | Description          |
|------------------|----------|----------------------|
| `RESEND_API_KEY` | Yes      | Resend API key       |

## License

All rights reserved. This is a personal portfolio — source code is not licensed for reuse.
