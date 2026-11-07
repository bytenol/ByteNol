import {
  ArrowRight,
  Hammer,
  Lightbulb,
  RefreshCw,
} from "lucide-react";

import Section from "../../../components/common/Section";
import SectionHeading from "../../../components/common/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the people, problem and environment before deciding what to build.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn the idea into a reliable product through thoughtful design and engineering.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Improve",
    description:
      "Keep learning from real usage and continuously make the product better.",
    icon: RefreshCw,
  },
];

function ProductProcess() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our approach"
        title="Products should evolve with the people using them."
        description="We think beyond the first release. Good software gets better as we learn."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.number} className="relative">
              <div className="rounded-[1.75rem] border border-border bg-white p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-primary-dark">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary-dark">
                    <Icon size={21} />
                  </div>
                </div>

                <h3 className="mt-12 font-heading text-2xl font-bold text-dark">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-primary-dark lg:block"
                  size={22}
                />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default ProductProcess;