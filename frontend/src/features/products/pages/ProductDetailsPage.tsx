import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Check, ArrowRight, Plus, X, Lock } from "lucide-react";
import Container from "../../../components/common/Container";
import { pulseUiKitData } from "../products.data";
import ProductCard from "../components/ProductCard";

// --- Animation Variants ---
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ProductDetailsPage() {
    const data = pulseUiKitData;
    const [selectedLicense, setSelectedLicense] = useState(data.licenses[0].id);
    const [openFaq, setOpenFaq] = useState<string | null>(data.faqs[0].id);

    const activePrice = data.licenses.find(l => l.id === selectedLicense)?.price;

    return (
        <div className="min-h-screen bg-[#fafafa] pb-24 font-sans text-ink">

            {/* Breadcrumb Header */}
            <div className="border-b border-line bg-white">
                <Container className="py-4 flex items-center justify-between">
                    <div className="text-sm font-bold">
                        <span className="text-muted">Products /</span> {data.title}
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm font-bold">
                        <a href="#" className="text-ink">Products</a>
                        <a href="#" className="text-muted hover:text-ink">Details</a>
                        <a href="#" className="text-muted hover:text-ink">FAQ</a>
                        <a href="#" className="border border-line rounded-full px-4 py-1.5 flex items-center gap-2 hover:bg-slate-50 transition-colors">
                            Need help? <ArrowRight size={14} />
                        </a>
                    </div>
                </Container>
            </div>

            <Container className="pt-12 lg:pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-24 items-start">

                    {/* Left Column: Product Intro & Visual */}
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-10">

                        {/* Header Area */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-[#dcfce7] text-[#166534] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                                    {data.category}
                                </span>
                                <span className="text-muted text-sm font-medium">{data.customers}</span>
                            </div>
                            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                                {data.title}
                            </motion.h1>
                            <motion.p variants={fadeUp} className="text-lg text-muted leading-relaxed max-w-2xl">
                                {data.description}
                            </motion.p>

                            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 mt-8">
                                {data.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm font-bold">
                                        <Check size={16} className="text-[#65a30d]" /> {highlight}
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Main Product Visual */}
                        <motion.div variants={fadeUp} className="w-full aspect-[4/3] bg-[#e0e7ff] rounded-[2rem] overflow-hidden border border-indigo-100 flex items-end justify-center relative p-8 pb-0 shadow-sm">
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                            {/* Fake Dashboard UI Illustration */}
                            <div className="w-[90%] h-[85%] bg-white rounded-t-2xl shadow-2xl border border-slate-200 flex overflow-hidden transform translate-y-4">
                                <div className="w-1/4 bg-[#1e1b4b] p-4 flex flex-col gap-3">
                                    <div className="w-full h-2 bg-white/20 rounded-full mb-4" />
                                    <div className="w-3/4 h-2 bg-white/20 rounded-full" />
                                    <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                                </div>
                                <div className="flex-1 p-6 flex flex-col justify-end gap-2">
                                    <div className="flex gap-4 mb-auto">
                                        <div className="w-1/3 h-12 bg-indigo-100 rounded-lg" />
                                        <div className="w-1/3 h-12 bg-indigo-100 rounded-lg" />
                                        <div className="w-1/3 h-12 bg-indigo-100 rounded-lg" />
                                    </div>
                                    <div className="flex items-end gap-3 h-32 mt-8">
                                        <div className="w-1/5 h-1/4 bg-indigo-500 rounded-t-md" />
                                        <div className="w-1/5 h-2/4 bg-indigo-500 rounded-t-md" />
                                        <div className="w-1/5 h-1/3 bg-indigo-500 rounded-t-md" />
                                        <div className="w-1/5 h-full bg-indigo-500 rounded-t-md" />
                                        <div className="w-1/5 h-3/4 bg-indigo-500 rounded-t-md" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Sticky License Card */}
                    <div className="lg:sticky lg:top-8 z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-[2rem] border border-line p-8 shadow-xl shadow-slate-200/50 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#65a30d]">Choose your license</span>
                                <span className="bg-[#bef264] text-[#3f6212] text-[10px] font-black uppercase px-3 py-1 rounded-full">Lifetime</span>
                            </div>
                            <p className="text-muted text-sm mb-8">One-time payment. Yours forever.</p>

                            {/* License Options */}
                            <div className="space-y-4 mb-10">
                                {data.licenses.map((license) => (
                                    <label
                                        key={license.id}
                                        className={`flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-all border-2 ${selectedLicense === license.id ? 'border-ink bg-slate-50' : 'border-line hover:border-slate-300'}`}
                                    >
                                        <input
                                            type="radio"
                                            name="license"
                                            value={license.id}
                                            checked={selectedLicense === license.id}
                                            onChange={() => setSelectedLicense(license.id)}
                                            className="sr-only"
                                        />
                                        <div className="mt-1">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedLicense === license.id ? 'border-ink' : 'border-slate-300'}`}>
                                                {selectedLicense === license.id && <div className="w-2.5 h-2.5 bg-ink rounded-full" />}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="font-bold text-ink">{license.title}</h4>
                                                <span className="font-bold text-lg text-ink">${license.price}</span>
                                            </div>
                                            <p className="text-xs text-muted leading-relaxed pr-4">{license.description}</p>
                                        </div>
                                    </label>
                                ))}
                            </div>

                            {/* Checkout Action */}
                            <div className="mt-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm text-muted">{data.licenses.find(l => l.id === selectedLicense)?.title} license</span>
                                    <span className="text-4xl font-bold text-ink">${activePrice}</span>
                                </div>
                                <button className="w-full bg-ink hover:bg-slate-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                                    Purchase license <ArrowRight size={18} />
                                </button>
                                <div className="flex items-center justify-center gap-2 text-xs text-muted mt-4">
                                    <Lock size={12} /> Secure checkout • Instant access
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>

            {/* "What's Inside" Section */}
            <section className="py-24 border-t border-line mt-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#65a30d] mb-4 block">What's Inside</span>
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">{data.whatsInside.title}</h2>
                            <p className="text-muted text-lg leading-relaxed">{data.whatsInside.description}</p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {data.whatsInside.items.map((item) => (
                                <motion.div
                                    key={item.id} variants={fadeUp}
                                    className={`p-8 rounded-[2rem] border ${item.highlighted ? 'bg-[#bef264] border-[#a3e635]' : 'bg-white border-line shadow-sm'}`}
                                >
                                    <strong className={`block text-5xl font-black mb-4 ${item.highlighted ? 'text-[#3f6212]' : 'text-ink'}`}>{item.metric}</strong>
                                    <h3 className={`text-lg font-bold mb-2 ${item.highlighted ? 'text-[#3f6212]' : 'text-ink'}`}>{item.title}</h3>
                                    <p className={`text-sm leading-relaxed ${item.highlighted ? 'text-[#4d7c0f]' : 'text-muted'}`}>{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Feature Block Section */}
            <section className="py-12">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="bg-[#f5f7f5] rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16 overflow-hidden border border-line"
                    >
                        <div className="flex-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#65a30d] mb-4 block">{data.feature.eyebrow}</span>
                            <h2 className="text-4xl font-bold tracking-tight mb-6 leading-tight">{data.feature.title}</h2>
                            <p className="text-muted text-lg leading-relaxed">{data.feature.description}</p>
                        </div>

                        <div className="flex-1 w-full flex justify-end">
                            <div className="w-[120%] lg:w-[150%] max-w-2xl bg-white rounded-l-2xl shadow-xl border border-line overflow-hidden transform translate-x-12 flex h-[300px]">
                                <div className="w-1/4 bg-[#1e1b4b] p-4 flex flex-col gap-3">
                                    <div className="w-full h-2 bg-white/20 rounded-full mb-4" />
                                    <div className="w-full h-2 bg-white/20 rounded-full" />
                                    <div className="w-full h-2 bg-white/20 rounded-full" />
                                </div>
                                <div className="flex-1 p-6 flex flex-col justify-end gap-2 bg-[#f8fafc]">
                                    <div className="flex gap-4 mb-auto">
                                        <div className="w-1/3 h-16 bg-[#c4b5fd] rounded-xl" />
                                        <div className="w-1/3 h-16 bg-[#bef264] rounded-xl" />
                                        <div className="w-1/3 h-16 bg-[#fed7aa] rounded-xl" />
                                    </div>
                                    <div className="flex items-end gap-4 h-32 mt-8">
                                        <div className="w-1/6 h-1/4 bg-indigo-500 rounded-t-md" />
                                        <div className="w-1/6 h-2/4 bg-indigo-500 rounded-t-md" />
                                        <div className="w-1/6 h-full bg-indigo-500 rounded-t-md" />
                                        <div className="w-1/6 h-1/2 bg-indigo-500 rounded-t-md" />
                                        <div className="w-1/6 h-3/4 bg-indigo-500 rounded-t-md" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Value Props Banner (Dark) */}
            <section className="bg-[#1a1a1a] text-white py-20 mt-12">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {data.valueProps.map((prop, idx) => (
                            <div key={prop.id} className={`flex items-start gap-5 ${idx !== 0 ? 'pt-8 md:pt-0 md:pl-12' : ''}`}>
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#bef264] shrink-0">
                                    {prop.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{prop.title}</h3>
                                    <p className="text-[#a3a3a3] text-sm leading-relaxed">{prop.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* FAQs Section */}
            <section className="py-32 bg-white border-b border-line">
                <Container className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#65a30d] mb-4 block">Good to know</span>
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently asked questions</h2>
                        <p className="text-muted text-lg">Everything you need to know before bringing {data.title} into your workflow.</p>
                    </div>

                    <div className="divide-y divide-line">
                        {data.faqs.map((faq) => {
                            const isOpen = openFaq === faq.id;
                            return (
                                <div key={faq.id} className="py-6">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                                        className="w-full flex items-center justify-between text-left focus:outline-none group"
                                    >
                                        <h3 className="text-lg font-bold text-ink group-hover:text-brand-600 transition-colors pr-8">{faq.question}</h3>
                                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-ink border-ink text-white' : 'border-line text-ink group-hover:border-ink'}`}>
                                            {isOpen ? <X size={16} /> : <Plus size={16} />}
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pt-4 text-muted leading-relaxed pr-12">{faq.answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Related Products ("Keep Exploring") */}
            <section className="py-24 bg-[#fafafa]">
                <Container>
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#65a30d] mb-4 block">Keep Exploring</span>
                            <h2 className="text-3xl font-bold tracking-tight text-ink">You might also like</h2>
                        </div>
                        <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold text-ink hover:text-brand-600 transition-colors">
                            View all products <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Example mock items matching screenshot s7.jpg using ProductCard */}
                        <ProductCard
                            title="Notely Dashboard"
                            description="A calm, considered workspace template for notes and projects."
                            category="Templates" version="" badgeText="Figma" bgClass="bg-[#bef264]"
                            graphic={<div className="w-32 h-20 bg-white rounded-lg shadow-sm transform -rotate-6 border border-line" />}
                        />
                        <ProductCard
                            title="Grain Icon Library"
                            description="Over 600 crisp, expressive icons made for everyday interfaces."
                            category="Icons" version="" badgeText="SVG" bgClass="bg-[#fed7aa]"
                            graphic={<div className="w-24 h-24 bg-white rounded-lg shadow-sm border border-line grid grid-cols-3 grid-rows-3 gap-1 p-2"><div className="border border-line rounded" /><div className="border border-line rounded" /><div className="border border-line rounded" /><div className="border border-line rounded" /><div className="border border-line rounded" /><div className="border border-line rounded" /><div className="border border-line rounded" /><div className="border border-line rounded" /><div className="border border-line rounded" /></div>}
                        />
                        <ProductCard
                            title="Formcraft Blocks"
                            description="A comprehensive library of form elements and complex inputs."
                            category="Components" version="" badgeText="Figma" bgClass="bg-[#bae6fd]"
                            graphic={<div className="w-32 h-24 bg-white rounded-lg shadow-sm border border-line p-3 space-y-2"><div className="w-full h-3 bg-slate-100 rounded" /><div className="w-full h-3 bg-slate-100 rounded" /><div className="w-1/2 h-4 bg-blue-400 rounded-full" /></div>}
                        />
                    </div>
                </Container>
            </section>

        </div>
    );
}