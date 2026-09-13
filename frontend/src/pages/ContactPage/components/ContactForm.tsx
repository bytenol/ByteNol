import { useState, type FormEvent } from "react";
import { ArrowRight, LoaderCircle, Send } from "lucide-react";
import { motion } from "motion/react";

import ContactTopics from "./ContactTopics";
import type { contact_choice_t, iContact } from "../../../types/contact";
import { createContactReq } from "../contactApi";


function ContactForm() {
	const [selectedTopic, setSelectedTopic] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [submitted, setSubmitted] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setLoading(true);

		const formData = new FormData(event.currentTarget);

		const body: iContact = {
			first_name: formData.get("first_name") as string,
			last_name: formData.get("last_name") as string,
			email: formData.get("email") as string,
			phone: formData.get("phone") as string,
			choice: formData.get("choice") as contact_choice_t,
			content: formData.get("content") as string,
		}

		try {
			const response = await createContactReq(body);
			if(response.error) {
				setLoading(false);
				setError(response.error);
				return;
			}
			console.log("submitted successfully");
		} catch(err) {
			console.log("somethinf went wrong");
		}
		

		setLoading(false);
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.97 }}
				animate={{ opacity: 1, scale: 1 }}
				className="flex min-h-[500px] items-center justify-center rounded-3xl border border-primary/20 bg-primary-light p-8 text-center"
			>
				<div className="max-w-md">
					<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-dark text-white">
						<Send size={26} />
					</div>

					<h3 className="mt-6 font-heading text-3xl font-bold text-dark">
						Message sent!
					</h3>

					<p className="mt-3 leading-7 text-muted">
						Thanks for reaching out to ByteNol. We'll get back to you as soon
						as possible.
					</p>

					<button
						type="button"
						onClick={() => setSubmitted(false)}
						className="mt-7 font-semibold text-primary-dark hover:text-primary-bright"
					>
						Send another message
					</button>
				</div>
			</motion.div>
		);
	}

	return (
		<form
			id="contact-form"
			onSubmit={handleSubmit}
			className="rounded-3xl border border-border bg-dark p-6 shadow-xl shadow-slate-200/50 sm:p-8 lg:p-10 text-white"
		>
			<div className="mb-8">
				<p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
					Start a conversation
				</p>

				<h2 className="mt-2 font-heading text-3xl font-bold">
					Tell us what you're working on.
				</h2>

				<p className="mt-3 text-sm leading-6 text-muted">
					Fill in the details below and we'll get back to you.
				</p>
			</div>

			<div className="grid gap-5 sm:grid-cols-2">
				<div>
					<label
						htmlFor="first_name"
						className="text-sm font-semibold"
					>
						First name
					</label>

					<input
						id="first_name"
						name="first_name"
						required
						placeholder="John"
						className="mt-2 w-full rounded-xl border border-border bg-dark-soft px-4 py-3 text-sm outline-none transition focus:border-primary-dark focus:ring-4 focus:ring-primary-light"
					/>
				</div>

				<div>
					<label
						htmlFor="last_name"
						className="text-sm font-semibold"
					>
						Last name
					</label>

					<input
						id="last_name"
						name="last_name"
						required
						placeholder="Doe"
						className="mt-2 w-full rounded-xl border border-border bg-dark-soft px-4 py-3 text-sm outline-none transition focus:border-primary-dark focus:ring-4 focus:ring-primary-light"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="text-sm font-semibold"
					>
						Email address
					</label>

					<input
						id="email"
						name="email"
						type="email"
						required
						placeholder="you@example.com"
						className="mt-2 w-full rounded-xl border border-border bg-dark-soft px-4 py-3 text-sm outline-none transition focus:border-primary-dark focus:ring-4 focus:ring-primary-light"
					/>
				</div>

				<div>
					<label
						htmlFor="phone"
						className="text-sm font-semibold"
					>
						Phone number
					</label>

					<input
						id="phone"
						name="phone"
						type="tel"
						placeholder="+234..."
						className="mt-2 w-full rounded-xl border border-border bg-dark-soft px-4 py-3 text-sm outline-none transition focus:border-primary-dark focus:ring-4 focus:ring-primary-light"
					/>
				</div>
			</div>

			<div className="mt-7">
				<ContactTopics
					selectedTopic={selectedTopic}
					onSelect={setSelectedTopic}
				/>

				<input type="hidden" name="choice" value={selectedTopic} />
			</div>

			<div className="mt-7">
				<label
					htmlFor="content"
					className="text-sm font-semibold text-primary-dark"
				>
					Tell us more
				</label>

				<textarea
					id="content"
					name="content"
					required
					rows={6}
					placeholder="Tell us about your project, question or idea..."
					className="mt-2 w-full resize-none rounded-xl border border-border bg-dark-soft px-4 py-3 text-sm leading-6 outline-none transition focus:border-primary-dark focus:ring-4 focus:ring-primary-light"
				/>
			</div>

			<button
				type="submit"
				disabled={loading}
				className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-dark px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-bright disabled:cursor-not-allowed disabled:opacity-60"
			>
				{loading ? (
					<>
						<LoaderCircle size={18} className="animate-spin" />
						Sending...
					</>
				) : (
					<>
						Send message
						<ArrowRight size={18} />
					</>
				)}
			</button>

			<p className="mt-4 text-center text-xs text-muted">
				Your information is only used to respond to your enquiry.
			</p>
		</form>
	);
}

export default ContactForm;