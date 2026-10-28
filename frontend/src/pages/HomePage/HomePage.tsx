import SEO from "../../components/common/SEO";
import Hero from "./components/Hero";
import LearnBuildSection from "./components/LearnBuildSection";
import PopularCourses from "./components/PopularCourses";
import { motion } from "motion/react";
import WhyBytenol from "./components/WhyByteNol";
import NewsletterCTA from "./components/NewsLetterCTA";
import AmbitiousTeam from "./components/AmbitiousTeam";

function HomePage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="overflow-hidden"
		>
			<SEO
				title="ByteNol | Learn to Build, Helps to Build"
				description="ByteNol helps students learn practical programming and helps individuals and organizations build useful software solutions"
			/>

			<Hero />

			<AmbitiousTeam />

			<LearnBuildSection />
			
			<PopularCourses />

			<WhyBytenol />

			<NewsletterCTA />

		</motion.div>
	);
}

export default HomePage;