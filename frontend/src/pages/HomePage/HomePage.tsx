import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import SEO from "../../components/common/SEO";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import LearnBuildSection from "./components/LearnBuildSection";
import LearningSection from "./components/LearningSection";
import ProductsSection from "./components/ProductsSection";
import WhyByteNolSection from "./components/WhyByteNolSection";


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

type Route = { page: string; id?: string };
const readRoute = (): Route => { const p = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean); return { page: p[0]?.split("?")[0] || "home", id: p[1] }; };
function LinkButton({ to, children, variant = "primary", className = "" }: { to: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "light"; className?: string }) { return <a href={`#/${to}`} className={`btn btn-${variant} ${className}`}>{children}</a>; }
function SectionHeading({ eyebrow, title, text, align = "center" }: { eyebrow: string; title: string; text?: string; align?: "center" | "left" }) { return <div className={`section-heading ${align === "center" ? "text-center mx-auto" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>; }

function Header({ route }: { route: Route }) {
	const [open, setOpen] = useState(false);
	const nav = [["home", "Home"], ["about", "About"], ["products", "Products"], ["learn", "Learn"], ["contact", "Contact"]];
	return <header className="site-header"><div className="container nav-wrap"><a className="brand" href="#/home" aria-label="Bytenol home" onClick={() => setOpen(false)}><img src="/bytenol-logo.png" alt="" /><span>bytenol</span></a><nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">{nav.map(([path, label]) => <a key={path} href={`#/${path}`} className={route.page === path ? "active" : ""} onClick={() => setOpen(false)}>{label}</a>)}<LinkButton to="auth" variant="ghost" className="nav-signin">Sign in</LinkButton><LinkButton to="auth?mode=signup" className="nav-cta">Create account <Icon name="arrow" size={17} /></LinkButton></nav><button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(!open)}><Icon name={open ? "x" : "menu"} /></button></div></header>;
}
function Footer() { return <footer><div className="container footer-top"><div className="footer-brand"><a className="brand brand-light" href="#/home"><img src="/bytenol-logo.png" alt="" /><span>bytenol</span></a><p>Building practical digital skills and dependable software for people and organizations ready to move forward.</p><div className="socials">{(["twitter", "linkedin", "instagram", "facebook"] as IconName[]).map((icon) => <a href="#/contact" key={icon} aria-label={icon}><Icon name={icon} size={18} /></a>)}</div></div><div><h3>Explore</h3><a href="#/about">About us</a><a href="#/learn">Courses</a><a href="#/products">Products</a></div><div><h3>Company</h3><a href="#/contact">Contact</a><a href="#/about">Our approach</a><a href="#/contact">Partner with us</a></div><div><h3>Get in touch</h3><a href="mailto:hello@bytenol.com">hello@bytenol.com</a><p>Mon–Fri, 9:00–17:00</p><p>Lagos, Nigeria</p></div></div><div className="container footer-bottom"><span>© 2025 Bytenol. All rights reserved.</span><span><a href="#/home">Privacy</a><a href="#/home">Terms</a></span></div></footer>; }

function ServiceCard({ type }: { type: "learn" | "build" }) {
	const learn = type === "learn"; const items = learn ? ["Project-based curriculum", "Expert feedback and support", "Career-ready certificates"] : ["Web and mobile applications", "Product design and strategy", "Long-term technical support"];
	return <article className={`service-card service-${type}`}><div className="service-icon"><Icon name={learn ? "book" : "code"} size={30} /></div><span className="card-label">{learn ? "For learners" : "For businesses"}</span><h3>{learn ? "Learn skills that matter" : "Build solutions that work"}</h3><p>{learn ? "Practical, mentor-led courses built around the tools and workflows used by real product teams." : "From first sketch to launch and beyond, we design and engineer software that solves real business problems."}</p><ul>{items.map(i => <li key={i}><Icon name="check" size={17} /> {i}</li>)}</ul><a href={learn ? "#/learn" : "#/contact"}>{learn ? "Browse learning paths" : "Start a project"} <Icon name="arrow" size={18} /></a></article>;
}
function CourseCard({ course }: { course: typeof courses[number] }) { return <article className="course-card"><div className={`course-cover cover-${course.color}`}><span><Icon name={course.icon} size={34} /></span><small>{course.category}</small></div><div className="course-body"><div className="meta"><span>{course.level}</span><span><Icon name="clock" size={14} /> {course.duration}</span></div><h3>{course.title}</h3><p>{course.description}</p><div className="card-footer"><span className="rating"><Icon name="star" size={15} /> {course.rating} <small>({course.students})</small></span><a href={`#/learn/${course.id}`} aria-label={`View ${course.title}`}><Icon name="arrow" size={19} /></a></div></div></article>; }

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>; }
function MiniCta({ title, text, action, to }: { title: string; text: string; action: string; to: string }) { return <section className="mini-cta"><div className="container"><div><h2>{title}</h2><p>{text}</p></div><LinkButton to={to} variant="light">{action} <Icon name="arrow" size={18} /></LinkButton></div></section>; }

function Learn() {
	const [category, setCategory] = useState("All"); const [level, setLevel] = useState("All levels"); const [query, setQuery] = useState("");
	const filtered = useMemo(() => courses.filter(c => (category === "All" || c.category === category) && (level === "All levels" || c.level === level) && c.title.toLowerCase().includes(query.toLowerCase())), [category, level, query]);
	return <main><PageHero eyebrow="Bytenol Academy" title="Build skills. Create possibilities." text="Practical courses designed with industry, taught by people who build for the real world." /><section className="section catalog-section"><div className="container"><div className="filter-bar"><label className="search-field"><Icon name="search" size={19} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search courses..." /></label><select value={category} onChange={e => setCategory(e.target.value)} aria-label="Course category">{["All", "Development", "Design", "Data", "Business"].map(x => <option key={x}>{x}</option>)}</select><select value={level} onChange={e => setLevel(e.target.value)} aria-label="Course level">{["All levels", "Beginner", "Intermediate", "Advanced"].map(x => <option key={x}>{x}</option>)}</select></div><div className="results-label"><strong>{filtered.length} courses</strong><span>Carefully crafted to help you make real progress</span></div><div className="course-grid">{filtered.map(c => <CourseCard key={c.id} course={c} />)}</div>{!filtered.length && <div className="empty-state"><Icon name="search" size={32} /><h3>No courses found</h3><p>Try another keyword or filter.</p></div>}</div></section><MiniCta title="Not sure where to begin?" text="Tell us what you want to achieve and we'll recommend the right learning path." action="Talk to an advisor" to="contact" /></main>;
}
function CourseDetail({ id }: { id?: string }) {
	const c = courses.find(x => x.id === id) || courses[0];
	return <main><section className="detail-hero"><div className="container detail-grid"><div><a className="back-link" href="#/learn">← All courses</a><span className="eyebrow">{c.category} · {c.level}</span><h1>{c.title}</h1><p>{c.description} Learn through guided lessons, hands-on challenges, and a complete portfolio project.</p><div className="detail-meta"><span><Icon name="clock" /> {c.duration}</span><span><Icon name="book" /> {c.lessons} lessons</span><span><Icon name="star" /> {c.rating} rating</span></div></div><div className={`enroll-card cover-${c.color}`}><div className="play-button"><Icon name="play" size={26} /></div><h3>Start your learning journey</h3><p>Full lifetime access, project resources, mentorship and certificate included.</p><strong>$79</strong><button className="btn btn-primary" onClick={() => alert("Enrollment started. Welcome to Bytenol!")}>Enroll now <Icon name="arrow" size={18} /></button><small>30-day money-back guarantee</small></div></div></section><section className="section"><div className="container curriculum-grid"><div><SectionHeading eyebrow="Course overview" title="What you'll learn" align="left" /><div className="learning-list">{["Apply professional workflows from brief to delivery", "Build and publish a complete real-world project", "Make confident technical and design decisions", "Present your work with a career-ready certificate"].map(x => <div key={x}><span><Icon name="check" /></span>{x}</div>)}</div></div><div className="curriculum-card"><h3>Course curriculum</h3>{["Foundations and core concepts", "Tools, setup and workflows", "Building your first project", "Advanced patterns and quality", "Final capstone and review"].map((x, i) => <div key={x}><span>{String(i + 1).padStart(2, "0")}</span><div><strong>{x}</strong><small>{5 + i * 2} lessons</small></div><Icon name="chevron" /></div>)}</div></div></section></main>;
}

function ProductCard({ product: p }: { product: typeof products[number] }) { return <article className="product-card"><div className={`product-visual cover-${p.accent}`}><span><Icon name={p.icon} size={40} /></span><div className="mock-window"><i /><i /><i /><b /><b /><b /></div></div><div className="product-body"><div><span className="card-label">{p.tag}</span><span>{p.version}</span></div><h3>{p.name}</h3><p>{p.description}</p><div><span>From <strong>{p.price}</strong></span><a href={`#/products/${p.id}`}>View product <Icon name="arrow" size={18} /></a></div></div></article>; }
function Products() {
	const [filter, setFilter] = useState("All"); const filtered = filter === "All" ? products : products.filter(p => p.tag === filter);
	return <main><PageHero eyebrow="Bytenol Products" title="Smart tools for everyday work." text="Reliable, ready-to-use software built to help growing teams work better from day one." /><section className="section catalog-section"><div className="container"><div className="product-tabs">{["All", "Education", "Business", "Healthcare", "Finance"].map(x => <button key={x} className={filter === x ? "active" : ""} onClick={() => setFilter(x)}>{x}</button>)}</div><div className="product-grid">{filtered.map(p => <ProductCard key={p.id} product={p} />)}</div></div></section><section className="section section-tint"><div className="container custom-solution"><div><span className="service-icon"><Icon name="spark" size={28} /></span><SectionHeading eyebrow="Need something different?" title="Software shaped around your work." text="We design and build custom web and mobile products around your goals, customers, and existing systems." align="left" /><LinkButton to="contact">Discuss your project <Icon name="arrow" size={18} /></LinkButton></div><div className="process-list">{["Discover your needs", "Design the right solution", "Build, test and launch", "Support your growth"].map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong></div>)}</div></div></section></main>;
}
function ProductDetail({ id }: { id?: string }) {
	const p = products.find(x => x.id === id) || products[0];
	return <main><section className="detail-hero product-detail-hero"><div className="container detail-grid"><div><a className="back-link" href="#/products">← All products</a><span className="eyebrow">{p.tag} software · {p.version}</span><h1>{p.name}</h1><p>{p.description} Set up quickly, customize your workflow, and keep your team focused on what matters.</p><div className="hero-actions"><button className="btn btn-primary" onClick={() => alert(`${p.name} download started.`)}><Icon name="download" size={18} /> Download trial</button><button className="btn btn-secondary" onClick={() => document.getElementById("license")?.scrollIntoView({ behavior: "smooth" })}>Purchase license</button></div><small className="safe-note"><Icon name="shield" size={16} /> Secure download · 14-day free trial · No card required</small></div><div className={`product-showcase cover-${p.accent}`}><span className="product-logo"><Icon name={p.icon} size={40} /></span><div className="dashboard-mock"><div /><div /><div /><div /><div /></div></div></div></section><section className="section"><div className="container"><SectionHeading eyebrow="Made for momentum" title="Everything you need. Nothing you don't." text="Thoughtful features, a clean experience, and room to grow." /><div className="feature-grid">{[["globe", "Cloud ready", "Access your workspace securely from any modern device."], ["users", "Team friendly", "Invite your team and keep roles and work organized."], ["shield", "Secure by design", "Sensible protections and regular product improvements."]].map(([icon, title, text]) => <article key={title}><span><Icon name={icon as IconName} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><section id="license" className="section section-tint"><div className="container license-box"><div><span className="eyebrow">Simple licensing</span><h2>Own the tools that move your work forward.</h2><p>One clear payment includes updates for a year, onboarding resources, and direct support.</p></div><div><span>One-time license</span><strong>{p.price}</strong><button className="btn btn-primary" onClick={() => alert("Your secure checkout is ready.")}>Purchase license <Icon name="arrow" size={18} /></button></div></div></section></main>;
}

function About() {
	return <main><section className="about-hero"><div className="container"><span className="eyebrow">About Bytenol</span><h1>We make technology a practical force for progress.</h1><p>Bytenol is a learning and software company helping people gain relevant skills and organizations build useful, lasting digital products.</p></div></section><section className="section"><div className="container about-story"><div><img src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200" alt="A friendly team collaborating around a laptop" /></div><div><SectionHeading eyebrow="Our story" title="Built from curiosity, grounded in usefulness." align="left" /><p>We saw too many people learning technology without getting the confidence to create, and too many organizations investing in software that never truly fit.</p><p>So we brought education and product delivery together. The work our engineers do keeps our courses current. The questions our learners ask keep our products clear and human.</p><div className="quote">“Don't just know more. Be able to do more.”</div></div></div></section><section className="section section-tint"><div className="container"><SectionHeading eyebrow="What guides us" title="Values you can see in the work." /><div className="value-grid">{[["spark", "Clarity over complexity", "We make hard things understandable without making them simplistic."], ["users", "People before process", "We listen first and build around real people, not assumptions."], ["code", "Practice creates progress", "Real capability comes from making, testing, learning, and improving."], ["shield", "Quality is a habit", "We care about the details because dependable work earns trust."]].map(([icon, title, text]) => <article key={title}><span><Icon name={icon as IconName} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><MiniCta title="Build your next chapter with us." text="Learn a new skill, launch an idea, or give your team better tools." action="Get started" to="contact" /></main>;
}
function Contact() {
	const [sent, setSent] = useState(false); const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
	return <main><PageHero eyebrow="Contact us" title="Let's make something meaningful." text="Tell us what you're learning, building, or solving. Our team will point you in the right direction." /><section className="section"><div className="container contact-grid"><div className="contact-info"><SectionHeading eyebrow="We're listening" title="Start the conversation." align="left" /><p>Share as much or as little as you have. A thoughtful reply from a real person will reach you within one business day.</p><div className="contact-methods"><a href="mailto:hello@bytenol.com"><span><Icon name="mail" /></span><div><small>Email us</small><strong>hello@bytenol.com</strong></div></a><div><span><Icon name="map" /></span><div><small>Visit us</small><strong>Yaba, Lagos, Nigeria</strong></div></div></div><h3>Follow our journey</h3><div className="socials socials-dark">{(["twitter", "linkedin", "instagram", "facebook"] as IconName[]).map(icon => <a href="#/contact" key={icon} aria-label={icon}><Icon name={icon} size={18} /></a>)}</div></div><form className="contact-form" onSubmit={submit}><div className="form-row"><label>First name<input required placeholder="Ada" /></label><label>Last name<input required placeholder="Okafor" /></label></div><label>Work email<input required type="email" placeholder="ada@company.com" /></label><label>I'm interested in<select required defaultValue=""><option value="" disabled>Select an option</option><option>Learning a new skill</option><option>Building a custom product</option><option>Purchasing a product</option><option>Partnership</option></select></label><label>Tell us a little more<textarea required rows={5} placeholder="What would you like to achieve?" /></label><button className="btn btn-primary" type="submit">Send message <Icon name="arrow" size={18} /></button>{sent && <div className="success-message"><Icon name="check" /> Thanks — your message is on its way.</div>}</form></div></section><section className="map-section"><iframe title="Map showing Lagos, Nigeria" src="https://www.openstreetmap.org/export/embed.html?bbox=3.325%2C6.48%2C3.43%2C6.56&layer=mapnik" loading="lazy" /><div className="map-card"><span><Icon name="map" /></span><div><small>Our hub</small><strong>Lagos, Nigeria</strong><p>Available for remote partnerships worldwide.</p></div></div></section></main>;
}
function Auth() {
	const [signup, setSignup] = useState(window.location.hash.includes("mode=signup")); const [done, setDone] = useState(false);
	return <main className="auth-page"><div className="auth-panel"><a className="brand" href="#/home"><img src="/bytenol-logo.png" alt="" /><span>bytenol</span></a><div className="auth-copy"><span className="pill"><Icon name="spark" size={16} /> Build your future</span><h1>{signup ? "Create your Bytenol account." : "Good to see you again."}</h1><p>{signup ? "Learn practical skills, manage your courses, and access tools made to help you grow." : "Sign in to continue learning, manage your products, and pick up where you left off."}</p><div className="auth-quote"><div className="stars"><Icon name="star" size={14} /> 5.0 learner rating</div><p>“The learning experience felt practical from day one. I finally shipped a project I was proud to share.”</p><small>— Temi A., Frontend learner</small></div></div></div><div className="auth-form-wrap"><div className="auth-form"><div className="auth-tabs"><button className={!signup ? "active" : ""} onClick={() => { setSignup(false); setDone(false); }}>Sign in</button><button className={signup ? "active" : ""} onClick={() => { setSignup(true); setDone(false); }}>Create account</button></div><h2>{signup ? "Join Bytenol" : "Welcome back"}</h2><p>{signup ? "It takes less than a minute to get started." : "Enter your details to access your account."}</p><form onSubmit={e => { e.preventDefault(); setDone(true); }}>{signup && <label>Full name<input required placeholder="Your full name" /></label>}<label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Password<input required type="password" minLength={6} placeholder="At least 6 characters" /></label>{!signup && <div className="form-options"><label><input type="checkbox" /> Remember me</label><a href="#/contact">Forgot password?</a></div>}<button className="btn btn-primary" type="submit">{signup ? "Create my account" : "Sign in"} <Icon name="arrow" size={18} /></button></form>{done && <div className="success-message"><Icon name="check" /> {signup ? "Your account is ready. Welcome to Bytenol!" : "Signed in successfully."}</div>}<small className="terms">By continuing, you agree to our Terms of Service and Privacy Policy.</small></div></div></main>;
}

// export default function App() {
// 	const [route, setRoute] = useState<Route>(readRoute());
// 	useEffect(() => { const update = () => { setRoute(readRoute()); window.scrollTo({ top: 0, behavior: "instant" }); }; window.addEventListener("hashchange", update); if (!window.location.hash) window.location.hash = "/home"; return () => window.removeEventListener("hashchange", update); }, []);
// 	const content = route.page === "home" ? <Home /> : route.page === "about" ? <About /> : route.page === "learn" ? (route.id ? <CourseDetail id={route.id} /> : <Learn />) : route.page === "products" ? (route.id ? <ProductDetail id={route.id} /> : <Products />) : route.page === "contact" ? <Contact /> : route.page === "auth" ? <Auth /> : <Home />;
// 	return <>{route.page !== "auth" && <Header route={route} />}{content}{route.page !== "auth" && <Footer />}</>;
// }


function HomePage() {
	return (
		<>
			<SEO
				title="ByteNol | Learn to Build, Helps to Build"
				description="ByteNol helps students learn practical programming and helps individuals and organizations build useful software solutions"
			/>

			<section className="hero">
				<div className="hero-glow hero-glow-one" />
				<div className="container hero-grid">
					<div className="hero-copy">
						<span className="pill">
							<Icon name="spark" size={16} />
							Learn. Build. Grow.
						</span>
						<h1>
							Digital skills and solutions that <em>move you forward.</em>
						</h1>

						<p>
							Master in-demand technology skills or let our team turn your boldest ideas into reliable, real-world digital products
						</p>

						<div className="hero-actions">
							<LinkButton to="learn">
								Explore courses <Icon name="arrow" size={18} />
							</LinkButton>
							<LinkButton to="contact" variant="secondary">Build with us
							</LinkButton>
						</div>

						<div className="hero-trust">
							<div className="avatars">
								<span>AO</span>
								<span>TM</span>
								<span>KE</span>
								<span>+</span>
							</div>
							<div>

								<div className="stars">
									<Icon name="star" size={14} />
									4.9/5
								</div>

								<small>
									Trusted by 2,500+ learners
								</small>
							</div>

						</div>

					</div>
					<div className="hero-visual">
						<div className="image-card">
							<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200" alt="A collaborative technology team working together" />
						</div>
						<div className="floating-card floating-top">
							<span className="icon-box"><Icon name="code" />
							</span>
							<div>
								<strong>Learn by building</strong>
								<small>Real-world projects</small>
							</div>
						</div>
						<div className="floating-card floating-bottom">
							<strong>98%</strong><span>Completion<br />satisfaction</span>
						</div>
						<div className="code-dots">
							<span />
							<span />
							<span />
							<code>const future = "yours";</code>
						</div>
					</div>
				</div>
				
			</section>
			<section className="logo-strip"><div className="container"><span>Helping ambitious teams build better</span><div><strong>VARONA</strong><strong>northstar</strong><strong>ARCWAVE</strong><strong>nexa</strong><strong>MONO</strong></div></div></section>
			<section className="section"><div className="container"><SectionHeading eyebrow="What we do" title="One partner. Two ways to grow." text="Whether you're learning what comes next or building it, we give you the expertise and tools to make meaningful progress." /><div className="service-grid"><ServiceCard type="learn" /><ServiceCard type="build" /></div></div></section>
			<section className="section section-tint"><div className="container"><div className="split-heading"><SectionHeading eyebrow="Popular courses" title="Start learning today" align="left" /><LinkButton to="learn" variant="secondary">View all courses <Icon name="arrow" size={18} /></LinkButton></div><div className="course-grid">{courses.slice(0, 3).map((c) => <CourseCard key={c.id} course={c} />)}</div></div></section>
			<section className="section"><div className="container story-grid"><div className="story-image"><img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000" alt="Bytenol team members collaborating at a computer" /><div><strong>7+</strong><span>years building<br />what matters</span></div></div><div className="story-copy"><SectionHeading eyebrow="Why Bytenol" title="Technology should feel empowering, not overwhelming." align="left" /><p>We started Bytenol with a simple belief: people learn best by doing, and great software starts by listening. That same practical, human approach shapes everything we make.</p><div className="stats"><div><strong>2,500+</strong><span>Learners supported</span></div><div><strong>80+</strong><span>Products delivered</span></div><div><strong>14</strong><span>Countries reached</span></div><div><strong>96%</strong><span>Client satisfaction</span></div></div><LinkButton to="about" variant="secondary">Our story <Icon name="arrow" size={18} /></LinkButton></div></div></section>
			<section className="section cta-section"><div className="container cta-box"><div><span className="eyebrow eyebrow-light">Ready when you are</span><h2>What will you create next?</h2><p>Build your skills or bring your next digital product to life with a team that cares about the outcome.</p></div><div><LinkButton to="learn" variant="light">Start learning</LinkButton><LinkButton to="contact" variant="ghost">Talk to our team <Icon name="arrow" size={18} /></LinkButton></div></div></section>

			{/* <Home /> */}
			{/* <Hero />

			<LearnBuildSection />

			<LearningSection />

			<ProductsSection />

			<WhyByteNolSection />

			<FinalCTA /> */}
		</>
	);
}

export default HomePage;