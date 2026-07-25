
export const personalInfo = {
  name: "Kartik Khandka",
  firstName: "Kartik",
  tagline: "Full Stack Web Developer",
  location: "Bengaluru, Karnataka",
  email: "khandkakartik2005@gmail.com",
  phone: "+91 9258311340",
  github: "https://github.com/KartikKhandka",
  linkedin: "https://www.linkedin.com/in/kartik-khandka/",
  resumeUrl: "/resume.pdf",
  summary:
    "Passionate Full Stack Developer and AI enthusiast building intelligent, scalable web applications with modern technologies. From AI-powered fintech platforms to enterprise-grade computer vision systems — I turn complex problems into elegant solutions. Currently exploring the intersection of AI, full stack engineering, and user experience.",
};

export const typingRoles = [
  "Full Stack Web Developer",
  "AI & ML Enthusiast",
  "Problem Solver",
  "Tech Innovator",
];

export const aboutStats = [
  { label: "CGPA", value: "7.5", iconKey: "GraduationCap" },
  { label: "Technologies", value: "15+", iconKey: "Code" },
  { label: "Internships", value: "2", iconKey: "Briefcase" },
  { label: "Certifications", value: "4", iconKey: "Award" },
];

export const languages = ["English", "Hindi"];

export const floatingIcons = [
  { name: "React", color: "#111111" },
  { name: "Node.js", color: "#111111" },
  { name: "Python", color: "#111111" },
  { name: "Next.js", color: "#111111" },
  { name: "Tailwind", color: "#111111" },
  { name: "MongoDB", color: "#111111" },
  { name: "Docker", color: "#111111" },
  { name: "Git", color: "#111111" },
];

export const skillCategories = [
  {
    category: "Frontend",
    iconKey: "Code",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 82 },
      { name: "React JS", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    category: "Backend",
    iconKey: "Server",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 83 },
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 88 },
      { name: "Authentication", level: 82 },
    ],
  },
  {
    category: "Database",
    iconKey: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 78 },
      { name: "Redis", level: 70 },
      { name: "Prisma", level: 75 },
    ],
  },
  {
    category: "Tools & AI",
    iconKey: "Wrench",
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "Computer Vision", level: 72 },
      { name: "Docker", level: 70 },
      { name: "Git & GitHub", level: 95 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Personal Projects & Open Source",
    type: "Independent",
    period: "2024 - Present",
    description:
      "Building and shipping AI-powered platforms including VisionIQ, FinScope, and LoanShield. Working across the full stack with Next.js, React, Node.js, Python, and various AI/ML technologies.",
    skills: ["Next.js", "React", "Node.js", "Python", "AI/ML", "TypeScript"],
    color: "#111111",
  },
  {
    id: 2,
    role: "AI & ML Enthusiast",
    company: "Self-Directed Learning",
    type: "Learning",
    period: "2025 - Present",
    description:
      "Deep diving into machine learning, computer vision, NLP, and RAG architectures. Building enterprise-grade AI systems with real-world applications in FinTech and visual intelligence.",
    skills: ["Computer Vision", "NLP", "RAG", "Vector Search", "LLMs"],
    color: "#111111",
  },
  {
    id: 3,
    role: "Data Engineer / Analyst (Capstone)",
    company: "Bluestock Fintech",
    type: "Internship",
    period: "2026",
    description:
      "Engineered a comprehensive data analytics platform for the Indian mutual fund industry. Built an automated ETL pipeline processing 10 datasets, designed a scalable SQLite Star Schema database, and developed an interactive multi-page Streamlit web app alongside a Power BI dashboard to deliver actionable financial insights.",
    skills: ["Python", "Pandas", "SQLite", "Streamlit", "Power BI", "Data Analytics", "ETL"],
    color: "#111111",
  },
  {
    id: 4,
    role: "Python Developer",
    company: "Financial Intelligence Platform",
    type: "Internship",
    period: "2026",
    description:
      "Architected an end-to-end financial intelligence and analytics platform for Nifty 100 stocks. Engineered an automated ETL pipeline processing complex financial datasets into a SQLite database. Developed a dynamic stock screener engine, implemented advanced peer group analytics (percentile rankings, composite quality scoring), and automated the generation of radar charts and multi-sheet Excel reports.",
    skills: ["Python", "Pandas", "SQLite", "ETL", "Data Analytics", "OpenPyXL", "Matplotlib"],
    color: "#111111",
  }


];

export const projects = [
  {
    id: 1,
    title: "VisionIQ",
    categories: ["AI/ML", "Fullstack"],
    description:
      "An enterprise-grade AI Visual Intelligence Platform using Computer Vision, OCR, RAG, Vector Search, and LLMs to understand home appliances, identify brands and models, and retrieve manuals.",
    tech: ["TypeScript", "Python", "Docker", "Redis", "Machine Learning", "OCR"],
    github: "https://github.com/KartikKhandka/VisionIQ",
    demo: "https://myvisioniq.vercel.app/",
    iconKey: "Cpu",
  },
  {
    id: 2,
    title: "FinScope — FinTech COO Agent",
    categories: ["AI/ML", "Fullstack"],
    description:
      "AI-powered FinTech executive intelligence platform for KPI monitoring, churn prediction, cash flow forecasting, fraud analysis, and strategic decision support.",
    tech: ["JavaScript", "AI", "FinTech", "Analytics", "Machine Learning"],
    github: "https://github.com/KartikKhandka/FinScope-Autonomous-FinTech-COO-Agent-",
    demo: "#",
    iconKey: "TrendingUp",
  },
  {
    id: 3,
    title: "LoanShield AI Platform",
    categories: ["AI/ML", "Fullstack"],
    description:
      "An intelligent loan risk assessment platform powered by AI and machine learning to evaluate creditworthiness and predict default probabilities.",
    tech: ["TypeScript", "AI", "Machine Learning", "FinTech"],
    github: "https://github.com/KartikKhandka/LoanShield-AI-Platform",
    demo: "https://loanshield-platform.vercel.app/",
    iconKey: "ShieldCheck",
  },
  {
    id: 4,
    title: "Bluestock Mutual Fund Analytics",
    categories: ["Data Science", "Fullstack"],
    description:
      "A comprehensive data analytics platform and automated ETL pipeline for the Indian mutual fund industry, processing large financial datasets to deliver actionable insights and data quality reports.",
    tech: ["Python", "Pandas", "Streamlit", "SQLite", "Power BI", "REST APIs", "Data Analytics", "ETL Pipelines"],
    github: "https://github.com/KartikKhandka/CapstoneProject",
    demo: "https://mutualfund-analysis.streamlit.app/",
    iconKey: "BarChart",
  }

];

export const projectCategories = ["All", "AI/ML", "Fullstack", "Frontend"];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering (AIML)",
    institution: "Jain (Deemed-to-be) University",
    period: "2023 - 2027",
    description: "Pursuing Bachelor's degree with a specialization in Artificial Intelligence and Machine Learning. Located in Bangalore, Karnataka.",
    grade: "CGPA: 7.5",
    iconKey: "GraduationCap",
  }
];

export const certificates = [
  {
    id: 1,
    title: "Introduction to Computers and operating systems and security",
    issuer: "Microsoft",
    year: "2024",
    description: "Foundational knowledge in operating systems, security principles, and core computer science concepts.",
    iconKey: "Lock",
  },
  {
    id: 2,
    title: "Probability & Statistics for Machine Learning & Data Science",
    issuer: "Deeplearning.ai",
    year: "2024",
    description: "Core mathematical foundations essential for understanding and building machine learning models.",
    iconKey: "Database",
  },
  {
    id: 3,
    title: "Prerequisites and Advanced Machine Learning for NLP",
    issuer: "Packt",
    year: "2024",
    description: "Advanced techniques for natural language processing, covering deep learning architectures for text.",
    iconKey: "Terminal",
  },
  {
    id: 4,
    title: "Foundations of Data Science and Machine Learning with Python",
    issuer: "Packt",
    year: "2024",
    description: "Comprehensive training in building and deploying machine learning models using Python and data science libraries.",
    iconKey: "Code",
  }
];
