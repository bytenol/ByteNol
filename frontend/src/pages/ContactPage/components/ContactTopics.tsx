import {
	BriefcaseBusiness,
	Code2,
	GraduationCap,
	HelpCircle,
	Settings,
} from "lucide-react";
import { enquiryTopics } from "../ContactData";

interface ContactTopicsProps {
	selectedTopic: string;
	onSelect: (topic: string) => void;
}

const icons = {
	learning: GraduationCap,
	software: Code2,
	automation: Settings,
	business: BriefcaseBusiness,
	general: HelpCircle,
};

function ContactTopics({
	selectedTopic,
	onSelect,
}: ContactTopicsProps) {
	return (
		<div>
			<label className="text-sm font-semibold text-primary-dark">
				What can we help you with?
			</label>

			<div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
				{enquiryTopics.map((topic) => {
					const Icon = icons[topic.id as keyof typeof icons];
					const selected = selectedTopic === topic.id;

					return (
						<button
							key={topic.id}
							type="button"
							onClick={() => onSelect(topic.id)}
							className={`group rounded-2xl border p-4 text-left transition-all duration-200 ${selected
									? "border-primary-dark bg-primary-dark shadow-sm"
									: "border-black bg-dark-soft hover:-translate-y-0.5 hover:border-primary"
								}`}
						>
							<div
								className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${selected
										? "bg-primary-light text-dark"
										: "bg-primary-dark text-primary-light"
									}`}
							>
								<Icon size={17} />
							</div>

							<p className="text-xs font-bold leading-5 text-white">
								{topic.title}
							</p>

							<p className="mt-1 hidden text-[11px] leading-4 text-white-900/50 sm:block">
								{topic.description}
							</p>
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default ContactTopics;