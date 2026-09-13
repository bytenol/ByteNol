import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Clock } from "lucide-react";
import type { Course } from "./courses";
import { TechIcon } from "./TechIcon";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const [open, setOpen] = useState(false);
  const outcomesId = `${course.slug}-outcomes`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="flex flex-col rounded-2xl border border-border bg-background p-7 transition-colors duration-200 hover:border-primary"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {course.technologies.slice(0, 4).map((tech) => (
            <TechIcon key={tech} name={tech} />
          ))}
        </div>
        <span className="shrink-0 rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary-dark">
          {course.level}
        </span>
      </div>

      <h3 className="mt-6 font-heading text-xl font-semibold text-dark">
        {course.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {course.description}
      </p>

      <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2 text-sm text-dark">
            <Clock className="h-4 w-4 text-muted" />
            {course.duration}
          </span>
          <span className="text-xs text-muted">{course.format}</span>
        </div>
        <span className="font-heading text-lg font-semibold text-dark">
          {course.price}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={outcomesId}
        className="mt-5 flex items-center justify-between gap-2 text-sm font-medium text-primary-dark"
      >
        <span>What you&apos;ll learn</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id={outcomesId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden text-sm text-muted"
          >
            <div className="mt-3 space-y-2 pb-1">
              {course.outcomes.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>

      <a
        href={`/enroll?course=${course.slug}`}
        className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-primary-bright px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
      >
        Enroll now
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.article>
  );
}