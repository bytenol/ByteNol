import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Container from "../../../components/common/Container";
import FullStackNodeLearnIllust from "../../../features/courses/components/course-cards/FullStackNodeLearnIllust";
import MobileLearnIllust from "../../../features/courses/components/course-cards/MobileLearnIllust";
import AutomateLearnIllust from "../../../features/courses/components/course-cards/AutomateLearnIllust";

// Stagger container for continuous scrolling animation
const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
};

export default function PopularCourses() {
	return (
		<section className="section section-tint py-24 bg-surface overflow-hidden">
			<Container>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, margin: "-10%" }}
					className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
				>
					<div>
						<span className="eyebrow text-brand-600 font-bold uppercase tracking-wider text-sm mb-2 block">
							Top Rated
						</span>
						<h2 className="text-4xl lg:text-5xl font-bold text-ink">
							Popular Courses
						</h2>
					</div>
					<a
						href="/courses"
						className="flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors mb-2"
					>
						View all courses <ArrowRight size={18} />
					</a>
				</motion.div>

				{/* Card Grid */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, margin: "-10%" }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					<FullStackNodeLearnIllust />
					<MobileLearnIllust />
					<AutomateLearnIllust />
					
				</motion.div>
			</Container>
		</section>
	);
}
