import CourseCard from "../CourseCard";


export default function AutomateLearnIllust() {
    return (
        <CourseCard
            title="Automation & DevOps"
            description="Streamline workflows, automate testing, and deploy code securely utilizing industry standard tools."
            category="Infrastructure"
            duration="v1.8 • 8 Weeks"
            badgeText="Python / Docker"
            bgClass="bg-[#ffccaa] text-orange-900"
            to="automation"
            graphic={
                <div className="relative w-[210px] h-[170px] bg-[#fffcf8] rounded-xl shadow-[0_15px_30px_rgba(234,88,12,0.15)] transform rotate-2 border border-orange-200 grid grid-cols-3 grid-rows-3 p-5 gap-4">
                    {/* Minimal Grid Dashboard Layout */}
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="flex items-center justify-center">
                            <div className="w-5 h-5 border-[3px] border-orange-200 rounded-full" />
                        </div>
                    ))}

                    {/* Humanoid DevOps Engineer */}
                    <svg
                        className="absolute -bottom-4 -left-6 w-32 h-32 drop-shadow-xl"
                        viewBox="0 0 100 100"
                    >
                        <circle cx="45" cy="30" r="14" fill="#7c2d12" />
                        <path d="M15 95 Q 45 40 75 95" fill="#ea580c" />
                        {/* Pointing/Interacting Hand */}
                        <path
                            d="M58 60 L 85 45"
                            stroke="#ea580c"
                            strokeWidth="6"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Floating Devicons */}
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                        alt="Python"
                        className="absolute top-2 right-4 w-11 h-11 drop-shadow-md animate-bounce"
                        style={{ animationDuration: "3.2s" }}
                    />
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                        alt="Docker"
                        className="absolute bottom-4 -right-4 w-12 h-12 drop-shadow-md animate-bounce"
                        style={{ animationDuration: "4.1s" }}
                    />
                </div>
            }
        />
    )
}