import {
  BarChart3,
  GraduationCap,
  Globe2,
  Layers3,
} from "lucide-react";
import { motion } from "motion/react";

import Section from "../../../components/common/Section";
import SectionHeading from "../../../components/common/SectionHeading";

const categories = [
  {
    number: "01",
    title: "Business Systems",
    description:
      "Software that helps organizations manage processes, people, information and everyday operations.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Education Technology",
    description:
      "Platforms and tools that make learning, teaching and educational administration more effective.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Data & Analytics",
    description:
      "Tools that turn operational data into useful information for better decisions.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Digital Platforms",
    description:
      "Modern web-based products designed around the people who use them.",
    icon: Globe2,
  },
];

function ProductCategories() {
  return (
    <Section id="products" className="bg-surface">
      <SectionHeading
        eyebrow="What we build"
        title="Products designed around real problems."
        description="Our products focus on useful technology—not unnecessary complexity."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.number}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-white p-8 sm:p-10"
            >
              <span className="absolute right-8 top-8 font-mono text-xs font-semibold text-primary-dark">
                {category.number}
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary-dark">
                <Icon size={23} />
              </div>

              <h3 className="mt-8 font-heading text-2xl font-bold text-dark">
                {category.title}
              </h3>

              <p className="mt-3 max-w-lg leading-7 text-muted">
                {category.description}
              </p>

              <div className="mt-8 h-px w-full bg-border" />

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary-dark">
                ByteNol technology
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export default ProductCategories;