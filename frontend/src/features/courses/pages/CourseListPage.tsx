import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, SlidersHorizontal, BookX } from "lucide-react";
import Container from "../../../components/common/Container";
import CourseCard from "../components/CourseCard";


const coursesData = [
  {
    id: "fullstack",
    title: "FullStack Development",
    description: "Master modern web architecture from responsive frontends to scalable backend databases.",
    category: "Web Dev",
    duration: "v4.2 • 12 Weeks",
    badgeText: "React / Node",
    bgClass: "bg-[#d3caff] text-indigo-900",
    graphic: (
      <div className="relative w-[240px] h-[160px] bg-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] transform -rotate-2 flex border border-indigo-100 overflow-hidden">
        <div className="w-[30%] h-full bg-slate-900 p-4 flex flex-col gap-3">
          <div className="w-full h-2 bg-slate-700 rounded-full" />
          <div className="w-2/3 h-2 bg-slate-700 rounded-full" />
        </div>
        <div className="flex-1 p-5 flex items-end gap-3 h-1/2 mt-auto">
          <div className="w-1/3 h-1/3 bg-indigo-300 rounded-t-md" />
          <div className="w-1/3 h-2/3 bg-indigo-400 rounded-t-md" />
          <div className="w-1/3 h-full bg-indigo-500 rounded-t-md" />
        </div>
        <svg className="absolute -bottom-2 -right-4 w-28 h-28 drop-shadow-xl" viewBox="0 0 100 100">
          <circle cx="50" cy="25" r="15" fill="#312e81" />
          <path d="M20 95 Q 50 40 80 95" fill="#4f46e5" />
        </svg>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="absolute top-4 right-14 w-9 h-9 animate-bounce" style={{animationDuration: '3s'}} />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node" className="absolute bottom-6 right-2 w-10 h-10 animate-bounce" style={{animationDuration: '4s'}} />
      </div>
    )
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications with native-like performance and beautiful UIs.",
    category: "Mobile",
    duration: "v3.0 • 10 Weeks",
    badgeText: "Flutter",
    bgClass: "bg-[#daf5b4] text-green-900",
    graphic: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-[140px] h-[90px] bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] transform -rotate-6 -translate-x-12 -translate-y-8 border border-green-100 p-4">
          <div className="w-1/2 h-3 bg-slate-800 rounded-full mb-2" />
          <div className="w-full h-2 bg-green-200 rounded-full" />
        </div>
        <svg className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-32 drop-shadow-xl" viewBox="0 0 100 100">
          <circle cx="50" cy="22" r="14" fill="#064e3b" />
          <path d="M25 85 Q 50 35 75 85" fill="#059669" />
          <rect x="38" y="42" width="24" height="42" rx="4" fill="#1e293b" />
        </svg>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" className="absolute top-2 left-6 w-10 h-10 animate-bounce" style={{animationDuration: '3.5s'}} />
      </div>
    )
  },
  {
    id: "automation",
    title: "Automation & DevOps",
    description: "Streamline workflows, automate testing, and deploy code securely utilizing industry standard tools.",
    category: "Infrastructure",
    duration: "v1.8 • 8 Weeks",
    badgeText: "Python / Docker",
    bgClass: "bg-[#ffccaa] text-orange-900",
    graphic: (
      <div className="relative w-[210px] h-[170px] bg-[#fffcf8] rounded-xl shadow-[0_15px_30px_rgba(234,88,12,0.15)] transform rotate-2 border border-orange-200 grid grid-cols-3 grid-rows-3 p-5 gap-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="w-5 h-5 border-[3px] border-orange-200 rounded-full" />
          </div>
        ))}
        <svg className="absolute -bottom-4 -left-6 w-32 h-32 drop-shadow-xl" viewBox="0 0 100 100">
          <circle cx="45" cy="30" r="14" fill="#7c2d12" />
          <path d="M15 95 Q 45 40 75 95" fill="#ea580c" />
          <path d="M58 60 L 85 45" stroke="#ea580c" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="absolute top-2 right-4 w-11 h-11 animate-bounce" style={{animationDuration: '3.2s'}} />
      </div>
    )
  },
  {
    id: "gamedev",
    title: "2D/3D Game Development",
    description: "Design immersive worlds, program physics, and build high-performance games for multiple platforms.",
    category: "Game Dev",
    duration: "v2.1 • 14 Weeks",
    badgeText: "Unity / C#",
    bgClass: "bg-[#ffb3d9] text-pink-900",
    graphic: (
      <div className="relative w-[220px] h-[150px] bg-white rounded-xl shadow-[0_20px_40px_rgba(219,39,119,0.2)] transform -rotate-3 border border-pink-200 flex items-center justify-center overflow-hidden">
        {/* Abstract game terrain */}
        <svg className="absolute bottom-0 w-full h-1/2 opacity-20" viewBox="0 0 100 50" preserveAspectRatio="none">
          <path d="M0 50 L 30 20 L 60 40 L 100 10 L 100 50 Z" fill="#be185d" />
        </svg>
        <svg className="absolute top-6 -left-2 w-32 h-32 drop-shadow-xl" viewBox="0 0 100 100">
          <circle cx="50" cy="30" r="14" fill="#831843" />
          <path d="M20 95 Q 50 45 80 95" fill="#db2777" />
          {/* Gamepad shape in hand */}
          <rect x="35" y="60" width="30" height="15" rx="7" fill="#1e293b" />
          <circle cx="42" cy="67.5" r="3" fill="#fff" />
          <circle cx="58" cy="67.5" r="3" fill="#fff" />
        </svg>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" alt="Unity" className="absolute top-4 right-10 w-10 h-10 animate-bounce" style={{animationDuration: '2.8s'}} />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" className="absolute bottom-6 right-4 w-10 h-10 animate-bounce" style={{animationDuration: '3.6s'}} />
      </div>
    )
  },
  {
    id: "data",
    title: "Data Science & Analytics",
    description: "Turn raw data into actionable insights using statistical models, machine learning, and visualization.",
    category: "Data",
    duration: "v1.5 • 10 Weeks",
    badgeText: "Pandas / SQL",
    bgClass: "bg-[#bbf7d0] text-emerald-900",
    graphic: (
      <div className="relative w-[220px] h-[160px] bg-white rounded-xl shadow-xl transform rotate-2 border border-emerald-100 p-4 flex items-end gap-2">
        <div className="w-1/4 h-1/4 bg-emerald-300 rounded-t-sm" />
        <div className="w-1/4 h-1/2 bg-emerald-400 rounded-t-sm" />
        <div className="w-1/4 h-3/4 bg-emerald-500 rounded-t-sm" />
        <div className="w-1/4 h-full bg-emerald-600 rounded-t-sm" />
        <svg className="absolute -top-4 -right-4 w-32 h-32 drop-shadow-xl" viewBox="0 0 100 100">
          <circle cx="45" cy="30" r="14" fill="#064e3b" />
          <path d="M15 95 Q 45 40 75 95" fill="#10b981" />
        </svg>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" className="absolute top-6 left-4 w-10 h-10 animate-bounce" style={{animationDuration: '4s'}} />
      </div>
    )
  },
  {
    id: "design",
    title: "UI/UX Product Design",
    description: "Craft beautiful, intuitive digital experiences focusing on user research, wireframing, and prototyping.",
    category: "Design",
    duration: "v3.0 • 8 Weeks",
    badgeText: "Figma",
    bgClass: "bg-[#fef08a] text-yellow-900",
    graphic: (
      <div className="relative w-[240px] h-[150px] bg-white rounded-xl shadow-lg transform -rotate-1 border border-yellow-200 overflow-hidden flex">
        <div className="w-1/3 border-r border-yellow-100 p-2 flex flex-col gap-2">
          <div className="w-full h-8 bg-yellow-100 rounded-md" />
          <div className="w-full h-8 bg-slate-50 rounded-md" />
        </div>
        <div className="w-2/3 p-4">
          <div className="w-full h-2/3 border-2 border-dashed border-yellow-300 rounded-lg flex items-center justify-center">
            <span className="text-yellow-400 font-bold text-xs">Hero Image</span>
          </div>
        </div>
        <svg className="absolute -bottom-4 right-2 w-28 h-28 drop-shadow-xl" viewBox="0 0 100 100">
          <circle cx="50" cy="30" r="14" fill="#713f12" />
          <path d="M20 95 Q 50 45 80 95" fill="#eab308" />
        </svg>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="absolute top-4 right-4 w-9 h-9 animate-bounce" style={{animationDuration: '3.1s'}} />
      </div>
    )
  }
];

// --- Unique Categories for Filter ---
const CATEGORIES = ["All", ...Array.from(new Set(coursesData.map(c => c.category)))];

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function CourseListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || course.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-surface py-20 overflow-hidden">
      <Container>
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-black text-ink mb-6 tracking-tight">
            Level up your <span className="text-brand-600">career.</span>
          </h1>
          <p className="text-muted text-lg">
            Choose from our industry-leading programs designed to get you hired. Master the tools and workflows used by top engineering and design teams.
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-4 rounded-2xl shadow-sm border border-line mb-12 flex flex-col lg:flex-row gap-4 sticky top-[90px] z-30"
        >
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
            <input 
              type="search" 
              placeholder="Search courses, skills, or tools..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-line rounded-xl py-3 pl-12 pr-4 text-ink focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all font-medium"
            />
          </div>

          {/* Category Filters (Desktop Tabs, Mobile Scroll) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
            <div className="flex items-center gap-2 px-3 text-muted border-r border-line hidden md:flex">
              <SlidersHorizontal size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">Filters</span>
            </div>
            
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  activeCategory === category 
                    ? "bg-brand-600 text-white shadow-md shadow-brand-600/20" 
                    : "bg-white text-muted hover:bg-slate-50 border border-transparent hover:border-line"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Course Grid */}
        <AnimatePresence mode="wait">
          {filteredCourses.length > 0 ? (
            <motion.div 
              key="grid"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course) => (
                // Wrapped the CourseCard in an anchor to simulate click-through to details page
                <a href={`/courses/${course.id}`} key={course.id} className="block group/link outline-none">
                  <CourseCard 
                    title={course.title}
                    description={course.description}
                    category={course.category}
                    duration={course.duration}
                    badgeText={course.badgeText}
                    bgClass={course.bgClass}
                    graphic={course.graphic}
                  />
                </a>
              ))}
            </motion.div>
          ) : (
            // Empty State
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-3xl border border-line p-16 text-center max-w-2xl mx-auto my-20 shadow-sm"
            >
              <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookX size={32} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-3">No courses found</h3>
              <p className="text-muted">
                We couldn't find any courses matching "{searchQuery}" in the {activeCategory} category. Try adjusting your search terms or clearing filters.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-8 bg-slate-100 hover:bg-slate-200 text-ink font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </div>
  );
}