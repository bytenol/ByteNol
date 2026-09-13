import ProductCategories from "./components/ProductCategories";
import ProductEcosystemIllustration from "./components/ProductEcosystemIllustration";
import ProductProcess from "./components/ProductProcess";
import ProductsCTA from "./components/ProductsCTA";
import ProductsHero from "./components/ProductsHero";

import Section from "../../components/common/Section";
import ProductPhilosophy from "./components/ProductPhilosophy";
import SEO from "../../components/common/SEO";

function ProductsPage() {
	return (
		<>
			<SEO
				title="Software Products | ByteNol"
				description="Explore software products built by ByteNol to help schools, businesses and individuals solve real-world problems with technology."
			/>
			<ProductsHero />

			<ProductCategories />

			<Section>
				<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
					<div className="order-2 lg:order-1">
						<p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
							Connected technology
						</p>

						<h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
							Products that fit into the bigger picture.
						</h2>

						<p className="mt-5 max-w-xl leading-7 text-muted">
							Software rarely exists in isolation. Our products are designed
							to connect people, information and processes so technology can
							work as a system.
						</p>
					</div>

					<div className="order-1 lg:order-2">
						<ProductEcosystemIllustration />
					</div>
				</div>
			</Section>

			<ProductProcess />

			<ProductPhilosophy />

			<ProductsCTA />
		</>
	);
}

export default ProductsPage;