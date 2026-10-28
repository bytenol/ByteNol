import { motion } from "motion/react";
import { Send } from "lucide-react";
import Container from "../../../components/common/Container";
import Button from "../../../components/ui/Button";

export default function NewsletterCTA() {
  return (
    <section className="py-24 relative overflow-hidden  text-white mt-12">
      {/* Abstract SVG Waves */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="#5fa5f1" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <Container className="relative">
        <div className="backdrop-blur-md border border-white/20 rounded-[2rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black/60">Ready when you are. <br/>What will you create next?</h2>
            <p className="text-blue-100 text-lg">Build your skills or bring your next digital product to life. Join our newsletter for weekly tech insights and Bytenol updates.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="w-full lg:w-auto flex-shrink-0"
          >
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-6 py-4 rounded-xl bg-white text-ink w-full focus:outline-none focus:ring-4 focus:ring-brand-500/50 transition-all font-medium"
                required
              />
              <Button>
                Subscribe <Send size={18} />
              </Button>
            </form>
            <p className="text-xs text-blue-200/60 mt-3 text-center lg:text-left">We care about your data. No spam, ever.</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}