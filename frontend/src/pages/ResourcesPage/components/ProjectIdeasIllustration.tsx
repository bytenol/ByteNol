import { motion } from "motion/react";

function ProjectIdeasIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto aspect-square w-full max-w-[520px]"
    >
      <div className="absolute inset-[12%] rounded-[3rem] bg-primary-light" />

      {/* Main project board */}
      <div className="absolute left-[16%] top-[18%] w-[68%] rounded-3xl border border-border bg-white p-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-3 w-24 rounded-full bg-dark" />
            <div className="mt-2 h-2 w-36 rounded-full bg-slate-200" />
          </div>

          <div className="h-9 w-9 rounded-xl bg-primary-light" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="h-28 rounded-2xl bg-primary-light" />
          <div className="h-28 rounded-2xl bg-slate-50" />
        </div>

        <div className="mt-4 h-20 rounded-2xl bg-dark p-4">
          <div className="h-2 w-24 rounded-full bg-primary" />
          <div className="mt-3 h-2 w-40 rounded-full bg-slate-700" />
        </div>
      </div>

      {/* Floating components */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[5%] bottom-[21%] rounded-2xl border border-border bg-white px-5 py-4 shadow-xl"
      >
        <span className="font-mono text-xl font-bold text-primary-dark">
          {"{}"}
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute right-[4%] top-[18%] rounded-2xl bg-dark px-5 py-4 font-mono text-sm text-primary shadow-xl"
      >
        npm run build
      </motion.div>

      <div className="absolute bottom-[9%] right-[21%] flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-dark">
        +
      </div>
    </motion.div>
  );
}

export default ProjectIdeasIllustration;