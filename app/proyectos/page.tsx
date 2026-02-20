import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proyectos — Lucas Riera | Software Developer",
  description:
    "Proyectos de Lucas Riera: FitTravel y más. Desarrollo web, plataformas y aplicaciones construidas desde cero.",
  openGraph: {
    title: "Proyectos — Lucas Riera",
    description: "Proyectos de Lucas Riera: desarrollo web, plataformas y aplicaciones.",
    url: "https://lucasriera.com/proyectos",
  },
};

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-30 border-b border-neutral-900/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase">
              Lucas Riera
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Proyectos
            </span>
          </div>
          <nav className="hidden gap-4 text-sm text-neutral-400 md:flex">
            <Link href="/" className="transition hover:text-neutral-100">
              Inicio
            </Link>
            <Link href="/#trabajos" className="transition hover:text-neutral-100">
              Trabajos
            </Link>
            <Link href="/#experiencia" className="transition hover:text-neutral-100">
              Experiencia
            </Link>
            <Link href="/proyectos" className="text-neutral-100">
              Proyectos
            </Link>
            <Link href="/#contacto" className="transition hover:text-neutral-100">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Proyectos
            </p>
            <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
              Espacio para tus proyectos.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-neutral-400">
              Aquí puedes mostrar en detalle tus proyectos de código, colaboraciones con marcas,
              casos de estudio o cualquier trabajo que quieras destacar con más profundidad.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/proyectos/fit-travel"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 transition hover:border-emerald-500/70 hover:bg-emerald-500/20"
            >
              Ir a FitTravel
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-neutral-800 bg-neutral-900/40 p-8 text-sm text-neutral-400">
            <p>
              Este es un lienzo vacío listo para que metas tu contenido. Puedes copiar bloques de
              la home (como tarjetas de proyectos, grids, etc.) o crear nuevos componentes para
              cada proyecto.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
