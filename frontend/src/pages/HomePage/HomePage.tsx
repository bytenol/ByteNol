import SEO from "../../components/common/SEO";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import LearnBuildSection from "./components/LearnBuildSection";
import LearningSection from "./components/LearningSection";
import ProductsSection from "./components/ProductsSection";
import WhyByteNolSection from "./components/WhyByteNolSection";

function HomePage() {
	return (
		<>
			<SEO 
				title="ByteNol | Learn to Build, Helps to Build" 
				description="ByteNol helps students learn practical programming and helps individuals and organizations build useful software solutions" 
			/>

			<Hero />

			<LearnBuildSection />

			<LearningSection />

			<ProductsSection />

			<WhyByteNolSection />

			<FinalCTA />
		</>
	);
}

export default HomePage;