import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "../../../components/common/Container";
import type { Course } from "../../CoursesPage/courseData";
import ApplicationIllustration from "./ApplicationIllustration";

interface ApplicationFormProps {
  course: Course;
}

function ApplicationForm({ course }: ApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Web3Forms submission will be connected here.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-xl rounded-[2rem] border border-border bg-white p-10 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary-dark">
              <CheckCircle2 size={30} />
            </div>

            <h2 className="mt-6 font-heading text-3xl font-bold text-dark">
              Application received.
            </h2>

            <p className="mt-4 leading-7 text-muted">
              Thank you for applying for{" "}
              <strong>{course.title}</strong>. ByteNol will review your
              application and get back to you.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28">
            <ApplicationIllustration />

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark">
                You're applying for
              </p>

              <h2 className="mt-3 font-heading text-2xl font-bold text-dark">
                {course.title}
              </h2>

              <div className="mt-5 space-y-2 text-sm text-muted">
                <p>
                  <strong className="text-dark">Duration:</strong>{" "}
                  {course.duration}
                </p>

                <p>
                  <strong className="text-dark">Fee:</strong> ₦
                  {course.price.toLocaleString()}
                </p>

                <p>
                  <strong className="text-dark">Level:</strong>{" "}
                  {course.level}
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-border bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <h2 className="font-heading text-2xl font-bold text-dark">
                Tell us about yourself
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted">
                Fill in your details so we can get in touch with you about
                your application.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-semibold text-dark"
                >
                  First name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Your first name"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition focus:border-primary-dark focus:bg-white focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-semibold text-dark"
                >
                  Last name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Your last name"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition focus:border-primary-dark focus:bg-white focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-dark"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition focus:border-primary-dark focus:bg-white focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-dark"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="080..."
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition focus:border-primary-dark focus:bg-white focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="experience"
                  className="mb-2 block text-sm font-semibold text-dark"
                >
                  Programming experience
                </label>

                <select
                  id="experience"
                  name="experience"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary-dark focus:bg-white focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Select your experience level
                  </option>
                  <option value="beginner">I'm completely new</option>
                  <option value="basic">I know the basics</option>
                  <option value="intermediate">
                    I have built some projects
                  </option>
                  <option value="advanced">
                    I already have significant experience
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="goal"
                  className="mb-2 block text-sm font-semibold text-dark"
                >
                  What do you hope to achieve?
                </label>

                <textarea
                  id="goal"
                  name="goal"
                  required
                  rows={5}
                  placeholder="Tell us briefly about your goals..."
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition focus:border-primary-dark focus:bg-white focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <input
              type="hidden"
              name="course"
              value={course.title}
            />

            <input
              type="hidden"
              name="course_fee"
              value={`₦${course.price.toLocaleString()}`}
            />

            <input
              type="hidden"
              name="course_duration"
              value={course.duration}
            />

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-dark px-6 py-4 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Submit application
              <ArrowRight size={17} />
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-muted">
              By submitting this form, you agree to be contacted by ByteNol
              regarding your course application.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default ApplicationForm;