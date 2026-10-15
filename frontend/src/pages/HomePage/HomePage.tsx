import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import SEO from "../../components/common/SEO";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import LearnBuildSection from "./components/LearnBuildSection";
import LearningSection from "./components/LearningSection";
import ProductsSection from "./components/ProductsSection";
import WhyByteNolSection from "./components/WhyByteNolSection";
import Container from "../../components/common/Container";
import Button from "../../components/ui/Button";
import { Book, Building2Icon, Code, Star } from "lucide-react";
import CodeWindow from "./components/CodeWindow";

type IconName = "arrow" | "book" | "briefcase" | "check" | "chevron" | "clock" | "code" | "download" | "facebook" | "globe" | "instagram" | "layers" | "linkedin" | "mail" | "map" | "menu" | "play" | "search" | "shield" | "spark" | "star" | "twitter" | "users" | "x";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
	const paths: Record<IconName, ReactNode> = {
		arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
		book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
		briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
		check: <path d="m5 12 4 4L19 6" />, chevron: <path d="m9 18 6-6-6-6" />,
		clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
		code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
		download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4" /><path d="M5 20h14" /></>,
		facebook: <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z" />,
		globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
		instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
		layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
		linkedin: <><path d="M6 9v12M6 5v.01M10 21V9h4v2c1-2 6-3 6 3v7M3 9h6" /></>,
		mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
		map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
		menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>, play: <path d="m8 5 11 7-11 7V5Z" />,
		search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
		shield: <><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
		spark: <><path d="m12 3 1.4 4.1L17.5 8l-4.1 1.4L12 13.5l-1.4-4.1L6.5 8l4.1-.9L12 3Z" /><path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" /></>,
		star: <path d="m12 3 2.7 5.5 6 .9-4.4 4.2 1.1 6-5.4-2.8-5.4 2.8 1.1-6-4.4-4.2 6-.9L12 3Z" />,
		twitter: <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.7-2.2c-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 9c0 .3 0 .6.1.9A11.3 11.3 0 0 1 3.8 5.7a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.6 3.3 4-.4.2-1.1.2-1.8.1.5 1.7 2 2.9 3.8 2.9A8.1 8.1 0 0 1 3 19.1 11.4 11.4 0 0 0 20.5 9.5V9c.8-.6 1.4-1.3 2-2.1l-.5-1Z" />,
		users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
		x: <><path d="m6 6 12 12M18 6 6 18" /></>,
	};
	return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}


const courses = [
	{ id: "frontend", title: "Modern Frontend Development", category: "Development", level: "Beginner", duration: "10 weeks", lessons: 42, students: "1.8k", rating: "4.9", color: "blue", icon: "code" as IconName, description: "Build responsive, accessible web applications with HTML, CSS, JavaScript and React." },
	{ id: "product-design", title: "UI/UX & Product Design", category: "Design", level: "Beginner", duration: "8 weeks", lessons: 35, students: "980", rating: "4.8", color: "purple", icon: "layers" as IconName, description: "Turn real user needs into thoughtful interfaces, prototypes, and polished digital products." },
	{ id: "backend", title: "Backend APIs with Node.js", category: "Development", level: "Intermediate", duration: "12 weeks", lessons: 48, students: "740", rating: "4.9", color: "orange", icon: "globe" as IconName, description: "Design secure APIs, work with databases, and deploy production-ready services." },
	{ id: "data", title: "Data Analytics Essentials", category: "Data", level: "Beginner", duration: "6 weeks", lessons: 28, students: "620", rating: "4.7", color: "green", icon: "spark" as IconName, description: "Clean, explore, and visualize data to answer meaningful business questions." },
	{ id: "mobile", title: "React Native Mobile Apps", category: "Development", level: "Advanced", duration: "10 weeks", lessons: 40, students: "410", rating: "4.8", color: "pink", icon: "code" as IconName, description: "Create smooth cross-platform mobile experiences from idea to app store." },
	{ id: "product", title: "Digital Product Management", category: "Business", level: "Intermediate", duration: "7 weeks", lessons: 30, students: "530", rating: "4.8", color: "teal", icon: "briefcase" as IconName, description: "Lead product discovery, strategy, delivery, and growth with confidence." },
];
const products = [
	{ id: "schoolflow", name: "SchoolFlow", tag: "Education", price: "$49", accent: "blue", icon: "book" as IconName, description: "A complete school management workspace for students, staff, classes, fees, and reports.", version: "v2.4" },
	{ id: "stockly", name: "Stockly", tag: "Business", price: "$39", accent: "green", icon: "layers" as IconName, description: "Simple inventory, orders, and sales insights for growing retail businesses.", version: "v1.8" },
	{ id: "carebook", name: "CareBook", tag: "Healthcare", price: "$59", accent: "purple", icon: "users" as IconName, description: "A secure appointment and patient workflow system for modern clinics.", version: "v3.1" },
	{ id: "invoxa", name: "Invoxa", tag: "Finance", price: "$29", accent: "orange", icon: "briefcase" as IconName, description: "Professional invoicing, payment tracking, and lightweight client management.", version: "v2.0" },
];


function CourseCard({ course }: { course: typeof courses[number] }) { return <article className="course-card"><div className={`course-cover cover-${course.color}`}><span><Icon name={course.icon} size={34} /></span><small>{course.category}</small></div><div className="course-body"><div className="meta"><span>{course.level}</span><span><Icon name="clock" size={14} /> {course.duration}</span></div><h3>{course.title}</h3><p>{course.description}</p><div className="card-footer"><span className="rating"><Icon name="star" size={15} /> {course.rating} <small>({course.students})</small></span><a href={`#/learn/${course.id}`} aria-label={`View ${course.title}`}><Icon name="arrow" size={19} /></a></div></div></article>; }

function ServiceCard({ type }: { type: "learn" | "build" }) {
	const learn = type === "learn"; const items = learn ? ["Project-based curriculum", "Expert feedback and support", "Career-ready certificates"] : ["Web and mobile applications", "Product design and strategy", "Long-term technical support"];
	return <article className={`service-card service-${type}`}>
		<div className="service-icon">
			<Icon name={learn ? "book" : "code"} size={30} />
			</div><span className="card-label">{learn ? "For learners" : "For businesses"}
				</span><h3>{learn ? "Learn skills that matter" : "Build solutions that work"}
					</h3><p>{learn ? "Practical, mentor-led courses built around the tools and workflows used by real product teams." : "From first sketch to launch and beyond, we design and engineer software that solves real business problems."}</p>
					<ul>{items.map(i => <li key={i}><Icon name="check" size={17} /> {i}</li>)}</ul><a href={learn ? "#/learn" : "#/contact"}>{learn ? "Browse learning paths" : "Start a project"} <Icon name="arrow" size={18} /></a></article>;
}


function SectionHeading({ eyebrow, title, text, align = "center" }: { eyebrow: string; title: string; text?: string; align?: "center" | "left" }) { return <div className={`section-heading ${align === "center" ? "text-center mx-auto" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>; }


function LinkButton({ to, children, variant = "primary", className = "" }: { to: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "light"; className?: string }) { return <a href={`#/${to}`} className={`btn btn-${variant} ${className}`}>{children}</a>; }


function HomePage() {
	return (
		<>
			<SEO
				title="ByteNol | Learn to Build, Helps to Build"
				description="ByteNol helps students learn practical programming and helps individuals and organizations build useful software solutions"
			/>

			<Hero />

			<section className="px-20 py-5 border-y border-slate-300">
				<div className="flex items-center gap-50 text-muted">
					<span>
						Helping ambitious teams build better
					</span>
					<div className="flex items-center gap-25 text-muted">
						<strong>VARONA</strong>
						<strong>northstar</strong>
						<strong>ARCWAVE</strong>
						<strong>nexa</strong>
						<strong>MONO</strong>
					</div>
				</div>
			</section>


			<section className="section bg-white">
				<div className="container">
					<SectionHeading 
						eyebrow="What we do" 
						title="One partner. Two ways to grow." 
						text="Whether you're learning what comes next or building it, we give you the expertise and tools to make meaningful progress." 
					/>
					<div className="service-grid">
						<ServiceCard type="learn" />
						<ServiceCard type="build" />
					</div>		
				</div>
			</section>

			<section className="section section-tint"><div className="container"><div className="split-heading"><SectionHeading eyebrow="Popular courses" title="Start learning today" align="left" /><LinkButton to="learn" variant="secondary">View all courses <Icon name="arrow" size={18} /></LinkButton></div><div className="course-grid">{courses.slice(0, 3).map((c) => <CourseCard key={c.id} course={c} />)}</div></div></section>

<section className="section"><div className="container story-grid"><div className="story-image">
	<img src="./images/home/coder-illustration.jpg" alt="Bytenol team members collaborating at a computer" /><div><strong>7+</strong><span>years building<br />what matters</span></div></div><div className="story-copy"><SectionHeading eyebrow="Why Bytenol" title="Technology should feel empowering, not overwhelming." align="left" /><p>We started Bytenol with a simple belief: people learn best by doing, and great software starts by listening. That same practical, human approach shapes everything we make.</p><div className="stats"><div><strong>2,500+</strong><span>Learners supported</span></div><div><strong>80+</strong><span>Products delivered</span></div><div><strong>14</strong><span>Countries reached</span></div><div><strong>96%</strong><span>Client satisfaction</span></div></div><LinkButton to="about" variant="secondary">Our story <Icon name="arrow" size={18} /></LinkButton></div></div></section>

	<section className="section cta-section"><div className="container cta-box"><div><span className="eyebrow eyebrow-light">Ready when you are</span><h2>What will you create next?</h2><p>Build your skills or bring your next digital product to life with a team that cares about the outcome.</p></div><div><LinkButton to="learn" variant="light">Start learning</LinkButton><LinkButton to="contact" variant="ghost">Talk to our team <Icon name="arrow" size={18} /></LinkButton></div></div></section>

			{/* <Hero />

 */}
 			<LearnBuildSection />

			<LearningSection />

			<ProductsSection />


			<FinalCTA />

						<WhyByteNolSection />
		</>
	);
}

export default HomePage;