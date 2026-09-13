import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Section from "../../../components/common/Section";

function AboutCTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] bg-dark px-8 py-16 text-center sm:px-12 lg:py-20">
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border-[35px] border-white/5" />

        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full border-[45px] border-primary/10" />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Learn. Build. Create.
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's build something useful.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
            Whether you're learning your first programming language or solving
            a technology challenge, there's a place for you at ByteNol.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-dark transition-colors hover:bg-sky-300"
            >
              Start learning
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Work with us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutCTA;