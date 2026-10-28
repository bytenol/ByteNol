import { motion, type Variants } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import Container from "../../components/common/Container";

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 60, damping: 15 } 
  }
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center relative overflow-hidden py-20">
      
      {/* Animated Background Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} 
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-200/30 rounded-full blur-[100px] -z-10 pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary-200/30 rounded-full blur-[100px] -z-10 pointer-events-none" 
      />

      <Container className="text-center max-w-3xl mx-auto relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Custom SVG Illustration */}
          <motion.div variants={fadeUp} className="w-full max-w-md mx-auto mb-8 relative">
            <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-2xl overflow-visible">
              {/* Giant Floating 404 Background Text */}
              <motion.text 
                animate={{ y: [-5, 5, -5] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                x="200" y="200" fontSize="160" fontWeight="900" textAnchor="middle" 
                className="fill-brand-100 font-display tracking-tighter select-none"
              >
                404
              </motion.text>

              {/* Floating Geometric Particles */}
              <motion.circle 
                animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
                cx="70" cy="80" r="12" className="fill-secondary-300" 
              />
              <motion.rect 
                animate={{ y: [15, -15, 15], rotate: [0, 90, 0] }} 
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
                x="320" y="100" width="24" height="24" rx="6" className="fill-brand-300" 
              />
              <motion.path 
                animate={{ y: [-10, 10, -10], rotate: [0, -45, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
                d="M 80 220 L 100 200 L 120 220 Z" className="fill-orange-300" 
              />

              {/* ByteNol Humanoid Character */}
              <g transform="translate(130, 110)">
                {/* Humanoid Head */}
                <motion.circle 
                  animate={{ y: [0, -3, 0] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  cx="70" cy="30" r="20" className="fill-brand-600" 
                />
                
                {/* Humanoid Body */}
                <path d="M 30 140 Q 70 50 110 140" className="fill-brand-500" />
                
                {/* Searching / Magnifying Glass Hand */}
                <motion.g 
                  animate={{ rotate: [-10, 15, -10] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                  style={{ transformOrigin: "90px 70px" }}
                >
                  <path d="M 90 70 L 120 50" strokeWidth="8" strokeLinecap="round" className="stroke-brand-700" />
                  <circle cx="130" cy="40" r="16" fill="none" strokeWidth="6" className="stroke-secondary-500" />
                  {/* Glass Reflection */}
                  <path d="M 122 32 Q 130 30 138 38" fill="none" strokeWidth="3" strokeLinecap="round" className="stroke-secondary-300" />
                </motion.g>
              </g>

              {/* Broken / Disconnected Wire */}
              <motion.path 
                animate={{ d: ["M 180 260 Q 200 280 220 260", "M 180 260 Q 200 240 220 260"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                fill="none" strokeWidth="6" strokeDasharray="10, 10" strokeLinecap="round" className="stroke-slate-300"
              />
            </svg>
          </motion.div>

          {/* Error Text Content */}
          <motion.div variants={fadeUp} className="mb-10">
            <span className="inline-block text-brand-600 font-bold uppercase tracking-wider text-sm mb-4 bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100">
              Page Not Found
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-ink mb-4 tracking-tight">
              Looks like you're <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-secondary-500">lost in space.</span>
            </h1>
            <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
              We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL has a typo.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button 
              onClick={() => window.history.back()} 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-ink border-2 border-line font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-sm"
            >
              <ArrowLeft size={20} /> Go Back
            </button>
            <a 
              href="/" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/30 hover:-translate-y-1"
            >
              <Home size={20} /> Back to Home
            </a>
          </motion.div>

        </motion.div>
      </Container>
    </div>
  );
}