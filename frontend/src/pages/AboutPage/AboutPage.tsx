import { motion, type Variants } from "motion/react";
import { ArrowRight, Target, Lightbulb, Shield, Users, Code, Building2Icon } from "lucide-react";
import Container from "../../components/common/Container";

// --- Animation Variants ---
const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

const slideInLeft: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-surface pb-24 overflow-hidden">

			{/* Hero Section */}
			<section className="relative pt-32 pb-24">
				{/* Soft Background Blobs */}
				<motion.div
					animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-[100px] -z-10 pointer-events-none"
				/>
				<motion.div
					animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
					transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
					className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary-200/40 rounded-full blur-[100px] -z-10 pointer-events-none"
				/>

				<Container className="text-center max-w-4xl mx-auto">
					<motion.div variants={staggerContainer} initial="hidden" animate="visible">
						<motion.span
							variants={fadeUp}
							className="inline-block text-brand-600 font-bold uppercase tracking-wider text-sm mb-6 bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100"
						>
							Our Mission
						</motion.span>
						<motion.h1
							variants={fadeUp}
							className="text-5xl lg:text-7xl font-black text-ink mb-8 tracking-tight leading-[1.1]"
						>
							Bridging the gap between <br className="hidden md:block" />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-secondary-500">learning and building.</span>
						</motion.h1>
						<motion.p
							variants={fadeUp}
							className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
						>
							At ByteNol, we believe technology should feel empowering. We exist to equip the next generation of engineers with practical skills and to help forward-thinking organizations build software that matters.
						</motion.p>
					</motion.div>
				</Container>
			</section>

			{/* The Story Section */}
			<section className="py-16">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<motion.div
							variants={slideInLeft}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, margin: "-10%" }}
							className="relative"
						>
							<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-line">
								<img
									src="./images/home/background-coders.jpg"
									alt="ByteNol team collaborating"
									className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent pointer-events-none" />
							</div>

							{/* Floating Stat Card */}
							<motion.div
								animate={{ y: [0, -15, 0] }}
								transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
								className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-line flex items-center gap-5 z-20"
							>
								<div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center">
									<Code size={28} />
								</div>
								<div>
									<strong className="block text-3xl font-black text-ink">80+</strong>
									<span className="text-sm font-bold text-muted uppercase tracking-wider">Products Built</span>
								</div>
							</motion.div>
						</motion.div>

						<motion.div
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, margin: "-10%" }}
							className="space-y-6"
						>
							<motion.h2 variants={fadeUp} className="text-4xl font-bold text-ink tracking-tight mb-2">
								A dual approach to technology.
							</motion.h2>
							<motion.p variants={fadeUp} className="text-lg text-muted leading-relaxed">
								ByteNol started with a simple observation: traditional tech education often leaves students unprepared for the real world, while many businesses struggle to find technical partners who truly understand their vision.
							</motion.p>
							<motion.p variants={fadeUp} className="text-lg text-muted leading-relaxed">
								We built a company that solves both. By maintaining a world-class engineering team that builds enterprise products, we are able to feed real-world practices directly into our curriculum. Conversely, our educational arm allows us to constantly discover and nurture top-tier engineering talent.
							</motion.p>

							<motion.div variants={fadeUp} className="grid grid-cols-2 gap-6 pt-6 border-t border-line mt-8">
								<div>
									<div className="flex items-center gap-2 text-brand-600 font-bold mb-2">
										<Building2Icon size={20} /> For Businesses
									</div>
									<p className="text-sm text-muted">Scalable, secure, and intuitive digital products built by veterans.</p>
								</div>
								<div>
									<div className="flex items-center gap-2 text-secondary-600 font-bold mb-2">
										<Users size={20} /> For Learners
									</div>
									<p className="text-sm text-muted">Project-based, mentor-led tech education that guarantees competence.</p>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* Core Values Section */}
			<section className="py-24 bg-white border-y border-line mt-12">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, margin: "-10%" }}
						className="text-center max-w-2xl mx-auto mb-16"
					>
						<span className="text-[11px] font-bold tracking-widest uppercase text-muted mb-3 block">What drives us</span>
						<h2 className="text-4xl font-bold text-ink tracking-tight">Our Core Values</h2>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, margin: "-10%" }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
					>
						{/* Value 1 */}
						<motion.div variants={fadeUp} className="bg-surface p-8 rounded-[2rem] border border-line hover:shadow-xl transition-shadow group">
							<div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center border border-line mb-6 group-hover:scale-110 transition-transform shadow-sm">
								<Target size={24} />
							</div>
							<h3 className="text-xl font-bold text-ink mb-3">Practical Excellence</h3>
							<p className="text-muted text-sm leading-relaxed">We focus on real-world utility over abstract theory. If it doesn't work in production, it doesn't pass our standard.</p>
						</motion.div>

						{/* Value 2 */}
						<motion.div variants={fadeUp} className="bg-surface p-8 rounded-[2rem] border border-line hover:shadow-xl transition-shadow group">
							<div className="w-14 h-14 bg-white text-secondary-600 rounded-2xl flex items-center justify-center border border-line mb-6 group-hover:scale-110 transition-transform shadow-sm">
								<Users size={24} />
							</div>
							<h3 className="text-xl font-bold text-ink mb-3">Human-Centric</h3>
							<p className="text-muted text-sm leading-relaxed">Whether we are mentoring a student or designing an interface, the human experience is always our primary metric.</p>
						</motion.div>

						{/* Value 3 */}
						<motion.div variants={fadeUp} className="bg-surface p-8 rounded-[2rem] border border-line hover:shadow-xl transition-shadow group">
							<div className="w-14 h-14 bg-white text-orange-500 rounded-2xl flex items-center justify-center border border-line mb-6 group-hover:scale-110 transition-transform shadow-sm">
								<Lightbulb size={24} />
							</div>
							<h3 className="text-xl font-bold text-ink mb-3">Continuous Growth</h3>
							<p className="text-muted text-sm leading-relaxed">Technology moves fast. We maintain a beginner's mind, constantly updating our stack, our curriculum, and our skills.</p>
						</motion.div>

						{/* Value 4 */}
						<motion.div variants={fadeUp} className="bg-surface p-8 rounded-[2rem] border border-line hover:shadow-xl transition-shadow group">
							<div className="w-14 h-14 bg-white text-purple-600 rounded-2xl flex items-center justify-center border border-line mb-6 group-hover:scale-110 transition-transform shadow-sm">
								<Shield size={24} />
							</div>
							<h3 className="text-xl font-bold text-ink mb-3">Uncompromising Quality</h3>
							<p className="text-muted text-sm leading-relaxed">We don't cut corners. From the cleanliness of our codebase to the security of our infrastructure, we build things to last.</p>
						</motion.div>
					</motion.div>
				</Container>
			</section>

			{/* Leadership / Team Section (Minimalist Professional) */}
			<section className="py-24">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, margin: "-10%" }}
						className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
					>
						<div className="max-w-xl">
							<span className="text-[11px] font-bold tracking-widest uppercase text-brand-600 mb-3 block">The People</span>
							<h2 className="text-4xl font-bold text-ink tracking-tight mb-4">Meet the Leadership</h2>
							<p className="text-muted">A team of veteran engineers, designers, and educators dedicated to pushing the boundaries of what's possible.</p>
						</div>
						<a href="/contact" className="inline-flex items-center gap-2 text-ink font-bold hover:text-brand-600 transition-colors">
							Join our team <ArrowRight size={18} />
						</a>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, margin: "-10%" }}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{/* Team Member 1 */}
						<motion.div variants={fadeUp} className="group cursor-pointer">
							<div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-6 bg-slate-200">
								<img
									src="/images/about/founder_portrait.jpg"
									alt="Team Member"
									className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
								/>
							</div>
							<h3 className="text-xl font-bold text-ink">I.A Mustapha</h3>
							<p className="text-brand-600 font-medium text-sm">Founder & Lead Engineer</p>
						</motion.div>

						{/* Team Member 2 */}
						<motion.div variants={fadeUp} className="group cursor-pointer">
							<div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-6 bg-slate-200">
								<img
									src="/images/about/Faceless_silhouette_avatar.jpg"
									alt="Team Member"
									className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
								/>
							</div>
							<h3 className="text-xl font-bold text-ink">Sarah T.</h3>
							<p className="text-secondary-600 font-medium text-sm">Head of Product Design</p>
						</motion.div>

						{/* Team Member 3 */}
						<motion.div variants={fadeUp} className="group cursor-pointer">
							<div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-6 bg-slate-200">
								<img
									src="/images/about/Faceless_silhouette_avatar.jpg"
									alt="Team Member"
									className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
								/>
							</div>
							<h3 className="text-xl font-bold text-ink">T.M Adam</h3>
							<p className="text-brand-600 font-medium text-sm">Director of Education</p>
						</motion.div>
					</motion.div>
				</Container>
			</section>

		</div>
	);
}