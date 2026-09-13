import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import Container from "../../../components/common/Container";
import CoursesHeroIllustration from "./CoursesHeroIllustration";

function CoursesHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-sky-50 blur-3xl" />

        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-primary-light blur-3xl" />

        <svg
          className="absolute right-0 top-24 hidden w-[500px] opacity-30 lg:block"
          viewBox="0 0 500 200"
          fill="none"
        >
          <path
            d="M0 150C90 40 160 190 250 100C330 20 390 130 500 30"
            stroke="#87CEFA"
            strokeWidth="2"
            strokeDasharray="8 12"
          />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid min-h-[650px] items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary-light px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-dark">
              <Sparkles size={14} />
              ByteNol Academy
            </div>

            <h1 className="mt-7 max-w-2xl font-heading text-5xl font-bold leading-[0.98] tracking-tight text-dark sm:text-6xl lg:text-7xl">
              Learn skills.
              <br />
              <span className="text-primary-dark">Build real things.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Practical courses designed to take you from learning concepts
              to building things that actually work.
            </p>

            <motion.a
              href="#courses"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-primary-dark px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition-colors hover:bg-primary-bright"
            >
              Explore courses
              <ArrowDown size={18} />
            </motion.a>
          </motion.div>

          <CoursesHeroIllustration />
        </div>
      </Container>
    </section>
  );
}

export default CoursesHero;