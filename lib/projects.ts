import type { Locale } from "./dictionaries";

export type MediaItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

type ProjectTextLocale = Exclude<Locale, "fr">;

export type Project = {
  name: string;
  slug: string;
  url: string;
  description: Record<ProjectTextLocale, string>;
  longDescription: Record<ProjectTextLocale, string>;
  problem: Record<ProjectTextLocale, string>;
  solution: Record<ProjectTextLocale, string>;
  tags: string[];
  media: MediaItem[];
  year: number;
  appCategory: string;
  color: "emerald" | "sky" | "violet" | "amber" | "rose" | "kolibri";
  logo?: string;
  /**
   * Some logos bleed to the edge of their canvas while others ship generous
   * built-in margins. "roomy" adds optical padding so the former do not read as
   * bigger than the latter when placed in identical boxes.
   */
  logoInset?: "roomy";
  icon?: "graduation-cap" | "palette";
};

export const projects: Project[] = [
  {
    name: "Kolibrí",
    slug: "kolibri",
    url: "https://www.kolibriacademy.xyz",
    year: 2026,
    appCategory: "EducationalApplication",
    description: {
      es: "Escuela online bilingüe (ES/EN) de inteligencia artificial para principiantes absolutos. Aprendé a usar ChatGPT, Claude y Gemini en tu día a día con currículum vivo, certificados y comunidad.",
      en: "Bilingual (ES/EN) online AI school for absolute beginners. Learn to use ChatGPT, Claude and Gemini in everyday life with a living curriculum, certificates and community.",
    },
    longDescription: {
      es: "Escuela online de IA en español e inglés para gente que nunca programó. Cinco cursos, certificados por nivel y un currículum que se actualiza cuando cambian las herramientas.",
      en: "Online AI school in Spanish and English for people who have never written code. Five courses, level certificates and a curriculum that gets updated when the tools change.",
    },
    problem: {
      es: "El mercado de cursos de IA está saturado pero fragmentado: cursos sueltos sin comunidad real, contenido que se desactualiza en meses porque la IA cambia rápido, y teoría que nunca se traduce en algo implementado. Casi nada está pensado de verdad para gente sin ningún conocimiento técnico.",
      en: "The AI course market is saturated but fragmented: standalone courses with no real community, content that goes stale within months because AI moves fast, and theory that never turns into something implemented. Almost nothing is truly built for people with zero technical background.",
    },
    solution: {
      es: "La armé como una escuela y no como un catálogo de cursos sueltos. Cinco cursos: uno gratis de introducción y cuatro sobre prompting, herramientas de IA, agentes y contenido multimedia. Cada uno con certificado por nivel. El contenido se produce en español e inglés por separado, no se traduce. Por debajo: Stripe para los pagos, Supabase para auth y base de datos, Resend para los emails y PostHog para medir qué funciona.",
      en: "I built it as a school, not a pile of unrelated courses. Five courses: a free intro plus four on prompting, AI tools, agents and multimedia content, each with its own level certificate. Content is produced separately in Spanish and English, never translated after the fact. Underneath: Stripe for payments, Supabase for auth and database, Resend for email and PostHog to see what actually works.",
    },
    tags: ["Next.js", "Supabase", "Stripe", "PostHog"],
    media: [],
    color: "kolibri",
    logo: "/kolibri-logo.png",
  },
  {
    name: "WebFinanceLab",
    slug: "webfinancelab",
    url: "https://www.webfinancelab.com",
    year: 2023,
    appCategory: "FinanceApplication",
    description: {
      es: "Plataforma completa de control financiero personal. Registro de ingresos y gastos, análisis de hábitos financieros, gráficos en tiempo real y exportación de datos.",
      en: "Complete personal finance platform. Income and expense tracking, financial habit analysis, real-time charts and data export.",
    },
    longDescription: {
      es: "Plataforma completa de control financiero personal. Registro de ingresos y gastos, análisis de hábitos financieros, gráficos en tiempo real y exportación de datos. Diseñada para quienes quieren claridad total sobre su dinero.",
      en: "Complete personal finance platform. Income and expense tracking, financial habit analysis, real-time charts and data export. Designed for those who want total clarity over their money.",
    },
    problem: {
      es: "La mayoría de las apps de finanzas personales son genéricas, limitadas o llenas de funciones innecesarias. Las personas necesitan una herramienta clara, rápida y visual para entender exactamente en qué gastan su dinero y cómo mejorar sus hábitos financieros sin tener que ser expertos en contabilidad.",
      en: "Most personal finance apps are generic, limited or bloated with unnecessary features. People need a clear, fast and visual tool to understand exactly where their money goes and how to improve their financial habits without needing to be accounting experts.",
    },
    solution: {
      es: "Registro de ingresos y gastos que categoriza solo, un dashboard con gráficos que se actualizan en vivo, tendencias mes a mes y exportación de datos. Preferí que hiciera pocas cosas y que se entendieran a la primera.",
      en: "Income and expense tracking that categorizes itself, a dashboard with charts that update live, month-over-month trends and data export. I'd rather it do a few things and have all of them make sense at first glance.",
    },
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    media: [
      { type: "image", src: "/projects/webfinancelab/screenshot-1.jpg" },
      { type: "image", src: "/projects/webfinancelab/screenshot-2.jpg" },
      { type: "image", src: "/projects/webfinancelab/screenshot-3.jpg" },
    ],
    color: "emerald",
    logo: "/webfinancelab-logo.png",
  },
  {
    name: "FitPlan AI",
    slug: "fitplan-ai",
    url: "https://www.fitplan-ai.com",
    year: 2024,
    appCategory: "HealthApplication",
    description: {
      es: "Planificación inteligente de entrenamiento y nutrición con inteligencia artificial. Rutinas personalizadas, seguimiento de progreso y recomendaciones adaptativas.",
      en: "AI-powered training and nutrition planning. Personalized routines, progress tracking and adaptive recommendations.",
    },
    longDescription: {
      es: "Planificación inteligente de entrenamiento y nutrición con inteligencia artificial. Rutinas personalizadas, seguimiento de progreso y recomendaciones adaptativas. De la idea al producto funcional con usuarios reales.",
      en: "AI-powered training and nutrition planning. Personalized routines, progress tracking and adaptive recommendations. From idea to functional product with real users.",
    },
    problem: {
      es: "Crear rutinas de entrenamiento y planes de nutrición personalizados requiere conocimiento especializado y tiempo. La mayoría de las personas no pueden pagar un entrenador personal ni un nutricionista, y las apps genéricas ofrecen planes estáticos que no se adaptan al progreso real del usuario.",
      en: "Creating personalized training routines and nutrition plans requires specialized knowledge and time. Most people can't afford a personal trainer or nutritionist, and generic apps offer static plans that don't adapt to the user's real progress.",
    },
    solution: {
      es: "El sistema toma los objetivos, el nivel y las preferencias de cada persona, y genera la rutina y el plan de comidas con OpenAI. Después los va corrigiendo con lo que la persona realmente registra: métricas, historial de entrenamientos y qué termina cumpliendo y qué no.",
      en: "The system takes each person's goals, level and preferences and generates the routine and meal plan with OpenAI. Then it keeps correcting them against what the person actually logs: metrics, workout history, and which parts they stick to and which they don't.",
    },
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind CSS"],
    media: [
      { type: "image", src: "/projects/fitplan-ai/screenshot-1.jpg" },
      { type: "image", src: "/projects/fitplan-ai/screenshot-2.jpg" },
      { type: "image", src: "/projects/fitplan-ai/screenshot-3.jpg" },
    ],
    color: "sky",
    logo: "/fitplan-ai-logo.png",
    logoInset: "roomy",
  },
  {
    name: "WebEducationLab",
    slug: "webeducationlab",
    url: "https://web-education-lab.vercel.app/es",
    year: 2024,
    appCategory: "EducationalApplication",
    description: {
      es: "Plataforma educativa con IA. 14 escuelas, cientos de cursos y un tutor virtual 24/7.",
      en: "AI-powered educational platform. 14 schools, hundreds of courses and a 24/7 virtual tutor.",
    },
    longDescription: {
      es: "Plataforma educativa con IA. 14 escuelas, cientos de cursos y un tutor virtual 24/7. Desde programación hasta finanzas, nutrición y marketing.",
      en: "AI-powered educational platform. 14 schools, hundreds of courses and a 24/7 virtual tutor. From programming to finance, nutrition and marketing.",
    },
    problem: {
      es: "La educación online está fragmentada: hay miles de plataformas, cada una con su enfoque y calidad variable. Los estudiantes pierden tiempo buscando entre recursos dispersos y no tienen un sistema unificado que cubra múltiples disciplinas con un tutor inteligente que los guíe en tiempo real.",
      en: "Online education is fragmented: there are thousands of platforms, each with their own approach and variable quality. Students waste time searching through scattered resources and lack a unified system covering multiple disciplines with an intelligent tutor guiding them in real time.",
    },
    solution: {
      es: "Catorce escuelas temáticas —programación, finanzas, nutrición, marketing y más—, cientos de cursos y un tutor con IA que responde a cualquier hora. El tutor no solo contesta: ajusta lo que recomienda al nivel real del estudiante. Todo bilingüe.",
      en: "Fourteen themed schools — programming, finance, nutrition, marketing and more — hundreds of courses, and an AI tutor available at any hour. The tutor doesn't just answer: it adjusts what it recommends to the student's actual level. All of it bilingual.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    media: [
      { type: "image", src: "/projects/webeducationlab/screenshot-1.jpg" },
      { type: "image", src: "/projects/webeducationlab/screenshot-2.jpg" },
      { type: "image", src: "/projects/webeducationlab/screenshot-3.jpg" },
    ],
    color: "violet",
    icon: "graduation-cap",
  },
  {
    name: "Synapsis",
    slug: "synapsis",
    url: "https://www.synapsis.team",
    year: 2025,
    appCategory: "BusinessApplication",
    description: {
      es: "Plataforma de colaboración y gestión de equipos de trabajo. Organización de proyectos, comunicación centralizada y flujos de trabajo optimizados.",
      en: "Team collaboration and management platform. Project organization, centralized communication and optimized workflows.",
    },
    longDescription: {
      es: "Plataforma de colaboración y gestión de equipos de trabajo. Organización de proyectos, comunicación centralizada y flujos de trabajo optimizados.",
      en: "Team collaboration and management platform. Project organization, centralized communication and optimized workflows.",
    },
    problem: {
      es: "Los equipos de desarrollo distribuidos usan múltiples herramientas desconectadas para gestionar proyectos, comunicarse y hacer seguimiento del trabajo. Esto genera fricción, información perdida y procesos lentos que afectan directamente la productividad.",
      en: "Distributed development teams use multiple disconnected tools to manage projects, communicate and track work. This creates friction, lost information and slow processes that directly impact productivity.",
    },
    solution: {
      es: "Gestión de proyectos, comunicación y automatizaciones en el mismo lugar, para que el equipo deje de saltar entre cinco herramientas. Tareas en tablero, canales integrados y dashboards de productividad.",
      en: "Project management, communication and automations in one place, so the team stops jumping between five tools. Board-style tasks, built-in channels and productivity dashboards.",
    },
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    media: [
      { type: "image", src: "/projects/synapsis/screenshot-1.jpg" },
      { type: "image", src: "/projects/synapsis/screenshot-2.jpg" },
      { type: "image", src: "/projects/synapsis/screenshot-3.jpg" },
    ],
    color: "amber",
    logo: "/synapsis-logo.png",
  },
  {
    name: "Sandra Lorden",
    slug: "sandra-lorden",
    url: "https://www.sandralorden.com",
    year: 2024,
    appCategory: "WebApplication",
    description: {
      es: "Portfolio profesional y web personal diseñada a medida. Diseño limpio, rendimiento optimizado y animaciones fluidas.",
      en: "Professional portfolio and custom personal website. Clean design, optimized performance and smooth animations.",
    },
    longDescription: {
      es: "Portfolio y web personal para una artista. Diseño propio, carga instantánea y animaciones donde hacen falta.",
      en: "Portfolio and personal site for an artist. Its own design, instant loading and animations only where they belong.",
    },
    problem: {
      es: "Los profesionales creativos necesitan una presencia web que refleje su identidad y nivel de calidad, pero la mayoría termina con templates genéricos que no transmiten quiénes son. Sandra necesitaba un sitio que representara su marca personal con un diseño único, rápido y profesional.",
      en: "Creative professionals need a web presence that reflects their identity and quality standards, but most end up with generic templates that don't convey who they are. Sandra needed a site that represented her personal brand with a unique, fast and professional design.",
    },
    solution: {
      es: "Diseño hecho a partir de su trabajo, no de una plantilla. Animaciones con Framer Motion donde suman y en ningún lado más, Next.js para que cargue al instante y el SEO configurado desde el primer día.",
      en: "The design came out of her own work, not a template. Framer Motion animations where they add something and nowhere else, Next.js so it loads instantly, and SEO set up from day one.",
    },
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    media: [
      { type: "video", src: "/projects/sandra-lorden/video-1.mp4" },
      { type: "image", src: "/projects/sandra-lorden/screenshot-2.jpg" },
      { type: "image", src: "/projects/sandra-lorden/screenshot-3.jpg" },
    ],
    color: "rose",
    icon: "palette",
  },
];
