import {
  ArrowRight,
  Clock3,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import type { Course } from "../courseData";
import CourseIllustration from "./CourseIllustration";

interface CourseCardProps {
  course: Course;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NG").format(price);
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-200/70"
    >
      {/* Illustration */}
      <div className="relative h-[280px] overflow-hidden bg-primary-light">
        {/* Decorative blobs */}
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/60 blur-2xl" />

        <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-sky-200/40 blur-2xl" />

        {/* Course category */}
        <div className="absolute left-5 top-5 z-10 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-primary-dark shadow-sm backdrop-blur">
          {course.category}
        </div>

        <div className="absolute inset-0 flex items-center justify-center p-5 transition-transform duration-500 group-hover:scale-[1.04]">
          <CourseIllustration type={course.illustration} />
          {/* <img src="./FrontendIllustration.svg" /> */}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        {/* Technology */}
        <div className="flex flex-wrap gap-2">
          {course.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg bg-surface px-2.5 py-1 text-[11px] font-semibold text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        <h3 className="mt-5 font-heading text-2xl font-bold leading-tight text-dark">
          {course.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
          {course.description}
        </p>

        {/* Course meta */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted">
            <Clock3 size={15} className="text-primary-dark" />
            {course.duration}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-muted">
            <Sparkles size={15} className="text-primary-dark" />
            {course.level}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-muted">Course fee</p>

            <p className="mt-1 font-heading text-2xl font-bold text-dark">
              ₦{formatPrice(course.price)}
            </p>
          </div>

          <Link
            to={`/courses/${course.slug}/apply`}
            className="inline-flex items-center gap-2 rounded-xl bg-primary-dark px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-bright"
          >
            Enroll now
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default CourseCard;