import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

import Container from "../../../components/common/Container";

function ContactMap() {
	return (
		<section className="bg-surface py-20 sm:py-24">
			<Container>
				<div className="grid items-stretch gap-6 lg:grid-cols-[0.7fr_1.3fr]">
					{/* Intro */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						className="relative overflow-hidden rounded-3xl bg-primary-light p-7 sm:p-10"
					>
						<div className="relative z-10">
							<span className="inline-flex rounded-full border border-primary/40 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
								Our location
							</span>

							<h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-dark">
								Come <span className="text-primary-dark">find us.</span>
							</h2>

							<p className="mt-5 max-w-md leading-7 text-muted">
								ByteNol is building from Nigeria, helping learners and
								organizations turn ideas into useful technology.
							</p>

							<div className="mt-8 flex items-center gap-3 text-sm font-semibold text-dark">
								<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-dark shadow-sm">
									<MapPin size={19} />
								</span>

								Nigeria
							</div>

							<button
								type="button"
								className="mt-8 inline-flex items-center gap-2 font-semibold text-primary-dark transition hover:text-primary-bright"
							>
								Get directions
								<ArrowUpRight size={17} />
							</button>
						</div>

						{/* Decorative map pin */}
						<motion.div
							className="absolute bottom-8 right-8 text-primary-dark/20"
							animate={{ y: [0, -12, 0] }}
							transition={{ duration: 3, repeat: Infinity }}
						>
							<MapPin size={110} strokeWidth={1} />
						</motion.div>
					</motion.div>

					{/* Map */}
					<div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
						<iframe
							title="ByteNol location map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1379258300794!2d4.587734711452723!3d8.485967497215766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d5fab1b9337%3A0x599eb9ae158aabd2!2sBytenol!5e0!3m2!1sen!2sng!4v1789251138713!5m2!1sen!2sng"
							className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default ContactMap;