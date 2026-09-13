import SEO from "../../components/common/SEO";

import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";
import ContactCTA from "./components/ContactCTA";
import ContactSocials from "./components/ContactSocials";

function ContactPage() {
	return (
		<>
			<SEO
				title="Contact ByteNol | Let's Build Something Together"
				description="Contact ByteNol about coding courses, software development, automation, business solutions and technology services."
			/>

			<ContactHero />

			<section
				id="contact-options"
				className="relative bg-surface py-20 sm:py-24 lg:py-28"
			>
				<div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
					<div>
						<ContactInfo />
						<ContactSocials />
					</div>

					<ContactForm />
				</div>
			</section>

			<ContactMap />

			<ContactCTA />
		</>
	);
}

export default ContactPage;