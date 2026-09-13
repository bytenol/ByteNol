import { motion } from "motion/react";

function ApplicationIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mx-auto aspect-square max-w-[400px] overflow-hidden rounded-[2rem] bg-primary-light"
    >
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30" />

      <div className="absolute left-[20%] top-[20%] h-24 w-24 rounded-3xl bg-white shadow-xl" />

      <div className="absolute right-[17%] top-[17%] flex h-16 w-16 items-center justify-center rounded-2xl bg-dark font-mono text-xl text-primary shadow-xl">
        {"{}"}
      </div>

      <div className="absolute bottom-[20%] left-[17%] w-44 rounded-2xl border border-border bg-white p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold">
            BN
          </div>

          <div>
            <div className="h-2.5 w-20 rounded-full bg-dark" />
            <div className="mt-2 h-2 w-14 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="mt-4 h-2 rounded-full bg-slate-100" />
        <div className="mt-2 h-2 w-[75%] rounded-full bg-slate-100" />
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[14%] right-[16%] flex h-20 w-20 items-center justify-center rounded-full bg-primary font-heading text-2xl font-bold text-dark shadow-xl"
      >
        ✓
      </motion.div>

      <div className="absolute left-[12%] top-[48%] h-3 w-3 rounded-full bg-primary-dark" />
      <div className="absolute right-[10%] bottom-[42%] h-2.5 w-2.5 rounded-full bg-dark" />
    </motion.div>
  );
}

export default ApplicationIllustration;