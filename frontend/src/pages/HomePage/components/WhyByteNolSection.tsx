import {
  Blocks,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

import Section from "../../../components/common/Section";
import SectionHeading from "../../../components/common/SectionHeading";

const values = [
  {
    icon: Blocks,
    title: "Practical",
    text: "We focus on useful knowledge and technology that can actually be applied.",
  },
  {
    icon: Rocket,
    title: "Build-focused",
    text: "We believe the best way to understand technology is to create with it.",
  },
  {
    icon: Users,
    title: "People-first",
    text: "Technology should serve people, teams and organizations — not complicate their lives.",
  },
  {
    icon: Lightbulb,
    title: "Always curious",
    text: "We keep learning, experimenting and looking for better ways to solve problems.",
  },
];

function WhyByteNolSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why ByteNol"
        title="Technology is more useful when you know what to do with it."
        description="We're building an ecosystem where learning and technology creation reinforce each other."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary-dark transition-transform duration-300 group-hover:-translate-y-1">
                <Icon size={22} />
              </div>

              <h3 className="mt-6 font-heading text-xl font-bold text-dark">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                {value.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export default WhyByteNolSection;