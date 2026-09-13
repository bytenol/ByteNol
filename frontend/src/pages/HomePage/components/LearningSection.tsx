import {
  ArrowRight,
  Braces,
  CheckCircle2,
  GitBranch,
  Terminal,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import Section from "../../../components/common/Section";
import SectionHeading from "../../../components/common/SectionHeading";

const learningPoints = [
  "Learn by building real projects",
  "Develop practical programming skills",
  "Understand how technology works",
  "Progress from fundamentals to advanced concepts",
];

function LearningSection() {
  return (
    <Section id="learn">
      <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Learn"
            title="Don't just learn syntax. Learn how to build."
            description="Our learning experience help you learn the concepts, apply them, solve problems and gradually build the confidence to create things yourself."
          />

          <div className="mt-8 space-y-4">
            {learningPoints.map((point) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-primary-dark"
                />

                <span className="text-sm font-medium text-dark">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>

          <Link
            to="/courses"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-light border px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-dark-soft"
          >
            Explore courses
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-primary-light/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-5 sm:p-7">
            <div className="rounded-2xl bg-dark p-6 shadow-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Terminal size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Build a project
                    </p>
                    <p className="text-xs text-slate-500">
                      Learning in progress
                    </p>
                  </div>
                </div>

                <span className="text-xs text-emerald-400">
                  72%
                </span>
              </div>

              <div className="mt-6">
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <Braces size={19} className="text-primary" />
                  <p className="mt-4 text-sm font-semibold text-white">
                    Write code
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Practice the concepts
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <GitBranch size={19} className="text-primary" />
                  <p className="mt-4 text-sm font-semibold text-white">
                    Build projects
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Apply what you learn
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="font-mono text-xs text-primary">
                  ~/bytenol/project $ npm run build
                </p>

                <p className="mt-2 font-mono text-xs text-emerald-400">
                  ✓ Build completed successfully
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default LearningSection;