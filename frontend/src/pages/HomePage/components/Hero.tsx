import { motion, type Variants } from "motion/react";
import { Book, Building2Icon, Code, Star } from "lucide-react";
import Container from "../../../components/common/Container";
import Button from "../../../components/ui/Button";

// Animation variants for continuous slide in/out
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, type: "spring", bounce: 0.3 } 
  }
};

function Hero() {
  return (
    <Container className="lg:py-24 py-16 flex items-center relative overflow-hidden min-h-[85vh]">
      {/* Animated SVG Background Blobs (Visible on all screens) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary-200/50 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-secondary-200/40 rounded-full blur-3xl -z-10" 
      />

      {/* Replaced .box-grid with Tailwind grid for perfect responsiveness */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
        
        {/* Text & CTA Section (Always visible) */}
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: false, margin: "-10%" }} // Continuous animation
          className="text-lg flex flex-col justify-center text-center lg:text-left"
        >
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-primary-500 mb-6 leading-[1.1] tracking-tight">
            Digital skills and solutions that <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-brand-500"> move you forward.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Master in-demand technology skills or let our team turn your boldest ideas into reliable, real-world digital products.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 my-4">
            <Button to="courses" className="w-full sm:w-auto px-8 py-4 text-lg shadow-xl shadow-brand-600/20">
              Explore courses <Book size={20} className="ml-2" />
            </Button>
            <Button variant="outline" to="products" className="w-full sm:w-auto px-8 py-4 text-lg">
              Build with us <Building2Icon size={20} className="ml-2" />
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-12 gap-6 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white max-w-fit mx-auto lg:mx-0 shadow-sm">
            <div className="avatars flex">
              <span className="w-12 h-12 rounded-full bg-brand-100 border-4 border-white flex items-center justify-center text-sm font-bold text-brand-700 -ml-3 first:ml-0 shadow-sm">AO</span>
              <span className="w-12 h-12 rounded-full bg-secondary-100 border-4 border-white flex items-center justify-center text-sm font-bold text-secondary-700 -ml-3 shadow-sm">TM</span>
              <span className="w-12 h-12 rounded-full bg-primary-100 border-4 border-white flex items-center justify-center text-sm font-bold text-primary-700 -ml-3 shadow-sm">KE</span>
              <span className="w-12 h-12 rounded-full bg-slate-800 border-4 border-white flex items-center justify-center text-sm font-bold text-white -ml-3 shadow-sm">+</span>
            </div>
            <div className="text-center sm:text-left">
              <div className="stars flex justify-center sm:justify-start text-yellow-400 items-center gap-1 font-black text-lg">
                <Star size={18} fill="currentColor" />
                4.9/5
              </div>
              <small className="text-muted font-semibold text-sm">Trusted by 2,500+ learners</small>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Section (Hidden on Mobile, Visible on Large Screens) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }} 
          whileInView={{ opacity: 1, x: 0, scale: 1 }} 
          viewport={{ once: false, margin: "-10%" }} // Continuous animation
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="image-card relative z-10 h-[500px]">
            <img src="./images/home/background-coders.jpg" alt="A collaborative technology team working together" className="w-full h-full object-cover rounded-[2rem] shadow-2xl" />
            <div className="absolute inset-0 rounded-[2rem] border border-white/20 bg-gradient-to-tr from-brand-900/20 to-transparent pointer-events-none" />
          </div>
          
          {/* Continuous Floating Animations */}
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 z-20 border border-slate-100"
          >
            <span className="bg-brand-600 text-white p-3 rounded-xl shadow-inner"> 
              <Code size={24} />
            </span>
            <div>
              <strong className="block text-base font-black text-ink">Learn by building</strong>
              <small className="text-muted text-sm font-medium">Real-world projects</small>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-100 flex items-center gap-5"
          >
            <strong className="block text-5xl font-black text-brand-600">98%</strong>
            <span className="text-sm font-bold text-muted leading-tight block">Completion<br />satisfaction</span>
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[-30px] bottom-[80px] bg-slate-900 text-blue-200 p-5 rounded-2xl text-sm shadow-2xl z-20 border border-slate-700"
          >
            <div className="flex gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <code className="font-mono text-blue-300 font-bold tracking-wide">const future = "yours";</code>
          </motion.div>
        </motion.div>
        
      </div>
    </Container>
  );
}

export default Hero;