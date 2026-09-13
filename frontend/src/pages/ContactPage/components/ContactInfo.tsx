import { motion } from "motion/react";
import { contactChannels } from "../ContactData";
import SocialIcon from "../../../components/common/SocialIcon";

const icons = [
	<SocialIcon platform="gmail" />,
	<SocialIcon platform="whatsapp" />,
	<img src="./icons/common/location.svg" />
];

function ContactInfo() {
	return (
		<div>
			<div className="mb-8">
				<p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
					Get in touch
				</p>

				<h2 className="mt-3 font-heading text-3xl font-bold text-dark sm:text-4xl">
					We'd love to hear from you.
				</h2>

				<p className="mt-4 leading-7 text-muted">
					Whether you're looking to learn, build, automate or simply ask a
					question, there's a place to start.
				</p>
			</div>

			<div className="space-y-3">
				{contactChannels.map((channel, index) => {

					const content = (
						<div className="group flex gap-4 rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-sky-100">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary-dark transition-transform duration-300 group-hover:scale-110">
								{icons[index]}
							</div>

							<div className="min-w-0">
								<p className="text-xs font-semibold uppercase tracking-wide text-muted">
									{channel.label}
								</p>

								<p className="mt-1 truncate font-semibold text-dark">
									{channel.value}
								</p>

								<p className="mt-1 text-xs leading-5 text-muted">
									{channel.description}
								</p>
							</div>
						</div>
					);

					return channel.href ? (
						<motion.a
							key={channel.label}
							href={channel.href}
							whileHover={{ x: 4 }}
						>
							{content}
						</motion.a>
					) : (
						<motion.div key={channel.label} whileHover={{ x: 4 }}>
							{content}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

export default ContactInfo;