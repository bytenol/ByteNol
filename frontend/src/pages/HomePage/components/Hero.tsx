import { Book, Building2Icon, Code, Star } from "lucide-react";

import Container from "../../../components/common/Container";
import Button from "../../../components/ui/Button";

function Hero() {
	return (
					<Container className="lg:py-20 flex items-center">
				<div className="absolute top-0 left-70/100 h-100 w-100 bg-primary-200 rounded-full" />
				<div className="absolute top-30/100 left-50/100 h-100 w-100 bg-secondary-200 rounded-full" />
				<div className="box-grid">
					<div className="text-lg">
						<h1 className="lg:text-6xl font-medium text-primary-500">
							Digital skills and solutions that <br></br>
							<em className="text-secondary-500"> move you forward.</em>
						</h1>

						<p>
							Master in-demand technology skills or let our team turn your boldest ideas into reliable, real-world digital products
						</p>

						<div className="flex gap-2 my-4">
							<Button>
								Explore courses <Book />
							</Button>
							<Button variant="outline">
								Build with us <Building2Icon />
							</Button>
						</div>

						<div className="flex items-center mt-10 gap-10">
							<div className="avatars">
								<span>AO</span>
								<span>TM</span>
								<span>KE</span>
								<span>+</span>
							</div>
							<div>

								<div className="stars">
									<Star />
									4.9/5
								</div>

								<small>
									Trusted by 2,500+ learners
								</small>
							</div>

						</div>

					</div>
					<div className="hero-visual">
						<div className="image-card">
							<img src="./images/home/background-coders.jpg" alt="A collaborative technology team working together" />
						</div>
						<div className="floating-card floating-top">
							<span className="icon-box"> <Code />
							</span>
							<div>
								<strong>Learn by building</strong>
								<small>Real-world projects</small>
							</div>
						</div>
						<div className="floating-card floating-bottom">
							<strong>98%</strong><span>Completion<br />satisfaction</span>
						</div>
						<div className="code-dots">
							<span />
							<span />
							<span />
							<code>const future = "yours";</code>
						</div>
					</div>
				</div>
			</Container>
	);
}

export default Hero;