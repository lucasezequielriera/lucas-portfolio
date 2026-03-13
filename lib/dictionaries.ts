export type Locale = "es" | "en" | "fr";

export const locales: Locale[] = ["es", "en", "fr"];
export const defaultLocale: Locale = "es";

export interface Dictionary {
  nav: {
    location: string;
    trabajos: string;
    experiencia: string;
    stack: string;
    proyectos: string;
    herramientas: string;
    contacto: string;
    openMenu: string;
    closeMenu: string;
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
    srDescription: string;
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
    starsLabel: string;
  };
  contact: {
    title: string;
    description: string;
    form: string;
    formSub: string;
    whatsappSub: string;
    scheduleCall: string;
    minutes: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    errorMinName: string;
    errorMaxName: string;
    errorEmail: string;
    errorMinMessage: string;
    errorMaxMessage: string;
  };
  footer: {
    rights: (year: number) => string;
    madeBy: string;
    privacy: string;
    legal: string;
    cookies: string;
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
  caseStudy: {
    problem: string;
    solution: string;
    techStack: string;
    screenshots: string;
    visitSite: string;
    contactCta: string;
    contactCtaSub: string;
    backToProjects: string;
    builtIn: string;
    createdBy: string;
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
  cookieBanner: {
    text: string;
    accept: string;
    decline: string;
    moreInfo: string;
  };
  legal: {
    privacyTitle: string;
    legalTitle: string;
    cookieTitle: string;
    backHome: string;
    lastUpdated: string;
  };
  fitTravel: {
    title: string;
    description: string;
  };
}

const es: Dictionary = {
  nav: {
    location: "Madrid, España",
    trabajos: "Trabajos",
    experiencia: "Experiencia",
    stack: "Stack",
    proyectos: "Proyectos",
    herramientas: "Herramientas",
    contacto: "Contacto",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
    mainNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    skipToContent: "Ir al contenido principal",
  },
  hero: {
    badge: "Programador Full-Stack · Servicios Remotos Globales",
    location: "España",
    h1: "Convierto ideas en software",
    h1Accent: " que vende, escala y dura.",
    description: (years) =>
      `Programador y desarrollador full-stack con +${years} años de experiencia. Ayudo a empresas y startups a lanzar productos digitales, aplicaciones web e integraciones con IA con calidad premium y enfoque en resultados.`,
    ctaPrimary: "Ver lo que construyo",
    ctaSecondary: "Contactar",
    presence: "Presencia",
    videoAlt: "Video de Lucas Riera",
    currently: "Actualmente",
    activity1: "Consultoría frontend & soluciones con IA",
    activity2: "Construyendo plataformas SaaS y sistemas web",
    activity3: "Creando portfolios y webs profesionales",
    activity4:
      "Lic. Informática — UADE · Tec. Programación & Full Stack MERN — UTN",
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
    srDescription:
      "Línea de tiempo profesional mostrando experiencia laboral desde 2019 hasta la actualidad.",
  },
  stack: {
    label: "Stack",
    title: "Tecnologías que uso día a día.",
    description:
      "Las herramientas con las que construyo productos sólidos y escalables.",
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
    starsLabel: "5 de 5 estrellas",
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
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Contame sobre tu proyecto...",
    send: "Enviar mensaje",
    sending: "Enviando...",
    success: "Mensaje enviado. Te respondo pronto.",
    error: "Error al enviar. Intentá de nuevo.",
    errorMinName: "El nombre debe tener al menos 2 caracteres.",
    errorMaxName: "El nombre es demasiado largo.",
    errorEmail: "Ingresá un email válido.",
    errorMinMessage: "El mensaje debe tener al menos 10 caracteres.",
    errorMaxMessage: "El mensaje es demasiado largo.",
  },
  footer: {
    rights: (year) =>
      `© ${year} Lucas Riera. Todos los derechos reservados.`,
    madeBy: "Sitio web por Lucas Riera · Desarrollo & Diseño Web",
    privacy: "Privacidad",
    legal: "Aviso Legal",
    cookies: "Cookies",
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
  caseStudy: {
    problem: "El problema",
    solution: "La solución",
    techStack: "Stack técnico",
    screenshots: "El producto en acción",
    visitSite: "Visitar sitio",
    contactCta: "¿Necesitás algo similar?",
    contactCtaSub:
      "Desarrollo productos a medida con la misma obsesión que pongo en los míos.",
    backToProjects: "← Todos los proyectos",
    builtIn: "Construido en",
    createdBy: "Creado por Lucas Riera",
  },
  notFound: {
    title: "Página no encontrada",
    description:
      "La página que buscás no existe o fue movida. Volvé al inicio para seguir navegando.",
    backHome: "Volver al inicio",
  },
  meta: {
    title: "Lucas Riera — Programador Full-Stack y Software Developer",
    description: (years) =>
      `Programador y software developer full-stack con +${years} años de experiencia. Desarrollo aplicaciones web, soluciones con IA y consultoría técnica para empresas y startups en remoto.`,
    ogTitle: "Lucas Riera — Programador Full-Stack y Desarrollador Web",
    ogDescription: (years) =>
      `Programador y software developer full-stack con +${years} años de experiencia. Desarrollo web, IA y consultoría técnica para equipos globales.`,
    keywords: [
      "Lucas Riera",
      "programador",
      "programador web",
      "programador Madrid",
      "programador Argentina",
      "programador remoto",
      "programador freelance",
      "programador freelance remoto",
      "informático",
      "informático Madrid",
      "ingeniero de software",
      "ingeniero informático",
      "software developer",
      "software developer remote",
      "software developer usa",
      "desarrollador",
      "desarrollador web",
      "desarrollador full-stack",
      "desarrollador frontend",
      "desarrollador backend",
      "desarrollador Madrid",
      "desarrollador España",
      "desarrollo web",
      "desarrollo web Madrid",
      "desarrollo web Argentina",
      "crear página web",
      "hacer página web",
      "diseño web",
      "soluciones IA",
      "consultoria tecnica software",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "portfolio developer",
      "WebFinanceLab",
      "FitPlan AI",
      "WebEducationLab",
      "Synapsis",
      "freelance developer",
      "plataformas SaaS",
      "sistemas web",
      "técnico en programación",
      "experto en programación",
      "developer España",
    ],
  },
  cookieBanner: {
    text: "Este sitio utiliza cookies funcionales para recordar tu preferencia de idioma.",
    accept: "Aceptar",
    decline: "Rechazar",
    moreInfo: "Más información",
  },
  legal: {
    privacyTitle: "Política de Privacidad",
    legalTitle: "Aviso Legal",
    cookieTitle: "Política de Cookies",
    backHome: "← Volver al inicio",
    lastUpdated: "Última actualización",
  },
  fitTravel: {
    title: "FitTravel",
    description:
      "Proyecto FitTravel. Aquí irá el contenido que definamos.",
  },
};

const en: Dictionary = {
  nav: {
    location: "Madrid, Spain",
    trabajos: "Work",
    experiencia: "Experience",
    stack: "Stack",
    proyectos: "Projects",
    herramientas: "Tools",
    contacto: "Contact",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    skipToContent: "Skip to main content",
  },
  hero: {
    badge: "Full-Stack Software Developer · Remote Global Services",
    location: "Spain",
    h1: "I turn ideas into software",
    h1Accent: " that sells, scales and lasts.",
    description: (years) =>
      `Full-stack software developer with ${years}+ years of experience. I help companies and startups build web applications, AI-powered solutions and scalable digital products with premium execution.`,
    ctaPrimary: "See my work",
    ctaSecondary: "Get in touch",
    presence: "Presence",
    videoAlt: "Video of Lucas Riera",
    currently: "Currently",
    activity1: "Frontend consulting & AI-powered solutions",
    activity2: "Building SaaS platforms and web systems",
    activity3: "Creating portfolios and professional websites",
    activity4:
      "B.Sc. Computer Science — UADE · Software Dev & Full Stack MERN — UTN",
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
    srDescription:
      "Professional timeline showing work experience from 2019 to present.",
  },
  stack: {
    label: "Stack",
    title: "Technologies I use every day.",
    description:
      "The tools I use to build solid and scalable products.",
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
    starsLabel: "5 out of 5 stars",
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
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    send: "Send message",
    sending: "Sending...",
    success: "Message sent. I'll get back to you soon.",
    error: "Failed to send. Please try again.",
    errorMinName: "Name must be at least 2 characters.",
    errorMaxName: "Name is too long.",
    errorEmail: "Please enter a valid email address.",
    errorMinMessage: "Message must be at least 10 characters.",
    errorMaxMessage: "Message is too long.",
  },
  footer: {
    rights: (year) =>
      `© ${year} Lucas Riera. All rights reserved.`,
    madeBy: "Website by Lucas Riera · Web Development & Design",
    privacy: "Privacy",
    legal: "Legal Notice",
    cookies: "Cookies",
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
  caseStudy: {
    problem: "The problem",
    solution: "The solution",
    techStack: "Tech stack",
    screenshots: "The product in action",
    visitSite: "Visit site",
    contactCta: "Need something similar?",
    contactCtaSub:
      "I build custom products with the same obsession I put into my own.",
    backToProjects: "← All projects",
    builtIn: "Built in",
    createdBy: "Created by Lucas Riera",
  },
  notFound: {
    title: "Page not found",
    description:
      "The page you're looking for doesn't exist or has been moved. Go back to the home page.",
    backHome: "Back to home",
  },
  meta: {
    title: "Lucas Riera — Full-Stack Software Developer",
    description: (years) =>
      `Full-stack software developer with ${years}+ years of experience. Web app development, AI solutions and technical consulting for startups and companies.`,
    ogTitle: "Lucas Riera — Full-Stack Software Developer",
    ogDescription: (years) =>
      `Full-stack software developer with ${years}+ years of experience building web apps, AI solutions and scalable systems for global teams.`,
    keywords: [
      "Lucas Riera",
      "software developer",
      "remote software developer",
      "hire software developer",
      "web developer",
      "programmer",
      "remote programmer",
      "software engineer",
      "full-stack developer",
      "frontend developer",
      "backend developer",
      "developer Madrid",
      "developer argentina",
      "developer united states",
      "developer Spain",
      "freelance developer",
      "freelance developer remote",
      "web development",
      "web application development",
      "ai solutions developer",
      "technical software consultant",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "portfolio developer",
      "WebFinanceLab",
      "FitPlan AI",
      "WebEducationLab",
      "Synapsis",
      "SaaS platforms",
      "web systems",
      "web design",
      "Madrid developer",
    ],
  },
  cookieBanner: {
    text: "This site uses functional cookies to remember your language preference.",
    accept: "Accept",
    decline: "Decline",
    moreInfo: "Learn more",
  },
  legal: {
    privacyTitle: "Privacy Policy",
    legalTitle: "Legal Notice",
    cookieTitle: "Cookie Policy",
    backHome: "← Back to home",
    lastUpdated: "Last updated",
  },
  fitTravel: {
    title: "FitTravel",
    description: "FitTravel project. Content will be defined here.",
  },
};

const fr: Dictionary = {
  ...en,
  nav: {
    ...en.nav,
    location: "Madrid, Espagne",
    trabajos: "Travaux",
    experiencia: "Experience",
    stack: "Stack",
    proyectos: "Projets",
    herramientas: "Outils",
    contacto: "Contact",
    openMenu: "Ouvrir le menu de navigation",
    closeMenu: "Fermer le menu de navigation",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    skipToContent: "Aller au contenu principal",
  },
  hero: {
    ...en.hero,
    badge: "Developpeur Full-Stack · Services distants globaux",
    location: "Espagne",
    h1: "Je transforme les idees en logiciel",
    h1Accent: " qui vend, evolue et dure.",
    description: (years) =>
      `Developpeur logiciel full-stack avec ${years}+ ans d'experience. J'aide startups et entreprises a creer des applications web, des solutions IA et des produits scalables avec une execution premium.`,
    ctaPrimary: "Voir mes projets",
    ctaSecondary: "Me contacter",
    presence: "Presence",
    videoAlt: "Video de Lucas Riera",
    currently: "Actuellement",
    activity1: "Conseil frontend et solutions IA",
    activity2: "Creation de plateformes SaaS et systemes web",
    activity3: "Creation de portfolios et sites professionnels",
    statYears: "+ ans",
    statCreated: "+ crees",
    statLived: " vecus",
  },
  works: {
    ...en.works,
    label: "Travaux",
    title: "Produits crees de zero.",
    ctaTitle: "Votre prochain projet",
    ctaButton: "Parlons",
  },
  services: {
    ...en.services,
    label: "Services",
    title: "Ce que je peux construire pour vous.",
    description:
      "Developpement logiciel, applications web et conseil technique pour entreprises et fondateurs.",
  },
  testimonials: {
    ...en.testimonials,
    label: "Temoignages",
    title: "Ce que disent les clients avec qui j'ai travaille.",
  },
  contact: {
    ...en.contact,
    title: "Parlons de votre prochain projet.",
    description:
      "Si vous cherchez un developpeur implique, orienté resultat et execution premium, ecrivez-moi.",
    form: "Formulaire",
    formSub: "Parlez-moi de votre projet",
    whatsappSub: "Message direct",
    scheduleCall: "Planifier un appel",
    send: "Envoyer le message",
    sending: "Envoi...",
    success: "Message envoye. Je vous reponds rapidement.",
    error: "Echec d'envoi. Reessayez.",
    errorMinName: "Le nom doit contenir au moins 2 caracteres.",
    errorMaxName: "Le nom est trop long.",
    errorEmail: "Entrez un email valide.",
    errorMinMessage: "Le message doit contenir au moins 10 caracteres.",
    errorMaxMessage: "Le message est trop long.",
  },
  footer: {
    ...en.footer,
    rights: (year) => `© ${year} Lucas Riera. Tous droits reserves.`,
    madeBy: "Site web par Lucas Riera · Developpement & Design web",
    privacy: "Confidentialite",
    legal: "Mentions legales",
    cookies: "Cookies",
  },
  scrollTop: "Retour en haut",
  proyectosPage: {
    ...en.proyectosPage,
    count: (n) => `${n} projets`,
    title: "Tout ce que j'ai construit depuis zero.",
    goToFitTravel: "Aller a FitTravel",
    backHome: "← Retour a l'accueil",
    inicio: "Accueil",
  },
  caseStudy: {
    ...en.caseStudy,
    problem: "Le probleme",
    solution: "La solution",
    techStack: "Stack technique",
    screenshots: "Le produit en action",
    visitSite: "Visiter le site",
    contactCta: "Besoin de quelque chose de similaire ?",
    backToProjects: "← Tous les projets",
    builtIn: "Construit en",
    createdBy: "Cree par Lucas Riera",
  },
  notFound: {
    ...en.notFound,
    title: "Page introuvable",
    description:
      "La page que vous cherchez n'existe pas ou a ete deplacee. Revenez a l'accueil.",
    backHome: "Retour a l'accueil",
  },
  meta: {
    ...en.meta,
    title: "Lucas Riera — Developpeur logiciel Full-Stack",
    description: (years) =>
      `Developpeur logiciel full-stack avec ${years}+ ans d'experience. Applications web, solutions IA et conseil technique pour equipes internationales.`,
    ogTitle: "Lucas Riera — Developpeur logiciel Full-Stack",
    ogDescription: (years) =>
      `Developpeur full-stack avec ${years}+ ans d'experience en applications web, IA et systemes scalables.`,
    keywords: [
      "Lucas Riera",
      "developpeur logiciel",
      "developpeur web freelance",
      "developpeur full stack",
      "developpeur remote",
      "consultant technique",
      "solutions IA",
      "application web sur mesure",
      "developpement SaaS",
      "freelance developer",
    ],
  },
  cookieBanner: {
    ...en.cookieBanner,
    text: "Ce site utilise des cookies fonctionnels pour memoriser votre langue.",
    accept: "Accepter",
    decline: "Refuser",
    moreInfo: "En savoir plus",
  },
  legal: {
    ...en.legal,
    privacyTitle: "Politique de confidentialite",
    legalTitle: "Mentions legales",
    cookieTitle: "Politique de cookies",
    backHome: "← Retour a l'accueil",
    lastUpdated: "Derniere mise a jour",
  },
  fitTravel: {
    ...en.fitTravel,
    description: "Projet FitTravel. Le contenu sera defini ici.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.es;
}
