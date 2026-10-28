import { motion } from "motion/react";

export default function AmbitiousTeam() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-6 md:px-20 py-8 border-y border-line bg-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-muted">
        <span className="font-medium text-sm md:text-base whitespace-nowrap">
          Helping ambitious teams build better
        </span>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale">
          <strong className="text-xl font-black tracking-tighter">
            VARONA
          </strong>
          <strong className="text-xl font-bold tracking-widest lowercase">
            northstar
          </strong>
          <strong className="text-xl font-black uppercase">ARCWAVE</strong>
          <strong className="text-xl font-serif italic">nexa</strong>
          <strong className="text-xl font-mono tracking-widest">MONO</strong>
        </div>
      </div>
    </motion.section>
  );
}
