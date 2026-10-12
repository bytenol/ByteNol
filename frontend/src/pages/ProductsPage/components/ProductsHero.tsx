import { motion } from "motion/react";

import Container from "../../../components/common/Container";
import ProductsHeroIllustration from "./ProductsHeroIllustration";

function ProductsHero() {
	return (
		<section className="relative overflow-hidden bg-[#f5f5f2]">
			<div className="absolute -left-50 -top-50 rounded-full w-100 h-100 bg-[#f7f4c1]"></div>
			<div className="absolute left-80/100 top-80/100 rounded-full w-100 h-100 bg-[#e1c1f7]"></div>
			<div className="absolute left-90/100 top-0 rounded-full w-100 h-100 bg-[#f7c1e8]"></div>

			<Container className="relative grid min-h-[680px] items-center gap-2 lg:grid-cols-[1.2fr_0.8fr]">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-xl"
				>
					<h1 className="font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-dark sm:text-6xl lg:text-6xl">
						Tools made to move
					</h1>

					<h1 className="font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-[#9c9683] sm:text-6xl lg:text-6xl">
						your ideas forward
					</h1>

					<p className="mt-7 max-w-lg text-base leading-7 text-[#8a8471] sm:text-lg">
						Checkout our curated collection of solutions and tools built with care.
						Our software products helps people and organizations work and operate more effectively.
					</p>

					<div className="mt-9 flex flex-wrap gap-3">
						<input
							className="rounded p-5 m-2 border border-[#8a8471] outline-[#8a8471] w-full bg-white shadow shadow-xl"
							placeholder="Search products, tools..."
						 />
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.94 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7, delay: 0.15 }}
					className="flex justify-center lg:justify-end bg-white border border-[#8a8471] rounded-lg shadow shadow-lg"
				>
					<div className="grid-row w-full p-5">
						<h1 className="font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-[#9c9683] sm:text-6xl lg:text-6xl">
							Exam Suite
						</h1>
						<ProductsHeroIllustration />
						<h1 className="mt-7 max-w-lg text-base leading-7 text-[#8a8471] sm:text-lg">
							An offline Computer Based Testing (CBT) for schools and academicians. 
						</h1>
						<div>
							<button className="m-2 p-2 bg-primary text-white rounded-sm shadow shadow-lg">
								Buy Product
							</button>
							<button className="text-secondary">Read More</button>
						</div>

					</div>
				</motion.div>
			</Container>
		</section>
	);
}

export default ProductsHero;