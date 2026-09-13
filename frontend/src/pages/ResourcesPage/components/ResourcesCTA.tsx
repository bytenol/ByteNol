import { ArrowRight, Mail } from "lucide-react";

import Container from "../../../components/common/Container";
import Section from "../../../components/common/Section";

function ResourcesCTA() {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/20" />
          <div className="absolute -bottom-32 left-20 h-64 w-64 rounded-full border-[50px] border-white/10" />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-dark shadow-lg">
              <Mail size={23} />
            </div>

            <h2 className="mt-7 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              Keep learning with ByteNol.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-dark/70">
              Get new tutorials, project ideas and technology insights as
              ByteNol grows.
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-xl border border-white/70 bg-white px-5 py-3.5 text-sm text-dark outline-none placeholder:text-muted focus:border-dark"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-dark px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-dark-soft"
              >
                Subscribe
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ResourcesCTA;