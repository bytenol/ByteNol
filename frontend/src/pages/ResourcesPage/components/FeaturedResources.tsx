import { ArrowUpRight, Clock3 } from "lucide-react";

import Container from "../../../components/common/Container";
import Section from "../../../components/common/Section";

function FeaturedResource() {
  return (
    <Section>
      <Container>
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
            Start here
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
            A good place to begin.
          </h2>
        </div>

        <article className="overflow-hidden rounded-[2rem] border border-border bg-dark">
          <div className="grid lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-primary px-3 py-1 font-semibold text-dark">
                  Development
                </span>

                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock3 size={15} />
                  10 min read
                </span>
              </div>

              <h3 className="mt-7 max-w-xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Build your understanding before you build your application.
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Great software starts with understanding the problem,
                choosing the right tools and knowing why you're building
                something in the first place.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-dark transition hover:bg-primary"
              >
                Read the guide
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="relative min-h-[320px] overflow-hidden bg-primary-light">
              <div className="absolute inset-8 rounded-3xl border border-primary/30" />

              <div className="absolute left-[15%] top-[20%] w-[70%] rounded-2xl border border-border bg-white p-5 shadow-xl">
                <div className="mb-4 h-3 w-24 rounded-full bg-primary/60" />

                <div className="space-y-3">
                  <div className="h-2 rounded-full bg-slate-200" />
                  <div className="h-2 w-[80%] rounded-full bg-slate-200" />
                  <div className="h-2 w-[60%] rounded-full bg-slate-200" />
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-xl bg-primary-light" />
                  <div className="h-20 rounded-xl bg-slate-50" />
                </div>
              </div>

              <div className="absolute bottom-[13%] left-[9%] rounded-xl bg-dark px-4 py-3 font-mono text-xs text-primary">
                learn();
              </div>

              <div className="absolute right-[10%] top-[14%] flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-primary-dark shadow-lg">
                {"{}"}
              </div>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}

export default FeaturedResource;