import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Mail, ArrowLeft, KeyRound, Link as LinkIcon, CheckCircle2, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { resendVerificationMailReq } from "../auth.api";
import { ApiError } from "../../../lib/api";

type RecoveryIntent = "password" | "activation";
type FormStatus = "idle" | "loading" | "success";


// --- Animation Variants ---
const formVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

export default function TroubleSigningInPage() {
    const [intent, setIntent] = useState<RecoveryIntent>("password");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<FormStatus>("idle");
    const [error, setError] = useState("");

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email.trim()) {
            setError("Email address is required.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setStatus("loading");

        try {
            await resendVerificationMailReq(email);
            setStatus("success");
        } catch (err) {
            setError((err as ApiError).message);
            setStatus("idle");
        }
    };

    const resetForm = () => {
        setStatus("idle");
        setEmail("");
        setError("");
    };

    return (
        <div className="min-h-screen bg-surface relative flex items-center justify-center p-6 overflow-hidden">
            
            {/* Animated Background Blobs */}
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
                <Link to="/auth/login" className="text-ink hover:text-brand-600 font-bold tracking-tight flex items-center gap-2 transition-colors">
                    <ArrowLeft size={18} /> Back to Sign In
                </Link>
            </div>

            {/* Main Recovery Card */}
            <div className="w-full max-w-lg bg-white p-8 sm:p-12 rounded-[2rem] shadow-2xl border border-line relative z-10">
                
                <AnimatePresence mode="wait">
                    {status === "success" ? (
                        /* Success State */
                        <motion.div 
                            key="success"
                            variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="text-center py-6"
                        >
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                                className="w-20 h-20 bg-secondary-50 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-secondary-100"
                            >
                                <CheckCircle2 size={40} />
                            </motion.div>
                            <h2 className="text-3xl font-black text-ink mb-4">Request Sent</h2>
                            <p className="text-muted leading-relaxed mb-8">
                                {intent === "password" 
                                    ? `We've sent password reset instructions to ` 
                                    : `We've sent a new activation link to `}
                                <strong className="text-ink">{email}</strong>. Please check your inbox and spam folder.
                            </p>
                            
                            <div className="space-y-4">
                                <Link 
                                    to="/auth/login" 
                                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/30 hover:-translate-y-1"
                                >
                                    Return to Sign In <ArrowRight size={18} />
                                </Link>
                                <button 
                                    onClick={resetForm}
                                    className="w-full text-muted hover:text-ink font-bold text-sm py-2 transition-colors"
                                >
                                    Try a different email address
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        /* Form State */
                        <motion.div 
                            key="form"
                            variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {/* Header */}
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-black text-ink mb-3">Having trouble?</h1>
                                <p className="text-muted text-sm">
                                    Don't worry, it happens to the best of us. Let us know what you need help with and we'll get you sorted.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                {/* Interactive Intent Selection */}
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-ink uppercase tracking-wider">What do you need help with?</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        
                                        {/* Password Reset Option */}
                                        <label className={`cursor-pointer border rounded-xl p-4 transition-all flex items-start gap-3 ${intent === 'password' ? 'border-brand-500 bg-brand-50 shadow-sm' : 'border-line bg-white hover:bg-slate-50'}`}>
                                            <input 
                                                type="radio" 
                                                name="intent" 
                                                value="password" 
                                                checked={intent === 'password'}
                                                onChange={() => setIntent('password')}
                                                className="sr-only" 
                                            />
                                            <div className={`mt-0.5 ${intent === 'password' ? 'text-brand-600' : 'text-muted'}`}>
                                                <KeyRound size={20} />
                                            </div>
                                            <div>
                                                <span className={`font-bold text-sm block ${intent === 'password' ? 'text-brand-700' : 'text-ink'}`}>Reset Password</span>
                                                <span className="text-xs text-muted block mt-1">I forgot my password</span>
                                            </div>
                                        </label>

                                        {/* Resend Activation Option */}
                                        <label className={`cursor-pointer border rounded-xl p-4 transition-all flex items-start gap-3 ${intent === 'activation' ? 'border-brand-500 bg-brand-50 shadow-sm' : 'border-line bg-white hover:bg-slate-50'}`}>
                                            <input 
                                                type="radio" 
                                                name="intent" 
                                                value="activation" 
                                                checked={intent === 'activation'}
                                                onChange={() => setIntent('activation')}
                                                className="sr-only" 
                                            />
                                            <div className={`mt-0.5 ${intent === 'activation' ? 'text-brand-600' : 'text-muted'}`}>
                                                <LinkIcon size={20} />
                                            </div>
                                            <div>
                                                <span className={`font-bold text-sm block ${intent === 'activation' ? 'text-brand-700' : 'text-ink'}`}>Resend Link</span>
                                                <span className="text-xs text-muted block mt-1">I didn't get my activation email</span>
                                            </div>
                                        </label>

                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-ink uppercase tracking-wider">Account Email</label>
                                    <div className="relative">
                                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 ${error ? 'text-red-500' : 'text-muted'}`} size={18} />
                                        <input 
                                            type="email" 
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (error) setError("");
                                            }}
                                            className={`w-full bg-slate-50 border rounded-xl py-3.5 pl-11 pr-4 text-ink focus:outline-none focus:ring-2 focus:bg-white transition-all font-medium ${error ? 'border-red-300 focus:ring-red-200' : 'border-line focus:ring-brand-500'}`}
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    {error && (
                                        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                                            <AlertCircle size={12}/> {error}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    disabled={status === "loading"}
                                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/30 hover:-translate-y-1 mt-4 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            {intent === "password" ? "Send Reset Instructions" : "Resend Activation Link"}
                                        </>
                                    )}
                                </button>

                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
}