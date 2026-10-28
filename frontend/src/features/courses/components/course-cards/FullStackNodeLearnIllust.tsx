import CourseCard from "../CourseCard";

export default function FullStackNodeLearnIllust() {
    return (
        <CourseCard
            title="FullStack Development"
            description="Master modern web architecture from responsive frontends to scalable backend databases."
            category="Web Dev"
            duration="v4.2 • 12 Weeks"
            badgeText="React / Node"
            bgClass="bg-[#d3caff] text-indigo-900"
            to="fullstack-node"
            graphic={
                <div className="relative w-[240px] h-[160px] bg-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] transform -rotate-2 flex border border-indigo-100 overflow-hidden">

                    <div className="w-[30%] h-full bg-slate-900 p-4 flex flex-col gap-3">
                        <div className="w-full h-2 bg-slate-700 rounded-full" />
                        <div className="w-2/3 h-2 bg-slate-700 rounded-full" />
                        <div className="w-full h-2 bg-slate-700 rounded-full mt-auto" />
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-end gap-2">
                        <div className="flex items-end gap-3 h-1/2">
                            <div className="w-1/3 h-1/3 bg-indigo-300 rounded-t-md" />
                            <div className="w-1/3 h-2/3 bg-indigo-400 rounded-t-md" />
                            <div className="w-1/3 h-full bg-indigo-500 rounded-t-md" />
                        </div>
                    </div>

                    <svg
                        className="absolute -bottom-2 -right-4 w-28 h-28 drop-shadow-xl"
                        viewBox="0 0 100 100"
                    >
                        <circle cx="50" cy="25" r="15" fill="#312e81" />
                        <path d="M20 95 Q 50 40 80 95" fill="#4f46e5" />
                    </svg>

                    {/* Floating Devicons */}
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        alt="React"
                        className="absolute top-4 right-14 w-9 h-9 drop-shadow-md animate-bounce"
                        style={{ animationDuration: "3s" }}
                    />
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                        alt="Node"
                        className="absolute bottom-6 right-2 w-10 h-10 drop-shadow-md animate-bounce"
                        style={{ animationDuration: "4s" }}
                    />
                </div>
            }
        />
    )
}