import { useMemo, useState } from "react";

import SEO from "../../components/common/SEO";
import Container from "../../components/common/Container";

import { courses } from "./courseData";

import CoursesHero from "./components/CoursesHero";
import CourseFilters from "./components/CourseFilters";
import CourseGrid from "./components/CourseGrid";
import CoursesCTA from "./components/CoursesCTA";

function CoursesPage() {
  const [category, setCategory] = useState("All");
  const [technology, setTechnology] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(courses.map((course) => course.category))];
  }, []);

  const technologies = useMemo(() => {
    return [
      ...new Set(
        courses.flatMap((course) => course.technologies),
      ),
    ].sort();
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const categoryMatches =
        category === "All" || course.category === category;

      const technologyMatches =
        technology === "All" ||
        course.technologies.includes(technology);

      return categoryMatches && technologyMatches;
    });
  }, [category, technology]);

  return (
    <>
      <SEO
        title="Coding Courses — ByteNol Academy"
        description="Learn practical programming and technology skills with ByteNol Academy. Explore courses in fullstack development, frontend, backend, Android, Python automation and more."
      />

      <CoursesHero />

      <section
        id="courses"
        className="relative bg-surface py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
              Explore our courses
            </p>

            <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              Choose your path.
            </h2>

            <p className="mt-4 text-base leading-7 text-muted">
              Start where you are, learn by building and develop skills you
              can actually use.
            </p>
          </div>

          <CourseFilters
            category={category}
            technology={technology}
            categories={categories}
            technologies={technologies}
            onCategoryChange={setCategory}
            onTechnologyChange={setTechnology}
          />

          <div className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-muted">
                Showing{" "}
                <span className="font-bold text-dark">
                  {filteredCourses.length}
                </span>{" "}
                {filteredCourses.length === 1 ? "course" : "courses"}
              </p>
            </div>

            <CourseGrid courses={filteredCourses} />
          </div>
        </Container>
      </section>

      <CoursesCTA />
    </>
  );
}

export default CoursesPage;