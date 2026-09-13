import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import Container from "../../../components/common/Container";

function FinalCTA() {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:pb-32">
      <Container className="px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-dark px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-20"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border-[40px] border-primary/10" />

          <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Learn. Build. Create.
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your next idea starts here.
          </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Start learning, start building, or bring us your next
              technology challenge.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-white"
              >
                Start Learning
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white bg-white/100 transition-colors hover:bg-white/10"
              >
                Build With Us
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default FinalCTA;