import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Section from "../../../components/common/Section";

function ProductsCTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] bg-dark px-8 py-16 text-center sm:px-12 lg:py-20">
        <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full border-[35px] border-white/5" />

        <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full border-[45px] border-primary/10" />

        {/* Floating code decoration */}
        <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs text-primary lg:block">
          {"<build />"}
        </div>

        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs text-primary lg:block">
          {"{ impact: true }"}
        </div>

        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Need something different?
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's build it together.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
            If the right product doesn't exist yet, ByteNol can help you turn
            your idea into one.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-dark transition-colors hover:bg-sky-300"
          >
            Talk to ByteNol
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default ProductsCTA;