import { AnimatePresence, motion } from "motion/react";

import type { Course } from "../courseData";
import CourseCard from "./CourseCard";

interface CourseGridProps {
  courses: Course[];
}

function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-surface px-6 py-20 text-center">
        <h3 className="font-heading text-2xl font-bold text-dark">
          No courses found
        </h3>

        <p className="mt-2 text-sm text-muted">
          Try changing your filters.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default CourseGrid;