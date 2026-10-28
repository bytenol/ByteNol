import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Mail, Lock, User, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

// --- Animation Variants ---
const formVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API authentication call
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-surface">
      
      {/* Left Panel: Visual & Branding (Hidden on mobile) */}
      <div className="hidden lg:flex relative overflow-hidden bg-brand-900 p-12 flex-col justify-between">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-600/30 rounded-full blur-[100px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, -50, 0] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary-500/20 rounded-full blur-[100px] pointer-events-none" 
        />

        {/* Top: Logo & Back Link */}
        <div className="relative z-10 flex items-center justify-between">
          <a href="/" className="text-white font-black text-2xl tracking-tight flex items-center gap-2">
            ByteNol.
          </a>
          <a href="/" className="text-brand-200 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors">
            <ArrowLeft size={16} /> Back to website
          </a>
        </div>

        {/* Middle: Floating UI Illustration */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-md"
          >
            {/* Main Floating Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-2xl relative z-10">
              <div className="w-12 h-12 bg-secondary-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Accelerate your growth.</h3>
              <p className="text-brand-100/80 leading-relaxed text-sm">
                Join thousands of engineers and businesses building the future with ByteNol's practical courses and enterprise solutions.
              </p>
            </div>

            {/* Decorative Sub-cards */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 -bottom-8 bg-white text-ink p-5 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-black">
                98%
              </div>
              <div>
                <strong className="block text-sm">Success Rate</strong>
                <span className="text-xs text-muted">Verified alumni</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom: Testimonial/Trust */}
        <div className="relative z-10">
          <div className="flex gap-1 mb-4 text-yellow-400">
            {[1,2,3,4,5].map(i => <motion.svg key={i} initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{delay: i*0.1}} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></motion.svg>)}
          </div>
          <p className="text-brand-50 text-lg font-medium max-w-md leading-relaxed">
            "ByteNol didn't just teach me how to code; they taught me how to engineer real products. Best decision of my career."
          </p>
          <div className="mt-4 text-sm">
            <strong className="text-white">Sarah Jenkins</strong>
            <span className="text-brand-300 mx-2">•</span>
            <span className="text-brand-300">Frontend Engineer at Nexa</span>
          </div>
        </div>
      </div>

      {/* Right Panel: Authentication Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative">
        {/* Mobile Header (Only visible on small screens) */}
        <div className="absolute top-6 left-6 lg:hidden">
          <a href="/" className="text-ink font-black text-xl flex items-center gap-2">
            <ArrowLeft size={18} className="text-muted" /> ByteNol
          </a>
        </div>

        <div className="w-full max-w-md">
          {/* Form Toggle Tabs */}
          <div className="bg-slate-100 p-1.5 rounded-xl flex items-center mb-10 w-full relative">
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-lg shadow-sm transition-transform duration-300 ease-in-out ${isLogin ? 'translate-x-0' : 'translate-x-[calc(100%+12px)]'}`}
            />
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-bold z-10 transition-colors ${isLogin ? 'text-ink' : 'text-muted hover:text-ink'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-bold z-10 transition-colors ${!isLogin ? 'text-ink' : 'text-muted hover:text-ink'}`}
            >
              Create Account
            </button>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-black text-ink mb-2">
              {isLogin ? "Welcome back" : "Create an account"}
            </h1>
            <p className="text-muted">
              {isLogin ? "Enter your details to access your dashboard." : "Start learning and building with ByteNol today."}
            </p>
          </div>

          {/* Social Auth */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 border border-line bg-white hover:bg-slate-50 text-ink font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-line bg-white hover:bg-slate-50 text-ink font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow">
              {/* <Github size={18} /> */}
              GitHub
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-line flex-1"></div>
            <span className="text-xs font-bold text-muted uppercase tracking-wider">Or continue with email</span>
            <div className="h-px bg-line flex-1"></div>
          </div>

          {/* Form Area */}
          <AnimatePresence mode="wait">
            <motion.form 
              key={isLogin ? 'login' : 'signup'}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name Field (Signup Only) */}
              {!isLogin && (
                <motion.div variants={staggerContainer} className="space-y-1.5">
                  <label className="text-xs font-bold text-ink uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 border border-line rounded-xl py-3.5 pl-11 pr-4 text-ink focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                </motion.div>
              )}

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border border-line rounded-xl py-3.5 pl-11 pr-4 text-ink focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all font-medium"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-ink uppercase tracking-wider">Password</label>
                  {isLogin && (
                    <a href="#" className="text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors">
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                  <input 
                    type="password" 
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-slate-50 border border-line rounded-xl py-3.5 pl-11 pr-4 text-ink focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all font-medium"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/30 hover:-translate-y-1 mt-8 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    {isLogin ? "Sign In" : "Create Account"} <ArrowRight size={18} />
                  </>
                )}
              </button>

              {/* Terms / Disclaimer */}
              {!isLogin && (
                <p className="text-center text-xs text-muted mt-6 max-w-xs mx-auto">
                  By creating an account, you agree to our <a href="#" className="font-bold text-brand-600 hover:underline">Terms of Service</a> and <a href="#" className="font-bold text-brand-600 hover:underline">Privacy Policy</a>.
                </p>
              )}
            </motion.form>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}