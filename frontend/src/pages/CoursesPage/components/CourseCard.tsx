import { ArrowRight, Clock3, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

import type { Course } from "../courseData";

interface CourseCardProps {
  course: Course;
}

const logoStyles = {
  python: "bg-dark text-primary",
  web: "bg-primary-light text-primary-dark",
  kotlin: "bg-dark text-white",
};

function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-white transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-slate-200/70">
      {/* Illustration area */}
      <div className="relative h-56 overflow-hidden bg-primary-light">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[25px] border-white/60" />

        <div className="absolute left-6 top-6 flex gap-2">
          {course.technology.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold text-dark backdrop-blur"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
          <div className="relative mb-[-1px] flex h-36 w-56 items-center justify-center rounded-t-[5rem] bg-white shadow-lg">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-3xl font-heading text-2xl font-bold shadow-lg ${logoStyles[course.accent]}`}
            >
              {course.accent === "python" && "Py"}
              {course.accent === "web" && "</>"}
              {course.accent === "kotlin" && "K"}
            </div>

            <div className="absolute left-5 top-8 h-3 w-3 rounded-full bg-primary" />
            <div className="absolute right-6 top-12 h-2.5 w-2.5 rounded-full bg-primary-dark" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary-dark">
            {course.category}
          </span>

          <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-muted">
            {course.level}
          </span>
        </div>

        <h2 className="mt-5 font-heading text-2xl font-bold leading-tight text-dark">
          {course.title}
        </h2>

        <p className="mt-4 text-sm leading-6 text-muted">
          {course.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5 text-sm text-muted">
          <span className="flex items-center gap-2">
            <Clock3 size={16} className="text-primary-dark" />
            {course.duration}
          </span>

          <span className="flex items-center gap-2">
            <Layers3 size={16} className="text-primary-dark" />
            Practical
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-5 pt-7">
          <div>
            <p className="text-xs text-muted">Course fee</p>

            <p className="mt-1 font-heading text-2xl font-bold text-dark">
              ₦{course.price.toLocaleString()}
            </p>
          </div>

          <Link
            to={`/courses/${course.slug}/apply`}
            className="inline-flex items-center gap-2 rounded-xl bg-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Apply now
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;