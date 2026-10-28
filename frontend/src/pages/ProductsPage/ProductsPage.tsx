import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Search } from "lucide-react";
import Container from "../../components/common/Container";
import ProductCard from "./components/ProductCard";


// --- Mock Product Data ---
const productsData = [
  {
    id: "examsuite",
    title: "ExamSuite",
    description: "A highly secure, offline Computer-Based Testing (CBT) platform designed for schools to conduct exams flawlessly over a LAN.",
    category: "Education",
    version: "v4.0",
    badgeText: "Offline CBT",
    bgClass: "bg-[#daf5b4] text-green-900", // Soft green matching references
    graphic: (
      <div className="relative w-[220px] h-[150px] bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] transform -rotate-2 border border-green-100 flex items-center justify-center p-4">
        {/* Using your provided ExamSuite icon */}
        <img src="./examsuite-icon-1024.png" alt="ExamSuite" className="w-24 h-24 object-contain drop-shadow-xl z-10" />
        <div className="absolute top-4 left-4 w-1/2 h-3 bg-green-100 rounded-full" />
        <div className="absolute bottom-4 right-4 w-1/3 h-3 bg-green-100 rounded-full" />
      </div>
    )
  },
  {
    id: "vytrix",
    title: "Vytrix ERP",
    description: "Intelligent Enterprise Resource Planning built to streamline finance, supply chain, and HR for growing organizations.",
    category: "Enterprise",
    version: "v2.1",
    badgeText: "SaaS",
    bgClass: "bg-[#d3caff] text-indigo-900", // Soft purple matching references
    graphic: (
      <div className="relative w-[240px] h-[160px] bg-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] transform rotate-2 flex border border-indigo-100 overflow-hidden">
        <div className="w-[30%] h-full bg-slate-900 p-4 flex flex-col gap-3">
          <div className="w-full h-2 bg-slate-700 rounded-full" />
          <div className="w-2/3 h-2 bg-slate-700 rounded-full" />
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          {/* Using your provided Vytrix icon */}
          <img src="./vytrix-icon.svg" alt="Vytrix" className="w-20 h-20 object-contain drop-shadow-lg z-10" />
        </div>
      </div>
    )
  },
  {
    id: "schoolportal",
    title: "EduCore Portal",
    description: "An all-in-one student information system that connects administrators, teachers, students, and parents seamlessly.",
    category: "Education",
    version: "v3.5",
    badgeText: "Web App",
    bgClass: "bg-[#ffccaa] text-orange-900", // Soft orange matching references
    graphic: (
      <div className="relative w-[210px] h-[170px] bg-[#fffcf8] rounded-xl shadow-[0_15px_30px_rgba(234,88,12,0.15)] transform -rotate-1 border border-orange-200 grid grid-cols-3 grid-rows-3 p-5 gap-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className={`w-6 h-6 rounded-md ${i === 4 ? 'bg-orange-400' : 'bg-orange-100'} border border-orange-200`} />
          </div>
        ))}
      </div>
    )
  },
  {
    id: "healthsync",
    title: "HealthSync",
    description: "Secure, HIPAA-compliant patient management software designed for modern clinics to handle bookings and EHR.",
    category: "Healthcare",
    version: "v1.2",
    badgeText: "Desktop",
    bgClass: "bg-[#bbf7d0] text-emerald-900",
    graphic: (
      <div className="relative w-[220px] h-[150px] bg-white rounded-xl shadow-lg transform rotate-2 border border-emerald-100 p-4 flex items-end gap-2">
        <div className="w-1/4 h-1/4 bg-emerald-200 rounded-t-sm" />
        <div className="w-1/4 h-1/2 bg-emerald-300 rounded-t-sm" />
        <div className="w-1/4 h-3/4 bg-emerald-400 rounded-t-sm" />
        <div className="w-1/4 h-full bg-emerald-500 rounded-t-sm" />
      </div>
    )
  }
];

const CATEGORIES = ["All products", ...Array.from(new Set(productsData.map(p => p.category)))];

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All products");
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All products" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#fafafa] pb-32">
      
      {/* Hero Section (Replicating hero.png) */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Soft Background Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#daf5b4]/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#d3caff]/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <Container>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Top Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-white shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#a3e635]"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-muted">Enterprise Software Solutions</span>
            </motion.div>

            {/* Split Color Headline */}
            <motion.h1 variants={fadeUp} className="text-6xl lg:text-7xl font-bold text-ink mb-6 tracking-tight leading-[1.05]">
              Tools made to move <br />
              <span className="text-[#60708a]">your business forward.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-[#60708a] mb-10 max-w-2xl leading-relaxed">
              A curated collection of offline platforms, ERPs, and management tools built with care. Explore, deploy, and scale with confidence.
            </motion.p>

            {/* Wide Search Bar with Shortcut */}
            <motion.div variants={fadeUp} className="relative max-w-2xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" size={20} />
              <input 
                type="text" 
                placeholder="Search products, features, categories..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-line rounded-2xl py-4 pl-14 pr-16 text-ink focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm transition-all text-base"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-slate-50 border border-line rounded-lg px-2 py-1 text-xs font-bold text-muted">
                <span>{isMac ? '⌘' : 'Ctrl'}</span>
                <span>K</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Collection Section (Replicating prod.jpg) */}
      <section>
        <Container>
          
          {/* Section Header with Inline Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-t border-line/50 pt-12"
          >
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#a3a3a3] mb-3 block">The Collection</span>
              <h2 className="text-4xl font-bold text-ink tracking-tight">Browse all products</h2>
            </div>
            
            {/* Filter Pills aligned to the right */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full font-bold text-sm transition-all border ${
                    activeCategory === category 
                      ? "bg-ink text-white border-ink shadow-md" 
                      : "bg-white text-muted border-line hover:border-slate-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div 
                key="grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-10%" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </motion.div>
            ) : (
              // Empty State
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="bg-white rounded-3xl border border-line p-16 text-center max-w-2xl mx-auto my-12 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-ink mb-3">No products found</h3>
                <p className="text-muted">
                  We couldn't find anything matching "{searchQuery}" in the {activeCategory} category.
                </p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All products"); }}
                  className="mt-6 bg-ink text-white font-bold px-6 py-3 rounded-full transition-colors hover:bg-slate-800"
                >
                  Clear search
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </Container>
      </section>

    </div>
  );
}