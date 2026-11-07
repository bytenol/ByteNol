import type { ProductDetailsData } from "./products.types";

export const pulseUiKitData: ProductDetailsData = {
    id: "pulse-ui-kit",
    title: "Pulse UI Kit",
    category: "UI Kits",
    customers: "12.8k happy customers",
    description: "Build polished dashboards faster with 120+ responsive screens, carefully constructed components, and a practical token library. Includes light and dark themes.",
    highlights: ["Built for Figma", "Commercial use", "Lifetime updates"],
    licenses: [
        {
            id: "individual",
            title: "Individual",
            description: "For you and your personal or freelance work",
            price: 79,
        },
        {
            id: "team",
            title: "Team",
            description: "For teams of up to 10 people",
            price: 189,
        }
    ],
    whatsInside: {
        title: "Everything you need to design at speed.",
        description: "A carefully organized resource with clear naming, flexible components, and practical guidance—so your team can start creating immediately.",
        items: [
            { id: "1", metric: "120+", title: "Ready-made screens", description: "Responsive layouts for the workflows that matter most.", highlighted: true },
            { id: "2", metric: "180", title: "Flexible components", description: "Built with variants, auto layout, and thoughtful states." },
            { id: "3", metric: "2", title: "Complete themes", description: "Light and dark modes powered by reusable color styles." },
            { id: "4", metric: "48", title: "Practical patterns", description: "Navigation, tables, forms, charts, empty states, and more." },
        ]
    },
    feature: {
        eyebrow: "Systematic by design",
        title: "Consistency without the constraints.",
        description: "Every element shares the same visual foundation, while flexible properties give you room to make the system unmistakably yours."
    },
    valueProps: [
        // { id: "v1", title: "Instant access", description: "Start creating minutes after checkout.", icon: <Download size={ 20} /> },
        // { id: "v2", title: "Thoughtful updates", description: "New features delivered at no extra cost.", icon: <RefreshCcw size={ 20 } /> },
        // { id: "v3", title: "Human support", description: "Helpful answers from the people who made it.", icon: <User size={ 20 } /> }
    ],

    faqs: [
        { id: "f1", question: "What can I use this product for?", answer: "You can use it in unlimited personal and commercial end products, including client work. You may customize every included asset to fit your brand or project." },
        { id: "f2", question: "Do I get future updates?", answer: "Yes. Every license includes lifetime access to product improvements and new versions. We will notify you by email whenever a meaningful update is available." },
        { id: "f3", question: "Can I share the files with my team?", answer: "If you purchase the Team license, you can share it with up to 10 members of your organization." },
        { id: "f4", question: "What is your refund policy?", answer: "We offer a 14-day money-back guarantee if you are unhappy with the product for any reason." }
    ]
};