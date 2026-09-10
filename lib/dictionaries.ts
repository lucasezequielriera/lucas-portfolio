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
    badge: "Product Engineer con IA · Madrid · Remoto",
    location: "España",
    h1: "Construyo productos con IA",
    h1Accent: " que la gente usa todos los días.",
    description: (years) =>
      `${years} años construyendo software. Tres en United Airlines, el resto en productos propios. Ahora me estoy metiendo en auditoría y seguridad de sistemas de IA.`,
    pitch: (years) =>
      `${years} años construyendo software. Tres en United Airlines, el resto en productos propios.`,
    showcaseLabel: "Proyectos destacados",
    ctaPrimary: "Ver lo que construí",
    ctaSecondary: "Escribime",
    presence: "Presencia",
    videoAlt: "Video de Lucas Riera",
    currently: "Actualmente",
    activity1: "Product Engineering con IA",
    activity2: "Construyendo plataformas SaaS y sistemas web",
    activity3: "Explorando auditoría y seguridad de sistemas de IA",
    activity4:
      "Lic. Informática — UADE · Tec. Programación & Full Stack MERN — UTN",
    statCode: "construyendo",
    statYears: "+ años",
    statProducts: "en producción",
    statCreated: " productos",
    statCountries: "vividos",
    statLived: " países",
  },
  works: {
    label: "Trabajos",
    title: "Cosas que construí.",
    description:
      "Todos están online y funcionando. Los hice solo, de la base de datos al diseño.",
    ctaTitle: "El que falta es el tuyo",
    ctaDescription:
      "Si tenés algo en mente, contame de qué se trata.",
    ctaButton: "Hablemos",
  },
  experience: {
    label: "Experiencia profesional",
    title: "Dónde trabajé.",
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
    description: "Ordenado por lo que más uso.",
    aiTitle: "IA en producto",
    aiDescription: "Modelos, editor, automatizaciones e infra.",
    coreTitle: "Core de producto",
    coreDescription: "Interfaz, estado y lógica de cliente.",
    backendTitle: "Backend y datos",
    backendDescription: "Autenticación, base de datos y tareas programadas.",
    mobileTitle: "Móvil",
    mobileDescription: "La misma base web empaquetada como app nativa.",
    paymentsTitle: "Pagos",
    paymentsDescription: "Cobros y suscripciones.",
    mediaTitle: "Media y generación de archivos",
    mediaDescription: "Proceso imágenes y genero documentos desde el producto.",
    integrationsTitle: "Integraciones",
    integrationsDescription: "Redes sociales, mensajería y email.",
    testingTitle: "Testing",
    testingDescription: "Pruebo lo que construyo antes de que lo pruebe el usuario.",
    analyticsTitle: "Analítica y SEO",
    analyticsDescription: "Mido uso y visibilidad en buscadores.",
    infraTitle: "Infraestructura",
    infraDescription: "Dónde vive el código y cómo se despliega.",
  },
  services: {
    label: "Servicios",
    title: "Lo que hago.",
    description:
      "Desarrollo web, plataformas a medida y consultoría técnica. Para empresas y para quien recién arranca.",
    saasTitle: "Plataformas & SaaS",
    saasDescription:
      "Auth, base de datos, API, panel de control y toda la lógica de negocio del medio. Del esquema inicial al deploy.",
    systemsTitle: "Sistemas Web",
    systemsDescription:
      "Aplicaciones internas, dashboards e integraciones con los servicios que ya usás.",
    websTitle: "Portfolios & Webs",
    websDescription:
      "Sitios rápidos, con diseño propio y animaciones que no estorban.",
  },
  testimonials: {
    label: "Testimonios",
    title: "Gente con la que trabajé.",
    maryContext:
      "Mi supervisora en United Airlines. Trabajamos juntos en el Chase Partnership y en el portal Wi-Fi de Starlink, donde llevé el frontend y el equipo terminó un 13% más productivo.",
    maryRole: "Senior Analyst / Developer · United Airlines",
    maryRelation: "Supervisora directa de Lucas",
    nicolasRole: "Frontend Engineer · Compañero de equipo",
    starsLabel: "5 de 5 estrellas",
  },
  contact: {
    title: "¿Tenés algo en mente?",
    description:
      "Contame qué necesitás y te digo si te puedo ayudar, cuánto sale y cuánto tardo. Si no es lo mío, también te lo digo.",
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
    title: "Dónde estuve y con qué trabajo.",
    subtitle: "Cinco empresas, seis productos propios y bastante código corriendo en producción.",
    tabExperience: "Experiencia",
    tabStack: "Stack",
    tabServices: "Servicios",
    tabTestimonials: "Testimonios",
  },
  proyectosPage: {
    count: (n) => `${n} proyectos`,
    title: "Cosas que construí.",
    description:
      "Todos están online y funcionando. Los hice solo, de la base de datos al diseño.",
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
    contactCta: "¿Querés algo parecido?",
    contactCtaSub:
      "Lo que hice acá lo puedo hacer para tu producto.",
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
      `${years} años construyendo software, tres de ellos en United Airlines. Desarrollo web, plataformas a medida y soluciones con IA para empresas y startups desde Madrid.`,
    ogTitle: "Lucas Riera — Product Engineer con IA",
    ogDescription: (years) =>
      `${years} años construyendo software, tres en United Airlines. Desarrollo web, IA y consultoría técnica para equipos de todo el mundo.`,
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
    badge: "Product Engineer with AI · Madrid · Remote",
    location: "Spain",
    h1: "I build AI products",
    h1Accent: " people actually use.",
    description: (years) =>
      `${years} years building software. Three of them at United Airlines, the rest on my own products. Lately I've been getting into AI systems auditing and security.`,
    pitch: (years) =>
      `${years} years building software. Three of them at United Airlines, the rest on my own products.`,
    showcaseLabel: "Featured work",
    ctaPrimary: "See what I built",
    ctaSecondary: "Write to me",
    presence: "Presence",
    videoAlt: "Video of Lucas Riera",
    currently: "Currently",
    activity1: "Product engineering with AI",
    activity2: "Building SaaS platforms and web systems",
    activity3: "Exploring AI systems auditing and security",
    activity4:
      "B.Sc. Computer Science — UADE · Software Dev & Full Stack MERN — UTN",
    statCode: "building",
    statYears: "+ years",
    statProducts: "in production",
    statCreated: " products",
    statCountries: "lived in",
    statLived: " countries",
  },
  works: {
    label: "Work",
    title: "Things I built.",
    description:
      "All of them are online and running. I built them alone, from the database to the design.",
    ctaTitle: "Yours is the one missing",
    ctaDescription:
      "If you have something in mind, tell me what it is.",
    ctaButton: "Let's talk",
  },
  experience: {
    label: "Professional experience",
    title: "Where I worked.",
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
    description: "Ordered by how much I actually use it.",
    aiTitle: "AI in product",
    aiDescription: "Models, editor, automations and infra.",
    coreTitle: "Product core",
    coreDescription: "Interface, state and client logic.",
    backendTitle: "Backend and data",
    backendDescription: "Authentication, database and scheduled jobs.",
    mobileTitle: "Mobile",
    mobileDescription: "The same web codebase packaged as a native app.",
    paymentsTitle: "Payments",
    paymentsDescription: "Charges and subscriptions.",
    mediaTitle: "Media and file generation",
    mediaDescription: "I process images and generate documents from the product.",
    integrationsTitle: "Integrations",
    integrationsDescription: "Social media, messaging and email.",
    testingTitle: "Testing",
    testingDescription: "I test what I build before the user does.",
    analyticsTitle: "Analytics and SEO",
    analyticsDescription: "I measure usage and search visibility.",
    infraTitle: "Infrastructure",
    infraDescription: "Where the code lives and how it ships.",
  },
  services: {
    label: "Services",
    title: "What I do.",
    description:
      "Web development, custom platforms and technical consulting. For companies and for people just starting out.",
    saasTitle: "Platforms & SaaS",
    saasDescription:
      "Auth, database, API, admin panel and all the business logic in between. From the first schema to deploy.",
    systemsTitle: "Web Systems",
    systemsDescription:
      "Internal apps, dashboards and integrations with the services you already use.",
    websTitle: "Portfolios & Websites",
    websDescription:
      "Fast sites, with design of their own and animations that stay out of the way.",
  },
  testimonials: {
    label: "Testimonials",
    title: "People I've worked with.",
    maryContext:
      "My supervisor at United Airlines. We worked together on the Chase Partnership and the Starlink Wi-Fi portal, where I led the frontend and the team ended up 13% more productive.",
    maryRole: "Senior Analyst / Developer · United Airlines",
    maryRelation: "Lucas's direct supervisor",
    nicolasRole: "Frontend Engineer · Teammate",
    starsLabel: "5 out of 5 stars",
  },
  contact: {
    title: "Got something in mind?",
    description:
      "Tell me what you need and I'll tell you if I can help, what it costs and how long it takes. If it's not my thing, I'll tell you that too.",
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
    title: "Where I've been and what I work with.",
    subtitle: "Five companies, six products of my own and a fair amount of code running in production.",
    tabExperience: "Experience",
    tabStack: "Stack",
    tabServices: "Services",
    tabTestimonials: "Testimonials",
  },
  proyectosPage: {
    count: (n) => `${n} projects`,
    title: "Things I built.",
    description:
      "All of them are online and running. I built them alone, from the database to the design.",
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
    contactCta: "Want something like this?",
    contactCtaSub:
      "What I did here I can do for your product.",
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
      `${years} years building software, three of them at United Airlines. Web development, custom platforms and AI-powered products for startups and companies, from Madrid.`,
    ogTitle: "Lucas Riera — Product Engineer with AI",
    ogDescription: (years) =>
      `${years} years building software, three at United Airlines. Web development, AI and technical consulting for teams anywhere.`,
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
    badge: "Product Engineer avec IA · Madrid · Remote",
    location: "Espagne",
    h1: "Je construis des produits IA",
    h1Accent: " que les gens utilisent vraiment.",
    description: (years) =>
      `${years} ans à construire des logiciels. Trois chez United Airlines, le reste sur mes propres produits. En ce moment je me plonge dans l'audit et la sécurité des systèmes d'IA.`,
    pitch: (years) =>
      `${years}+ ans a construire du produit avec l'IA. De l'architecture au deploiement, execution premium.`,
    showcaseLabel: "Projets phares",
    ctaPrimary: "Voir ce que j'ai construit",
    ctaSecondary: "Écrivez-moi",
    presence: "Presence",
    videoAlt: "Video de Lucas Riera",
    currently: "Actuellement",
    activity1: "Product engineering avec IA",
    activity2: "Creation de plateformes SaaS et systemes web",
    activity3: "Exploration de l'audit et de la securite des systemes d'IA",
    statCode: "à construire",
    statYears: "+ ans",
    statProducts: "en production",
    statCreated: " produits",
    statCountries: "vécus",
    statLived: " pays",
  },
  works: {
    ...en.works,
    label: "Travaux",
    title: "Des choses que j'ai construites.",
    description:
      "Tous sont en ligne et fonctionnent. Je les ai construits seul, de la base de données au design.",
    ctaTitle: "Il ne manque que le vôtre",
    ctaDescription: "Si vous avez une idée, dites-moi de quoi il s'agit.",
    ctaButton: "Parlons",
  },
  stack: {
    ...en.stack,
    label: "Stack",
    title: "Avec quoi je construis.",
    description: "Classé par ce que j'utilise le plus.",
    aiTitle: "IA en produit",
    aiDescription: "Modèles, éditeur, automatisations et infra.",
    coreTitle: "Coeur de produit",
    coreDescription: "Interface, état et logique client.",
    backendTitle: "Backend et donnees",
    backendDescription: "Authentification, base de donnees et taches programmees.",
    mobileTitle: "Mobile",
    mobileDescription: "La meme base web empaquetee comme application native.",
    paymentsTitle: "Paiements",
    paymentsDescription: "Paiements et abonnements.",
    mediaTitle: "Media et generation de fichiers",
    mediaDescription: "Je traite les images et genere des documents depuis le produit.",
    integrationsTitle: "Integrations",
    integrationsDescription: "Réseaux sociaux, messagerie et email.",
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
    title: "Ce que je fais.",
    description:
      "Développement web, plateformes sur mesure et conseil technique. Pour les entreprises et pour ceux qui démarrent.",
  },
  testimonials: {
    ...en.testimonials,
    label: "Temoignages",
    title: "Des gens avec qui j'ai travaillé.",
  },
  contact: {
    ...en.contact,
    title: "Vous avez une idée en tête ?",
    description:
      "Dites-moi ce dont vous avez besoin et je vous dirai si je peux aider, combien ça coûte et combien de temps ça prend. Si ce n'est pas pour moi, je vous le dirai aussi.",
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
    title: "Où j'ai été et avec quoi je travaille.",
    subtitle: "Cinq entreprises, six produits à moi et pas mal de code qui tourne en production.",
    tabExperience: "Experience",
    tabStack: "Stack",
    tabServices: "Services",
    tabTestimonials: "Temoignages",
  },
  proyectosPage: {
    ...en.proyectosPage,
    count: (n) => `${n} projets`,
    title: "Des choses que j'ai construites.",
    description:
      "Tous sont en ligne et fonctionnent. Je les ai construits seul, de la base de données au design.",
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
    contactCta: "Vous voulez quelque chose de similaire ?",
    contactCtaSub: "Ce que j'ai fait ici, je peux le faire pour votre produit.",
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
      `${years} ans à construire des logiciels, trois chez United Airlines. Développement web, plateformes sur mesure et solutions IA, depuis Madrid.`,
    ogTitle: "Lucas Riera — Product Engineer avec IA",
    ogDescription: (years) =>
      `${years} ans à construire des logiciels, trois chez United Airlines. Développement web, IA et conseil technique.`,
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
