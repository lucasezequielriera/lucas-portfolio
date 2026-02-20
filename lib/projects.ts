import type { Locale } from "./dictionaries";

export type Project = {
  name: string;
  slug: string;
  url: string;
  description: Record<Locale, string>;
  longDescription: Record<Locale, string>;
  tags: string[];
  color: "emerald" | "sky" | "violet" | "amber" | "rose";
  logo?: string;
  icon?: "graduation-cap" | "palette";
};

export const projects: Project[] = [
  {
    name: "WebFinanceLab",
    slug: "webfinancelab",
    url: "https://www.webfinancelab.com",
    description: {
      es: "Plataforma completa de control financiero personal. Registro de ingresos y gastos, análisis de hábitos financieros, gráficos en tiempo real y exportación de datos.",
      en: "Complete personal finance platform. Income and expense tracking, financial habit analysis, real-time charts and data export.",
    },
    longDescription: {
      es: "Plataforma completa de control financiero personal. Registro de ingresos y gastos, análisis de hábitos financieros, gráficos en tiempo real y exportación de datos. Diseñada para quienes quieren claridad total sobre su dinero.",
      en: "Complete personal finance platform. Income and expense tracking, financial habit analysis, real-time charts and data export. Designed for those who want total clarity over their money.",
    },
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    color: "emerald",
    logo: "/webfinancelab-logo.png",
  },
  {
    name: "FitPlan AI",
    slug: "fitplan-ai",
    url: "https://www.fitplan-ai.com",
    description: {
      es: "Planificación inteligente de entrenamiento y nutrición con inteligencia artificial. Rutinas personalizadas, seguimiento de progreso y recomendaciones adaptativas.",
      en: "AI-powered training and nutrition planning. Personalized routines, progress tracking and adaptive recommendations.",
    },
    longDescription: {
      es: "Planificación inteligente de entrenamiento y nutrición con inteligencia artificial. Rutinas personalizadas, seguimiento de progreso y recomendaciones adaptativas. De la idea al producto funcional con usuarios reales.",
      en: "AI-powered training and nutrition planning. Personalized routines, progress tracking and adaptive recommendations. From idea to functional product with real users.",
    },
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind CSS"],
    color: "sky",
    logo: "/fitplan-ai-logo.png",
  },
  {
    name: "WebEducationLab",
    slug: "webeducationlab",
    url: "https://web-education-lab.vercel.app/es",
    description: {
      es: "Plataforma educativa con IA. 14 escuelas, cientos de cursos y un tutor virtual 24/7.",
      en: "AI-powered educational platform. 14 schools, hundreds of courses and a 24/7 virtual tutor.",
    },
    longDescription: {
      es: "Plataforma educativa con IA. 14 escuelas, cientos de cursos y un tutor virtual 24/7. Desde programación hasta finanzas, nutrición y marketing.",
      en: "AI-powered educational platform. 14 schools, hundreds of courses and a 24/7 virtual tutor. From programming to finance, nutrition and marketing.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    color: "violet",
    icon: "graduation-cap",
  },
  {
    name: "Synapsis",
    slug: "synapsis",
    url: "https://www.synapsis.team",
    description: {
      es: "Plataforma de colaboración y gestión de equipos de trabajo. Organización de proyectos, comunicación centralizada y flujos de trabajo optimizados.",
      en: "Team collaboration and management platform. Project organization, centralized communication and optimized workflows.",
    },
    longDescription: {
      es: "Plataforma de colaboración y gestión de equipos de trabajo. Organización de proyectos, comunicación centralizada y flujos de trabajo optimizados.",
      en: "Team collaboration and management platform. Project organization, centralized communication and optimized workflows.",
    },
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    color: "amber",
    logo: "/synapsis-logo.png",
  },
  {
    name: "Sandra Lorden",
    slug: "sandra-lorden",
    url: "https://www.sandralorden.com",
    description: {
      es: "Portfolio profesional y web personal diseñada a medida. Diseño limpio, rendimiento optimizado y animaciones fluidas.",
      en: "Professional portfolio and custom personal website. Clean design, optimized performance and smooth animations.",
    },
    longDescription: {
      es: "Portfolio profesional y web personal diseñada a medida. Diseño limpio, rendimiento optimizado y animaciones que cuidan cada detalle de la experiencia de usuario.",
      en: "Professional portfolio and custom personal website. Clean design, optimized performance and animations that take care of every detail of the user experience.",
    },
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "rose",
    icon: "palette",
  },
];
