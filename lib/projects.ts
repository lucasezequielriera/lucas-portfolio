export type Project = {
  name: string;
  slug: string;
  url: string;
  description: string;
  longDescription: string;
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
    description:
      "Plataforma completa de control financiero personal. Registro de ingresos y gastos, análisis de hábitos financieros, gráficos en tiempo real y exportación de datos.",
    longDescription:
      "Plataforma completa de control financiero personal. Registro de ingresos y gastos, análisis de hábitos financieros, gráficos en tiempo real y exportación de datos. Diseñada para quienes quieren claridad total sobre su dinero.",
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    color: "emerald",
    logo: "/webfinancelab-logo.png",
  },
  {
    name: "FitPlan AI",
    slug: "fitplan-ai",
    url: "https://www.fitplan-ai.com",
    description:
      "Planificación inteligente de entrenamiento y nutrición con inteligencia artificial. Rutinas personalizadas, seguimiento de progreso y recomendaciones adaptativas.",
    longDescription:
      "Planificación inteligente de entrenamiento y nutrición con inteligencia artificial. Rutinas personalizadas, seguimiento de progreso y recomendaciones adaptativas. De la idea al producto funcional con usuarios reales.",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind CSS"],
    color: "sky",
    logo: "/fitplan-ai-logo.png",
  },
  {
    name: "WebEducationLab",
    slug: "webeducationlab",
    url: "https://web-education-lab.vercel.app/es",
    description:
      "Plataforma educativa con IA. 14 escuelas, cientos de cursos y un tutor virtual 24/7.",
    longDescription:
      "Plataforma educativa con IA. 14 escuelas, cientos de cursos y un tutor virtual 24/7. Desde programación hasta finanzas, nutrición y marketing.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    color: "violet",
    icon: "graduation-cap",
  },
  {
    name: "Synapsis",
    slug: "synapsis",
    url: "https://www.synapsis.team",
    description:
      "Plataforma de colaboración y gestión de equipos de trabajo. Organización de proyectos, comunicación centralizada y flujos de trabajo optimizados.",
    longDescription:
      "Plataforma de colaboración y gestión de equipos de trabajo. Organización de proyectos, comunicación centralizada y flujos de trabajo optimizados.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    color: "amber",
    logo: "/synapsis-logo.png",
  },
  {
    name: "Sandra Lorden",
    slug: "sandra-lorden",
    url: "https://www.sandralorden.com",
    description:
      "Portfolio profesional y web personal diseñada a medida. Diseño limpio, rendimiento optimizado y animaciones fluidas.",
    longDescription:
      "Portfolio profesional y web personal diseñada a medida. Diseño limpio, rendimiento optimizado y animaciones que cuidan cada detalle de la experiencia de usuario.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "rose",
    icon: "palette",
  },
];
