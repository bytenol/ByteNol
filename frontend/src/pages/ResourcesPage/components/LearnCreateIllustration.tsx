import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Learn",
  },
  {
    number: "02",
    title: "Experiment",
  },
  {
    number: "03",
    title: "Build",
  },
];

function LearnCreateIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      <div className="absolute left-8 right-8 top-1/2 h-px bg-border" />

      <div className="relative grid gap-5">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            className={`relative flex items-center gap-5 rounded-3xl border border-border bg-white p-5 shadow-lg ${
              index === 1 ? "ml-10 sm:ml-16" : ""
            }`}
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-light font-heading text-lg font-bold text-primary-dark">
              {step.number}
            </div>

            <div>
              <p className="font-heading text-xl font-bold text-dark">
                {step.title}
              </p>

              <div className="mt-2 h-2 w-32 rounded-full bg-slate-100" />
            </div>

            {index < steps.length - 1 && (
              <div className="absolute -bottom-5 left-[45px] h-5 w-px bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LearnCreateIllustration;