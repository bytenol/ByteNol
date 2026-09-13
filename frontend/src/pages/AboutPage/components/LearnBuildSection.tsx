import { ArrowRight, GraduationCap, Laptop } from "lucide-react";
import { motion } from "motion/react";

import Section from "../../../components/common/Section";

function LearnBuildSection() {
  return (
    <Section>
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
          className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-dark p-8 text-white sm:p-10"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[35px] border-white/5" />

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-dark">
              <GraduationCap size={24} />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Learn
            </p>

            <h2 className="mt-3 max-w-md font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Turn curiosity into capability.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Learn programming by not simply memorizing syntax.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Courses & learning paths
              <ArrowRight size={17} />
            </div>
          </div>

          <div className="absolute bottom-7 right-8 font-mono text-xs text-slate-500">
            learn → build → repeat
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
          className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-border bg-primary-light p-8 sm:p-10"
        >
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border-[45px] border-primary/30" />

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-dark text-primary">
              <Laptop size={24} />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
              Build
            </p>

            <h2 className="mt-3 max-w-md font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Turn ideas into useful technology.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-muted">
              We help organizations design, build and improve software that
              solves real operational and business problems.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark">
              Explore solutions
              <ArrowRight size={17} />
            </div>
          </div>

          <div className="absolute bottom-7 right-8 font-mono text-xs text-primary-dark/50">
            idea → product → impact
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default LearnBuildSection;