import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Container from "../../../components/common/Container";
import CourseCard from "../../CoursesPage/components/CourseCard";

// Stagger container for continuous scrolling animation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function PopularCourses() {
  return (
    <section className="section section-tint py-24 bg-surface overflow-hidden">
      <Container>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="eyebrow text-brand-600 font-bold uppercase tracking-wider text-sm mb-2 block">Top Rated</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-ink">Popular Courses</h2>
          </div>
          <a href="/learn" className="flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors mb-2">
            View all courses <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Card Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* FullStack Development */}
          <CourseCard 
            title="FullStack Development"
            description="Master modern web architecture from responsive frontends to scalable backend databases."
            category="Web Dev"
            duration="v4.2 • 12 Weeks"
            badgeText="React / Node"
            bgClass="bg-[#d3caff] text-indigo-900"
            graphic={
              <div className="relative w-[240px] h-[160px] bg-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] transform -rotate-2 flex border border-indigo-100 overflow-hidden">
                {/* Mock Browser/Dashboard UI */}
                <div className="w-[30%] h-full bg-slate-900 p-4 flex flex-col gap-3">
                  <div className="w-full h-2 bg-slate-700 rounded-full" />
                  <div className="w-2/3 h-2 bg-slate-700 rounded-full" />
                  <div className="w-full h-2 bg-slate-700 rounded-full mt-auto" />
                </div>
                <div className="flex-1 p-5 flex flex-col justify-end gap-2">
                  <div className="flex items-end gap-3 h-1/2">
                    <div className="w-1/3 h-1/3 bg-indigo-300 rounded-t-md" />
                    <div className="w-1/3 h-2/3 bg-indigo-400 rounded-t-md" />
                    <div className="w-1/3 h-full bg-indigo-500 rounded-t-md" />
                  </div>
                </div>

                {/* Humanoid Developer */}
                <svg className="absolute -bottom-2 -right-4 w-28 h-28 drop-shadow-xl" viewBox="0 0 100 100">
                  <circle cx="50" cy="25" r="15" fill="#312e81" />
                  <path d="M20 95 Q 50 40 80 95" fill="#4f46e5" />
                </svg>

                {/* Floating Devicons */}
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="absolute top-4 right-14 w-9 h-9 drop-shadow-md animate-bounce" style={{animationDuration: '3s'}} />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node" className="absolute bottom-6 right-2 w-10 h-10 drop-shadow-md animate-bounce" style={{animationDuration: '4s'}} />
              </div>
            }
          />

          {/* Mobile App Development */}
          <CourseCard 
            title="Mobile App Development"
            description="Build cross-platform mobile applications with native-like performance and beautiful UIs."
            category="Mobile"
            duration="v3.0 • 10 Weeks"
            badgeText="Flutter"
            bgClass="bg-[#daf5b4] text-green-900"
            graphic={
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Floating App Cards */}
                <div className="absolute w-[140px] h-[90px] bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] transform -rotate-6 -translate-x-12 -translate-y-8 border border-green-100 p-4 flex flex-col gap-3">
                  <div className="w-1/2 h-3 bg-slate-800 rounded-full" />
                  <div className="w-full h-2 bg-green-200 rounded-full mt-2" />
                  <div className="w-3/4 h-2 bg-green-200 rounded-full" />
                </div>
                <div className="absolute w-[150px] h-[100px] bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] transform rotate-3 translate-x-10 translate-y-6 border border-green-100 p-4 flex flex-col gap-3">
                  <div className="w-1/2 h-3 bg-slate-800 rounded-full" />
                  <div className="w-full h-2 bg-green-200 rounded-full mt-2" />
                  <div className="w-4/5 h-2 bg-green-200 rounded-full" />
                </div>

                {/* Humanoid holding a phone */}
                <svg className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-32 drop-shadow-xl" viewBox="0 0 100 100">
                  <circle cx="50" cy="22" r="14" fill="#064e3b" />
                  <path d="M25 85 Q 50 35 75 85" fill="#059669" />
                  <rect x="38" y="42" width="24" height="42" rx="4" fill="#1e293b" />
                </svg>

                {/* Floating Devicons */}
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" className="absolute top-2 left-6 w-10 h-10 drop-shadow-md animate-bounce" style={{animationDuration: '3.5s'}} />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" alt="Android" className="absolute bottom-2 right-4 w-12 h-12 drop-shadow-md animate-bounce" style={{animationDuration: '2.5s'}} />
              </div>
            }
          />

          {/* Automation & DevOps */}
          <CourseCard 
            title="Automation & DevOps"
            description="Streamline workflows, automate testing, and deploy code securely utilizing industry standard tools."
            category="Infrastructure"
            duration="v1.8 • 8 Weeks"
            badgeText="Python / Docker"
            bgClass="bg-[#ffccaa] text-orange-900"
            graphic={
              <div className="relative w-[210px] h-[170px] bg-[#fffcf8] rounded-xl shadow-[0_15px_30px_rgba(234,88,12,0.15)] transform rotate-2 border border-orange-200 grid grid-cols-3 grid-rows-3 p-5 gap-4">
                {/* Minimal Grid Dashboard Layout */}
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <div className="w-5 h-5 border-[3px] border-orange-200 rounded-full" />
                  </div>
                ))}

                {/* Humanoid DevOps Engineer */}
                <svg className="absolute -bottom-4 -left-6 w-32 h-32 drop-shadow-xl" viewBox="0 0 100 100">
                  <circle cx="45" cy="30" r="14" fill="#7c2d12" />
                  <path d="M15 95 Q 45 40 75 95" fill="#ea580c" />
                  {/* Pointing/Interacting Hand */}
                  <path d="M58 60 L 85 45" stroke="#ea580c" strokeWidth="6" strokeLinecap="round" />
                </svg>

                {/* Floating Devicons */}
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="absolute top-2 right-4 w-11 h-11 drop-shadow-md animate-bounce" style={{animationDuration: '3.2s'}} />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="absolute bottom-4 -right-4 w-12 h-12 drop-shadow-md animate-bounce" style={{animationDuration: '4.1s'}} />
              </div>
            }
          />
        </motion.div>
      </Container>
    </section>
  );
}