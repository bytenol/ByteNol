import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

interface ErrorLayoutProps {
  code: string;
  title: string;
  description: string;
  illustration: ReactNode;
}

function ErrorLayout({
  code,
  title,
  description,
  illustration,
}: ErrorLayoutProps) {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light/70 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Content */}
        <div className="order-2 max-w-xl lg:order-1">
          <p className="font-heading text-7xl font-bold tracking-tight text-primary-dark sm:text-8xl">
            {code}
          </p>

          <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-dark transition-colors hover:border-primary-dark hover:text-primary-dark"
            >
              <ArrowLeft size={17} />
              Go back
            </button>
          </div>
        </div>

        {/* Illustration */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          {illustration}
        </div>
      </div>
    </main>
  );
}

export default ErrorLayout;