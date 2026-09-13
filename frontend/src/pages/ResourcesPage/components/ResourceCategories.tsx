import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

import Container from "../../../components/common/Container";
import Section from "../../../components/common/Section";

const categories = [
  {
    icon: Code2,
    title: "Coding & Development",
    description:
      "Programming concepts, frameworks, tools and development techniques.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Technology & Business",
    description:
      "Ideas for using software and technology to solve real business problems.",
  },
  {
    icon: Lightbulb,
    title: "Projects & Tutorials",
    description:
      "Practical guides that take you from an idea to something you can build.",
  },
  {
    icon: GraduationCap,
    title: "Career & Learning",
    description:
      "Learning strategies, career guidance and practical developer advice.",
  },
];

function ResourceCategories() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
            Explore
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
            Find something worth learning.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.title}
                href="#resources"
                className="group rounded-3xl border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary-dark transition group-hover:bg-primary group-hover:text-dark">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold text-dark">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {category.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-primary-dark">
                  Explore →
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default ResourceCategories;