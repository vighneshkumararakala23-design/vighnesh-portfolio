/**
 * Portfolio Data File for Vighnesh Kumar Arakala
 * 
 * Edit this file to update any content on your portfolio:
 * - Personal details & bio
 * - Social links & contacts
 * - Skills & learning path
 * - Projects & demo links
 * - Work experience & internships
 * - Certifications & credentials
 * - Education history
 */

import heroAiImg from '../assets/images/hero_developer_ai_1790423441531.jpg';
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

export interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl: string;
  description: string;
  skills: string[];
  category: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string; // e.g. "Internship", "Academic", "Freelance"
  description: string;
  keyContributions: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Workshop' | 'Technical Event' | 'Academic' | 'Certification';
  organization: string;
  date: string;
  description: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  scoreType: string; // "CGPA" or "Percentage"
  description: string;
  coursework?: string[];
  isCurrent?: boolean;
}

export const personalProfile = {
  name: "Vighnesh Kumar Arakala",
  shortName: "Vighnesh Kumar",
  title: "B.Tech CSE (AI & ML) Student | Aspiring AI/ML Engineer | Software Developer",
  heroHeading: "Building Intelligent Solutions with AI & Code.",
  heroSubheading: "I'm a B.Tech CSE (AI & ML) student passionate about Artificial Intelligence, Machine Learning, software development, and building practical technology solutions.",
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
    github: "https://github.com/vighnesh-arakala", // Placeholder: update with your GitHub profile URL
    leetcode: "https://leetcode.com/u/vighnesh-arakala", // Placeholder: update with your LeetCode profile URL
  },
  resumePath: "/resume/Vighnesh_Kumar_Arakala_ATS_Resume.pdf",
  resumeDownloadName: "Vighnesh_Kumar_Arakala_Resume.pdf",
  heroVisual: heroAiImg,
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
    githubUrl: "https://github.com/vighnesh-arakala/ai-notes-generator", // Update with your repository URL
    liveDemoUrl: "https://ai-notes-generator-demo.vercel.app", // Update with your live demo URL
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
    githubUrl: "https://github.com/vighnesh-arakala/ai-student-hub", // Update with your repository URL
    liveDemoUrl: "https://ai-student-hub-demo.vercel.app", // Update with your live demo URL
    highlights: [
      "Modular dashboard with customizable academic widgets",
      "Instant concept clarifier tailored for engineering subjects",
      "Clean dark mode interface optimized for focused studying"
    ]
  },
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    description: "A responsive personal portfolio website showcasing my skills, projects, certifications, and academic journey with a modern dark theme.",
    longDescription: "Built with modern frontend architecture, featuring smooth interactive cards, fast performance, zero-pill aesthetic discipline, and full mobile responsiveness for internship and recruiter outreach.",
    image: projectPortfolioImg,
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React"],
    category: "Web Development",
    featured: true,
    githubUrl: "https://github.com/vighnesh-arakala/portfolio", // Update with your repository URL
    liveDemoUrl: "#home",
    highlights: [
      "100% responsive across desktop, tablet, and mobile",
      "Modular data-driven architecture for rapid updates",
      "Direct resume download and preview integration"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-codealpha",
    role: "Software & Web Development Intern",
    company: "CodeAlpha",
    period: "2025 - Present", // Update with your exact internship dates
    location: "Remote",
    type: "Internship",
    description: "Worked on practical development tasks and gained hands-on experience while improving technical and professional skills.",
    keyContributions: [
      "Developed responsive frontend interfaces with modern web standards and clean layout structure.",
      "Collaborated on code reviews, bug fixes, and feature iterations under experienced mentor guidance.",
      "Strengthened practical programming, problem-solving, and version control discipline with Git."
    ],
    skills: ["Web Development", "Python", "JavaScript", "Git", "Problem Solving"]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Technology Job Simulation",
    category: "Technical Event",
    organization: "Industry Partner / Simulation Platform",
    date: "2025 - 2026",
    description: "Completed real-world technical simulation challenges focusing on development fundamentals, task prioritization, and structured problem resolution."
  },
  {
    id: "ach-2",
    title: "Marwadi University AI & ML Technical Workshops",
    category: "Workshop",
    organization: "Marwadi University",
    date: "2025 - 2026",
    description: "Participated in hands-on departmental workshops on Machine Learning foundations, Python data manipulation, and software engineering practices."
  },
  {
    id: "ach-3",
    title: "Algorithmic Problem Solving & Code Challenges",
    category: "Hackathon",
    organization: "Campus Coding Community",
    date: "2025 - 2026",
    description: "Active participant in student coding meetups, building core proficiency in Data Structures and Algorithms with Python and C++."
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-deloitte",
    title: "Deloitte — Technology Job Simulation",
    organization: "Deloitte",
    issueDate: "2025 - 2026",
    credentialId: "DELOITTE-TECH-SIM",
    verificationUrl: "https://www.linkedin.com/in/vighnesh-kumar-arakala-65235641a",
    description: "Real-world engineering job simulation analyzing practical technology workflows, development deliverables, and software tasks.",
    skills: ["Software Engineering", "Problem Solving", "Technology Workflows"],
    category: "Job Simulation"
  },
  {
    id: "cert-aws-academy",
    title: "AWS Academy",
    organization: "Amazon Web Services (AWS)",
    issueDate: "2025 - 2026",
    credentialId: "AWS-ACADEMY-CLOUD",
    verificationUrl: "https://aws.amazon.com/verification",
    description: "Fundamental cloud computing principles, compute infrastructure, virtualization, network security, and storage architecture.",
    skills: ["Cloud Architecture", "AWS", "Infrastructure", "Security"],
    category: "Cloud"
  },
  {
    id: "cert-google-cloud",
    title: "Google Cloud — Simplilearn SkillUp",
    organization: "Google Cloud / Simplilearn",
    issueDate: "2025 - 2026",
    credentialId: "GCP-SKILLUP-2026",
    verificationUrl: "https://www.linkedin.com/in/vighnesh-kumar-arakala-65235641a",
    description: "Core cloud concepts, Google Cloud Platform infrastructure components, and cloud-native application deployments.",
    skills: ["Google Cloud", "Cloud Computing", "Platform Architecture"],
    category: "Cloud"
  },
  {
    id: "cert-ai-spark",
    title: "AI Spark '26 — Marwadi University",
    organization: "Marwadi University",
    issueDate: "2026",
    credentialId: "MU-AISPARK-26",
    verificationUrl: "https://www.linkedin.com/in/vighnesh-kumar-arakala-65235641a",
    description: "Specialized departmental event and competitive technical track focused on practical AI models, algorithmic design, and machine learning.",
    skills: ["Machine Learning", "AI Models", "Python", "Data Science"],
    category: "AI & ML"
  },
  {
    id: "cert-tata-forage",
    title: "Tata — Forage Certificate",
    organization: "Tata Group / Forage",
    issueDate: "2025 - 2026",
    credentialId: "TATA-FORAGE-DATA",
    verificationUrl: "https://www.theforage.com/simulations",
    description: "Virtual experience program demonstrating data analytics, business communication, and technical problem framing.",
    skills: ["Data Analytics", "Visualization", "Business Insights"],
    category: "Data Analytics"
  },
  {
    id: "cert-gfg",
    title: "GeeksforGeeks — Marwadi University",
    organization: "GeeksforGeeks Student Chapter",
    issueDate: "2025 - 2026",
    credentialId: "GFG-MU-TECH",
    verificationUrl: "https://www.linkedin.com/in/vighnesh-kumar-arakala-65235641a",
    description: "Algorithmic problem solving, data structures, competitive programming sessions in C++ and Python.",
    skills: ["Data Structures", "Algorithms", "C++", "Python"],
    category: "Programming"
  },
  {
    id: "cert-msft",
    title: "Microsoft Student Ambassadors",
    organization: "Microsoft",
    issueDate: "2025 - 2026",
    credentialId: "MSFT-AMBASSADOR",
    verificationUrl: "https://studentambassadors.windows.com",
    description: "Technical learning community initiatives, developer tooling, and modern software development practices.",
    skills: ["Developer Tools", "Community", "Software Engineering"],
    category: "Community"
  },
  {
    id: "cert-croma",
    title: "Croma Campus — Certificate of Participation",
    organization: "Croma Campus",
    issueDate: "2025",
    credentialId: "CROMA-PARTICIPATION",
    verificationUrl: "https://www.linkedin.com/in/vighnesh-kumar-arakala-65235641a",
    description: "Technical training and interactive workshop participation in modern computing technologies and development methodologies.",
    skills: ["Technical Training", "Computing Basics"],
    category: "Workshop"
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-marwadi",
    institution: "Marwadi University",
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    period: "July 2025 – May 2029",
    location: "Rajkot, Gujarat, India",
    score: "8.8",
    scoreType: "CGPA",
    description: "Specialized undergraduate engineering program focused on artificial intelligence algorithms, machine learning models, software design, and computer systems.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++)",
      "Python for Data Science",
      "Database Management Systems",
      "Linear Algebra & Discrete Math"
    ],
    isCurrent: true
  },
  {
    id: "edu-sr-college",
    institution: "SR College",
    degree: "Intermediate / Higher Secondary (MPC - Math, Physics, Chemistry)",
    period: "June 2023 – March 2025",
    location: "India",
    score: "Completed",
    scoreType: "Pre-University",
    description: "Rigorous focus on advanced mathematics, calculus, mechanics, and physical sciences providing strong analytical and problem-solving foundations."
  },
  {
    id: "edu-samithi-school",
    institution: "Samithi English High School",
    degree: "Secondary School Certificate (Class X)",
    period: "June 2011 – April 2023",
    location: "India",
    score: "Completed",
    scoreType: "School Board",
    description: "Comprehensive foundational education with honors in science, mathematics, and extracurricular computational problem-solving."
  }
];

export const devProfileStats = {
  focusAreas: [
    { title: "Core Languages", detail: "Python & C++", desc: "Algorithmic foundation and software engineering" },
    { title: "Academic Standing", detail: "8.8 CGPA", desc: "Marwadi University CSE (AI & ML)" },
    { title: "Target Graduation", detail: "Class of 2029", desc: "Actively seeking internships and hackathons" },
    { title: "Core Specialization", detail: "AI & Machine Learning", desc: "Practical models, automation and data analytics" },
  ],
  githubDetails: {
    username: "vighnesh-arakala",
    profileUrl: "https://github.com/vighnesh-arakala",
    primaryLanguages: ["Python", "C++", "JavaScript", "HTML/CSS"],
    statusText: "Building practical projects & practicing daily algorithms"
  }
};

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

export const skillConnectionTracks = [
  {
    title: "Software & Core Engineering Pipeline",
    path: ["C/C++", "Programming Fundamentals", "Python", "DSA", "Software Development", "Machine Learning", "AI Engineering"]
  },
  {
    title: "Data Science & Intelligent Systems Pipeline",
    path: ["Python", "NumPy + Pandas", "Data Analysis", "Machine Learning", "Deep Learning", "Generative AI"]
  }
];

export type MilestoneStatus = 'completed' | 'current' | 'upcoming' | 'future_goal';

export interface RoadmapMilestone {
  year: number;
  stage: string;
  status: MilestoneStatus;
  statusLabel: string;
  title: string;
  period: string;
  summary: string;
  details: string[];
  skills: string[];
  projectsOrOutputs: string[];
}

export const careerRoadmap: RoadmapMilestone[] = [
  {
    year: 2025,
    stage: "Foundation",
    status: "completed",
    statusLabel: "Completed",
    title: "Started My CSE Journey",
    period: "Year 1 (2025)",
    summary: "Built fundamental core computer science concepts and commenced formal engineering education in AI & ML.",
    details: [
      "Started B.Tech CSE (AI & ML) at Marwadi University",
      "Built foundations in programming and computer science principles",
      "Started learning Python and C++ fundamentals",
      "Achieved a strong academic standing with 8.8 CGPA"
    ],
    skills: ["Python Basics", "C++ Foundations", "Computer Science Principles", "Discrete Math"],
    projectsOrOutputs: ["Foundational algorithmic scripts", "Academic coursework labs"]
  },
  {
    year: 2026,
    stage: "Skill Building",
    status: "current",
    statusLabel: "CURRENT",
    title: "Building Strong Technical Skills",
    period: "Year 2 (2026) — Active Focus",
    summary: "Deepening algorithmic problem solving, core computer science subjects, machine learning exploration, and full-stack prototyping.",
    details: [
      "Strengthening Python and C++ with algorithmic discipline",
      "Learning Data Structures & Algorithms systematically",
      "Studying DBMS, relational SQL, and core CS subjects",
      "Exploring applied AI and Machine Learning fundamentals",
      "Building practical projects such as AI Notes Generator and AI Student Hub",
      "Participating in technical learning opportunities and campus events",
      "Completing industry-oriented certifications and job simulations (Deloitte, AWS, Tata)"
    ],
    skills: ["DSA (C++ & Python)", "Machine Learning Core", "SQL & DBMS", "Web Development", "Git & GitHub"],
    projectsOrOutputs: ["AI Notes Generator", "AI Student Hub", "Personal Developer Portfolio"]
  },
  {
    year: 2027,
    stage: "AI/ML Development",
    status: "upcoming",
    statusLabel: "Upcoming",
    title: "Deep Dive into AI & Machine Learning",
    period: "Year 3 (2027) — Planned",
    summary: "Advancing into deep learning architectures, generative AI concepts, model evaluation pipelines, and competitive hackathons.",
    details: [
      "Machine Learning fundamentals and statistical learning",
      "Deep Learning and neural network architectures",
      "Data Science workflows and feature engineering",
      "Generative AI paradigms and prompt engineering architectures",
      "Model development, hyperparameter tuning, and evaluation metrics",
      "Build more advanced, end-to-end AI/ML applied projects",
      "Participate in hackathons and technical competitions",
      "Seek relevant summer internships in AI/ML and software engineering"
    ],
    skills: ["Deep Learning", "PyTorch / TensorFlow", "Generative AI", "Data Pipelines", "Model Evaluation"],
    projectsOrOutputs: ["End-to-end ML prediction systems", "Competitive hackathon prototypes"]
  },
  {
    year: 2028,
    stage: "Industry Experience",
    status: "upcoming",
    statusLabel: "Upcoming",
    title: "Internship & Real-World Experience",
    period: "Year 4 (2028) — Planned",
    summary: "Transitioning classroom knowledge into industry production systems, collaborative codebases, and rigorous interview mastery.",
    details: [
      "Secure an AI/ML or Software Engineering industry internship",
      "Work on real-world development projects with production workflows",
      "Improve advanced DSA and competitive problem-solving",
      "Contribute to active GitHub and open-source projects",
      "Build production-quality, maintainable software applications",
      "Strengthen technical interview preparation and system design basics"
    ],
    skills: ["Production Software Engineering", "Advanced DSA", "System Design Basics", "CI/CD & Open Source"],
    projectsOrOutputs: ["Production-grade full-stack & AI applications", "Open-source contributions"]
  },
  {
    year: 2029,
    stage: "Graduation & Career",
    status: "future_goal",
    statusLabel: "Future Goal",
    title: "Ready for the Industry",
    period: "Graduation Year (2029)",
    summary: "Graduating with comprehensive engineering expertise, ready to launch a high-impact career as an AI/ML or Software Engineer.",
    details: [
      "Complete B.Tech in Computer Science Engineering (AI & ML)",
      "Graduate in 2029 with verified academic and project excellence",
      "Apply for AI/ML Engineer and Software Engineer roles across top tech teams",
      "Continue building real-world AI solutions that solve practical problems",
      "Begin professional software/AI engineering career"
    ],
    skills: ["Industry-Ready AI/ML Engineering", "High-Scale Software Development", "Domain Problem Solving"],
    projectsOrOutputs: ["B.Tech Capstone Engineering Thesis", "Production AI deployments"]
  }
];

export interface CurrentFocusItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
}

export const currentFocusItems: CurrentFocusItem[] = [
  {
    id: "focus-python",
    name: "Python",
    category: "Language",
    tagline: "AI/ML & Prototyping",
    description: "My primary language for machine learning algorithms, data processing, statistical modeling, and rapid backend application prototypes."
  },
  {
    id: "focus-cpp",
    name: "C++",
    category: "Language",
    tagline: "DSA & Speed",
    description: "My core tool for Data Structures & Algorithms, high-performance problem solving, memory management, and computational efficiency."
  },
  {
    id: "focus-dsa",
    name: "DSA",
    category: "Fundamentals",
    tagline: "Algorithmic Rigor",
    description: "Mastering arrays, linked lists, trees, graphs, dynamic programming, and complexity analysis to build scalable software."
  },
  {
    id: "focus-dbms",
    name: "DBMS",
    category: "Core CS",
    tagline: "Data Persistence",
    description: "Studying relational database theory, schema normalization, indexing, transactions (ACID), and writing optimized SQL queries."
  },
  {
    id: "focus-aiml",
    name: "AI/ML",
    category: "Specialization",
    tagline: "Intelligent Systems",
    description: "Exploring core algorithms from linear regression to decision trees, neural network principles, and quantitative model evaluation."
  },
  {
    id: "focus-projects",
    name: "Projects",
    category: "Application",
    tagline: "Applied Engineering",
    description: "Translating theoretical concepts into tangible tools like the AI Notes Generator and AI Student Hub that solve real user needs."
  },
  {
    id: "focus-github",
    name: "GitHub",
    category: "Tooling",
    tagline: "Version Control",
    description: "Practicing Git branch workflows, atomic commits, descriptive pull requests, and maintaining clean open repositories."
  },
  {
    id: "focus-certs",
    name: "Certifications",
    category: "Validation",
    tagline: "Industry Proof",
    description: "Validating engineering skills through industry-modeled simulations (Deloitte, Tata) and cloud foundations (AWS Academy, GCP)."
  }
];

export const futureCareerGoal = {
  heading: "My 2029 Goal",
  statement: "Become an industry-ready AI/ML and software engineering professional by combining strong computer science fundamentals, practical projects, problem-solving skills, and real-world experience."
};

