export type CourseCategory =
	| "Web"
	| "Python"
	| "Mobile"
	| "Automation";

export type CourseLevel =
	| "Beginner"
	| "Intermediate"
	| "Advanced"
	| "Beginner → Advanced"
	| "Beginner → Intermediate";

export type CourseIllustration =
	| "fullstack-python"
	| "frontend"
	| "backend-python"
	| "android"
	| "automation";

export interface Course {
	slug: string;
	title: string;
	shortTitle: string;
	description: string;

	duration: string;
	weeks: number;
	price: number;

	category: CourseCategory;
	level: CourseLevel;

	technologies: string[];
	illustration: CourseIllustration;
}

export const courses: Course[] = [
	{
		slug: "fullstack-python",
		title: "Fullstack Development with Python",
		shortTitle: "Fullstack Python",
		description:
			"Learn to build complete web applications from beautiful interfaces to powerful Python backends.",
		duration: "24 weeks",
		weeks: 24,
		price: 250000,
		category: "Web",
		level: "Beginner → Advanced",
		technologies: ["Python", "Django", "React"],
		illustration: "fullstack-python",
	},

	{
		slug: "frontend-development",
		title: "Frontend Development",
		shortTitle: "Frontend Development",
		description:
			"Learn how to design and build modern, responsive and interactive web experiences.",
		duration: "12 weeks",
		weeks: 12,
		price: 110000,
		category: "Web",
		level: "Beginner → Intermediate",
		technologies: ["HTML", "CSS", "JavaScript", "React"],
		illustration: "frontend",
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
		category: "Python",
		level: "Intermediate",
		technologies: ["Python", "Django", "REST API"],
		illustration: "backend-python",
	},

	{
		slug: "android-kotlin",
		title: "Fullstack Android App Development",
		shortTitle: "Android Development",
		description:
			"Build complete Android applications with Kotlin, from beautiful interfaces to backend integration.",
		duration: "24 weeks",
		weeks: 24,
		price: 260000,
		category: "Mobile",
		level: "Beginner → Advanced",
		technologies: ["Kotlin", "Android", "APIs"],
		illustration: "android",
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
		category: "Automation",
		level: "Beginner → Intermediate",
		technologies: ["Python", "Automation", "Web Scraping"],
		illustration: "automation",
	},
];