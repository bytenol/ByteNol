import {
	ArrowUpRight,
	Book,
	BriefcaseBusiness,
	Check,
} from "lucide-react";
import { motion, type Variants } from "motion/react";

import Section from "../../../components/common/Section";
import Button from "../../../components/ui/Button";

// Animation Variants for repeatable slide-in / slide-out
const slideUpVariant: Variants = {
	hidden: { opacity: 0, y: 60, scale: 0.95 },
	visible: { 
		opacity: 1, 
		y: 0, 
		scale: 1, 
		transition: { 
			type: "spring", 
			stiffness: 80, 
			damping: 15,
			duration: 0.6 
		} 
	}
};

const staggerChildren = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2 }
	}
};

function LearnIllustration() {
	return (
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-56 h-56 absolute -right-4 -bottom-8 opacity-90 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500 ease-out pointer-events-none">
			{/* Abstract Blob Background */}
			<path fill="currentColor" className="text-primary-100" d="M45,-75C58,-65,68,-50,75,-33C82,-16,86,3,81,20C76,37,62,52,47,63C32,74,16,81,-1,82C-18,83,-36,78,-51,68C-66,58,-78,43,-84,25C-90,7,-90,-13,-83,-30C-76,-47,-62,-61,-47,-71C-32,-81,-16,-87,0,-87C16,-87,32,-85,45,-75Z" transform="translate(100 100)" />
			{/* Humanoid Head */}
			<circle cx="90" cy="60" r="18" fill="currentColor" className="text-primary-500" />
			{/* Humanoid Torso/Arms leaning over a laptop */}
			<path d="M50,150 C55,100 120,95 130,130 C133,140 120,150 120,150 Z" fill="currentColor" className="text-primary-600" />
			{/* Floating Laptop/Book */}
			<rect x="110" y="105" width="45" height="30" rx="4" fill="#ffffff" stroke="currentColor" strokeWidth="4" className="text-primary-400" transform="rotate(-15 130 120)" />
			<circle cx="130" cy="115" r="4" fill="currentColor" className="text-primary-500" transform="rotate(-15 130 120)" />
			{/* Floating Decorative Elements */}
			<path d="M 30 50 L 40 40 L 50 50" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary-300" />
		</svg>
	);
}

function BuildIllustration() {
	return (
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-56 h-56 absolute -right-4 -bottom-4 opacity-90 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500 ease-out pointer-events-none">
			{/* Abstract Blob Background */}
			<path fill="currentColor" className="text-secondary-100" d="M35,-60C45,-48,52,-35,60,-21C68,-7,77,8,75,23C73,38,60,53,46,62C32,71,16,74,-2,77C-20,80,-40,83,-53,74C-66,65,-72,44,-76,26C-80,8,-82,-7,-75,-20C-68,-33,-52,-44,-38,-55C-24,-66,-12,-77,2,-80C16,-83,32,-78,35,-60Z" transform="translate(100 100)" />
			{/* Humanoid Head */}
			<circle cx="110" cy="50" r="18" fill="currentColor" className="text-secondary-500" />
			{/* Humanoid Torso reaching up */}
			<path d="M70,160 C75,110 135,90 145,100 C150,105 140,120 140,120 Z" fill="currentColor" className="text-secondary-600" />
			{/* Floating UI Building Blocks */}
			<rect x="50" y="80" width="35" height="35" rx="6" fill="#ffffff" stroke="currentColor" strokeWidth="4" className="text-secondary-400" />
			<rect x="130" y="40" width="20" height="20" rx="4" fill="currentColor" className="text-secondary-400" />
			<rect x="145" y="70" width="15" height="15" rx="3" fill="#ffffff" />
			{/* Connecting Line */}
			<path d="M 85 97 L 130 60" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5" fill="none" className="text-secondary-300" />
		</svg>
	);
}


function ServiceCard({ type }: { type: "learn" | "build" }) {
	const learn = type === "learn";
	const items = learn ? ["Project-based curriculum", "Expert feedback and support", "Career-ready certificates"]
		: ["Web and mobile applications", "Product design and strategy", "Long-term technical support"];

	const cardTheme = learn 
		? "bg-gradient-to-br from-white to-primary-50 border-primary-200" 
		: "bg-gradient-to-br from-white to-secondary-50 border-secondary-200";

	return (
		<article className={`relative group h-full px-8 pt-12 pb-10 w-full shadow-2xl shadow-slate-200/50 rounded-[2rem] border ${cardTheme} overflow-hidden z-10 flex flex-col`}>
			
			{/* Icon Header */}
			<div className={`flex mb-8 items-center justify-center w-16 h-16 rounded-2xl shadow-inner ${learn ? "bg-primary-100/80" : "bg-secondary-100/80"}`}>
				{
					learn ? <Book size={32} className="text-primary-600" /> :
						<BriefcaseBusiness size={32} className="text-secondary-600 text-center" />
				}
			</div>

			{/* Text Content */}
			<div className="relative z-20 flex-1">
				<span className={`font-black uppercase tracking-wider text-xs mb-2 block ${learn ? "text-primary-600": "text-secondary-600"}`}>
					{learn ? "For learners" : "For businesses"}
				</span>
				<h3 className="text-ink text-3xl font-bold mb-4 tracking-tight">
					{learn ? "Learn skills that matter" : "Build solutions that work"}
				</h3>
				<p className="text-muted text-base leading-relaxed mb-6 max-w-[85%]">
					{learn ? "Practical, mentor-led courses built around the tools and workflows used by real product teams." : "From first sketch to launch and beyond, we design and engineer software that solves real business problems."}
				</p>
				
				<ul className="my-8 space-y-4">
					{items.map(i => 
						<li key={i} className="text-ink font-medium text-sm flex items-center gap-3">
							<span className={`flex items-center justify-center w-6 h-6 rounded-full ${learn ? "bg-primary-100 text-primary-700" : "bg-secondary-100 text-secondary-700"}`}>
								<Check size={14} strokeWidth={3} />
							</span>
							{i}
						</li>
					)}
				</ul>
			</div>

			{/* Footer Action */}
			<div className="relative z-20 mt-auto pt-4">
				<Button variant={learn ? "primary" : "secondary"} to={learn ? "courses": "products"} className="shadow-lg">
					{learn ? "All Courses" : "Build with us"}
					<ArrowUpRight className="ml-1" size={18} />
				</Button>
			</div>

			{/* Render Humanoid SVG Illustrations based on type */}
			{learn ? <LearnIllustration /> : <BuildIllustration />}
			
		</article>
	);
}

function LearnBuildSection() {
	return (
		<Section className="py-24 bg-white w-full overflow-hidden">
			
			{/* Animated Heading Section */}
			<motion.div 
				variants={staggerChildren}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, margin: "-10%" }} // <--- This triggers the slide in/out continuously
				className="flex flex-col items-center justify-center col-span-1 mb-16"
			>
				<motion.span variants={slideUpVariant} className="inline-block text-primary-600 font-black uppercase tracking-widest text-sm mb-4 bg-primary-50 px-4 py-1.5 rounded-full border border-primary-100">
					What we do
				</motion.span>
				<motion.h2 variants={slideUpVariant} className="text-4xl lg:text-5xl text-center font-bold text-ink max-w-2xl leading-tight">
					One Partner. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Two ways to move technology forward.</span>
				</motion.h2>
			</motion.div>

			{/* Cards Grid */}
			<div className="relative max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 px-4 lg:px-0">
				
				{/* Center Floating Plus Icon */}
				<div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
					<div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-slate-900 shadow-xl font-mono text-lg font-bold text-white">
						+
					</div>
				</div>

				{/* Learn Card Wrap */}
				<motion.div
					variants={slideUpVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, margin: "-10%" }}
					className="h-full"
				>
					<ServiceCard type="learn" />
				</motion.div>

				{/* Build Card Wrap */}
				<motion.div
					variants={slideUpVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, margin: "-10%" }}
					transition={{ delay: 0.15 }} // Stagger the second card slightly
					className="h-full"
				>
					<ServiceCard type="build" />
				</motion.div>
			</div>
		</Section>
	);
}

export default LearnBuildSection;