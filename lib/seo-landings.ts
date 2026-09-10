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
      es: "Construyo aplicaciones web a medida. Suelen contratarme cuando ya probaron con una plantilla y se quedaron cortos.",
      en: "I build custom web applications. People usually come to me after a template got them halfway and then stopped.",
      fr: "Je crée des applications web sur mesure. On me contacte en général après qu'un template ait montré ses limites.",
    },
    h2: {
      es: "Que incluye el servicio",
      en: "What this service includes",
      fr: "Ce que ce service inclut",
    },
    bulletPoints: {
      es: [
        "Base de datos y arquitectura pensadas para cuando haya diez veces más usuarios",
        "Pantallas diseñadas alrededor de la acción que querés que la gente haga",
        "SEO técnico resuelto antes del lanzamiento, no después",
      ],
      en: [
        "Database and architecture built for ten times the users you have now",
        "Screens designed around the one action you want people to take",
        "Technical SEO sorted before launch, not after",
      ],
      fr: [
        "Base de données et architecture prévues pour dix fois plus d'utilisateurs",
        "Des écrans conçus autour de l'action que vous voulez déclencher",
        "SEO technique réglé avant le lancement, pas après",
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
      es: "Meto IA donde ahorra horas de verdad, no donde queda bien en una demo.",
      en: "I put AI where it actually saves hours, not where it looks good in a demo.",
      fr: "Je mets l'IA là où elle fait vraiment gagner des heures, pas là où elle fait joli en démo.",
    },
    h2: {
      es: "En que puedo ayudarte con IA",
      en: "How I help with AI",
      fr: "Comment je peux aider avec l'IA",
    },
    bulletPoints: {
      es: [
        "Procesos que hoy hace alguien a mano y podría hacer solos",
        "Asistentes internos entrenados con la documentación de tu empresa",
        "Modelos de IA metidos dentro del producto, no al costado",
      ],
      en: [
        "Processes someone does by hand today and could run on their own",
        "Internal assistants trained on your own company's documentation",
        "AI models built into the product, not bolted onto the side",
      ],
      fr: [
        "Des processus faits à la main aujourd'hui qui pourraient tourner seuls",
        "Des assistants internes entraînés sur la documentation de votre entreprise",
        "Des modèles d'IA intégrés au produit, pas posés à côté",
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
      es: "Te digo qué parte de tu sistema te va a doler en seis meses, y qué conviene hacer ahora.",
      en: "I tell you which part of your system will hurt in six months, and what's worth doing about it now.",
      fr: "Je vous dis quelle partie de votre système va poser problème dans six mois, et ce qu'il vaut mieux faire maintenant.",
    },
    h2: {
      es: "Consultoria para equipos y founders",
      en: "Consulting for teams and founders",
      fr: "Conseil pour equipes et fondateurs",
    },
    bulletPoints: {
      es: [
        "Revisión de arquitectura y del código que nadie quiere tocar",
        "Un plan de performance con números antes y después",
        "Segunda opinión cuando hay que decidir algo caro de revertir",
      ],
      en: [
        "A review of the architecture and the code nobody wants to touch",
        "A performance plan with numbers before and after",
        "A second opinion when the decision is expensive to undo",
      ],
      fr: [
        "Revue de l'architecture et du code que personne ne veut toucher",
        "Un plan de performance avec des chiffres avant et après",
        "Un deuxième avis quand la décision coûte cher à annuler",
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
      es: "Trabajo en remoto desde hace años con equipos en varios husos horarios. Viví en 16 países, así que la parte de coordinarse la tengo resuelta.",
      en: "I've worked remotely for years with teams across several time zones. I've lived in 16 countries, so the coordination part is already solved.",
      fr: "Je travaille en remote depuis des années avec des équipes sur plusieurs fuseaux horaires. J'ai vécu dans 16 pays, donc la coordination est déjà réglée.",
    },
    h2: {
      es: "Por que contratarme como freelance",
      en: "Why work with me as a freelancer",
      fr: "Pourquoi travailler avec moi en freelance",
    },
    bulletPoints: {
      es: [
        "Sabés en qué ando sin tener que preguntarme",
        "Me hago cargo desde la idea hasta que está en producción",
        "Código que el próximo que entre va a poder leer",
      ],
      en: [
        "You know what I'm working on without having to ask",
        "I own it from the idea through to production",
        "Code the next person on the project will be able to read",
      ],
      fr: [
        "Vous savez sur quoi j'avance sans avoir à demander",
        "Je prends en charge de l'idée jusqu'à la mise en production",
        "Du code que la personne suivante pourra lire",
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
