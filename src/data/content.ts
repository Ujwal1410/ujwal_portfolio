export const site = {
  name: "Ujwal",
  fullName: "Ujwal Kulal",
  role: "Associate Software Engineer · AIML Engineer",
  email: "mrujwalkulal14@gmail.com",
  phone: "+91 97414 47767",
  phoneHref: "tel:+919741447767",
  location: "Bantwal, Karnataka · Bangalore",
  availability: "Open to full-stack, AI systems, and infrastructure roles",
  github: "https://github.com/Ujwal1410",
  linkedin: "https://www.linkedin.com/in/ujwal-kulal-a9a7b1228/",
  photo: "/images/ujwal-profile.png",
  tagline: "Building solutions · Writing code · Solving problems · Creating impact",
  summary:
    "I build production-scale AI assessment platforms, real-time proctoring systems, and self-hosted infrastructure. Microservices, async processing, ML/RAG pipelines, and DevOps — designed for 10,000+ concurrent users.",
  tags: ["FASTAPI", "NEXT.JS", "TYPESCRIPT", "REDIS", "RAG", "DOCKER"],
};

export const metrics = [
  { label: "Concurrent users", value: "10K+" },
  { label: "Live proctoring sessions", value: "1K+" },
  { label: "Object storage", value: "100TB+" },
  { label: "Platform uptime", value: "99.8%" },
];

export const journeyProblem = {
  title: "Every reliable product starts as a messy production problem.",
  subtitle:
    "Scattered assessments, brittle uploads, slow inference, and systems that break under real load.",
  cards: [
    {
      title: "Assessment chaos",
      items: ["10+ domains", "1K+ questions/mo", "Manual review"],
    },
    {
      title: "Async backlog",
      items: ["500+ jobs", "High latency", "Queue pressure"],
    },
    {
      title: "Proctoring gaps",
      items: ["Live sessions", "Bandwidth cost", "Inconsistent config"],
    },
    {
      title: "Storage limits",
      items: ["500MB cap", "OOM risk", "Auth mismatches"],
    },
  ],
};

export const processSteps = [
  {
    step: "01",
    label: "Understand",
    title: "Problem",
    detail: "Map constraints, SLAs, and failure modes before writing code.",
  },
  {
    step: "02",
    label: "Design",
    title: "Architecture",
    detail: "Microservices, queues, storage, and APIs that hold under load.",
  },
  {
    step: "03",
    label: "Build",
    title: "Systems & AI",
    detail: "RAG pipelines, proctoring, model serving, and durable uploads.",
  },
  {
    step: "04",
    label: "Ship",
    title: "Production",
    detail: "Docker, CI/CD, nginx, incident response, and measurable uptime.",
  },
];

export const projects = [
  {
    id: "01",
    tag: "Platform",
    title: "AI Assessment Platform",
    description:
      "Full-stack AI assessment microservices across 10+ engineering domains — RAG retrieval, async evaluation, API gateway metering, and vLLM serving for 10K+ assessments/day.",
    stack: ["FastAPI", "Next.js", "Redis", "FAISS", "vLLM", "MongoDB"],
    highlights: [
      "35% faster evaluation latency",
      "40% lower inference latency",
      "$50K+/mo high-throughput revenue enabled",
    ],
    href: "https://github.com/Ujwal1410/AI_Assessment",
    hrefLabel: "GitHub",
  },
  {
    id: "02",
    tag: "Realtime",
    title: "Aaptor Live Proctoring",
    description:
      "LiveKit-based candidate monitoring for 1,000+ concurrent sessions with browser MediaRecorder uploads to S3-compatible storage and reusable React workflows.",
    stack: ["React", "Next.js", "LiveKit", "MediaRecorder", "S3", "Docker"],
    highlights: [
      "99.8% uptime",
      "60% bandwidth savings",
      "Data consistency 85% → 99.9%",
    ],
  },
  {
    id: "03",
    tag: "Infra",
    title: "SeaweedFS Object Storage",
    description:
      "Self-hosted SeaweedFS on Linux VMs for 100TB+ capacity — chunked multipart uploads, IAM unification, nginx tuning, and GitHub Actions automation.",
    stack: ["SeaweedFS", "Docker", "nginx", "S3 API", "IAM", "GitHub Actions"],
    highlights: [
      "10K+ daily API requests <200ms",
      "99.95% storage uptime",
      "70% lower memory footprint",
    ],
  },
  {
    id: "04",
    tag: "Product",
    title: "Finsight",
    description:
      "Solo full-stack AI expense intelligence — OCR for Indian bank statements, ML categorization, anomaly detection, and forecasting with JWT + Google OAuth.",
    stack: ["React", "Vite", "FastAPI", "MongoDB", "scikit-learn", "OCR"],
    highlights: [
      "85%+ categorization accuracy",
      "CSV / PDF / image statements",
      "Vercel + Render production deploy",
    ],
    href: "https://finsight-lxofmem9f-akshithakulals-projects.vercel.app/login",
    hrefLabel: "Live demo",
  },
  {
    id: "05",
    tag: "ML",
    title: "GNN Disease Prediction",
    description:
      "Graph-based medical prediction with GraphSAGE, GCN, and GAT — symptom–disease graphs, Streamlit/Flask inference UI, and scikit-learn evaluation.",
    stack: ["PyTorch Geometric", "Streamlit", "Flask", "Python", "scikit-learn"],
    highlights: ["GraphSAGE · GCN · GAT", "Real-time prediction UI"],
  },
  {
    id: "06",
    tag: "Full-stack",
    title: "Smart E-Learning Platform",
    description:
      "Role-based learning platform with encrypted auth — admins upload subjects and PDF materials; students register and access content securely.",
    stack: ["React", "Vite", "Spring Boot", "PostgreSQL", "Tailwind"],
    highlights: ["Admin / student RBAC", "Secure password encryption"],
  },
];

export const experience = [
  {
    period: "Nov 2025 — Present",
    company: "Gisul",
    location: "Bangalore",
    role: "Associate Software Engineer",
    points: [
      "Shipping AI assessment, live proctoring, and self-hosted object storage used at production scale.",
      "Owning microservices, RAG pipelines, Redis async jobs, LiveKit sessions, and SeaweedFS IAM/uploads.",
      "Resolving P1 production incidents (storage, nginx, env deploys) under a <2 hour SLA.",
    ],
  },
];

export const education = [
  {
    school: "Canara Engineering College, Mangalore",
    degree: "Bachelor of Engineering",
    period: "Dec 2021 — Present",
    meta: "CGPA 8.68 · 3rd year",
  },
  {
    school: "S.V.S Pre-University College, Bantwal",
    degree: "Pre-University",
    period: "Jun 2019 — Mar 2021",
    meta: "82.7%",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "Tailwind",
      "MediaRecorder",
    ],
  },
  {
    title: "Backend",
    items: [
      "FastAPI",
      "Python",
      "Spring Boot",
      "Java",
      "Microservices",
      "Redis queues",
    ],
  },
  {
    title: "AI & Data",
    items: ["RAG", "FAISS", "vLLM", "scikit-learn", "OCR", "LLM integration"],
  },
  {
    title: "Infra & Cloud",
    items: [
      "Docker",
      "nginx",
      "GitHub Actions",
      "SeaweedFS",
      "Linux",
      "S3 / IAM",
    ],
  },
];

export const achievements = [
  "Selected for exclusive Java Full-Stack training by 10Seconds",
  "Robo-Soccer workshop trainer for high school students",
  "College fest RoboSoccer event coordinator",
];
