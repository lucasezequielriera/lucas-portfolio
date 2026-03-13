export type LandingLocale = "es" | "en" | "fr";
export type LandingId = "webapps" | "ai" | "consulting" | "remote";

export type LandingEntry = {
  id: LandingId;
  slug: Record<LandingLocale, string>;
  title: Record<LandingLocale, string>;
  description: Record<LandingLocale, string>;
  intro: Record<LandingLocale, string>;
  h2: Record<LandingLocale, string>;
  bulletPoints: Record<LandingLocale, string[]>;
  keywords: Record<LandingLocale, string[]>;
};

export const landingEntries: LandingEntry[] = [
  {
    id: "webapps",
    slug: {
      es: "desarrollo-web-aplicaciones",
      en: "web-application-development",
      fr: "developpement-applications-web",
    },
    title: {
      es: "Desarrollo de aplicaciones web a medida | Lucas Riera",
      en: "Custom web application development | Lucas Riera",
      fr: "Developpement d'applications web sur mesure | Lucas Riera",
    },
    description: {
      es: "Programador full-stack para crear aplicaciones web escalables con enfoque en negocio, rendimiento y conversion.",
      en: "Full-stack developer building scalable web applications focused on business impact, performance and conversion.",
      fr: "Developpeur full-stack pour creer des applications web evolutives orientees business, performance et conversion.",
    },
    intro: {
      es: "Construyo aplicaciones web a medida para empresas, startups y equipos que necesitan velocidad, calidad tecnica y enfoque comercial.",
      en: "I build custom web applications for startups, companies and teams that need speed, technical quality and business focus.",
      fr: "Je cree des applications web sur mesure pour startups et entreprises qui ont besoin de vitesse, qualite technique et focus business.",
    },
    h2: {
      es: "Que incluye el servicio",
      en: "What this service includes",
      fr: "Ce que ce service inclut",
    },
    bulletPoints: {
      es: [
        "Arquitectura full-stack preparada para crecimiento real",
        "UX orientada a conversion y retencion",
        "Optimizacion SEO tecnica desde el inicio",
      ],
      en: [
        "Full-stack architecture ready for real growth",
        "UX focused on conversion and retention",
        "Technical SEO optimization from day one",
      ],
      fr: [
        "Architecture full-stack prete pour une croissance reelle",
        "UX orientee conversion et retention",
        "SEO technique optimise des le depart",
      ],
    },
    keywords: {
      es: [
        "desarrollador web",
        "programador full stack",
        "aplicaciones web a medida",
      ],
      en: [
        "web application developer",
        "full stack developer",
        "custom web app development",
      ],
      fr: [
        "developpeur web freelance",
        "developpeur full stack",
        "application web sur mesure",
      ],
    },
  },
  {
    id: "ai",
    slug: {
      es: "soluciones-ia-negocios",
      en: "ai-solutions-for-business",
      fr: "solutions-ia-pour-entreprises",
    },
    title: {
      es: "Soluciones con IA para negocios | Lucas Riera",
      en: "AI solutions for business | Lucas Riera",
      fr: "Solutions IA pour entreprises | Lucas Riera",
    },
    description: {
      es: "Integraciones y soluciones con IA para automatizar procesos, mejorar productividad y escalar operaciones.",
      en: "AI integrations and solutions to automate workflows, increase productivity and scale operations.",
      fr: "Integrations et solutions IA pour automatiser les processus, augmenter la productivite et scaler les operations.",
    },
    intro: {
      es: "Diseño e implemento soluciones con IA que generan impacto real en tiempo de ejecucion, calidad de decision y rentabilidad.",
      en: "I design and implement AI solutions that create real impact in execution speed, decision quality and profitability.",
      fr: "Je conçois et implemente des solutions IA qui generent un impact reel sur la vitesse d'execution, la qualite de decision et la rentabilite.",
    },
    h2: {
      es: "En que puedo ayudarte con IA",
      en: "How I help with AI",
      fr: "Comment je peux aider avec l'IA",
    },
    bulletPoints: {
      es: [
        "Automatizaciones de procesos con IA",
        "Asistentes y herramientas internas para equipos",
        "Integracion de modelos IA en productos digitales",
      ],
      en: [
        "AI-powered workflow automation",
        "Internal assistants and tools for teams",
        "AI model integration in digital products",
      ],
      fr: [
        "Automatisation de processus avec IA",
        "Assistants et outils internes pour equipes",
        "Integration de modeles IA dans des produits digitaux",
      ],
    },
    keywords: {
      es: ["soluciones IA", "automatizacion con IA", "consultor IA"],
      en: ["AI consultant", "AI solutions developer", "AI automation"],
      fr: ["consultant IA", "solutions IA entreprise", "automatisation IA"],
    },
  },
  {
    id: "consulting",
    slug: {
      es: "consultoria-tecnica-software",
      en: "technical-software-consulting",
      fr: "conseil-technique-logiciel",
    },
    title: {
      es: "Consultoria tecnica de software | Lucas Riera",
      en: "Technical software consulting | Lucas Riera",
      fr: "Conseil technique logiciel | Lucas Riera",
    },
    description: {
      es: "Consultoria tecnica para decisiones de arquitectura, rendimiento, calidad de codigo y escalabilidad.",
      en: "Technical consulting for architecture decisions, performance, code quality and scalability.",
      fr: "Conseil technique pour architecture, performance, qualite du code et scalabilite.",
    },
    intro: {
      es: "Te ayudo a tomar decisiones tecnicas con impacto de negocio, reduciendo riesgo y acelerando ejecucion.",
      en: "I help you make technical decisions with business impact, reducing risk and accelerating execution.",
      fr: "Je vous aide a prendre des decisions techniques avec impact business, en reduisant le risque et en accelerant l'execution.",
    },
    h2: {
      es: "Consultoria para equipos y founders",
      en: "Consulting for teams and founders",
      fr: "Conseil pour equipes et fondateurs",
    },
    bulletPoints: {
      es: [
        "Revisiones de arquitectura y deuda tecnica",
        "Plan de mejora de performance y mantenibilidad",
        "Acompañamiento en decisiones criticas de producto",
      ],
      en: [
        "Architecture and technical debt reviews",
        "Performance and maintainability improvement plan",
        "Support on critical product decisions",
      ],
      fr: [
        "Revues d'architecture et de dette technique",
        "Plan d'amelioration performance et maintenabilite",
        "Accompagnement sur les decisions produit critiques",
      ],
    },
    keywords: {
      es: ["consultoria software", "consultor tecnico", "arquitectura de software"],
      en: ["technical consultant", "software architecture consulting", "code audit"],
      fr: ["conseil logiciel", "consultant technique", "architecture logicielle"],
    },
  },
  {
    id: "remote",
    slug: {
      es: "programador-freelance-remoto",
      en: "remote-freelance-developer",
      fr: "developpeur-freelance-remote",
    },
    title: {
      es: "Programador freelance remoto | Lucas Riera",
      en: "Remote freelance software developer | Lucas Riera",
      fr: "Developpeur freelance remote | Lucas Riera",
    },
    description: {
      es: "Servicios de programacion freelance remota para startups y empresas que buscan ejecucion rapida y calidad premium.",
      en: "Remote freelance software development services for startups and companies seeking fast execution and premium quality.",
      fr: "Services de developpement logiciel freelance remote pour startups et entreprises recherchant execution rapide et qualite premium.",
    },
    intro: {
      es: "Trabajo en remoto con equipos de distintos paises, construyendo software orientado a resultados y crecimiento.",
      en: "I work remotely with teams across different countries, building software focused on results and growth.",
      fr: "Je travaille en remote avec des equipes de plusieurs pays, en construisant des produits logiciels orientes resultats et croissance.",
    },
    h2: {
      es: "Por que contratarme como freelance",
      en: "Why work with me as a freelancer",
      fr: "Pourquoi travailler avec moi en freelance",
    },
    bulletPoints: {
      es: [
        "Comunicación clara y entregas consistentes",
        "Ejecucion end-to-end: idea, desarrollo y lanzamiento",
        "Calidad de codigo, velocidad y enfoque en ROI",
      ],
      en: [
        "Clear communication and consistent delivery",
        "End-to-end execution: idea, build and launch",
        "Code quality, speed and strong ROI focus",
      ],
      fr: [
        "Communication claire et livraisons constantes",
        "Execution end-to-end: idee, build et lancement",
        "Qualite du code, vitesse et focus ROI",
      ],
    },
    keywords: {
      es: ["programador freelance remoto", "desarrollador remoto", "freelance software"],
      en: ["remote freelance developer", "hire software developer", "remote full stack developer"],
      fr: ["developpeur freelance remote", "developpeur logiciel freelance", "hire remote developer"],
    },
  },
];

export function getLandingBySlug(locale: LandingLocale, slug: string) {
  return landingEntries.find((entry) => entry.slug[locale] === slug);
}
