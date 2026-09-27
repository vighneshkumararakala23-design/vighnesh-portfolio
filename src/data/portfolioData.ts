/**
 * Portfolio Data File for Vighnesh Kumar Arakala
 * 
 * Edit this file to update any content on your portfolio:
 * - Personal details & bio
 * - Social links & contacts
 * - Skills & learning path
 * - Projects & demo links
 * - Career roadmap
 */

import projectAiNotesImg from '../assets/images/project_ai_notes_1790423457872.jpg';
import projectStudentHubImg from '../assets/images/project_student_hub_1790423474918.jpg';
import projectPortfolioImg from '../assets/images/project_dev_portfolio_1790423488712.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: 'AI & ML' | 'Web Development' | 'Software Tools';
  featured: boolean;
  githubUrl: string;
  liveDemoUrl: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient", "Familiar", "Active"
    iconName?: string;
  }[];
}

export const personalProfile = {
  name: "Vighnesh Kumar Arakala",
  shortName: "Vighnesh Kumar",
  title: "B.Tech CSE (AI & ML) Student | Aspiring AI/ML Engineer | Software Developer",
  aboutBio: "I'm a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Marwadi University, Rajkot. I enjoy learning new technologies, solving programming problems, and turning ideas into practical projects. My current focus is strengthening my programming, data structures, AI/ML, and software development skills while continuously building real-world projects. I am actively seeking opportunities to learn, collaborate, and grow through internships, hackathons, and real-world projects.",
  location: "Rajkot, Gujarat, India",
  university: "Marwadi University",
  degree: "B.Tech in Computer Science Engineering (AI & ML)",
  expectedGraduation: "2029",
  graduationPeriod: "July 2025 - May 2029",
  currentYear: "2nd Year",
  cgpa: "8.8",
  languages: ["English", "Hindi", "Telugu", "Marathi"],
  primaryLanguages: ["Python", "C++"],
  careerInterests: [
    "Artificial Intelligence & Machine Learning",
    "Software Engineering",
    "Data Analytics",
    "Machine Learning",
    "Web Development"
  ],
  currentlyLearning: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Full-Stack Development",
    "Data Analytics"
  ],
  contacts: {
    universityEmail: "vighneshkumar.arakala140195@marwadiuniversity.ac.in",
    personalEmail: "vighneshkumararakala23@gmail.com",
    linkedin: "https://www.linkedin.com/in/vighnesh-kumar-arakala-65235641a",
    github: "https://github.com/vighnesh-arakala",
    leetcode: "https://leetcode.com/u/vighnesh-arakala",
  }
};

export const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    description: "Core languages for algorithmic problem solving and logic",
    skills: [
      { name: "Python", level: "Primary Language" },
      { name: "C++", level: "DSA & Problem Solving" },
      { name: "C", level: "Foundational Programming" },
    ]
  },
  {
    category: "AI & ML",
    description: "Intelligent systems, data modeling and predictive analytics",
    skills: [
      { name: "Machine Learning", level: "Model Training & Evaluation" },
      { name: "Artificial Intelligence", level: "Core Concepts & Architectures" },
      { name: "Data Analysis", level: "Data Wrangling & Insights" },
      { name: "Data Visualization", level: "Charts & Statistical Plots" },
    ]
  },
  {
    category: "Development",
    description: "Modern tools and languages for web applications and APIs",
    skills: [
      { name: "HTML5", level: "Semantic Markup" },
      { name: "CSS3", level: "Responsive Styling" },
      { name: "JavaScript", level: "Client-side Logic" },
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Collaboration & Repos" },
      { name: "REST APIs", level: "Client-Server Architecture" },
    ]
  },
  {
    category: "Database",
    description: "Data persistence, schema design and relational queries",
    skills: [
      { name: "SQL", level: "Relational Queries" },
      { name: "DBMS", level: "Database Management Systems" },
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Developer workflows and modern development environments",
    skills: [
      { name: "GitHub", level: "Repository Management" },
      { name: "VS Code", level: "Primary Development IDE" },
      { name: "Google AI Studio", level: "Prompt Engineering & Prototyping" },
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "ai-notes-generator",
    title: "AI Notes Generator",
    description: "An AI-powered web application that converts complex topics and raw learning material into structured, easy-to-digest study notes.",
    longDescription: "Developed to help students synthesize large lecture transcripts, textbook chapters, and technical articles into clear summaries, key concept breakdowns, and flashcard-ready bullet points with interactive markdown rendering.",
    image: projectAiNotesImg,
    technologies: ["AI", "Python", "JavaScript", "Web Development", "REST APIs"],
    category: "AI & ML",
    featured: true,
    githubUrl: "https://github.com/vighnesh-arakala/ai-notes-generator",
    liveDemoUrl: "https://ai-notes-generator-demo.vercel.app",
    highlights: [
      "Extracts key concepts automatically with structured formatting",
      "Interactive note editor with instant markdown preview",
      "Export to clean formatted study sheets"
    ]
  },
  {
    id: "ai-student-hub",
    title: "AI Student Hub",
    description: "A student-focused platform designed to provide useful AI-powered academic tools, study schedule assistance, and learning resources.",
    longDescription: "A centralized portal that connects students with purpose-built academic utilities: quick revision bots, study schedule helpers, topic explainer prompts, and interactive formula references.",
    image: projectStudentHubImg,
    technologies: ["AI", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
    category: "AI & ML",
    featured: true,
    githubUrl: "https://github.com/vighnesh-arakala/ai-student-hub",
    liveDemoUrl: "https://ai-student-hub-demo.vercel.app",
    highlights: [
      "Modular dashboard with customizable academic widgets",
      "Instant concept clarifier tailored for engineering subjects",
      "Clean dark mode interface optimized for focused studying"
    ]
  },
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    description: "A responsive personal portfolio website showcasing my skills, projects, and career roadmap with a modern dark theme.",
    longDescription: "Built with modern frontend architecture, featuring smooth interactive cards, fast performance, clean aesthetic discipline, and full mobile responsiveness for internship and recruiter outreach.",
    image: projectPortfolioImg,
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React"],
    category: "Web Development",
    featured: true,
    githubUrl: "https://github.com/vighnesh-arakala/portfolio",
    liveDemoUrl: "#about",
    highlights: [
      "100% responsive across desktop, tablet, and mobile",
      "Modular data-driven architecture for rapid updates",
      "Clean interactive career roadmap and project showcase"
    ]
  }
];

export type SkillStatus = 'completed' | 'current' | 'next' | 'future' | 'long-term';

export interface SkillMilestone {
  id: string | number;
  stepNumber: string;
  skillName: string;
  category?: string;
  status: SkillStatus;
  statusLabel: string;
  shortSummary: string;
  description: string;
  skills: string[];
  nextSkill: string;
  relatedProject?: string;
}

export const initialSkillRoadmap: SkillMilestone[] = [
  {
    id: 1,
    stepNumber: "01",
    skillName: "C",
    category: "Foundations",
    status: "completed",
    statusLabel: "✓ Completed",
    shortSummary: "Started my programming journey\nLearned fundamental programming concepts",
    description: "Started my programming journey. Learned basic programming concepts and developed my foundation in coding.",
    skills: ["C Fundamentals", "Memory & Pointers", "Control Structures", "Functions", "Basic Algorithms"],
    nextSkill: "02 — C++",
    relatedProject: "Foundational Programming Practice"
  },
  {
    id: 2,
    stepNumber: "02",
    skillName: "C++",
    category: "Programming & OOP",
    status: "completed",
    statusLabel: "✓ Completed",
    shortSummary: "Strengthened my programming foundation\nLearned object-oriented programming",
    description: "Strengthened my programming skills with C++. Learned core programming concepts and object-oriented programming.",
    skills: ["C++ Basics", "Object-Oriented Programming (OOP)", "Classes & Objects", "Standard Template Library (STL)"],
    nextSkill: "03 — Python",
    relatedProject: "Algorithmic Problem Solving in C++"
  },
  {
    id: 3,
    stepNumber: "03",
    skillName: "Python",
    category: "Core Language",
    status: "completed",
    statusLabel: "✓ Completed",
    shortSummary: "Learned Python programming\nDeveloped problem-solving skills",
    description: "Learned Python as one of my primary programming languages. Developed programming and problem-solving skills.",
    skills: ["Python Fundamentals", "Data Structures", "Modules & Scripting", "Problem Solving", "File I/O"],
    nextSkill: "04 — Data Structures & Algorithms",
    relatedProject: "AI Notes Generator"
  },
  {
    id: 4,
    stepNumber: "04",
    skillName: "Data Structures & Algorithms",
    category: "Computer Science",
    status: "current",
    statusLabel: "◉ Currently Learning",
    shortSummary: "Currently learning DSA\nImproving algorithmic problem-solving",
    description: "Learning data structures and algorithms. Working on arrays, searching, sorting, and algorithmic problem solving.",
    skills: ["Arrays & Strings", "Searching & Sorting", "Recursion", "Time Complexity", "Daily Problem Solving"],
    nextSkill: "05 — SQL & DBMS",
    relatedProject: "LeetCode & GFG Practice"
  },
  {
    id: 5,
    stepNumber: "05",
    skillName: "SQL & DBMS",
    category: "Data Management",
    status: "current",
    statusLabel: "◉ Currently Learning",
    shortSummary: "Learning databases and SQL\nUnderstanding database concepts",
    description: "Learning database concepts and SQL. Understanding how data is stored, organized, and managed.",
    skills: ["Relational Databases", "SQL Queries", "Schema Design", "Joins & Normalization", "DBMS Fundamentals"],
    nextSkill: "06 — Web Development",
    relatedProject: "Database Management Coursework"
  },
  {
    id: 6,
    stepNumber: "06",
    skillName: "Web Development",
    category: "Frontend Development",
    status: "current",
    statusLabel: "◉ Currently Learning",
    shortSummary: "Learning HTML, CSS and JavaScript\nBuilding interactive websites",
    description: "Learning HTML, CSS, and JavaScript. Building responsive and interactive web applications.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Interactive Web UI"],
    nextSkill: "07 — Data Analytics",
    relatedProject: "AI Student Hub & Portfolio"
  },
  {
    id: 7,
    stepNumber: "07",
    skillName: "Data Analytics",
    category: "Data Science",
    status: "next",
    statusLabel: "→ Next",
    shortSummary: "Next learning goal\nLearning data analysis and visualization",
    description: "Planning to strengthen my data analytics skills. Focus areas include statistics, data analysis, and data visualization.",
    skills: ["Statistics", "Data Cleaning", "Data Visualization", "NumPy", "Pandas"],
    nextSkill: "08 — Machine Learning",
    relatedProject: "Dataset Exploratory Analytics"
  },
  {
    id: 8,
    stepNumber: "08",
    skillName: "Machine Learning",
    category: "Artificial Intelligence",
    status: "future",
    statusLabel: "○ Future",
    shortSummary: "Future learning goal\nBuilding machine learning knowledge",
    description: "Planning to build strong machine learning fundamentals. Focus areas include supervised learning, unsupervised learning, model evaluation, and practical ML projects.",
    skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering", "Scikit-learn"],
    nextSkill: "09 — Deep Learning",
    relatedProject: "Predictive ML Modeling"
  },
  {
    id: 9,
    stepNumber: "09",
    skillName: "Deep Learning",
    category: "Artificial Intelligence",
    status: "future",
    statusLabel: "○ Future",
    shortSummary: "Future learning goal\nExploring neural networks and advanced AI",
    description: "Planning to explore neural networks and deep learning. Focus areas include NLP and computer vision.",
    skills: ["Neural Networks", "Deep Learning Foundations", "NLP Concepts", "Computer Vision Basics"],
    nextSkill: "10 — Generative AI",
    relatedProject: "Deep Learning Experiments"
  },
  {
    id: 10,
    stepNumber: "10",
    skillName: "Generative AI",
    category: "Applied AI",
    status: "future",
    statusLabel: "○ Future",
    shortSummary: "Future learning goal\nBuilding AI-powered applications",
    description: "Planning to learn modern generative AI technologies. Focus areas include LLMs, AI APIs, RAG, and AI-powered applications.",
    skills: ["Large Language Models", "AI APIs", "Prompt Engineering", "RAG Concepts", "AI Integrations"],
    nextSkill: "11 — AI Engineering",
    relatedProject: "AI Notes Generator & Future AI Student Hub"
  },
  {
    id: 11,
    stepNumber: "11",
    skillName: "AI Engineering",
    category: "Production Engineering",
    status: "future",
    statusLabel: "○ Future",
    shortSummary: "Future learning goal\nLearning deployment and AI application development",
    description: "Planning to learn how to build and deploy practical AI applications. Focus areas include APIs, model deployment, cloud, and MLOps fundamentals.",
    skills: ["REST APIs", "Model Deployment", "Cloud Basics", "MLOps Fundamentals", "Production Workflows"],
    nextSkill: "12 — Industry Ready",
    relatedProject: "End-to-End AI Application Deployment"
  },
  {
    id: 12,
    stepNumber: "12",
    skillName: "Industry Ready",
    category: "Career Milestone",
    status: "long-term",
    statusLabel: "◇ Long-Term Goal",
    shortSummary: "Long-term career goal\nBecome an AI/ML and software engineering professional",
    description: "Build strong computer science fundamentals. Develop real-world projects. Gain internship and industry experience. Become an industry-ready AI/ML and software engineering professional.",
    skills: ["Core CS Mastery", "Production Quality Code", "Problem Solving", "Real-World Experience"],
    nextSkill: "Continuous Lifelong Growth",
    relatedProject: "Professional Software / AI Engineering Career"
  }
];
