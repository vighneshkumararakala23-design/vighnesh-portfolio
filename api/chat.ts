import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

// Portfolio facts and persona instructions
const SYSTEM_INSTRUCTION = `You are "Vighnesh AI Assistant", a professional, friendly, concise, and helpful personal AI assistant embedded in Vighnesh Kumar Arakala's portfolio website.

Your mission:
Answer questions ONLY about Vighnesh, his technical skills, projects, career roadmap, academic background, and contact details.

Knowledge Base:
1. About Vighnesh:
   - Full Name: Vighnesh Kumar Arakala (short name: Vighnesh Kumar)
   - Title: B.Tech CSE (AI & ML) Student | Aspiring AI/ML Engineer | Software Developer
   - Institution: Marwadi University, Rajkot, Gujarat, India (2nd Year, July 2025 – May 2029)
   - Academic Standing: CGPA 8.8 / 10.0
   - Spoken Languages: English, Hindi, Telugu, Marathi
   - Passion: Artificial Intelligence, Machine Learning, software development, algorithmic problem solving, and building practical technology tools.
   - Actively seeking: Internships, hackathons, open-source collaborations, and project learning opportunities.

2. Technical Skills:
   - Programming Languages: Python (primary for AI/ML, data processing, backend logic), C++ (DSA, problem-solving, OOP, STL), C (foundations, memory, pointers)
   - AI & ML: Machine Learning (model training & evaluation), Artificial Intelligence (core architectures), Data Analysis (data wrangling & insights, NumPy, Pandas), Data Visualization
   - Web Development: HTML5, CSS3, JavaScript, Responsive Design, REST APIs, Git, GitHub
   - Database: SQL, DBMS (Relational schemas, queries, normalization)
   - Developer Tools: GitHub, VS Code, Google AI Studio

3. Currently Learning:
   - Data Structures & Algorithms (DSA): Arrays, searching, sorting, recursion, time complexity, daily practice
   - SQL & DBMS: Database normalization, schema design, relational queries
   - Web Development: HTML5, CSS3, JavaScript, building responsive & interactive web applications
   - Machine Learning & Artificial Intelligence fundamentals
   - Full-Stack Development & Data Analytics

4. Featured Projects:
   - AI Notes Generator: An AI-powered web application that converts complex topics and raw learning material into structured, easy-to-digest study notes. Technologies: AI, Python, JavaScript, Web Development, REST APIs. Highlights: Automatic concept extraction, markdown note editor, clean exportable study sheets. GitHub: https://github.com/vighnesh-arakala/ai-notes-generator | Demo: https://ai-notes-generator-demo.vercel.app
   - AI Student Hub: A student-focused platform providing useful AI-powered academic tools, study schedule assistance, and learning resources. Technologies: AI, JavaScript, HTML5, CSS3, Responsive UI. Highlights: Modular dashboard widgets, engineering concept clarifier, dark mode UI. GitHub: https://github.com/vighnesh-arakala/ai-student-hub | Demo: https://ai-student-hub-demo.vercel.app
   - Personal Developer Portfolio: Modern, responsive portfolio showcasing skills, projects, and career roadmap with a dark theme. Technologies: HTML5, CSS3, JavaScript, Tailwind CSS, React. GitHub: https://github.com/vighnesh-arakala/portfolio

5. Career Roadmap (12 Vertical Stages):
   - 01 — C: Started programming journey, core syntax, functions, pointers (Completed)
   - 02 — C++: Object-oriented programming, classes, STL, algorithmic problem solving (Completed)
   - 03 — Python: Primary language, scripting, problem solving, AI Notes Generator (Completed)
   - 04 — Data Structures & Algorithms: Arrays, sorting, searching, recursion (Currently Learning)
   - 05 — SQL & DBMS: Relational databases, SQL queries, schema design (Currently Learning)
   - 06 — Web Development: HTML5, CSS3, JavaScript, interactive web apps (Currently Learning)
   - 07 — Data Analytics: Statistics, data cleaning, visualization, NumPy, Pandas (Next)
   - 08 — Machine Learning: Supervised/unsupervised learning, model evaluation, Scikit-learn (Future)
   - 09 — Deep Learning: Neural networks, NLP, computer vision (Future)
   - 10 — Generative AI: Large language models, AI APIs, RAG, prompt engineering (Future)
   - 11 — AI Engineering: REST APIs, model deployment, cloud basics, MLOps (Future)
   - 12 — Industry Ready: Long-term career goal to become an industry-ready AI/ML and software engineering professional

6. Contact & Social Channels:
   - Institutional Email: vighneshkumar.arakala140195@marwadiuniversity.ac.in
   - Personal Email: vighneshkumararakala23@gmail.com
   - LinkedIn: https://www.linkedin.com/in/vighnesh-kumar-arakala-65235641a
   - GitHub: https://github.com/vighnesh-arakala
   - LeetCode: https://leetcode.com/u/vighnesh-arakala
   - Location: Rajkot, Gujarat, India (Marwadi University)

CRITICAL RULES:
- Only answer based on the facts above.
- NEVER invent achievements, companies, past job titles, certifications, education details, or skills that are not listed here.
- If asked about something unrelated to Vighnesh, his portfolio, skills, projects, or roadmap, respond politely:
  "I am Vighnesh AI Assistant, designed specifically to answer questions about Vighnesh Kumar, his technical skills, projects, career roadmap, and portfolio. Feel free to ask about any of these!"
- Keep answers concise, clear, and professional (typically 2-4 sentences or brief bullet points).`;

// Local portfolio fallback knowledge engine
function generateLocalFallback(prompt: string): string {
  const query = prompt.toLowerCase().trim();

  if (query.includes('who is') || query.includes('about vighnesh') || query.includes('tell me about yourself') || query.includes('introduce')) {
    return "Vighnesh Kumar is a 2nd-year B.Tech Computer Science Engineering student specializing in AI & Machine Learning at Marwadi University, Rajkot, Gujarat (CGPA: 8.8). He is an aspiring AI/ML Engineer and software developer passionate about building practical intelligent solutions, practicing daily algorithms, and developing real-world applications.";
  }

  if (query.includes('skill') || query.includes('language') || query.includes('tech stack') || query.includes('what can') || query.includes('technolog')) {
    return "Vighnesh's technical skillset includes:\n• **Programming Languages:** Python (primary language for AI/ML), C++ (DSA & problem solving), and C (foundations)\n• **AI & ML:** Machine Learning models, Artificial Intelligence concepts, Data Analysis (NumPy, Pandas), and Data Visualization\n• **Web Development:** HTML5, CSS3, JavaScript, REST APIs, and responsive design\n• **Databases & Tools:** SQL, DBMS, Git, GitHub, VS Code, and Google AI Studio.";
  }

  if (query.includes('project') || query.includes('build') || query.includes('portfolio') || query.includes('work')) {
    return "Vighnesh has built three featured projects:\n1. **AI Notes Generator** (Python, JS, AI, REST APIs): Converts raw learning material and transcripts into structured, interactive study notes.\n2. **AI Student Hub** (AI, JavaScript, HTML5/CSS3): A platform providing academic utilities, revision prompts, and study schedule tools.\n3. **Personal Developer Portfolio** (React, Tailwind CSS, JavaScript): A clean, modern showcase of his skills, projects, and 12-stage career roadmap.";
  }

  if (query.includes('ai notes generator')) {
    return "**AI Notes Generator** is an AI-powered web application built with Python, JavaScript, and REST APIs. It automatically extracts key concepts from complex lecture materials or text into clear, formatted markdown study summaries and revision notes. Source code: github.com/vighnesh-arakala/ai-notes-generator";
  }

  if (query.includes('student hub') || query.includes('ai student hub')) {
    return "**AI Student Hub** is a student-centric platform built with AI, JavaScript, HTML5, and CSS3. It offers quick revision tools, concept clarifiers tailored for engineering coursework, and modular study widgets in an intuitive dark-themed UI. Source code: github.com/vighnesh-arakala/ai-student-hub";
  }

  if (query.includes('roadmap') || query.includes('career') || query.includes('future') || query.includes('journey')) {
    return "Vighnesh's Career Roadmap follows a 12-stage vertical path:\n• **Completed:** 01 — C, 02 — C++, 03 — Python\n• **Currently Learning:** 04 — DSA, 05 — SQL & DBMS, 06 — Web Development\n• **Next Stage:** 07 — Data Analytics (Statistics, NumPy, Pandas)\n• **Future Milestones:** 08 — Machine Learning, 09 — Deep Learning, 10 — Generative AI, 11 — AI Engineering, and 12 — Industry Ready (2029 graduation).";
  }

  if (query.includes('learning') || query.includes('current focus') || query.includes('currently')) {
    return "Vighnesh is currently actively deepening:\n• **Data Structures & Algorithms (DSA):** Arrays, searching, sorting, recursion, and time complexity.\n• **SQL & DBMS:** Relational database schemas, normalization, and SQL queries.\n• **Web Development:** HTML5, CSS3, and modern JavaScript for responsive web applications.";
  }

  if (query.includes('github') || query.includes('code') || query.includes('repo')) {
    return "You can explore Vighnesh's code repositories and open-source experiments on GitHub at: **https://github.com/vighnesh-arakala**";
  }

  if (query.includes('linkedin') || query.includes('profile')) {
    return "You can connect with Vighnesh on LinkedIn at: **https://www.linkedin.com/in/vighnesh-kumar-arakala-65235641a**";
  }

  if (query.includes('contact') || query.includes('email') || query.includes('reach') || query.includes('hire') || query.includes('connect')) {
    return "You can contact Vighnesh directly via:\n• **Institutional Email:** vighneshkumar.arakala140195@marwadiuniversity.ac.in\n• **Personal Email:** vighneshkumararakala23@gmail.com\n• **LinkedIn:** linkedin.com/in/vighnesh-kumar-arakala-65235641a\n• **Location:** Rajkot, Gujarat, India (Marwadi University)";
  }

  if (query.includes('education') || query.includes('college') || query.includes('university') || query.includes('cgpa') || query.includes('degree')) {
    return "Vighnesh is pursuing his **B.Tech in Computer Science Engineering (AI & ML)** at **Marwadi University**, Rajkot, Gujarat. He is in his 2nd year (July 2025 – May 2029) with a current academic merit score of **8.8 CGPA**.";
  }

  return "I am Vighnesh AI Assistant, designed specifically to answer questions about Vighnesh Kumar, his technical skills, projects, career roadmap, and portfolio. Feel free to ask about his background, projects like the AI Notes Generator, skills in Python/C++, or how to contact him!";
}

/**
 * Production-ready Vercel Serverless Function Handler
 * Route: /api/chat
 * Method: POST
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Method Validation: Allow only POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      error: 'Method Not Allowed. Please send a POST request.',
    });
  }

  // 2. Request Body Validation
  const body = req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({
      error: 'Invalid request body. Expected JSON object with a "message" field.',
    });
  }

  const { message, history } = body;

  // Validate message
  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({
      error: 'Message must be a non-empty string.',
    });
  }

  // Prevent excessively large inputs (rate/abuse protection)
  const trimmedMessage = message.trim();
  if (trimmedMessage.length > 1000) {
    return res.status(400).json({
      error: 'Message is too long. Please limit your question to 1000 characters.',
    });
  }

  // Validate history array if provided
  const sanitizedHistory: Array<{ role: 'user' | 'model'; text: string }> = [];
  if (Array.isArray(history)) {
    // Only take the last 8 messages to conserve context and avoid bloat
    for (const item of history.slice(-8)) {
      if (
        item &&
        (item.role === 'user' || item.role === 'model') &&
        typeof item.text === 'string' &&
        item.text.trim()
      ) {
        sanitizedHistory.push({
          role: item.role,
          text: item.text.trim().slice(0, 1000),
        });
      }
    }
  }

  // 3. API Key Resolution (Server-Side Only)
  // Supports both AI_API_KEY (Vercel standard) and GEMINI_API_KEY
  const apiKey = process.env.AI_API_KEY || process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const contents: any[] = [];

      // Append sanitized conversation history
      for (const item of sanitizedHistory) {
        contents.push({
          role: item.role,
          parts: [{ text: item.text }],
        });
      }

      // Append current user prompt
      contents.push({
        role: 'user',
        parts: [{ text: trimmedMessage }],
      });

      // Timeout safety: 8s race to keep within Vercel serverless execution limits
      const timeoutPromise = new Promise<null>((resolve) => {
        setTimeout(() => resolve(null), 8000);
      });

      const geminiPromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.3,
          maxOutputTokens: 600,
        },
      });

      const response = await Promise.race([geminiPromise, timeoutPromise]);

      if (response && response.text) {
        return res.status(200).json({ reply: response.text });
      }

      // Timeout or empty output: return curated portfolio response
      const fallbackReply = generateLocalFallback(trimmedMessage);
      return res.status(200).json({ reply: fallbackReply });
    } catch (err: any) {
      // Safe logging without leaking secret keys or internal traces
      console.warn('AI provider request failed, serving verified portfolio knowledge:', err?.message || 'Unknown error');
      const fallbackReply = generateLocalFallback(trimmedMessage);
      return res.status(200).json({ reply: fallbackReply });
    }
  }

  // If no API key is configured in the environment yet, return verified portfolio response
  const reply = generateLocalFallback(trimmedMessage);
  return res.status(200).json({ reply });
}
