import SEO from "../../components/common/SEO";
import { motion } from "motion/react";
import { CourseCard } from "./Coursecard";
import { courses } from "./courses";

function CoursesPage() {
	return (
		<>
			<SEO
				title="Coding Courses | ByteNol Academy"
				description="Learn practical software development with ByteNol Academy. Explore our python, frontend, backend, Android, automation and robotics courses."
			/>
			<section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h1 className="font-heading text-4xl font-semibold text-dark sm:text-5xl">
          Courses
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Pick a path and start building. Every course pairs short lessons
          with real projects, so you leave with something that works, not
          just notes.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <CourseCard key={course.slug} course={course} index={index} />
        ))}
      </div>
    </section>
		</>
	);
}


export default CoursesPage;