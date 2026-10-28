import CourseCard from "../CourseCard";

export default function MobileLearnIllust() {
    return (
        <CourseCard
            title="Mobile App Development"
            description="Build cross-platform mobile applications with native-like performance and beautiful UIs."
            category="Mobile"
            duration="v3.0 • 10 Weeks"
            badgeText="Flutter"
            bgClass="bg-[#daf5b4] text-green-900"
            to="mobile-app-dev"
            graphic={
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Floating App Cards */}
                    <div className="absolute w-[140px] h-[90px] bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] transform -rotate-6 -translate-x-12 -translate-y-8 border border-green-100 p-4 flex flex-col gap-3">
                        <div className="w-1/2 h-3 bg-slate-800 rounded-full" />
                        <div className="w-full h-2 bg-green-200 rounded-full mt-2" />
                        <div className="w-3/4 h-2 bg-green-200 rounded-full" />
                    </div>
                    <div className="absolute w-[150px] h-[100px] bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] transform rotate-3 translate-x-10 translate-y-6 border border-green-100 p-4 flex flex-col gap-3">
                        <div className="w-1/2 h-3 bg-slate-800 rounded-full" />
                        <div className="w-full h-2 bg-green-200 rounded-full mt-2" />
                        <div className="w-4/5 h-2 bg-green-200 rounded-full" />
                    </div>

                    {/* Humanoid holding a phone */}
                    <svg
                        className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-32 drop-shadow-xl"
                        viewBox="0 0 100 100"
                    >
                        <circle cx="50" cy="22" r="14" fill="#064e3b" />
                        <path d="M25 85 Q 50 35 75 85" fill="#059669" />
                        <rect
                            x="38"
                            y="42"
                            width="24"
                            height="42"
                            rx="4"
                            fill="#1e293b"
                        />
                    </svg>

                    {/* Floating Devicons */}
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
                        alt="Flutter"
                        className="absolute top-2 left-6 w-10 h-10 drop-shadow-md animate-bounce"
                        style={{ animationDuration: "3.5s" }}
                    />
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
                        alt="Android"
                        className="absolute bottom-2 right-4 w-12 h-12 drop-shadow-md animate-bounce"
                        style={{ animationDuration: "2.5s" }}
                    />
                </div>
            }
        />
    );
}