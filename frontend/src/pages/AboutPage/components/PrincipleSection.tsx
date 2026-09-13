import {
  Blocks,
  Heart,
  Lightbulb,
  Rocket,
} from "lucide-react";

import Section from "../../../components/common/Section";
import SectionHeading from "../../../components/common/SectionHeading";

const principles = [
  {
    number: "01",
    title: "Practical",
    description:
      "We focus on skills and technology that can actually be applied.",
    icon: Blocks,
  },
  {
    number: "02",
    title: "Curious",
    description:
      "We keep learning, questioning and exploring what technology can do.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Human",
    description:
      "Technology exists to help people, not to make things unnecessarily complicated.",
    icon: Heart,
  },
  {
    number: "04",
    title: "Impact-driven",
    description:
      "The goal is not simply to build something. The goal is to make it useful.",
    icon: Rocket,
  },
];

function PrinciplesSection() {
  return (
    <Section className="bg-surface">
      <SectionHeading
        eyebrow="Our principles"
        title="How we think about technology."
        description="These principles shape how we teach, how we build and how we work with people."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle) => {
          const Icon = principle.icon;

          return (
            <div
              key={principle.number}
              className="group rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-primary-dark">
                  {principle.number}
                </span>

                <Icon
                  size={21}
                  className="text-primary-dark transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-12 font-heading text-xl font-bold text-dark">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                {principle.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default PrinciplesSection;