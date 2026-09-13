import {
	ArrowUpRight,
	Code2,
	Layers3,
	Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";


import Section from "../../../components/common/Section";
import SectionHeading from "../../../components/common/SectionHeading";

function LearnBuildSection() {
	return (
		<Section className="bg-surface">
			<SectionHeading
				eyebrow="What we do"
				title="One company. Two ways to move technology forward."
				description="Whether you're learning how to create with technology or looking for someone to build with it, ByteNol is here."
			/>

			<div className="relative mt-14 grid gap-6 lg:grid-cols-2">
				<div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
					<div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-surface bg-dark font-mono text-xs font-bold text-primary">
						+
					</div>
				</div>

				{/* Learn */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="group relative min-h-[430px] overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
				>
					<div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-light transition-transform duration-500 group-hover:scale-125" />

					<div className="relative">
						<div className="flex items-center justify-between">
							<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary-dark">
								<Code2 size={27} />
							</div>

							<Sparkles className="text-primary-dark" size={22} />
						</div>

						<p className="mt-10 text-sm font-semibold uppercase tracking-wider text-primary-dark">
							Learn
						</p>

						<h3 className="mt-3 max-w-md font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl">
							Turn curiosity into real technical ability.
						</h3>

						<p className="mt-5 max-w-lg leading-7 text-muted">
							Learn programming through practical courses and mentorship.
						</p>

						<Link
							to="/courses"
							className="mt-8 inline-flex items-center gap-2 font-semibold text-primary-dark"
						>
							Explore learning
							<ArrowUpRight size={18} />
						</Link>
					</div>
				</motion.div>

				{/* Build */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="group relative min-h-[430px] overflow-hidden rounded-[2rem] bg-dark p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
				>
					<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[50px] border-primary/10 transition-transform duration-500 group-hover:scale-110" />

					<div className="relative">
						<div className="flex items-center justify-between">
							<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-primary">
								<Layers3 size={27} />
							</div>

							<span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
								For organizations
							</span>
						</div>

						<p className="mt-10 text-sm font-semibold uppercase tracking-wider text-primary">
							Build
						</p>

						<h3 className="mt-3 max-w-md font-heading text-3xl font-bold tracking-tight sm:text-4xl">
							Turn ideas into technology that works.
						</h3>

						<p className="mt-5 max-w-lg leading-7 text-slate-400">
							we help organizations solve problems by building technology
							that creates lasting value.
						</p>

						<Link
							to="/solutions"
							className="mt-8 inline-flex items-center gap-2 font-semibold text-primary"
						>
							Explore solutions
							<ArrowUpRight size={18} />
						</Link>
					</div>
				</motion.div>
			</div>
		</Section>
	);
}

export default LearnBuildSection;