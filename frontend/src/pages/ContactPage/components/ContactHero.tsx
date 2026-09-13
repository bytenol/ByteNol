import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import Container from "../../../components/common/Container";
import ContactGirlIllustration from "./ContactGirlIllustration";
import Button from "../../../components/ui/Button";

function ContactHero() {
	return (
		<section className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36">
			{/* Background decoration */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-primary-light blur-3xl" />
				<div className="absolute left-0 top-72 h-64 w-64 rounded-full bg-sky-50 blur-3xl" />

				<motion.div
					className="absolute left-[8%] top-40 h-2 w-2 rounded-full bg-primary-bright"
					animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
					transition={{ duration: 3, repeat: Infinity }}
				/>

				<motion.div
					className="absolute right-[12%] top-56 h-3 w-3 rounded-full bg-primary"
					animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
					transition={{ duration: 4, repeat: Infinity }}
				/>
			</div>

			<Container className="relative">
				<div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-4">
					{/* Copy */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="relative z-10 max-w-2xl"
					>
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark">
							<Sparkles size={16} />
							Let's talk
						</div>

						<h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-tight text-dark sm:text-6xl lg:text-7xl">
							Let's build
							<br />
							something
							<span className="relative inline-block text-primary-dark">
								together.
								<svg
									className="absolute -bottom-3 left-0 w-full"
									viewBox="0 0 220 18"
									fill="none"
									aria-hidden="true"
								>
									<path
										d="M4 12C48 2 148 2 216 9"
										stroke="currentColor"
										strokeWidth="4"
										strokeLinecap="round"
									/>
								</svg>
							</span>
						</h1>

						<p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
							Have a question, an idea, a project, or simply want to learn
							more about us? We'd love to hear from you.
						</p>

						<div className="mt-9 flex flex-wrap gap-4">
							<a
								href="#contact-form"
								className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
							>
								<Button className="rounded-xl hover:bg-primary-bright shadow-lg shadow-sky-200 ">
									Start Learning <ArrowRight size={18} />
								</Button>
							</a>

							<a
								href="#contact-options"
								className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-dark transition-all hover:border-primary-dark hover:text-primary-dark"
							>


								<Button className="rounded-xl shadow-lg shadow-black-200" variant="dark">
									Explore ways to reach us <ArrowDown size={17} />
								</Button>
							</a>
						</div>
					</motion.div>

					<ContactGirlIllustration />
				</div>
			</Container>
		</section>
	);
}

export default ContactHero;