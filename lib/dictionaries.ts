export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export interface Dictionary {
  nav: {
    location: string;
    trabajos: string;
    experiencia: string;
    stack: string;
    proyectos: string;
    contacto: string;
    openMenu: string;
    mainNav: string;
    mobileNav: string;
    skipToContent: string;
  };
  hero: {
    badge: string;
    location: string;
    h1: string;
    h1Accent: string;
    description: (years: number) => string;
    ctaPrimary: string;
    ctaSecondary: string;
    presence: string;
    videoAlt: string;
    currently: string;
    activity1: string;
    activity2: string;
    activity3: string;
    activity4: string;
    statCode: string;
    statYears: string;
    statProducts: string;
    statCreated: string;
    statCountries: string;
    statLived: string;
  };
  works: {
    label: string;
    title: string;
    description: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  experience: {
    label: string;
    title: string;
    years3: string;
    years2: string;
    year1: string;
    present: string;
  };
  stack: {
    label: string;
    title: string;
    description: string;
  };
  services: {
    label: string;
    title: string;
    description: string;
    saasTitle: string;
    saasDescription: string;
    systemsTitle: string;
    systemsDescription: string;
    websTitle: string;
    websDescription: string;
  };
  testimonials: {
    label: string;
    title: string;
    maryContext: string;
    maryRole: string;
    maryRelation: string;
    nicolasRole: string;
  };
  contact: {
    title: string;
    description: string;
    form: string;
    formSub: string;
    whatsappSub: string;
    scheduleCall: string;
    minutes: string;
  };
  footer: {
    rights: string;
    madeBy: string;
  };
  scrollTop: string;
  proyectosPage: {
    count: (n: number) => string;
    title: string;
    description: string;
    goToFitTravel: string;
    backHome: string;
    inicio: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
  meta: {
    title: string;
    description: (years: number) => string;
    ogTitle: string;
    ogDescription: (years: number) => string;
    keywords: string[];
  };
}

const es: Dictionary = {
  nav: {
    location: "Madrid, España",
    trabajos: "Trabajos",
    experiencia: "Experiencia",
    stack: "Stack",
    proyectos: "Proyectos",
    contacto: "Contacto",
    openMenu: "Abrir menú de navegación",
    mainNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    skipToContent: "Ir al contenido principal",
  },
  hero: {
    badge: "Full-Stack Developer · Disponible 2026",
    location: "España",
    h1: "Construyo productos digitales",
    h1Accent: " que funcionan de verdad.",
    description: (years) =>
      `Programador y desarrollador full-stack con +${years} años de experiencia. Informático especializado en crear plataformas, sistemas y webs desde cero con código limpio, arquitectura sólida y una atención al detalle que se nota en cada pixel. Si lo hago, lo hago bien.`,
    ctaPrimary: "Ver lo que construyo",
    ctaSecondary: "Contactar",
    presence: "Presencia",
    videoAlt: "Video de Lucas Riera",
    currently: "Actualmente",
    activity1: "Consultoría frontend & soluciones con IA",
    activity2: "Construyendo plataformas SaaS y sistemas web",
    activity3: "Creando portfolios y webs profesionales",
    activity4: "Lic. Informática — UADE · Tec. Programación & Full Stack MERN — UTN",
    statCode: "Código",
    statYears: "+ años",
    statProducts: "Productos",
    statCreated: "+ creados",
    statCountries: "Países",
    statLived: " vividos",
  },
  works: {
    label: "Trabajos",
    title: "Productos que construí desde cero.",
    description:
      "Cada proyecto es una solución real, pensada desde la arquitectura hasta el último detalle visual. Esto es lo que pasa cuando combino obsesión por el código con libertad creativa.",
    ctaTitle: "Tu próximo proyecto",
    ctaDescription:
      "Desarrollo productos a medida con la misma obsesión que pongo en los míos. Plataformas, sistemas, portfolios.",
    ctaButton: "Hablemos",
  },
  experience: {
    label: "Experiencia profesional",
    title: "Empresas que confiaron en mí.",
    years3: "3 años",
    years2: "2 años",
    year1: "1 año",
    present: "hoy",
  },
  stack: {
    label: "Stack",
    title: "Tecnologías que uso día a día.",
    description: "Las herramientas con las que construyo productos sólidos y escalables.",
  },
  services: {
    label: "Servicios",
    title: "Lo que puedo construir para ti.",
    description:
      "Servicios de programación, desarrollo web y consultoría informática para empresas y particulares.",
    saasTitle: "Plataformas & SaaS",
    saasDescription:
      "Productos digitales completos desde la arquitectura hasta el deploy. Autenticación, bases de datos, APIs, panel de control y lógica de negocio.",
    systemsTitle: "Sistemas Web",
    systemsDescription:
      "Aplicaciones a medida con frontend moderno y backend robusto. Integración con servicios externos, dashboards y lógica compleja.",
    websTitle: "Portfolios & Webs",
    websDescription:
      "Sitios web profesionales con diseño a medida, performance optimizada, animaciones fluidas y atención obsesiva al detalle visual.",
  },
  testimonials: {
    label: "Testimonios",
    title: "Lo que dicen quienes trabajaron conmigo.",
    maryContext:
      "Sobre su rol en el Chase Partnership y el Starlink Wi-Fi Portal — iniciativas enterprise de alto impacto donde lideró el desarrollo frontend, generó POCs para campañas promocionales y logró un aumento del 13% en productividad del equipo.",
    maryRole: "Senior Analyst / Developer · United Airlines",
    maryRelation: "Supervisora directa de Lucas",
    nicolasRole: "Frontend Engineer · Compañero de equipo",
  },
  contact: {
    title: "Hablemos de tu próximo proyecto.",
    description:
      "Si necesitás un programador que se involucra de verdad en tu proyecto, un desarrollador web que entienda tu visión o un informático que te resuelva de principio a fin — escribime. Construyamos algo que funcione.",
    form: "Formulario",
    formSub: "Contame tu proyecto",
    whatsappSub: "Mensaje directo",
    scheduleCall: "Agendar llamada",
    minutes: "30 minutos",
  },
  footer: {
    rights: "© 2025 Lucas Riera. Todos los derechos reservados.",
    madeBy: "Sitio web por Lucas Riera · Desarrollo & Diseño Web",
  },
  scrollTop: "Volver arriba",
  proyectosPage: {
    count: (n) => `${n} proyectos`,
    title: "Todo lo que construí desde cero.",
    description:
      "Cada proyecto es una solución real, pensada desde la arquitectura hasta el último detalle visual. Acá están todos.",
    goToFitTravel: "Ir a FitTravel",
    backHome: "← Volver al inicio",
    inicio: "Inicio",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscás no existe o fue movida. Volvé al inicio para seguir navegando.",
    backHome: "Volver al inicio",
  },
  meta: {
    title: "Lucas Riera — Software Developer",
    description: (years) =>
      `Programador y desarrollador full-stack con +${years} años de experiencia. Informático especializado en crear plataformas, sistemas y webs desde cero. Creador de WebFinanceLab, FitPlan AI, WebEducationLab, Synapsis y más.`,
    ogTitle: "Lucas Riera — Programador & Desarrollador Web",
    ogDescription: (years) =>
      `Programador, informático y desarrollador full-stack en Madrid. +${years} años creando plataformas, sistemas y webs desde cero.`,
    keywords: [
      "Lucas Riera", "programador", "programador web", "programador Madrid",
      "programador freelance", "informático", "informático Madrid",
      "ingeniero de software", "ingeniero informático", "software developer",
      "desarrollador", "desarrollador web", "desarrollador full-stack",
      "desarrollador frontend", "desarrollador backend", "desarrollador Madrid",
      "desarrollador España", "desarrollo web", "desarrollo web Madrid",
      "crear página web", "hacer página web", "diseño web",
      "React", "Next.js", "TypeScript", "Node.js",
      "portfolio developer", "WebFinanceLab", "FitPlan AI",
      "WebEducationLab", "Synapsis", "freelance developer",
      "plataformas SaaS", "sistemas web", "técnico en programación",
      "experto en programación", "developer España",
    ],
  },
};

const en: Dictionary = {
  nav: {
    location: "Madrid, Spain",
    trabajos: "Work",
    experiencia: "Experience",
    stack: "Stack",
    proyectos: "Projects",
    contacto: "Contact",
    openMenu: "Open navigation menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    skipToContent: "Skip to main content",
  },
  hero: {
    badge: "Full-Stack Developer · Available 2026",
    location: "Spain",
    h1: "I build digital products",
    h1Accent: " that actually work.",
    description: (years) =>
      `Full-stack developer and software engineer with ${years}+ years of experience. Specialized in creating platforms, systems and websites from scratch with clean code, solid architecture and an attention to detail that shows in every pixel. If I do it, I do it right.`,
    ctaPrimary: "See my work",
    ctaSecondary: "Get in touch",
    presence: "Presence",
    videoAlt: "Video of Lucas Riera",
    currently: "Currently",
    activity1: "Frontend consulting & AI-powered solutions",
    activity2: "Building SaaS platforms and web systems",
    activity3: "Creating portfolios and professional websites",
    activity4: "B.Sc. Computer Science — UADE · Software Dev & Full Stack MERN — UTN",
    statCode: "Code",
    statYears: "+ years",
    statProducts: "Products",
    statCreated: "+ built",
    statCountries: "Countries",
    statLived: " lived in",
  },
  works: {
    label: "Work",
    title: "Products I built from scratch.",
    description:
      "Every project is a real solution, thought out from architecture to the last visual detail. This is what happens when I combine code obsession with creative freedom.",
    ctaTitle: "Your next project",
    ctaDescription:
      "I build custom products with the same obsession I put into my own. Platforms, systems, portfolios.",
    ctaButton: "Let's talk",
  },
  experience: {
    label: "Professional experience",
    title: "Companies that trusted me.",
    years3: "3 years",
    years2: "2 years",
    year1: "1 year",
    present: "now",
  },
  stack: {
    label: "Stack",
    title: "Technologies I use every day.",
    description: "The tools I use to build solid and scalable products.",
  },
  services: {
    label: "Services",
    title: "What I can build for you.",
    description:
      "Software development, web development and IT consulting services for businesses and individuals.",
    saasTitle: "Platforms & SaaS",
    saasDescription:
      "Complete digital products from architecture to deployment. Authentication, databases, APIs, admin panels and business logic.",
    systemsTitle: "Web Systems",
    systemsDescription:
      "Custom applications with modern frontend and robust backend. Integration with external services, dashboards and complex logic.",
    websTitle: "Portfolios & Websites",
    websDescription:
      "Professional websites with custom design, optimized performance, smooth animations and obsessive attention to visual detail.",
  },
  testimonials: {
    label: "Testimonials",
    title: "What people I've worked with say.",
    maryContext:
      "About his role in the Chase Partnership and the Starlink Wi-Fi Portal — high-impact enterprise initiatives where he led frontend development, built POCs for promotional campaigns and achieved a 13% increase in team productivity.",
    maryRole: "Senior Analyst / Developer · United Airlines",
    maryRelation: "Lucas's direct supervisor",
    nicolasRole: "Frontend Engineer · Teammate",
  },
  contact: {
    title: "Let's talk about your next project.",
    description:
      "If you need a developer who truly gets involved in your project, a web developer who understands your vision, or a software engineer who delivers end-to-end — reach out. Let's build something that works.",
    form: "Form",
    formSub: "Tell me about your project",
    whatsappSub: "Direct message",
    scheduleCall: "Schedule a call",
    minutes: "30 minutes",
  },
  footer: {
    rights: "© 2025 Lucas Riera. All rights reserved.",
    madeBy: "Website by Lucas Riera · Web Development & Design",
  },
  scrollTop: "Back to top",
  proyectosPage: {
    count: (n) => `${n} projects`,
    title: "Everything I built from scratch.",
    description:
      "Every project is a real solution, thought out from architecture to the last visual detail. Here they all are.",
    goToFitTravel: "Go to FitTravel",
    backHome: "← Back to home",
    inicio: "Home",
  },
  notFound: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved. Go back to the home page.",
    backHome: "Back to home",
  },
  meta: {
    title: "Lucas Riera — Software Developer",
    description: (years) =>
      `Full-stack developer and software engineer with ${years}+ years of experience. Specialized in building platforms, systems and websites from scratch. Creator of WebFinanceLab, FitPlan AI, WebEducationLab, Synapsis and more.`,
    ogTitle: "Lucas Riera — Software Developer & Engineer",
    ogDescription: (years) =>
      `Full-stack developer and software engineer in Madrid. ${years}+ years building platforms, systems and websites from scratch.`,
    keywords: [
      "Lucas Riera", "software developer", "web developer", "programmer",
      "software engineer", "full-stack developer", "frontend developer",
      "backend developer", "developer Madrid", "developer Spain",
      "freelance developer", "web development", "React", "Next.js",
      "TypeScript", "Node.js", "portfolio developer", "WebFinanceLab",
      "FitPlan AI", "WebEducationLab", "Synapsis", "SaaS platforms",
      "web systems", "web design", "Madrid developer",
    ],
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.es;
}
