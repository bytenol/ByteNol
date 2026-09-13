import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "../../../components/common/Container";
import Section from "../../../components/common/Section";
import ProjectIdeasIllustration from "./ProjectIdeasIllustration";

const ideas = [
  "Portfolio website",
  "Task management app",
  "School management system",
  "Data dashboard",
];

function ProjectIdeas() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
              Build something
            </p>

            <h2 className="mt-4 max-w-xl font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              What will you build next?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Reading is only the beginning. Put your knowledge to work by
              building projects that challenge you to think, experiment and
              solve problems.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ideas.map((idea) => (
                <div
                  key={idea}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-primary-dark"
                  />

                  <span className="text-sm font-semibold text-dark">
                    {idea}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#resources"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark"
            >
              Explore project ideas
              <ArrowRight size={17} />
            </a>
          </div>

          <ProjectIdeasIllustration />
        </div>
      </Container>
    </Section>
  );
}

export default ProjectIdeas;