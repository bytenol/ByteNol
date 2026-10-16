import {
	ArrowUpRight,
	Book,
	BriefcaseBusiness,
	Check,
} from "lucide-react";
import { motion } from "motion/react";


import Section from "../../../components/common/Section";
import Button from "../../../components/ui/Button";



function ServiceCard({ type }: { type: "learn" | "build" }) {
	const learn = type === "learn";
	const items = learn ? ["Project-based curriculum", "Expert feedback and support", "Career-ready certificates"]
		: ["Web and mobile applications", "Product design and strategy", "Long-term technical support"];

	return (
		<article className={`px-5 pt-10 pb-5 bg-white w-full shadow-lg rounded-xl border border-primary-200`}>

			{/* <div className="absolute z-0 top-20/100 left-60/100 w-50 h-50 bg-primary-600/60 rounded-full" /> */}

			<div className={`flex mb-10 items-center justify-content  text-center w-[58px] h-[58px] rounded-xl ${type === "learn" ? "bg-primary-200" : "bg-secondary-200"}`}>
				{
					type === "learn" ? <Book size={30} className="text-primary-900" /> :
						<BriefcaseBusiness size={30} className="text-secondary-900 text-center" />
				}
			</div>
			<span className={`font-bold ${type === "learn" ? "text-primary-500": "text-secondary-500"}`}>
				{learn ? "For learners" : "For businesses"}
			</span>
			<h3 className="text-muted py-2">
				{learn ? "Learn skills that matter" : "Build solutions that work"}
			</h3>
			<p className="">
				{learn ? "Practical, mentor-led courses built around the tools and workflows used by real product teams." : "From first sketch to launch and beyond, we design and engineer software that solves real business problems."}</p>
			<ul className="my-2">
				{items.map(i => 
					<li key={i} className="text-muted m-2 flex gap-2">
						<Check className="text-secondary-900 font-bold bg-slate-200 rounded-full" /> {i}
					</li>)}
			</ul>
			<Button variant={type === "learn" ? "primary" : "secondary"}>
				Learn More
				<ArrowUpRight />
			</Button>
		</article>);
}


function LearnBuildSection() {
	return (
		<Section className="flex items-center justify-content col-span-1 bg-white w-full">
			<div className="col-span-1">
				<h1 className="text-center text-primary-500 font-bold text-xl">
					What we do
				</h1>
				<p className="text-lg lg:text-5xl text-center">
					One Partner. Two ways to move technology forward
				</p>
			</div>

			<div className="relative mt-14 grid gap-6 lg:grid-cols-2">
				<div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
					<div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-surface bg-secondary-500 font-mono text-xs font-bold text-white">
						+
					</div>
				</div>

				{/* Learn */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="group relative min-h-[430px] overflow-hidden rounded-[2rem] transition-all duration-300 sm:p-10 hover:-translate-y-1"
				>

					<ServiceCard type="learn" />

				</motion.div>

				{/* Build */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="group relative min-h-[430px] overflow-hidden rounded-[2rem] bg-dark p-8 text-white transition-all duration-300 hover:-translate-y-1 sm:p-10"
				>
					<ServiceCard type="build" />
				</motion.div>
			</div>
		</Section>
	);
}

export default LearnBuildSection;