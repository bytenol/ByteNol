import { ArrowLeft, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../../components/common/Container";
import type { Course } from "../../CoursesPage/courseData";

interface ApplicationHeaderProps {
  course: Course;
}

function ApplicationHeader({ course }: ApplicationHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary-light blur-3xl" />

      <Container>
        <Link
          to="/courses"
          className="relative inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-primary-dark"
        >
          <ArrowLeft size={16} />
          Back to courses
        </Link>

        <div className="relative mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
            Course application
          </p>

          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl">
            Apply for {course.title}.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Complete the form below and the ByteNol team will review your
            application and contact you with the next steps.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-dark shadow-sm">
              ₦{course.price.toLocaleString()}
            </span>

            <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-dark shadow-sm">
              <Clock3 size={15} className="text-primary-dark" />
              {course.duration}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ApplicationHeader;