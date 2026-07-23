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
      es: "Escuela online bilingüe de inteligencia artificial pensada para gente que parte de cero absoluto. Currículum vivo de 5 cursos entre gratis y pagos, certificados por nivel y una experiencia real de escuela, no una góndola de cursos sueltos.",
      en: "Bilingual online AI school built for people starting from absolute zero. A living 5-course curriculum, free and paid, level certificates and a real school experience — not just another course dump.",
    },
    problem: {
      es: "El mercado de cursos de IA está saturado pero fragmentado: cursos sueltos sin comunidad real, contenido que se desactualiza en meses porque la IA cambia rápido, y teoría que nunca se traduce en algo implementado. Casi nada está pensado de verdad para gente sin ningún conocimiento técnico.",
      en: "The AI course market is saturated but fragmented: standalone courses with no real community, content that goes stale within months because AI moves fast, and theory that never turns into something implemented. Almost nothing is truly built for people with zero technical background.",
    },
    solution: {
      es: "Construí Kolibrí como una escuela, no una góndola de cursos: currículum vivo que se revisa activamente, aprender haciendo desde la primera lección, y contenido 100% bilingüe pensado y producido en ambos idiomas, no traducido después. Catálogo de 5 cursos (uno gratuito de introducción y cuatro especializados en prompting, herramientas de IA, agentes y contenido multimedia) con certificados por nivel, pagos con Stripe, autenticación y base de datos en Supabase, emails automáticos con Resend y analítica con PostHog.",
      en: "I built Kolibrí as a school, not a course dump: a living curriculum that's actively reviewed, learning by doing from lesson one, and content that's truly bilingual — thought out and produced in both languages, not translated afterward. A 5-course catalog (one free intro course plus four specialized ones on prompting, AI tools, agents and multimedia content) with level certificates, Stripe payments, Supabase auth and database, automated emails via Resend, and PostHog analytics.",
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
      es: "Construí una plataforma completa de control financiero desde cero: registro intuitivo de ingresos y gastos con categorización automática, dashboard con gráficos interactivos en tiempo real, análisis de hábitos financieros con tendencias mensuales, y exportación de datos. Todo con una interfaz limpia que prioriza la claridad sobre la complejidad.",
      en: "I built a complete financial control platform from scratch: intuitive income and expense tracking with automatic categorization, dashboard with real-time interactive charts, financial habit analysis with monthly trends, and data export. All with a clean interface that prioritizes clarity over complexity.",
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
      es: "Desarrollé una plataforma que usa inteligencia artificial (OpenAI) para generar rutinas de entrenamiento y planes de nutrición completamente personalizados. El sistema analiza los objetivos, nivel de experiencia y preferencias del usuario, genera planes adaptados y los ajusta según el progreso. Incluye seguimiento de métricas, historial de entrenamientos y recomendaciones adaptativas.",
      en: "I developed a platform that uses artificial intelligence (OpenAI) to generate fully personalized training routines and nutrition plans. The system analyzes the user's goals, experience level and preferences, generates tailored plans and adjusts them based on progress. It includes metrics tracking, workout history and adaptive recommendations.",
    },
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind CSS"],
    media: [
      { type: "image", src: "/projects/fitplan-ai/screenshot-1.jpg" },
      { type: "image", src: "/projects/fitplan-ai/screenshot-2.jpg" },
      { type: "image", src: "/projects/fitplan-ai/screenshot-3.jpg" },
    ],
    color: "sky",
    logo: "/fitplan-ai-logo.png",
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
      es: "Creé una plataforma educativa integral con 14 escuelas temáticas (programación, finanzas, nutrición, marketing y más), cientos de cursos estructurados y un tutor virtual con IA disponible 24/7. El tutor responde preguntas, explica conceptos y adapta las recomendaciones al nivel del estudiante. Todo en una interfaz moderna con soporte bilingüe.",
      en: "I created a comprehensive educational platform with 14 thematic schools (programming, finance, nutrition, marketing and more), hundreds of structured courses and an AI virtual tutor available 24/7. The tutor answers questions, explains concepts and adapts recommendations to the student's level. All in a modern interface with bilingual support.",
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
      es: "Construí una plataforma centralizada para equipos de trabajo que unifica gestión de proyectos, comunicación y flujos de trabajo en un solo lugar. Organización visual de tareas, canales de comunicación integrados, automatizaciones de procesos y dashboards de productividad, todo diseñado para equipos que necesitan moverse rápido sin perder el control.",
      en: "I built a centralized platform for teams that unifies project management, communication and workflows in one place. Visual task organization, integrated communication channels, process automations and productivity dashboards — all designed for teams that need to move fast without losing control.",
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
      es: "Portfolio profesional y web personal diseñada a medida. Diseño limpio, rendimiento optimizado y animaciones que cuidan cada detalle de la experiencia de usuario.",
      en: "Professional portfolio and custom personal website. Clean design, optimized performance and animations that take care of every detail of the user experience.",
    },
    problem: {
      es: "Los profesionales creativos necesitan una presencia web que refleje su identidad y nivel de calidad, pero la mayoría termina con templates genéricos que no transmiten quiénes son. Sandra necesitaba un sitio que representara su marca personal con un diseño único, rápido y profesional.",
      en: "Creative professionals need a web presence that reflects their identity and quality standards, but most end up with generic templates that don't convey who they are. Sandra needed a site that represented her personal brand with a unique, fast and professional design.",
    },
    solution: {
      es: "Diseñé y desarrollé un portfolio completamente a medida: diseño limpio que refleja la estética de Sandra, animaciones fluidas con Framer Motion que elevan la experiencia, rendimiento optimizado con Next.js para carga instantánea, y SEO configurado para posicionamiento orgánico. Cada detalle visual fue pensado para transmitir profesionalismo y personalidad.",
      en: "I designed and developed a fully custom portfolio: clean design reflecting Sandra's aesthetic, smooth animations with Framer Motion that elevate the experience, optimized performance with Next.js for instant loading, and SEO configured for organic positioning. Every visual detail was crafted to convey professionalism and personality.",
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
