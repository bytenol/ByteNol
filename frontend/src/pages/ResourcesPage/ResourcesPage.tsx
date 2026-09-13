import DeveloperToolkit from "./components/DeveloperToolkit";
import FeaturedResource from "./components/FeaturedResources";
import LearnCreateSection from "./components/LearnCreateSection";
import ProjectIdeas from "./components/ProjectIdeas";
import ResourceCategories from "./components/ResourceCategories";
import ResourceLibrary from "./components/ResourceLibrary";
import ResourcesCTA from "./components/ResourcesCTA";
import ResourcesHero from "./components/ResourcesHero";

function ResourcesPage() {
  return (
    <>
      <ResourcesHero />

      <ResourceCategories />

      <FeaturedResource />

      <ResourceLibrary />

      <ProjectIdeas />

      <DeveloperToolkit />

      <LearnCreateSection />

      <ResourcesCTA />
    </>
  );
}

export default ResourcesPage;