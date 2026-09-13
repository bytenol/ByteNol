import { motion } from "motion/react";

function CoursesHeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto aspect-square w-full max-w-[600px]"
    >
      <div className="absolute inset-[10%] rounded-full bg-primary-light" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[5%] rounded-full border border-dashed border-primary/40"
      />

      {/* Main learning screen */}
      <div className="absolute left-[13%] top-[20%] w-[74%] rounded-3xl border border-border bg-white p-5 shadow-2xl sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          </div>

          <div className="h-2 w-20 rounded-full bg-slate-100" />
        </div>

        <div className="mt-5 rounded-2xl bg-slate-50 p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary font-heading font-bold text-dark">
              Py
            </div>

            <div>
              <div className="h-3 w-32 rounded-full bg-dark" />
              <div className="mt-2 h-2 w-24 rounded-full bg-slate-200" />
            </div>
          </div>

          <div className="mt-6 space-y-2.5">
            <div className="h-2.5 rounded-full bg-slate-200" />
            <div className="h-2.5 w-[85%] rounded-full bg-slate-200" />
            <div className="h-2.5 w-[65%] rounded-full bg-primary/40" />
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <div className="h-12 flex-1 rounded-xl bg-primary-light" />
          <div className="h-12 flex-1 rounded-xl bg-slate-50" />
          <div className="h-12 w-14 rounded-xl bg-dark" />
        </div>
      </div>

      {/* Floating Python */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-3, 2, -3] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] left-[2%] flex h-20 w-20 items-center justify-center rounded-2xl bg-dark font-heading text-2xl font-bold text-primary shadow-xl"
      >
        Py
      </motion.div>

      {/* Floating React */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[5%] top-[12%] flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-white text-xl font-bold text-primary-dark shadow-xl"
      >
        ⚛
      </motion.div>

      {/* Kotlin */}
      <div className="absolute bottom-[9%] right-[18%] flex h-14 w-14 items-center justify-center rounded-full bg-primary font-heading font-bold text-dark shadow-lg">
        K
      </div>

      {/* Code */}
      <div className="absolute left-[18%] top-[8%] rounded-xl bg-white px-4 py-3 font-mono text-xs text-primary-dark shadow-lg">
        {"<learn />"}
      </div>

      <div className="absolute right-[20%] bottom-[5%] h-3 w-3 rounded-full bg-primary-dark" />
    </motion.div>
  );
}

export default CoursesHeroIllustration;