import { motion, type Variants } from "motion/react";
import { 
  ArrowLeft, Download, CreditCard, Clock, Calendar, 
  BarChart, CheckCircle2, PlayCircle, FileText, ChevronDown 
} from "lucide-react";

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 60, damping: 15 } 
  }
};

// --- Mock Data ---
const course = {
  title: "FullStack Development",
  badge: "React / Node.js",
  description: "Master modern web architecture from responsive frontends to scalable backend databases. Build real-world applications and get career-ready.",
  price: "$499",
  duration: "12 Weeks",
  level: "Intermediate",
  nextCohort: "Oct 15, 2026",
  includes: [
    "120+ hours of on-demand video",
    "Real-world portfolio projects",
    "1-on-1 expert mentorship",
    "Career coaching & resume review",
    "Certificate of completion"
  ],
  curriculum: [
    { week: "Week 1-3", title: "Frontend Foundations", topics: ["Advanced HTML/CSS", "JavaScript ES6+", "DOM Manipulation", "Responsive Design"] },
    { week: "Week 4-6", title: "React & UI State", topics: ["React 19 & Hooks", "Component Architecture", "Tailwind CSS", "Framer Motion Animations"] },
    { week: "Week 7-9", title: "Backend & APIs", topics: ["Node.js & Express", "RESTful API Design", "Authentication (JWT)", "PostgreSQL Basics"] },
    { week: "Week 10-12", title: "FullStack Integration", topics: ["Connecting Client & Server", "Deployment (Vercel/Render)", "System Design", "Final Portfolio Project"] }
  ]
};

export default function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-surface pb-24">
      
      {/* Dynamic Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-primary-50 to-surface">
        {/* Animated Background Blobs */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 45, 0] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-200/40 rounded-full blur-3xl -z-10" 
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <a href="/courses" className="inline-flex items-center gap-2 text-muted hover:text-brand-600 font-bold text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to all courses
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-center">
            {/* Left: Course Intro */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={fadeUp} className="inline-block bg-brand-100 text-brand-700 font-black uppercase tracking-widest text-xs px-4 py-1.5 rounded-full mb-6">
                {course.badge}
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl font-bold text-ink mb-6 leading-tight tracking-tight">
                {course.title}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted mb-8 leading-relaxed max-w-2xl">
                {course.description}
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-6 text-sm font-bold text-ink">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-line shadow-sm">
                  <Clock className="text-brand-500" size={18} /> {course.duration}
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-line shadow-sm">
                  <BarChart className="text-brand-500" size={18} /> {course.level}
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-line shadow-sm">
                  <Calendar className="text-brand-500" size={18} /> Starts {course.nextCohort}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Custom Animated Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative hidden lg:flex items-center justify-center h-[350px] w-full bg-[#d3caff] rounded-[2.5rem] border-4 border-white shadow-2xl"
            >
              {/* Humanoid & Code Editor Visual */}
              <div className="absolute w-[70%] h-[60%] bg-slate-900 rounded-xl shadow-2xl transform -rotate-3 p-4 flex flex-col gap-3 z-10 border border-indigo-300">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="w-3/4 h-3 bg-indigo-500/30 rounded-full" />
                <div className="w-1/2 h-3 bg-indigo-500/30 rounded-full" />
                <div className="w-full h-3 bg-indigo-500/30 rounded-full mt-auto" />
              </div>
              
              <svg className="absolute -bottom-8 -right-4 w-40 h-40 drop-shadow-2xl z-20" viewBox="0 0 100 100">
                <circle cx="50" cy="25" r="15" fill="#312e81" />
                <path d="M15 100 Q 50 40 85 100" fill="#4f46e5" />
              </svg>

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="absolute top-8 right-8 w-14 h-14 animate-bounce z-30 drop-shadow-lg" style={{animationDuration: '3s'}} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node" className="absolute bottom-12 left-6 w-14 h-14 animate-bounce z-30 drop-shadow-lg" style={{animationDuration: '4s'}} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Sidebar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left: Curriculum & Details */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">Course Curriculum</h2>
              <p className="text-muted mb-8">This curriculum is designed to take you from fundamentals to advanced concepts through hands-on building.</p>
              
              <div className="space-y-4">
                {course.curriculum.map((mod, idx) => (
                  <div key={idx} className="bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div className="p-6 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center font-black">
                          {idx + 1}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">{mod.week}</span>
                          <h3 className="text-lg font-bold text-ink">{mod.title}</h3>
                        </div>
                      </div>
                      <ChevronDown className="text-muted group-hover:text-ink transition-colors" />
                    </div>
                    {/* Simulated open state for the first item */}
                    {idx === 0 && (
                      <div className="px-6 pb-6 pt-2 border-t border-line/50 bg-slate-50">
                        <ul className="space-y-3 mt-4">
                          {mod.topics.map((topic, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-ink font-medium">
                              <PlayCircle size={16} className="text-brand-500" /> {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Sticky Action Card */}
          <div className="lg:sticky lg:top-28">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-10%" }}
              className="bg-white rounded-[2rem] border border-line p-8 shadow-2xl shadow-brand-900/5 relative overflow-hidden"
            >
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-secondary-400" />
              
              <div className="mb-6">
                <span className="text-muted text-sm font-bold uppercase tracking-wider">One-time payment</span>
                <div className="text-5xl font-black text-ink mt-2 flex items-end gap-2">
                  {course.price} <span className="text-lg text-muted font-medium pb-1">USD</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {/* Primary Action: Make Payment & Enroll */}
                <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/30 hover:-translate-y-1">
                  <CreditCard size={20} /> Enroll & Pay Now
                </button>
                
                {/* Secondary Action: Download Curriculum */}
                <button className="w-full bg-white hover:bg-slate-50 text-ink border-2 border-line font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
                  <Download size={20} className="text-brand-600" /> Download Curriculum
                </button>
              </div>

              <div className="border-t border-line pt-6">
                <h4 className="font-bold text-ink mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {course.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted font-medium">
                      <CheckCircle2 size={18} className="text-secondary-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Trust Badge below card */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="mt-6 text-center text-sm text-muted font-medium flex items-center justify-center gap-2"
            >
              <FileText size={16} /> 14-day money-back guarantee
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}