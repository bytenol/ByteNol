export interface ContactChannel {
	label: string;
	value: string;
	description: string;
	href?: string;
}


export const contactChannels: ContactChannel[] = [
	{
		label: "Email us",
		value: "bytenolacademy@gmail.com",
		description: "Send us an email and we'll get back to you.",
		href: "mailto:bytenolacademy@gmail.com",
	},
	{
		label: "+234 9031179295",
		value: "Text us directly on whatsapp",
		description: "We'll be available for quick conversations.",
	},
	{
		label: "Our location",
		value: "Ilorin, Kwara State, Nigeria",
		description: "Serving learners and organizations.",
	},
];



export const socialLinks = [
	{
		name: "Instagram",
		href: "",
	},
	{
		name: "X",
		href: "https://x.com/bytenol",
	},
	{
		name: "YouTube",
		href: "",
	},
	{
		name: "GitHub",
		href: "https://github.com/bytenol",
	},
	{
		name: "Facebook",
		href: "",
	},
];


export const enquiryTopics = [
	{
		id: "LEARN",
		title: "Learn with ByteNol",
		description: "Courses, mentorship and practical learning.",
	},
	{
		id: "BUILD",
		title: "Build software",
		description: "Turn an idea or business need into software.",
	},
	{
		id: "AUTOMATE",
		title: "Automate work",
		description: "Reduce repetitive work with technology.",
	},
	{
		id: "SOLUTION",
		title: "Business solution",
		description: "Technology solutions for your organization.",
	},
	{
		id: "GENERAL",
		title: "General enquiry",
		description: "Something else? We're listening.",
	},
];