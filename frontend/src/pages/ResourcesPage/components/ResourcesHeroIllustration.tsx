import { motion } from "motion/react";

function ResourcesHeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto aspect-square w-full max-w-[620px]"
    >
      <div className="absolute inset-[12%] rounded-full border border-primary/30" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[5%] rounded-full border border-dashed border-primary/30"
      />

      {/* Main knowledge board */}
      <div className="absolute left-[14%] top-[18%] w-[72%] rounded-3xl border border-border bg-white p-4 shadow-2xl shadow-slate-200/70 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          </div>

          <div className="h-2 w-16 rounded-full bg-slate-100" />
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <div className="mb-5 h-3 w-28 rounded-full bg-primary/50" />

          <div className="space-y-2.5">
            <div className="h-2.5 w-full rounded-full bg-slate-200" />
            <div className="h-2.5 w-[88%] rounded-full bg-slate-200" />
            <div className="h-2.5 w-[68%] rounded-full bg-slate-200" />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="h-20 rounded-xl bg-white shadow-sm" />
            <div className="h-20 rounded-xl bg-primary-light" />
            <div className="h-20 rounded-xl bg-white shadow-sm" />
          </div>
        </div>
      </div>

      {/* Code card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[13%] left-[2%] w-48 rounded-2xl bg-dark p-4 shadow-xl"
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xs text-slate-500">~/learn</span>
        </div>

        <div className="space-y-2 font-mono text-[10px]">
          <p className="text-primary">const</p>
          <p className="pl-3 text-white">knowledge = [];</p>
          <p className="text-slate-400">
            knowledge.push(
            <span className="text-primary">build</span>
            );
          </p>
        </div>
      </motion.div>

      {/* Book */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [3, 5, 3] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[4%] top-[13%] flex h-24 w-24 rotate-3 items-center justify-center rounded-2xl bg-primary shadow-lg"
      >
        <div className="h-14 w-10 rounded-md bg-white shadow-sm">
          <div className="mx-2 mt-4 h-1.5 rounded-full bg-primary/40" />
          <div className="mx-2 mt-2 h-1 rounded-full bg-slate-200" />
          <div className="mx-2 mt-2 h-1 rounded-full bg-slate-200" />
        </div>
      </motion.div>

      {/* Floating code symbol */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] bottom-[22%] flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-white text-3xl font-bold text-primary-dark shadow-xl"
      >
        {"</>"}
      </motion.div>

      {/* Knowledge dots */}
      <div className="absolute left-[18%] top-[7%] h-4 w-4 rounded-full bg-primary" />
      <div className="absolute right-[25%] bottom-[7%] h-3 w-3 rounded-full bg-primary-dark" />
      <div className="absolute left-[5%] top-[47%] h-2.5 w-2.5 rounded-full bg-slate-300" />
    </motion.div>
  );
}

export default ResourcesHeroIllustration;