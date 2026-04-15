/* =====================================================
   📋 DATA — เพิ่ม/แก้ไขความรู้ได้ที่นี่
   =====================================================

   โครงสร้าง:
   {
     id: "unique-id",
     category: "ชื่อหมวดหมู่",
     emoji: "🔤",          // อีโมจิประจำหมวด (ใช้ เหมือนกันทั้งหมวด)
     color: "#hex",        // สีประจำหมวด
     title: "ชื่อเรื่อง",
     desc: "สรุปเนื้อหา...",
     tags: ["tag1", "tag2"],
     badge: "new" | "hot" | "update" | "star" | null,
     link: "URL หรือ file path (ใส่ # ถ้ายังไม่มี)",
     date: "YYYY-MM-DD"
   }
   ===================================================== */

const KNOWLEDGE = [
  /* ─── 🌐 Web Development ─── */
  {
    id: "web-001",
    category: "Web Development",
    emoji: "🌐",
    color: "#3b82f6",
    title: "HTML & CSS พื้นฐาน",
    desc: "โครงสร้าง HTML5 Semantic elements, CSS Box Model, Flexbox, Grid Layout และ Responsive Design ด้วย Media Queries",
    tags: ["HTML", "CSS", "Responsive"],
    badge: "star",
    link: "#",
    date: "2026-04-15"
  },
  {
    id: "web-002",
    category: "Web Development",
    emoji: "🌐",
    color: "#3b82f6",
    title: "JavaScript Fundamentals",
    desc: "Variables, Functions, Arrays, Objects, ES6+, Promises, Async/Await, DOM Manipulation และ Event Handling",
    tags: ["JavaScript", "ES6", "DOM"],
    badge: "hot",
    link: "#",
    date: "2026-04-15"
  },

  /* ─── ⚛️ Frameworks ─── */
  {
    id: "fw-001",
    category: "Frameworks",
    emoji: "⚛️",
    color: "#06b6d4",
    title: "React.js เบื้องต้น",
    desc: "Component, Props, State, useState, useEffect, Context API, React Router และ การจัดการ State ด้วย Hooks",
    tags: ["React", "Hooks", "JSX"],
    badge: "new",
    link: "#",
    date: "2026-04-15"
  },

  /* ─── 🗄️ Database ─── */
  {
    id: "db-001",
    category: "Database",
    emoji: "🗄️",
    color: "#10b981",
    title: "Firebase Firestore",
    desc: "NoSQL Database จาก Google — Collection, Document, CRUD operations, Real-time listener, Security Rules",
    tags: ["Firebase", "NoSQL", "Cloud"],
    badge: null,
    link: "#",
    date: "2026-04-15"
  },
  {
    id: "db-002",
    category: "Database",
    emoji: "🗄️",
    color: "#10b981",
    title: "SQL พื้นฐาน",
    desc: "SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY, HAVING, Subquery, Index และการออกแบบ Database Schema",
    tags: ["SQL", "MySQL", "PostgreSQL"],
    badge: null,
    link: "#",
    date: "2026-04-15"
  },

  /* ─── 🛠️ Tools & DevOps ─── */
  {
    id: "tools-001",
    category: "Tools & DevOps",
    emoji: "🛠️",
    color: "#f59e0b",
    title: "Git & GitHub",
    desc: "Version Control ด้วย Git — init, add, commit, push, pull, branch, merge, rebase, pull request",
    tags: ["Git", "GitHub", "Version Control"],
    badge: "star",
    link: "#",
    date: "2026-04-15"
  },
  {
    id: "tools-002",
    category: "Tools & DevOps",
    emoji: "🛠️",
    color: "#f59e0b",
    title: "คู่มือ GitHub ฉบับสมบูรณ์",
    desc: "เรียนรู้ GitHub ตั้งแต่ Level 1 ถึง Level 3 ครอบคลุม Branch, Pull Request, Merge Conflict, GitHub Pages, Actions, GitHub Flow และ Cheat Sheet คำสั่งที่ใช้บ่อย",
    tags: ["GitHub", "Git", "Branching", "CI/CD", "GitHub Pages"],
    badge: "new",
    link: "github-guide.html",
    date: "2026-04-15"
  },
  {
    id: "tools-003",
    category: "Tools & DevOps",
    emoji: "🗂",
    color: "#f59e0b",
    title: "GitHub Repo Tracker",
    desc: "คลังรวบรวม Github Repository ที่มีประโยชน์ คัดสรรสำหรับงาน AI, เกมการศึกษา, Firebase และเครื่องมือทำระบบโรงเรียน",
    tags: ["GitHub", "Repos", "AI", "Tracker"],
    badge: "hot",
    link: "repo-tracker.html",
    date: "2026-04-15"
  },

  /* ─── 📱 Mobile ─── */
  {
    id: "mobile-001",
    category: "Mobile",
    emoji: "📱",
    color: "#ec4899",
    title: "Responsive Design สำหรับมือถือ",
    desc: "Mobile-first Design, Viewport, Media Queries, Touch events, Safe Area Insets และการทดสอบบนอุปกรณ์จริง",
    tags: ["Mobile", "CSS", "UX"],
    badge: "new",
    link: "#",
    date: "2026-04-15"
  },

  /* ─── 🤖 AI & Prompt Engineering ─── */
  {
    id: "ai-001",
    category: "AI & Prompt Engineering",
    emoji: "🤖",
    color: "#00d4ff",
    title: "ศิลปะการสั่งการ AI อย่างมีประสิทธิภาพ",
    desc: "เทคนิค Prompt Engineering ครบวงจร ตั้งแต่หลักการ RCTF, Chain-of-Thought, Few-Shot, Role Prompting, Negative Prompting จนถึงเครื่องมือ AI ยอดนิยม พร้อมตัวอย่างจริงสำหรับครู",
    tags: ["Prompt Engineering", "AI", "RCTF", "ChatGPT", "Claude"],
    badge: "hot",
    link: "ai-prompt-engineering.html",
    date: "2026-04-15"
  },
  {
    id: "ai-002",
    category: "AI & Prompt Engineering",
    emoji: "🤖",
    color: "#00d4ff",
    title: "12 ฟีเจอร์ซ่อนเร้นของ Claude Code",
    desc: "คู่มือฉบับสมบูรณ์ครอบคลุม 12 ฟีเจอร์ทรงพลัง: CLAUDE.md, Permissions, Plan Mode, Checkpoints, Skills, Hooks, MCP, Plugins, Context Window, Slash Commands, Compaction และ Subagents",
    tags: ["Claude Code", "AI", "Developer Tools", "Productivity"],
    badge: "new",
    link: "claude-code-features.html",
    date: "2026-04-15"
  },
];