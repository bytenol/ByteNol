import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../../components/common/Container";
import Section from "../../../components/common/Section";
import LearnCreateIllustration from "./LearnCreateIllustration";

function LearnCreateSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr]">
          <LearnCreateIllustration />

          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
              The ByteNol approach
            </p>

            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              Don't just consume. Create.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              The best way to understand technology is to use it. Our
              resources are designed to help you move from concepts to
              experiments, and from experiments to working projects.
            </p>

            <Link
              to="/courses"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-dark px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-dark-soft"
            >
              Start learning
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default LearnCreateSection;