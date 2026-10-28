import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { MapPin, Mail, Phone, Send, MessageSquare } from "lucide-react";
import Container from "../../components/common/Container";

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    type: "general",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <div className="min-h-screen bg-surface pb-24 overflow-hidden">
      
      {/* Page Header */}
      <section className="relative pt-24 pb-12">
        {/* Soft Background Blobs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-brand-200/40 rounded-full blur-[80px] -z-10 pointer-events-none" 
        />
        
        <Container className="text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block text-brand-600 font-bold uppercase tracking-wider text-sm mb-4 bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100"
          >
            Get in touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-black text-ink mb-6 tracking-tight"
          >
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-secondary-500">great together.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-muted text-lg leading-relaxed"
          >
            Whether you're looking to upskill your career, build a custom software solution, or just want to say hello—our team is ready to help.
          </motion.p>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 mt-8">
            
            {/* Left Column: Contact Info & Map */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
              className="flex flex-col gap-10"
            >
              {/* Info Cards */}
              <div className="space-y-6">
                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-line text-brand-600 shadow-sm shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-1">Our Office</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      123 Innovation Drive, Tech District<br />
                      Lagos, Nigeria 100001
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-line text-brand-600 shadow-sm shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-1">Email Us</h3>
                    <a href="mailto:hello@bytenol.com" className="text-muted text-sm hover:text-brand-600 transition-colors">
                      hello@bytenol.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-line text-brand-600 shadow-sm shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-1">Call Us</h3>
                    <a href="tel:+2348000000000" className="text-muted text-sm hover:text-brand-600 transition-colors">
                      +234 (800) 000-0000
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div variants={fadeUp}>
                <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white border border-line rounded-lg flex items-center justify-center text-muted hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                    {/* <Twitter size={18} /> */}
                  </a>
                  <a href="#" className="w-10 h-10 bg-white border border-line rounded-lg flex items-center justify-center text-muted hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                    {/* <Linkedin size={18} /> */}
                  </a>
                  <a href="#" className="w-10 h-10 bg-white border border-line rounded-lg flex items-center justify-center text-muted hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                    {/* <Github size={18} /> */}
                  </a>
                </div>
              </motion.div>

              {/* Google Map Embed */}
              <motion.div variants={fadeUp} className="w-full h-[250px] rounded-2xl overflow-hidden border border-line shadow-sm relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.06227653657!2d3.28395955!3d6.5480357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1698510000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-500 group-hover:filter-none"
                />
              </motion.div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
            >
              <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-line shadow-xl shadow-brand-900/5 relative overflow-hidden">
                {/* Decorative Top Gradient */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-secondary-400" />
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-ink">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-ink uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-slate-50 border border-line rounded-xl px-4 py-3.5 text-ink focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-ink uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-slate-50 border border-line rounded-xl px-4 py-3.5 text-ink focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type (Radio Cards) */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">How can we help you?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      
                      <label className={`cursor-pointer border rounded-xl p-4 text-center transition-all ${formState.type === 'learn' ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm' : 'border-line bg-white text-muted hover:bg-slate-50'}`}>
                        <input 
                          type="radio" 
                          name="type" 
                          value="learn" 
                          checked={formState.type === 'learn'}
                          onChange={(e) => setFormState({...formState, type: e.target.value})}
                          className="sr-only" 
                        />
                        <span className="font-bold text-sm block">Learn</span>
                        <span className="text-[10px] uppercase tracking-wider block mt-1 opacity-70">Courses & Training</span>
                      </label>

                      <label className={`cursor-pointer border rounded-xl p-4 text-center transition-all ${formState.type === 'build' ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm' : 'border-line bg-white text-muted hover:bg-slate-50'}`}>
                        <input 
                          type="radio" 
                          name="type" 
                          value="build" 
                          checked={formState.type === 'build'}
                          onChange={(e) => setFormState({...formState, type: e.target.value})}
                          className="sr-only" 
                        />
                        <span className="font-bold text-sm block">Build</span>
                        <span className="text-[10px] uppercase tracking-wider block mt-1 opacity-70">Software & Products</span>
                      </label>

                      <label className={`cursor-pointer border rounded-xl p-4 text-center transition-all ${formState.type === 'general' ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm' : 'border-line bg-white text-muted hover:bg-slate-50'}`}>
                        <input 
                          type="radio" 
                          name="type" 
                          value="general" 
                          checked={formState.type === 'general'}
                          onChange={(e) => setFormState({...formState, type: e.target.value})}
                          className="sr-only" 
                        />
                        <span className="font-bold text-sm block">General</span>
                        <span className="text-[10px] uppercase tracking-wider block mt-1 opacity-70">Other Enquiries</span>
                      </label>

                    </div>
                  </div>

                  {/* Message Area */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-ink uppercase tracking-wider">Your Message</label>
                    <textarea 
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-slate-50 border border-line rounded-xl px-4 py-3.5 text-ink focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all font-medium resize-none"
                      placeholder="Tell us a little bit about your goals..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/30 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                  <p className="text-center text-xs text-muted mt-4">
                    We typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

    </div>
  );
}