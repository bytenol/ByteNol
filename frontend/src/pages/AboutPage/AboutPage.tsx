import SEO from "../../components/common/SEO";
import AboutCTA from "./components/AboutCTA";
import AboutHero from "./components/AboutHero";
import LearnBuildSection from "./components/LearnBuildSection";
import PrinciplesSection from "./components/PrincipleSection";
import StorySection from "./components/StorySection";


function AboutPage() {
	return (
		<>
			<SEO
				title="About ByteNol | Technology & Education"
				description="Learn about ByteNol, a technology and education company focused on practical programming education and software development."
			/>
			<AboutHero />
			<StorySection />
			<LearnBuildSection />
			<PrinciplesSection />
			<AboutCTA />
		</>
	);
}

export default AboutPage;