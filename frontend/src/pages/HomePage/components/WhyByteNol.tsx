import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../../../components/common/Container";

// --- Custom Component for Continuous Counting Stats ---
function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  // once: false ensures the animation re-triggers every time it enters the viewport
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      // Animate from 0 to the target value
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    } else {
      // Reset immediately when scrolled out of view so it can count up again
      count.set(0);
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="p-4 rounded-2xl bg-white border border-line shadow-sm hover:shadow-md transition-shadow">
      <strong className="text-3xl md:text-4xl font-black text-brand-600 flex items-center mb-1">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </strong>
      <span className="text-muted text-sm font-medium block">{label}</span>
    </div>
  );
}

// --- Main Component ---
export default function WhyBytenol() {
  return (
    <section className="section py-24 overflow-hidden bg-surface/50">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image & Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          className="story-image relative"
        >
          <div className="relative rounded-tl-3xl rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl">
            {/* Subtle overlay gradient to make the image pop */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent z-10" />
            <img 
              src="./images/home/coder-illustration.jpg" 
              alt="Bytenol team collaborating" 
              className="w-full h-[550px] object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
          
          {/* Animated Floating Badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 bg-brand-600 text-white p-6 rounded-3xl flex items-center gap-4 shadow-[0_20px_40px_rgba(36,116,237,0.3)] z-20 border-4 border-white"
          >
            <div className="bg-white/20 p-3 rounded-full">
              <Sparkles className="text-yellow-300" size={24} />
            </div>
            <div>
              <strong className="text-4xl font-black block leading-none mb-1">7+</strong>
              <span className="text-sm font-medium leading-tight text-brand-100">years building<br />what matters</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Copy & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2, staggerChildren: 0.1 }}
          className="story-copy"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-block text-brand-600 font-bold uppercase tracking-wider text-sm mb-4 bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100"
          >
            Why Bytenol
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl lg:text-5xl font-bold text-ink mb-6 leading-tight tracking-tight"
          >
            Technology should feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-secondary-500">empowering</span>, not overwhelming.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-muted text-lg mb-10 leading-relaxed"
          >
            We started Bytenol with a simple belief: people learn best by doing, and great software starts by listening. That same practical, human approach shapes everything we make.
          </motion.p>
          
          {/* Animated Counting Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="grid grid-cols-2 gap-4 mb-12"
          >
            <AnimatedStat value={2500} suffix="+" label="Learners supported" />
            <AnimatedStat value={80} suffix="+" label="Products delivered" />
            <AnimatedStat value={14} suffix="" label="Countries reached" />
            <AnimatedStat value={96} suffix="%" label="Client satisfaction" />
          </motion.div>
          
          {/* Improved Animated Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <motion.a 
              href="/about" 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 bg-brand-50 text-brand-700 font-bold text-lg px-8 py-4 rounded-full hover:bg-brand-600 hover:text-white transition-all duration-300 border border-brand-200 hover:border-brand-600 shadow-sm hover:shadow-xl hover:shadow-brand-600/20"
            >
              Discover Our Story 
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="bg-white/50 text-brand-700 group-hover:bg-white group-hover:text-brand-600 p-1.5 rounded-full transition-colors"
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.a>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}