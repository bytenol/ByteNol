import Container from "../../../components/common/Container";
import Section from "../../../components/common/Section";
import { courses } from "../courseData";
import CourseCard from "./CourseCard";

function CourseGrid() {
  return (
    <Section id="courses" className="bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
            Available courses
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
            Choose your path.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            Start with the skill you want to develop and learn through
            practical, project-focused training.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default CourseGrid;