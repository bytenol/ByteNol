import { ArrowDown, Sparkles } from "lucide-react";

import Container from "../../../components/common/Container";
import CoursesHeroIllustration from "./CoursesHeroIllustration";

function CoursesHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24">
      <div className="absolute left-0 top-20 -z-10 h-80 w-80 rounded-full bg-primary-light blur-3xl" />

      <div className="absolute right-0 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-50 blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark">
              <Sparkles size={16} />
              ByteNol Academy
            </div>

            <h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-tight text-dark sm:text-6xl lg:text-7xl">
              Learn skills.
              <span className="block text-primary-dark">
                Build real things.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Practical technology courses designed to take you from
              learning concepts to building software you can actually use.
            </p>

            <a
              href="#courses"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-dark px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-dark-soft"
            >
              Explore courses
              <ArrowDown size={17} />
            </a>
          </div>

          <CoursesHeroIllustration />
        </div>
      </Container>
    </section>
  );
}

export default CoursesHero;