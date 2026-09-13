import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../../components/common/Container";
import AboutHeroIllustration from "./AboutIllustration";


function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-primary-light/50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container className="relative grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-dark">
            About Us
          </p>

          <h1 className="font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-dark sm:text-6xl lg:text-7xl">
            We help technology move you forward.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-muted sm:text-lg">
            ByteNol helps people learn practical technology skills and helps
            organizations turn ideas into software that works.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-dark transition-colors hover:border-primary-dark hover:text-primary-dark"
            >
              Explore learning
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-dark transition-colors hover:border-primary-dark hover:text-primary-dark"
            >
              Work with us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <AboutHeroIllustration />
        </motion.div>
      </Container>
    </section>
  );
}

export default AboutHero;