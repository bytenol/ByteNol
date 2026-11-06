import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { CheckCircle2, XCircle, Loader2, ArrowRight, Mail, ArrowLeft } from "lucide-react";

type VerificationStatus = "verifying" | "success" | "error";


// --- Animation Variants ---
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

export default function VerifyEmailPage() {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState<VerificationStatus>("verifying");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const uid = searchParams.get("uid");
        const token = searchParams.get("token");

        if (!uid || !token) {
            setStatus("error");
            setErrorMessage("This verification link is invalid or malformed.");
            return;
        }

        const verifyEmail = async () => {
            setStatus("verifying");
            
            // Simulate network delay
            setTimeout(() => {
                // In production, you would make your fetch/axios call here using uid and token
                // For demonstration, we'll assume it succeeds:
                setStatus("success");
                
                // If it were to fail, you would do:
                // setStatus("error");
                // setErrorMessage("This verification link has expired or has already been used.");
            }, 2500);
        };

        verifyEmail();
    }, [searchParams]);

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

            {/* Main Card */}
            <div className="w-full max-w-md bg-white p-8 sm:p-12 rounded-[2rem] shadow-2xl border border-line relative z-10 text-center">
                
                {/* Brand Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-black text-ink">ByteNol.</h2>
                </div>

                <div className="min-h-[250px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        
                        {/* State 1: Verifying */}
                        {status === "verifying" && (
                            <motion.div 
                                key="verifying"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col items-center"
                            >
                                <div className="relative w-20 h-20 mb-6">
                                    <div className="absolute inset-0 bg-brand-50 rounded-full animate-ping opacity-75" />
                                    <div className="relative w-full h-full bg-brand-100 text-brand-600 rounded-full flex items-center justify-center">
                                        <Mail size={32} />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm border border-line">
                                        <Loader2 size={16} className="text-brand-600 animate-spin" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-ink mb-3">Verifying Email</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    Please wait a moment while we securely verify your email address and activate your account.
                                </p>
                            </motion.div>
                        )}

                        {/* State 2: Success */}
                        {status === "success" && (
                            <motion.div 
                                key="success"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col items-center"
                            >
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                                    className="w-20 h-20 bg-secondary-50 text-secondary-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-secondary-100"
                                >
                                    <CheckCircle2 size={40} />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-ink mb-3">Email Verified!</h3>
                                <p className="text-muted text-sm leading-relaxed mb-8">
                                    Your email has been successfully verified. Your account is now fully active and ready to go.
                                </p>
                                <Link 
                                    to="/auth/login" 
                                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/30 hover:-translate-y-1"
                                >
                                    Continue to Login <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        )}

                        {status === "error" && (
                            <motion.div 
                                key="error"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col items-center"
                            >
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                    className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-red-100"
                                >
                                    <XCircle size={40} />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-ink mb-3">Verification Failed</h3>
                                <p className="text-muted text-sm leading-relaxed mb-8">
                                    {errorMessage}
                                </p>
                                <Link 
                                    to="/auth/login" 
                                    className="w-full bg-slate-100 hover:bg-slate-200 text-ink font-bold text-lg py-4 rounded-xl transition-all"
                                >
                                    Back to Sign In
                                </Link>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}