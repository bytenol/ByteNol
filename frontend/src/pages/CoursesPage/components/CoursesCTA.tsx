import { ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../../components/common/Container";
import Section from "../../../components/common/Section";

function CoursesCTA() {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-dark px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[45px] border-primary/20" />

          <div className="absolute -bottom-24 left-20 h-64 w-64 rounded-full border-[50px] border-primary/10" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-dark">
                <Code2 size={22} />
              </div>

              <h2 className="mt-6 max-w-2xl font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Your next project could start here.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Learn the skills, build the projects and develop the
                confidence to create software that solves real problems.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-dark transition hover:bg-white"
            >
              Talk to ByteNol
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default CoursesCTA;