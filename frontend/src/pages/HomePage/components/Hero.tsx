import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../../components/common/Container";
import CodeWindow from "./CodeWindow";
import Button from "../../../components/ui/Button";

function Hero() {
	return (
		<section className="relative overflow-hidden">
			{/* Background decoration */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-[45%] top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary-brown-dark/20 blur-3xl" />

				<div className="absolute -right-40 top-20 h-80 w-80 rounded-full border-[50px] border-primary-brown-dark/50" />

				<div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full border-[35px] border-primary-light/40" />

				<div
					className="absolute inset-0 opacity-[0.035]"
					style={{
						backgroundImage:
							"linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
						backgroundSize: "48px 48px",
					}}
				/>
			</div>

			<Container className="relative">
				<div className="grid min-h-[calc(100vh-100px)] items-center gap-16 py-20 lg:grid-cols-[1fr_0.95fr] lg:gap-20 lg:py-24">
					{/* Left */}
					<div>
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-dark/10 bg-primary-light px-3 py-1.5"
						>
							<span className="h-2 w-2 rounded-full bg-primary-brown-dark" />

							<span className="text-xs font-semibold text-primary-brown-dark sm:text-sm">
								Technology • Education • Innovation
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 25 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								delay: 0.1,
							}}
							className="max-w-3xl font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-dark sm:text-6xl lg:text-[5.25rem]"
						>
							Learn to Build.
							<br />

							<span className="text-primary-brown-dark font-bold">
								We Help You Build.
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.25,
							}}
							className="mt-7 max-w-xl text-base leading-7 text-primary-brown-dark sm:text-lg sm:leading-8"
						>
							we help people develop real-world technology
							skills and help organizations turn ideas into
							powerful software solutions.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.35,
							}}
							className="mt-9 flex flex-col gap-3 sm:flex-row"
						>
							<Link
								to="/courses"
							>
								<Button className="mt-2 w-full">
									Learn from us
									<ArrowRight size={16} />
								</Button>
							</Link>

							<Button className="mt-2 w-full">
									Learn from us
									<ArrowRight size={16} />
								</Button>

							<Link
								to="/solutions"
								className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-dark transition-all duration-200 hover:border-primary-dark hover:bg-primary-light"
							>
								<Button className="">
									Buy our Product
									<ArrowRight size={16} />
								</Button>
							</Link>
						</motion.div>

						{/* Trust / value indicators */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.6,
								delay: 0.6,
							}}
							className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
						>
							<div>
								<p className="font-heading text-lg font-bold text-dark">
									Practical
								</p>
								<p className="text-xs text-muted">
									Learning approach
								</p>
							</div>

							<div className="hidden h-10 w-px bg-border sm:block" />

							<div>
								<p className="font-heading text-lg font-bold text-dark">
									Real-world
								</p>
								<p className="text-xs text-muted">
									Projects & solutions
								</p>
							</div>

							<div className="hidden h-10 w-px bg-border sm:block" />

							<div>
								<p className="font-heading text-lg font-bold text-dark">
									Built for
								</p>
								<p className="text-xs text-muted">
									People & organizations
								</p>
							</div>
						</motion.div>
					</div>

					{/* Right */}
					<div className="relative flex justify-center lg:justify-end">
						<div className="absolute -right-4 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full border border-primary/30 lg:block" />

						<div className="absolute -bottom-10 left-0 hidden h-20 w-20 rounded-2xl border border-primary/30 bg-primary-light/40 lg:block" />

						<CodeWindow />
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
					className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-medium text-muted lg:flex"
				>
					<span>Scroll to explore</span>

					<motion.span
						animate={{ y: [0, 5, 0] }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="h-7 w-4 rounded-full border border-border"
					>
						<span className="mx-auto mt-1 block h-1 w-1 rounded-full bg-primary-dark" />
					</motion.span>
				</motion.div>

			</Container>
		</section>
	);
}

export default Hero;