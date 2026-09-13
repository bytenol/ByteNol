import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Container from "../../components/common/Container";
import SEO from "../../components/common/SEO";
import { courses } from "../CoursesPage/courseData";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationHeader from "./components/ApplicationHeader";

function CourseApplicationPage() {
  const { courseSlug } = useParams();

  const course = useMemo(
    () => courses.find((item) => item.slug === courseSlug),
    [courseSlug],
  );

  if (!course) {
    return (
      <>
        <SEO
          title="Course Not Found — ByteNol"
          description="The requested ByteNol course could not be found."
        />

        <Container className="py-32 text-center">
          <h1 className="font-heading text-4xl font-bold text-dark">
            Course not found
          </h1>

          <p className="mt-4 text-muted">
            The course you're looking for doesn't exist.
          </p>

          <Link
            to="/courses"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-dark px-5 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} />
            Back to courses
          </Link>
        </Container>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`Apply — ${course.title} | ByteNol`}
        description={`Apply for the ${course.title} course at ByteNol.`}
      />

      <ApplicationHeader course={course} />

      <ApplicationForm course={course} />
    </>
  );
}

export default CourseApplicationPage;