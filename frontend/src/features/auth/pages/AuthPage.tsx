import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Mail, Lock, User, ArrowRight, ArrowLeft, Phone, AlertCircle } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import type { iAuthForm } from "../auth.types";
import { loginReq, registerReq } from "../auth.api";
import type { ApiError } from "../../../lib/api";

const formVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AuthPage() {
    const { formType } = useParams();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [showVerification, setShowVerification] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [formData, setFormData] = useState<iAuthForm>({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        password_confirm: ""
    });

    const [errors, setErrors] = useState<Partial<iAuthForm>>({});

    useEffect(() => {
        setIsLogin(formType !== "signup");
        setErrors({}); // Clear errors when switching tabs via URL
    }, [formType]);

    const handleTabSwitch = (toLogin: boolean) => {
        if (isLoading) return; // Prevent switching while loading
        setIsLogin(toLogin);
        setErrors({});
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<iAuthForm> = {};

        // General Validation
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        // Signup Specific Validation
        if (!isLogin) {
            if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
            if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
            if (!formData.phone_number.trim()) {
                newErrors.phone_number = "Phone number is required";
            } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone_number)) {
                newErrors.phone_number = "Enter a valid phone number";
            }

            if (formData.password !== formData.password_confirm) {
                newErrors.password_confirm = "Passwords do not match";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsLoading(true);
        setError("");
        try {
            // signup
            if(!isLogin) {
                await registerReq(formData);
                setShowVerification(true);
            } else {
                await loginReq(formData);
                navigate("/dashboard", { replace: true });
            }
        } catch(err) {
            setError((err as ApiError).message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-surface relative flex items-center justify-center p-6 overflow-hidden">
            
            {/* Animated Background Elements */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-[100px] pointer-events-none -z-10"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary-200/40 rounded-full blur-[100px] pointer-events-none -z-10"
            />

            {/* Top: Back Link */}
            <div className="absolute top-8 left-8 z-20">
                <Link to="/" className="text-ink hover:text-brand-600 font-bold tracking-tight flex items-center gap-2 transition-colors">
                    <ArrowLeft size={18} /> Back to website
                </Link>
            </div>

            {/* Main Auth Card */}
            <div className="w-full max-w-lg bg-white p-8 sm:p-12 rounded-[2rem] shadow-2xl border border-line relative z-10">
                
                <AnimatePresence mode="wait">
                    {showVerification ? (
                        /* Verification UI */
                        <motion.div 
                            key="verification"
                            variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="text-center py-8"
                        >
                            <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail size={36} />
                            </div>
                            <h2 className="text-3xl font-black text-ink mb-4">Check your email</h2>
                            <p className="text-muted leading-relaxed mb-8">
                                We've sent a verification link to <strong className="text-ink">{formData.email}</strong>. Please click the link to activate your account.
                            </p>
                            <button 
                                onClick={() => {
                                    setShowVerification(false);
                                    setIsLogin(true);
                                }}
                                className="w-full bg-slate-100 hover:bg-slate-200 text-ink font-bold text-lg py-4 rounded-xl transition-all"
                            >
                                Back to Sign In
                            </button>
                        </motion.div>
                    ) : (
                        /* Standard Auth Form */
                        <motion.div key="auth-form" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                            {/* Form Toggle Tabs */}
                            <div className="bg-slate-100 p-1.5 rounded-xl flex items-center mb-8 w-full relative">
                                <div
                                    className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-lg shadow-sm transition-transform duration-300 ease-in-out ${isLogin ? 'translate-x-0' : 'translate-x-[calc(100%+12px)]'}`}
                                />
                                <button
                                    type="button"
                                    disabled={isLoading}
                                    onClick={() => handleTabSwitch(true)}
                                    className={`flex-1 py-2.5 text-sm font-bold z-10 transition-colors disabled:cursor-not-allowed ${isLogin ? 'text-ink' : 'text-muted hover:text-ink'}`}
                                >
                                    Sign In
                                </button>
                                <button
                                    type="button"
                                    disabled={isLoading}
                                    onClick={() => handleTabSwitch(false)}
                                    className={`flex-1 py-2.5 text-sm font-bold z-10 transition-colors disabled:cursor-not-allowed ${!isLogin ? 'text-ink' : 'text-muted hover:text-ink'}`}
                                >
                                    Create Account
                                </button>
                            </div>

                            <div className="mb-8 text-center">
                                <h1 className="text-3xl font-black text-ink mb-2">
                                    {isLogin ? "Welcome back" : "Join ByteNol"}
                                </h1>
                                <p className="text-muted text-sm">
                                    {isLogin ? "Enter your credentials to access your account." : "Start your journey with us today."}
                                </p>
                            </div>

                            {/* Form Area */}
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {
                                    error && (
                                    <div className="bg-red-300 w-full p-2 rounded-xl text-red-900">
                                        {error}
                                    </div>
                                    )
                                }
                                
                                {!isLogin && (
                                    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-2 gap-4">
                                        {/* First Name */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-ink uppercase tracking-wider">First Name</label>
                                            <div className="relative">
                                                <User className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.first_name ? 'text-red-500' : 'text-muted'}`} size={18} />
                                                <input
                                                    type="text"
                                                    value={formData.first_name}
                                                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                                                    className={`w-full bg-slate-50 border rounded-xl py-3.5 pl-11 pr-4 text-ink focus:outline-none focus:ring-2 focus:bg-white transition-all font-medium ${errors.first_name ? 'border-red-300 focus:ring-red-200' : 'border-line focus:ring-brand-500'}`}
                                                    placeholder="John"
                                                />
                                            </div>
                                            {errors.first_name && <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.first_name}</p>}
                                        </div>

                                        {/* Last Name */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-ink uppercase tracking-wider">Last Name</label>
                                            <div className="relative">
                                                <User className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.last_name ? 'text-red-500' : 'text-muted'}`} size={18} />
                                                <input
                                                    type="text"
                                                    value={formData.last_name}
                                                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                                    className={`w-full bg-slate-50 border rounded-xl py-3.5 pl-11 pr-4 text-ink focus:outline-none focus:ring-2 focus:bg-white transition-all font-medium ${errors.last_name ? 'border-red-300 focus:ring-red-200' : 'border-line focus:ring-brand-500'}`}
                                                    placeholder="Doe"
                                                />
                                            </div>
                                            {errors.last_name && <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.last_name}</p>}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Email Field */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-ink uppercase tracking-wider">Email Address</label>
                                    <div className="relative">
                                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.email ? 'text-red-500' : 'text-muted'}`} size={18} />
                                        <input
                                            type="text"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={`w-full bg-slate-50 border rounded-xl py-3.5 pl-11 pr-4 text-ink focus:outline-none focus:ring-2 focus:bg-white transition-all font-medium ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-line focus:ring-brand-500'}`}
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    {errors.email && <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.email}</p>}
                                </div>

                                {/* Phone Number (Signup Only) */}
                                {!isLogin && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-1.5">
                                        <label className="text-xs font-bold text-ink uppercase tracking-wider">Phone Number</label>
                                        <div className="relative">
                                            <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.phone_number ? 'text-red-500' : 'text-muted'}`} size={18} />
                                            <input
                                                type="tel"
                                                value={formData.phone_number}
                                                onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                                                className={`w-full bg-slate-50 border rounded-xl py-3.5 pl-11 pr-4 text-ink focus:outline-none focus:ring-2 focus:bg-white transition-all font-medium ${errors.phone_number ? 'border-red-300 focus:ring-red-200' : 'border-line focus:ring-brand-500'}`}
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                        {errors.phone_number && <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.phone_number}</p>}
                                    </motion.div>
                                )}

                                {/* Password Field */}
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs font-bold text-ink uppercase tracking-wider">Password</label>
                                        {isLogin && (
                                            <a href="#" className="text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors">
                                                Forgot password?
                                            </a>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.password ? 'text-red-500' : 'text-muted'}`} size={18} />
                                        <input
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            className={`w-full bg-slate-50 border rounded-xl py-3.5 pl-11 pr-4 text-ink focus:outline-none focus:ring-2 focus:bg-white transition-all font-medium ${errors.password ? 'border-red-300 focus:ring-red-200' : 'border-line focus:ring-brand-500'}`}
                                            placeholder="••••••••"
                                        />
                                    </div>
                                    {errors.password && <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.password}</p>}
                                </div>

                                {/* Confirm Password (Signup Only) */}
                                {!isLogin && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-1.5">
                                        <label className="text-xs font-bold text-ink uppercase tracking-wider">Confirm Password</label>
                                        <div className="relative">
                                            <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.password_confirm ? 'text-red-500' : 'text-muted'}`} size={18} />
                                            <input
                                                type="password"
                                                value={formData.password_confirm}
                                                onChange={(e) => setFormData({ ...formData, password_confirm: e.target.value })}
                                                className={`w-full bg-slate-50 border rounded-xl py-3.5 pl-11 pr-4 text-ink focus:outline-none focus:ring-2 focus:bg-white transition-all font-medium ${errors.password_confirm ? 'border-red-300 focus:ring-red-200' : 'border-line focus:ring-brand-500'}`}
                                                placeholder="••••••••"
                                            />
                                        </div>
                                        {errors.password_confirm && <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.password_confirm}</p>}
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/30 hover:-translate-y-1 mt-8 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                    ) : (
                                        <>
                                            {isLogin ? "Sign In" : "Create Account"} <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>

                                {/* Terms / Disclaimer */}
                                {!isLogin && (
                                    <p className="text-center text-xs text-muted mt-6 max-w-xs mx-auto">
                                        By creating an account, you agree to our <a href="#" className="font-bold text-brand-600 hover:underline">Terms of Service</a> and <a href="#" className="font-bold text-brand-600 hover:underline">Privacy Policy</a>.
                                    </p>
                                )}
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}