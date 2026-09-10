export type Locale = "es" | "en" | "fr";

export const locales: Locale[] = ["es", "en", "fr"];
export const defaultLocale: Locale = "es";

export interface Dictionary {
  nav: {
    location: string;
    roleBadge: string;
    futureRoleBadge: string;
    trabajos: string;
    experiencia: string;
    stack: string;
    sobreMi: string;
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
    pitch: (years: number) => string;
    showcaseLabel: string;
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
    aiTitle: string;
    aiDescription: string;
    coreTitle: string;
    coreDescription: string;
    backendTitle: string;
    backendDescription: string;
    mobileTitle: string;
    mobileDescription: string;
    paymentsTitle: string;
    paymentsDescription: string;
    mediaTitle: string;
    mediaDescription: string;
    integrationsTitle: string;
    integrationsDescription: string;
    testingTitle: string;
    testingDescription: string;
    analyticsTitle: string;
    analyticsDescription: string;
    infraTitle: string;
    infraDescription: string;
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
  about: {
    badge: string;
    title: string;
    subtitle: string;
    tabExperience: string;
    tabStack: string;
    tabServices: string;
    tabTestimonials: string;
  };
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
    roleBadge: "Product Engineer",
    futureRoleBadge: "→ AI Trust Engineer",
    trabajos: "Trabajos",
    experiencia: "Experiencia",
    stack: "Stack",
    sobreMi: "Sobre mí",
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
    badge: "Product Engineer con IA · Servicios Remotos Globales",
    location: "España",
    h1: "Convierto ideas en producto con IA",
    h1Accent: " que vende, escala y dura.",
    description: (years) =>
      `Product Engineer con +${years} años de experiencia construyendo con IA. Ayudo a empresas y startups a lanzar productos digitales y soluciones de IA con calidad premium — y voy camino a especializarme en auditoría y seguridad de sistemas de IA.`,
    pitch: (years) =>
      `+${years} años construyendo producto con IA. De la arquitectura al deploy, con calidad premium.`,
    showcaseLabel: "Proyectos destacados",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Contactar",
    presence: "Presencia",
    videoAlt: "Video de Lucas Riera",
    currently: "Actualmente",
    activity1: "Product Engineering con IA",
    activity2: "Construyendo plataformas SaaS y sistemas web",
    activity3: "Explorando auditoría y seguridad de sistemas de IA",
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
    title: "Con qué construyo.",
    description:
      "Ordenado por lo que más uso, no alfabético: la IA va primero porque es donde construyo hoy.",
    aiTitle: "IA en producto",
    aiDescription:
      "El stack con el que construyo producto con IA: modelos, editor, automatización e infraestructura.",
    coreTitle: "Core de producto",
    coreDescription:
      "La base con la que construyo interfaz, estado y lógica de cliente.",
    backendTitle: "Backend y datos",
    backendDescription: "Autenticación, base de datos y tareas programadas.",
    mobileTitle: "Móvil",
    mobileDescription: "La misma base web empaquetada como app nativa.",
    paymentsTitle: "Pagos",
    paymentsDescription: "Cobros y suscripciones.",
    mediaTitle: "Media y generación de archivos",
    mediaDescription: "Proceso imágenes y genero documentos desde el producto.",
    integrationsTitle: "Integraciones",
    integrationsDescription:
      "Conecto el producto con redes sociales, mensajería y email.",
    testingTitle: "Testing",
    testingDescription: "Pruebo lo que construyo antes de que lo pruebe el usuario.",
    analyticsTitle: "Analítica y SEO",
    analyticsDescription: "Mido uso y visibilidad en buscadores.",
    infraTitle: "Infraestructura",
    infraDescription: "Dónde vive el código y cómo se despliega.",
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
  about: {
    badge: "Sobre mí",
    title: "Trayectoria, stack y lo que dicen de mí.",
    subtitle: "Todo lo que hay detrás del trabajo: dónde construí, con qué y quién lo respalda.",
    tabExperience: "Experiencia",
    tabStack: "Stack",
    tabServices: "Servicios",
    tabTestimonials: "Testimonios",
  },
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
    title: "Lucas Riera — Product Engineer con IA",
    description: (years) =>
      `Product Engineer con +${years} años de experiencia construyendo con IA. Desarrollo aplicaciones web, productos digitales y soluciones de IA para empresas y startups — y me especializo en auditoría y seguridad de sistemas de IA.`,
    ogTitle: "Lucas Riera — Product Engineer con IA",
    ogDescription: (years) =>
      `Product Engineer con +${years} años de experiencia. Desarrollo web, soluciones de IA y consultoría técnica para equipos globales.`,
    keywords: [
      "Lucas Riera",
      "product engineer",
      "product engineer con IA",
      "ingeniero de producto",
      "AI trust engineer",
      "auditoría de IA",
      "seguridad en sistemas de IA",
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
      "Kolibrí",
      "Kolibrí Academy",
      "escuela de IA online",
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
    roleBadge: "Product Engineer",
    futureRoleBadge: "→ AI Trust Engineer",
    trabajos: "Work",
    experiencia: "Experience",
    stack: "Stack",
    sobreMi: "About",
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
    badge: "Product Engineer with AI · Remote Global Services",
    location: "Spain",
    h1: "I turn ideas into product with AI",
    h1Accent: " that sells, scales and lasts.",
    description: (years) =>
      `Product Engineer with ${years}+ years of experience building with AI. I help companies and startups ship digital products and AI-powered solutions with premium execution — and I'm on my way to specializing in AI systems auditing and security.`,
    pitch: (years) =>
      `${years}+ years building product with AI. From architecture to deploy, premium execution.`,
    showcaseLabel: "Featured work",
    ctaPrimary: "See projects",
    ctaSecondary: "Get in touch",
    presence: "Presence",
    videoAlt: "Video of Lucas Riera",
    currently: "Currently",
    activity1: "Product engineering with AI",
    activity2: "Building SaaS platforms and web systems",
    activity3: "Exploring AI systems auditing and security",
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
    title: "What I build with.",
    description:
      "Ordered by how much I actually use it, not alphabetically: AI comes first because that's where I build today.",
    aiTitle: "AI in product",
    aiDescription:
      "The stack I use to build product with AI: models, editor, automation and infrastructure.",
    coreTitle: "Product core",
    coreDescription:
      "The foundation I use to build interface, state and client logic.",
    backendTitle: "Backend and data",
    backendDescription: "Authentication, database and scheduled jobs.",
    mobileTitle: "Mobile",
    mobileDescription: "The same web codebase packaged as a native app.",
    paymentsTitle: "Payments",
    paymentsDescription: "Charges and subscriptions.",
    mediaTitle: "Media and file generation",
    mediaDescription: "I process images and generate documents from the product.",
    integrationsTitle: "Integrations",
    integrationsDescription:
      "I connect the product to social media, messaging and email.",
    testingTitle: "Testing",
    testingDescription: "I test what I build before the user does.",
    analyticsTitle: "Analytics and SEO",
    analyticsDescription: "I measure usage and search visibility.",
    infraTitle: "Infrastructure",
    infraDescription: "Where the code lives and how it ships.",
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
  about: {
    badge: "About me",
    title: "Track record, stack and what people say.",
    subtitle: "Everything behind the work: where I built, what with, and who backs it.",
    tabExperience: "Experience",
    tabStack: "Stack",
    tabServices: "Services",
    tabTestimonials: "Testimonials",
  },
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
    title: "Lucas Riera — Product Engineer with AI",
    description: (years) =>
      `Product Engineer with ${years}+ years of experience building with AI. Web app development, AI-powered products and technical consulting for startups and companies — specializing in AI systems auditing and security.`,
    ogTitle: "Lucas Riera — Product Engineer with AI",
    ogDescription: (years) =>
      `Product Engineer with ${years}+ years of experience building web apps, AI solutions and scalable systems for global teams.`,
    keywords: [
      "Lucas Riera",
      "product engineer",
      "AI product engineer",
      "AI trust engineer",
      "AI auditing",
      "AI security",
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
      "Kolibrí",
      "Kolibrí Academy",
      "online AI school",
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
    roleBadge: "Product Engineer",
    futureRoleBadge: "→ AI Trust Engineer",
    trabajos: "Travaux",
    experiencia: "Experience",
    stack: "Stack",
    sobreMi: "À propos",
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
    badge: "Product Engineer avec IA · Services distants globaux",
    location: "Espagne",
    h1: "Je transforme les idees en produit avec l'IA",
    h1Accent: " qui vend, evolue et dure.",
    description: (years) =>
      `Product Engineer avec ${years}+ ans d'experience a construire avec l'IA. J'aide startups et entreprises a creer des produits numeriques et des solutions IA avec une execution premium — et je me dirige vers l'audit et la securite des systemes d'IA.`,
    pitch: (years) =>
      `${years}+ ans a construire du produit avec l'IA. De l'architecture au deploiement, execution premium.`,
    showcaseLabel: "Projets phares",
    ctaPrimary: "Voir mes projets",
    ctaSecondary: "Me contacter",
    presence: "Presence",
    videoAlt: "Video de Lucas Riera",
    currently: "Actuellement",
    activity1: "Product engineering avec IA",
    activity2: "Creation de plateformes SaaS et systemes web",
    activity3: "Exploration de l'audit et de la securite des systemes d'IA",
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
  stack: {
    ...en.stack,
    label: "Stack",
    title: "Avec quoi je construis.",
    description:
      "Classe par ce que j'utilise le plus, pas par ordre alphabetique : l'IA est en premier car c'est la que je construis aujourd'hui.",
    aiTitle: "IA en produit",
    aiDescription:
      "La stack avec laquelle je construis du produit avec l'IA : modeles, editeur, automatisation et infrastructure.",
    coreTitle: "Coeur de produit",
    coreDescription:
      "La base avec laquelle je construis l'interface, l'etat et la logique client.",
    backendTitle: "Backend et donnees",
    backendDescription: "Authentification, base de donnees et taches programmees.",
    mobileTitle: "Mobile",
    mobileDescription: "La meme base web empaquetee comme application native.",
    paymentsTitle: "Paiements",
    paymentsDescription: "Paiements et abonnements.",
    mediaTitle: "Media et generation de fichiers",
    mediaDescription: "Je traite les images et genere des documents depuis le produit.",
    integrationsTitle: "Integrations",
    integrationsDescription:
      "Je connecte le produit aux reseaux sociaux, a la messagerie et a l'email.",
    testingTitle: "Tests",
    testingDescription: "Je teste ce que je construis avant que l'utilisateur ne le fasse.",
    analyticsTitle: "Analytique et SEO",
    analyticsDescription: "Je mesure l'usage et la visibilite dans les moteurs de recherche.",
    infraTitle: "Infrastructure",
    infraDescription: "Ou vit le code et comment il est deploye.",
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
  about: {
    badge: "À propos",
    title: "Parcours, stack et avis clients.",
    subtitle: "Tout ce qu'il y a derriere le travail : ou j'ai construit, avec quoi, et qui le confirme.",
    tabExperience: "Experience",
    tabStack: "Stack",
    tabServices: "Services",
    tabTestimonials: "Temoignages",
  },
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
    title: "Lucas Riera — Product Engineer avec IA",
    description: (years) =>
      `Product Engineer avec ${years}+ ans d'experience a construire avec l'IA. Applications web, solutions IA et conseil technique pour equipes internationales — vers l'audit et la securite des systemes d'IA.`,
    ogTitle: "Lucas Riera — Product Engineer avec IA",
    ogDescription: (years) =>
      `Product Engineer avec ${years}+ ans d'experience en applications web, IA et systemes scalables.`,
    keywords: [
      "Lucas Riera",
      "product engineer",
      "AI trust engineer",
      "audit IA",
      "securite IA",
      "developpeur logiciel",
      "developpeur web freelance",
      "developpeur full stack",
      "developpeur remote",
      "consultant technique",
      "solutions IA",
      "application web sur mesure",
      "developpement SaaS",
      "freelance developer",
      "Kolibrí",
      "Kolibrí Academy",
      "ecole IA en ligne",
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
