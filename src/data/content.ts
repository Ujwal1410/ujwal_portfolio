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
    "I ship production AI assessment platforms, live proctoring, RAG evaluation pipelines, and self-hosted object storage at Gisul — plus personal voice and ML products. Microservices, async jobs, model serving, and DevOps built for real concurrent load.",
  tags: ["FASTAPI", "NEXT.JS", "TYPESCRIPT", "REDIS", "RAG", "DOCKER", "SEAWEEDFS"],
};

export const metrics = [
  { label: "Competency domains", value: "8+" },
  { label: "Live proctoring sessions", value: "1K+" },
  { label: "Object storage capacity", value: "100TB+" },
  { label: "Large uploads supported", value: "10GB+" },
];

export const journeyProblem = {
  title: "Every reliable product starts as a messy production problem.",
  subtitle:
    "Scattered assessments, brittle uploads, slow inference, and systems that break under real load.",
  cards: [
    {
      title: "Assessment chaos",
      items: ["8+ competencies", "Manual review", "Inconsistent scoring"],
    },
    {
      title: "Proctoring gaps",
      items: ["Face mismatch", "Live sessions", "Violation noise"],
    },
    {
      title: "Inference backlog",
      items: ["Async jobs", "High latency", "Queue pressure"],
    },
    {
      title: "Storage limits",
      items: ["500MB cap", "OOM risk", "Auth / CORS breaks"],
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

/**
 * Portfolio projects grounded in local git evidence from:
 * - C:\\Gisul\\Aaptor (Ujwal author commits)
 * - C:\\Gisul\\seaweedfs_prod_clean (Gisul production deploy)
 * - C:\\Sarastra\\voice-based-assistant, finsight, disease-prediction-ml
 */
export const projects = [
  {
    id: "01",
    tag: "Platform · Gisul",
    title: "Aaptor AI Assessment",
    description:
      "End-to-end AIML assessment stack on Aaptor — question generation & evaluation services, competency notebooks, RAG migration to a VM-hosted service, and unified Qwen + OpenAI chat flows across multiple engineering domains.",
    stack: ["FastAPI", "Next.js", "Redis", "Qwen", "OpenAI", "Docker", "aptor-shared"],
    highlights: [
      "AIML question generation + evaluation pipelines",
      "RAG moved to VM service; Qwen + OpenAI unified chat",
      "Competency notebooks + Dockerized aiml-service",
      "Global competency rules & shared question-gen modules",
    ],
    href: "https://github.com/Ujwal1410",
    hrefLabel: "GitHub",
  },
  {
    id: "02",
    tag: "Realtime · Gisul",
    title: "Aaptor Live Proctoring",
    description:
      "Production live proctoring on Aaptor — identity verification, face-mismatch detection, violation logging, admin live dashboards, and candidate camera/fullscreen gates. Evolved from Agora sessions into LiveKit-based room/token flows.",
    stack: ["React", "Next.js", "LiveKit", "Agora", "face-api.js", "MediaRecorder", "TypeScript"],
    highlights: [
      "Face-mismatch detection + identity verification UI",
      "Violation logs, proctor settings & live dashboards",
      "Capture-image / camera lock / fullscreen gates",
      "LiveKit token + room APIs for assessment sessions",
    ],
  },
  {
    id: "03",
    tag: "Infra · Gisul",
    title: "SeaweedFS Production Storage",
    description:
      "Clean Gisul production deploy for self-hosted SeaweedFS — Docker Compose (master/volume/filer/S3/admin), chunked multipart uploads beyond the old 500MB admin limit, nginx + GitHub Actions CI deploy to Linux VMs.",
    stack: ["SeaweedFS", "Docker", "nginx", "S3 API", "GitHub Actions", "Linux"],
    highlights: [
      "Chunked Admin UI uploads (32MB → 80MB chunks; 10GB+ files)",
      "Patched 500MB admin upload ceiling for production",
      "Presigned S3 URL + CORS fixes",
      "CI deploy workflow with secrets-gated VM rollout",
    ],
  },
  {
    id: "04",
    tag: "Voice",
    title: "Kannada Bank Voice Kiosk",
    description:
      "Voice-first banking kiosk assistant — Kannada-only screen flows, speech engines (including optional Sarvam AI STT/TTS/translation), form capture with date parsing, and kiosk UX for walk-up customers.",
    stack: ["Python", "FastAPI", "Sarvam AI", "Speech", "Kannada UX"],
    highlights: [
      "Merged publish PRs as Ujwal1410",
      "Kannada-only kiosk + VAD speech flow",
      "Optional Sarvam cloud STT / TTS / translation",
      "Form + date parsing fixes for bank workflows",
    ],
    href: "https://github.com/sarastralabs/bank_assistant",
    hrefLabel: "GitHub",
  },
  {
    id: "05",
    tag: "Product",
    title: "Finsight",
    description:
      "Full-stack AI expense intelligence — OCR/parsing for Indian bank statements (incl. Canara-style multi-line PDFs), merchant normalization, ML categorization, and email OTP signup.",
    stack: ["React", "Vite", "FastAPI", "MongoDB", "OCR", "scikit-learn"],
    highlights: [
      "Multi-bank statement detection + PDF row parsing",
      "Merchant / date / income accuracy fixes",
      "Email OTP verification for signup",
      "Deployed on Vercel + Render",
    ],
    href: "https://github.com/AkshithaKulal/finsight",
    hrefLabel: "GitHub",
  },
  {
    id: "06",
    tag: "ML",
    title: "GNN Disease Prediction",
    description:
      "Graph-based medical prediction with GraphSAGE, GCN, and GAT — symptom–disease graphs and an interactive inference UI.",
    stack: ["PyTorch Geometric", "Streamlit", "Flask", "Python", "scikit-learn"],
    highlights: ["GraphSAGE · GCN · GAT", "Real-time prediction UI"],
    href: "https://github.com/AkshithaKulal/disease-prediction-ml",
    hrefLabel: "GitHub",
  },
];

export const experience = [
  {
    period: "Nov 2025 — Present",
    company: "Gisul",
    location: "Bangalore",
    role: "Associate Software Engineer",
    current: true,
    points: [
      "Own Aaptor AIML assessment flows: question generation, evaluation, competency notebooks, and RAG/VM model serving (Qwen + OpenAI).",
      "Ship live proctoring features — face-mismatch, identity verification, violation logs, and LiveKit/Agora session tooling used in production assessments.",
      "Operate SeaweedFS production storage: Docker/nginx deploy, chunked 10GB+ uploads, S3/CORS fixes, and GitHub Actions rollout to Linux VMs.",
      "Support adjacent Gisul platforms (aiml-agent-service deploys, proctoring monitoring) and P1 incident fixes under tight SLAs.",
    ],
  },
];

export const education = [
  {
    school: "Canara Engineering College, Mangalore",
    degree: "Bachelor of Engineering",
    period: "Dec 2021 — Present",
    meta: "CGPA 8.68",
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
      "face-api.js",
    ],
  },
  {
    title: "Backend",
    items: [
      "FastAPI",
      "Python",
      "Node / API gateway",
      "Microservices",
      "Redis queues",
      "PostgreSQL / MongoDB",
    ],
  },
  {
    title: "AI & Data",
    items: [
      "RAG",
      "Qwen / vLLM",
      "OpenAI",
      "OCR",
      "Speech (Sarvam)",
      "scikit-learn",
    ],
  },
  {
    title: "Infra & Realtime",
    items: [
      "Docker",
      "nginx",
      "GitHub Actions",
      "SeaweedFS / S3",
      "LiveKit",
      "Linux VMs",
    ],
  },
];

export const achievements = [
  "Production owner for Aaptor AIML + live proctoring feature lanes at Gisul",
  "Built and deployed Gisul SeaweedFS production storage with 10GB+ chunked uploads",
  "Selected for exclusive Java Full-Stack training by 10Seconds",
  "Robo-Soccer workshop trainer for high school students",
];
