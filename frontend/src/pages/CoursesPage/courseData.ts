export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  duration: string;
  weeks: number;
  price: number;
  technology: string[];
  level: string;
  category: string;
  accent: "python" | "web" | "kotlin";
}

export const courses: Course[] = [
  {
    slug: "fullstack-python",
    title: "Fullstack Development with Python",
    shortTitle: "Fullstack Python",
    description:
      "Learn to build complete web applications from the frontend to powerful Python backends.",
    duration: "24 weeks",
    weeks: 24,
    price: 250000,
    technology: ["Python", "Django", "React"],
    level: "Beginner → Advanced",
    category: "Fullstack Development",
    accent: "python",
  },
  {
    slug: "frontend-development",
    title: "Frontend Development",
    shortTitle: "Frontend Development",
    description:
      "Learn how to design and build modern, responsive and interactive web interfaces.",
    duration: "12 weeks",
    weeks: 12,
    price: 110000,
    technology: ["HTML", "CSS", "JavaScript", "React"],
    level: "Beginner → Intermediate",
    category: "Web Development",
    accent: "web",
  },
  {
    slug: "backend-python",
    title: "Backend Development with Python",
    shortTitle: "Backend with Python",
    description:
      "Build APIs, databases, authentication systems and powerful backend applications with Python.",
    duration: "12 weeks",
    weeks: 12,
    price: 160000,
    technology: ["Python", "Django", "REST API"],
    level: "Intermediate",
    category: "Backend Development",
    accent: "python",
  },
  {
    slug: "android-kotlin",
    title: "Fullstack Android App Development",
    shortTitle: "Android App Development",
    description:
      "Learn to build complete Android applications with Kotlin, from interface design to backend integration.",
    duration: "24 weeks",
    weeks: 24,
    price: 260000,
    technology: ["Kotlin", "Android", "APIs"],
    level: "Beginner → Advanced",
    category: "Mobile Development",
    accent: "kotlin",
  },
  {
    slug: "automation-web-scraping",
    title: "Automation & Web Scraping with Python",
    shortTitle: "Automation & Web Scraping",
    description:
      "Automate repetitive tasks, collect web data and build practical Python automation tools.",
    duration: "12 weeks",
    weeks: 12,
    price: 110000,
    technology: ["Python", "Automation", "Web Scraping"],
    level: "Beginner → Intermediate",
    category: "Python",
    accent: "python",
  },
];