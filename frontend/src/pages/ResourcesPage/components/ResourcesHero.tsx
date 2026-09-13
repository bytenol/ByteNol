import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../../components/common/Container";
import ResourcesHeroIllustration from "./ResourcesHeroIllustration";

function ResourcesHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24">
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-primary-light blur-3xl" />
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-sky-50 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark">
              <BookOpen size={16} />
              ByteNol Resources
            </div>

            <h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-tight text-dark sm:text-6xl lg:text-7xl">
              Learn something.
              <span className="block text-primary-dark">
                Build something.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Practical guides, tutorials, project ideas and technology
              insights to help you understand technology and turn what you
              learn into something real.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#resources"
                className="inline-flex items-center gap-2 rounded-xl bg-dark px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-dark-soft"
              >
                Explore resources
                <ArrowRight size={17} />
              </a>

              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-dark transition hover:border-primary-dark hover:text-primary-dark"
              >
                Start learning
              </Link>
            </div>
          </div>

          <div className="relative">
            <ResourcesHeroIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ResourcesHero;