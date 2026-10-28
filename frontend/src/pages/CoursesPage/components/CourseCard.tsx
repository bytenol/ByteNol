import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

export interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  category: string;
  badgeText: string;
  bgClass: string;
  graphic: React.ReactNode;
}

// Animation variants for continuous slide in/out
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    }
  }
};

export default function CourseCard({ 
  title, 
  description, 
  duration, 
  category, 
  badgeText, 
  bgClass, 
  graphic 
}: CourseCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col bg-white border border-line rounded-[2rem] overflow-hidden hover:shadow-2xl transition-shadow duration-300 group w-full"
    >
      {/* Top Graphic Area */}
      <div className={`relative h-[280px] w-full flex items-center justify-center p-6 ${bgClass} overflow-hidden`}>
        {/* Subtle Square Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }} 
        />
        
        {/* The Graphic / Illustration */}
        <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            {graphic}
        </div>

        {/* Pill Badge */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-ink text-[11px] font-black px-4 py-1.5 rounded-full shadow-sm z-20 uppercase tracking-wide">
          {badgeText}
        </div>
      </div>

      {/* Text Area */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-center text-[11px] font-bold text-muted uppercase tracking-widest mb-4">
          <span className="text-brand-600">{category}</span>
          <span>{duration}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-ink mb-3 leading-tight tracking-tight">{title}</h3>
        <p className="text-muted text-sm line-clamp-2 mb-8 flex-1 leading-relaxed">{description}</p>
        
        <div className="border-t border-line pt-5 mt-auto">
          <a href="#" className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors">
            Enroll now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}