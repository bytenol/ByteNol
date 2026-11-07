import Section from "../../../components/common/Section";

const principles = [
  {
    title: "Useful",
    description: "Every feature should solve a real problem.",
  },
  {
    title: "Simple",
    description: "Complex systems should still feel easy to use.",
  },
  {
    title: "Reliable",
    description: "Software should work when people need it.",
  },
  {
    title: "Scalable",
    description: "Products should be able to grow with their users.",
  },
];

function ProductPhilosophy() {
  return (
    <Section className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
            Product philosophy
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
            Technology should feel useful.
          </h2>

          <p className="mt-5 max-w-lg leading-7 text-muted">
            We care about what happens after software is launched. If people
            can't understand it, trust it or benefit from it, we've missed the
            point.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-border bg-white p-7"
            >
              <h3 className="font-heading text-xl font-bold text-dark">
                {principle.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ProductPhilosophy;