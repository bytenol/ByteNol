import {
  Braces,
  Database,
  GitBranch,
  Globe,
  Terminal,
} from "lucide-react";

import Container from "../../../components/common/Container";
import Section from "../../../components/common/Section";

const tools = [
  {
    icon: Braces,
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    icon: Globe,
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Web APIs"],
  },
  {
    icon: Database,
    title: "Backend",
    items: ["Django", "REST APIs", "Databases", "Authentication"],
  },
  {
    icon: Terminal,
    title: "Developer tools",
    items: ["Git", "GitHub", "Terminal", "VS Code"],
  },
];

function DeveloperToolkit() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
            Developer toolkit
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
            Tools worth knowing.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            Explore the technologies and tools that help developers turn
            ideas into working software.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.title}
                className="rounded-3xl border border-border bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary-dark">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-dark">
                  {tool.title}
                </h3>

                <div className="mt-5 space-y-2.5">
                  {tool.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <GitBranch size={14} className="text-primary-dark" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default DeveloperToolkit;