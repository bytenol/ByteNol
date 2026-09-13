import { ArrowRight, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

import Container from "../../../components/common/Container";
import ContactPathIllustration from "./ContactPathIllustration";

function ContactCTA() {
	return (
		<section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
			<Container>
				<div className="relative">
					{/* Heading */}
					<div className="mx-auto max-w-3xl text-center">
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary-dark">
								<Lightbulb size={22} />
							</div>

							<h2 className="mt-6 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl">
								Not sure{" "}
								<span className="relative text-primary-dark">
									where to start?
									<svg
										className="absolute -bottom-3 left-0 w-full"
										viewBox="0 0 300 15"
										fill="none"
										aria-hidden="true"
									>
										<path
											d="M3 10C74 2 210 2 297 8"
											stroke="currentColor"
											strokeWidth="3"
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</h2>

							<p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
								That's okay. Tell us what you're trying to accomplish and
								we'll help you figure out the next step.
							</p>

							<motion.a
								href="#contact-form"
								whileHover={{ y: -3 }}
								whileTap={{ scale: 0.98 }}
								className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-dark px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-200 hover:bg-primary-bright"
							>
								<span className="text-white">Start a conversation</span>
								<ArrowRight size={18} className="text-white" />
							</motion.a>
						</motion.div>
					</div>

					{/* Journey illustration */}
					<div className="mt-12 sm:mt-16">
						<ContactPathIllustration />
					</div>
				</div>
			</Container>
		</section>
	);
}

export default ContactCTA;