import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

import Section from "../../../components/common/Section";
import SectionHeading from "../../../components/common/SectionHeading";
import { Link } from "react-router-dom";

function StorySection() {
  return (
    <Section className="bg-surface">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Who we are"
          title="Built around a simple idea."
          description="Technology becomes more powerful when people understand how to use it and organizations know how to apply it."
        />

        <div className="space-y-6">
          <p className="text-lg leading-8 text-dark">
            ByteNol exists at the intersection of <strong>learning</strong>{" "}
            and <strong>building</strong>.
          </p>

          <p className="leading-8 text-muted">
            We teach people how technology works, how to write software, and
            how to turn ideas into real projects. At the same time, we work
            with organizations that need technology to solve practical
            problems.
          </p>

          <p className="leading-8 text-muted">
            That means we're not interested in technology for technology's
            sake. We care about what people can actually create with it.
          </p>

          <div className="grid gap-4 pt-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary-dark">
                <Code2 size={22} />
              </div>

              <h3 className="font-heading text-xl font-bold text-dark">
                Learn
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                Practical coding education built around understanding,
                experimentation and real projects.
              </p>

              <Link
                to="/courses"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-dark"
              >
                Explore learning
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary-dark">
                <Sparkles size={22} />
              </div>

              <h3 className="font-heading text-xl font-bold text-dark">
                Build
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                Software and technology solutions designed around real
                organizational needs.
              </p>

              <Link
                to="/solutions"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-dark"
              >
                Explore solutions
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default StorySection;