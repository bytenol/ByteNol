import { motion } from "motion/react";
import { Terminal, Circle } from "lucide-react";

function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.25,
      }}
      className="relative w-full max-w-xl"
    >
      {/* Decorative glow */}
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary-light blur-3xl" />

      {/* Window */}
      <div className="overflow-hidden rounded-3xl border border-border bg-dark shadow-2xl">
        {/* Window header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <Circle
              size={9}
              className="fill-red-400 text-red-400"
            />
            <Circle
              size={9}
              className="fill-yellow-400 text-yellow-400"
            />
            <Circle
              size={9}
              className="fill-green-400 text-green-400"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Terminal size={13} />
            <span>bytenol.tsx</span>
          </div>

          <div className="w-10" />
        </div>

        {/* Code */}
        <div className="overflow-x-auto p-6 font-mono text-sm leading-7 sm:p-8">
          <div className="flex">
            <span className="mr-5 select-none text-slate-600">
              01
            </span>

            <span>
              <span className="text-sky-400">const</span>{" "}
              <span className="text-white">ByteNol</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-sky-300">{"{"}</span>
            </span>
          </div>

          <div className="flex">
            <span className="mr-5 select-none text-slate-600">
              02
            </span>

            <span className="pl-4">
              <span className="text-sky-300">mission</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-emerald-300">
                "Build the future"
              </span>
              <span className="text-slate-400">,</span>
            </span>
          </div>

          <div className="flex">
            <span className="mr-5 select-none text-slate-600">
              03
            </span>

            <span className="pl-4">
              <span className="text-sky-300">learn</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-orange-300">true</span>
              <span className="text-slate-400">,</span>
            </span>
          </div>

          <div className="flex">
            <span className="mr-5 select-none text-slate-600">
              04
            </span>

            <span className="pl-4">
              <span className="text-sky-300">create</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-orange-300">true</span>
              <span className="text-slate-400">,</span>
            </span>
          </div>

          <div className="flex">
            <span className="mr-5 select-none text-slate-600">
              05
            </span>

            <span className="pl-4">
              <span className="text-sky-300">impact</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-orange-300">true</span>
              <span className="text-slate-400">,</span>
            </span>
          </div>

          <div className="flex">
            <span className="mr-5 select-none text-slate-600">
              06
            </span>

            <span>
              <span className="text-sky-300">{"}"}</span>
              <span className="text-slate-400">;</span>
            </span>
          </div>

          <div className="mt-4 flex">
            <span className="mr-5 select-none text-slate-600">
              07
            </span>

            <span>
              <span className="text-sky-400">export default</span>{" "}
              <span className="text-white">ByteNol</span>
              <span className="text-slate-400">;</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="ml-1 inline-block h-4 w-2 translate-y-1 bg-sky-300"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.9,
        }}
        className="absolute -bottom-6 -left-5 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:-left-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light">
            <span className="font-heading font-bold text-primary-dark">
              &lt;/&gt;
            </span>
          </div>

          <div>
            <p className="text-xs font-medium text-muted">
              Learn by
            </p>
            <p className="text-sm font-bold text-dark">
              Building
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating status */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.1,
        }}
        className="absolute -right-3 -top-5 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:-right-8"
      >
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

          <span className="text-xs font-semibold text-dark">
            Building the future
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default CodeWindow;
