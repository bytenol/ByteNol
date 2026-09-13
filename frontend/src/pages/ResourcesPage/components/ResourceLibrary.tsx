import Container from "../../../components/common/Container";
import Section from "../../../components/common/Section";
import ResourceCard, { type Resource } from "./ResourceCard";

const resources: Resource[] = [
  {
    title: "Understanding how APIs connect applications",
    description:
      "A practical introduction to APIs and how different pieces of software communicate.",
    category: "Development",
    readTime: "8 min",
    type: "Article",
  },
  {
    title: "From idea to your first software project",
    description:
      "A practical framework for taking a project from a rough idea to a working prototype.",
    category: "Projects",
    readTime: "12 min",
    type: "Guide",
  },
  {
    title: "Why learning by building works",
    description:
      "Understand why practical projects can turn programming concepts into lasting skills.",
    category: "Learning",
    readTime: "6 min",
    type: "Article",
  },
  {
    title: "Choosing the right technology for a project",
    description:
      "A simple way to think about languages, frameworks and tools before you start building.",
    category: "Technology",
    readTime: "9 min",
    type: "Guide",
  },
  {
    title: "Your first real-world coding project",
    description:
      "Ideas and principles for moving beyond small exercises and building useful software.",
    category: "Projects",
    readTime: "10 min",
    type: "Tutorial",
  },
  {
    title: "A better way to approach learning programming",
    description:
      "Build a learning process around understanding, practice, experimentation and iteration.",
    category: "Career",
    readTime: "7 min",
    type: "Article",
  },
];

function ResourceLibrary() {
  return (
    <Section id="resources" className="bg-surface">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
              Resource library
            </p>

            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              Latest resources.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "Tutorials", "Articles", "Projects", "Career"].map(
              (filter, index) => (
                <button
                  key={filter}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    index === 0
                      ? "bg-dark text-white"
                      : "border border-border bg-white text-muted hover:border-primary-dark hover:text-primary-dark"
                  }`}
                >
                  {filter}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-dark transition hover:border-primary-dark hover:text-primary-dark">
            Load more resources
          </button>
        </div>
      </Container>
    </Section>
  );
}

export default ResourceLibrary;