import SocialIcon from "../../../components/common/SocialIcon";
import { socialLinks } from "../ContactData";


const Icons = [
	<SocialIcon platform="instagram" />,
	<SocialIcon platform="x" />,
	<SocialIcon platform="youtube" />,
	<SocialIcon platform="github" />,
	<SocialIcon platform="facebook" />
]


function ContactSocials() {
	return (
		<div className="mt-10">
			<p className="font-heading text-xl font-bold text-dark">
				Follow Us
			</p>

			<p className="mt-2 text-sm leading-6 text-muted">
				Stay updated with our latest projects, learning resources and
				technology content.
			</p>

			<div className="mt-5 flex flex-wrap gap-3">
				{socialLinks.map((social, index) => {

					return (
						<a
							key={social.name}
							href={social.href}
							target="_blank"
							rel="noreferrer"
							aria-label={social.name}
							className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-dark transition-all hover:-translate-y-1 hover:border-primary-dark hover:bg-primary-light hover:text-primary-dark"
						>
							{Icons[index]}
						</a>
					);
				})}
			</div>
		</div>
	);
}

export default ContactSocials;