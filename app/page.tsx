import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Disciplina, claridad y acción.
          <br />
          <span className="text-neutral-400">Una vida construida, no improvisada.</span>
        </motion.h1>

        <p className="mt-8 text-lg max-w-2xl text-neutral-300">
          Soy Lucas Riera. Programador de profesión, disciplinado por elección.
          Hoy enfocado en el healthy lifestyle, la claridad mental y el trabajo constante.
          No motivación vacía: estructura, hábitos y coherencia.
        </p>

        <div className="mt-10 flex gap-4">
          <Button size="lg">Ver filosofía</Button>
          <Button variant="outline" size="lg">Contactar</Button>
        </div>
      </section>

      {/* PILARES */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-6">
        {["Disciplina", "Salud", "Trabajo Profundo"].map((item) => (
          <Card key={item} className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-neutral-400">
                {item === "Disciplina" && "Hábitos diarios que sostienen resultados a largo plazo."}
                {item === "Salud" && "Cuerpo fuerte, mente estable, energía real."}
                {item === "Trabajo Profundo" && "Enfoque sin distracciones. Progreso medible."}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold mb-6">No vendo una imagen. Vivo un proceso.</h2>
        <p className="text-neutral-300 text-lg leading-relaxed">
          Durante años trabajé como desarrollador frontend en entornos exigentes.
          Viajé, me adapté, aprendí a sostener rutinas sin depender del entorno.
          Hoy mi foco está en construir una vida ordenada: entrenamiento, nutrición,
          concentración y trabajo honesto.
        </p>
      </section>

      {/* TECH */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-semibold mb-4">Base profesional</h3>
          <p className="text-neutral-400">
            React · Next.js · TypeScript · UI systems · Performance
          </p>
          <p className="mt-4 text-neutral-300">
            La disciplina que aplico al cuerpo y la mente es la misma que aplico al código.
            Sistemas claros, mantenibles y orientados a impacto real.
          </p>
        </div>
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
          <p className="text-neutral-400 italic">
            "La disciplina tarde o temprano vence a la inteligencia."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Colaboraciones conscientes</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Trabajo solo con marcas y personas alineadas con salud, claridad,
          constancia y respeto por el proceso.
        </p>
        <Button size="lg" className="mt-8">Proponer colaboración</Button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500">© 2026 Lucas Riera</p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
            <Mail className="w-5 h-5" />
          </div>
        </div>
      </footer>
    </main>
  );
}