import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import Section from "../../../components/common/Section";
import SectionHeading from "../../../components/common/SectionHeading";

function ProductsSection() {
  return (
    <Section className="bg-primary-light/60">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <SectionHeading
          eyebrow="Products"
          title="Technology designed to solve real problems."
          description="we develop software products and platforms designed to make work simpler, smarter and more connected."
        />

        <div className="flex lg:justify-end">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-primary-dark/20 bg-white px-5 py-3.5 text-sm font-semibold text-dark transition-colors hover:border-primary-dark"
          >
            Explore products
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Boxes,
            title: "Business Systems",
            text: "Connected tools that help organizations manage their operations.",
          },
          {
            icon: BarChart3,
            title: "Data & Insights",
            text: "Technology that turns information into useful decisions.",
          },
          {
            icon: Globe2,
            title: "Digital Platforms",
            text: "Modern platforms designed for people, teams and communities.",
          },
          {
            icon: ShieldCheck,
            title: "Reliable Technology",
            text: "Software built with maintainability, security and growth in mind.",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group p-2 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary-dark">
                <Icon size={21} />
              </div>

              <h3 className="mt-6 font-heading text-lg font-bold text-dark">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export default ProductsSection;