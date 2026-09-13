import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import Container from "../../../components/common/Container";

function CoursesCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-dark px-7 py-14 sm:px-12 lg:px-16">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary-dark/30 blur-3xl" />

          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-dark text-white">
                <Code2 size={21} />
              </div>

              <h2 className="mt-6 max-w-xl font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Don't just learn code.
                <br />
                <span className="text-primary">
                  Learn to build.
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                Choose a path, start learning and turn what you learn into
                something real.
              </p>

              <Link
                to="#courses"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-dark transition hover:-translate-y-0.5 hover:bg-primary-light"
              >
                Explore courses
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="relative hidden h-64 lg:block">
              <motion.div
                className="absolute right-16 top-4 rounded-2xl bg-white px-5 py-3 shadow-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [2, -2, 2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={17} className="text-primary-dark" />
                  <span className="font-bold text-dark">Learn</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute right-32 top-28 rounded-2xl bg-primary-dark px-6 py-3 font-bold text-white shadow-xl"
                animate={{
                  y: [0, 9, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
              >
                Build
              </motion.div>

              <motion.div
                className="absolute bottom-5 right-0 rounded-2xl border border-white/10 bg-slate-800 px-6 py-3 font-bold text-white shadow-xl"
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
              >
                Create
              </motion.div>

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 500 260"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M35 220C110 160 120 230 190 165C255 105 292 170 345 108C385 62 414 100 475 38"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  strokeDasharray="8 10"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CoursesCTA;