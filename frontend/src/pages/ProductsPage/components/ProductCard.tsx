import { motion, type Variants } from "motion/react";

export interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  version: string;
  badgeText: string;
  bgClass: string;
  graphic: React.ReactNode;
  link?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 15 }
  }
};

export default function ProductCard({
  title,
  description,
  category,
  version,
  badgeText,
  bgClass,
  graphic,
  link = "#"
}: ProductCardProps) {
  return (
    <motion.a
      href={link}
      variants={cardVariants}
      className="flex flex-col group w-full cursor-pointer outline-none"
    >
      {/* Top Graphic Area (Matches prod.jpg) */}
      <div className={`relative h-[260px] w-full rounded-3xl overflow-hidden mb-6 flex items-center justify-center transition-shadow duration-300 group-hover:shadow-xl ${bgClass}`}>
        {/* Subtle Square Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay" 
          style={{ 
            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }} 
        />
        
        {/* The Graphic / Illustration */}
        <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            {graphic}
        </div>

        {/* Inner Pill Badge (Bottom Left) */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-ink text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm z-20 uppercase tracking-widest">
          {badgeText}
        </div>
      </div>

      {/* Text Area (Matches prod.jpg metadata layout) */}
      <div className="flex flex-col px-1">
        <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest mb-3">
          <span className="text-brand-600">{category}</span>
          <span className="text-muted">{version}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-ink mb-2 tracking-tight group-hover:text-brand-600 transition-colors">{title}</h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2">{description}</p>
      </div>
    </motion.a>
  );
}