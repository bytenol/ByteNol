import SEO from "../../components/common/SEO";
import Hero from "./components/Hero";
import LearnBuildSection from "./components/LearnBuildSection";


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

			<LearnBuildSection />

			{/* <section className="section section-tint"><div className="container"><div className="split-heading"><SectionHeading eyebrow="Popular courses" title="Start learning today" align="left" /><LinkButton to="learn" variant="secondary">View all courses <Icon name="arrow" size={18} /></LinkButton></div><div className="course-grid">{courses.slice(0, 3).map((c) => <CourseCard key={c.id} course={c} />)}</div></div></section>

<section className="section"><div className="container story-grid"><div className="story-image">
	<img src="./images/home/coder-illustration.jpg" alt="Bytenol team members collaborating at a computer" /><div><strong>7+</strong><span>years building<br />what matters</span></div></div><div className="story-copy"><SectionHeading eyebrow="Why Bytenol" title="Technology should feel empowering, not overwhelming." align="left" /><p>We started Bytenol with a simple belief: people learn best by doing, and great software starts by listening. That same practical, human approach shapes everything we make.</p><div className="stats"><div><strong>2,500+</strong><span>Learners supported</span></div><div><strong>80+</strong><span>Products delivered</span></div><div><strong>14</strong><span>Countries reached</span></div><div><strong>96%</strong><span>Client satisfaction</span></div></div><LinkButton to="about" variant="secondary">Our story <Icon name="arrow" size={18} /></LinkButton></div></div></section>

	<section className="section cta-section"><div className="container cta-box"><div><span className="eyebrow eyebrow-light">Ready when you are</span><h2>What will you create next?</h2><p>Build your skills or bring your next digital product to life with a team that cares about the outcome.</p></div><div><LinkButton to="learn" variant="light">Start learning</LinkButton><LinkButton to="contact" variant="ghost">Talk to our team <Icon name="arrow" size={18} /></LinkButton></div></div></section> */}

			{/* <Hero />

 */}
 			{/* <LearnBuildSection />

			<LearningSection />

			<ProductsSection />


			<FinalCTA />

						<WhyByteNolSection /> */}
		</>
	);
}

export default HomePage;