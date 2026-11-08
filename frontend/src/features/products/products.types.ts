export interface iCategory {
    id: string;
    name: string;
    slug: string;
    description: string;
    is_active: boolean;
    product_count: number;
    created_at: string;
    updated_at: string;
}


export interface iProduct {
    id: string;
    category: iCategory;
    name: string;
    slug: string;
    short_description: string;
    description: string;
    price: string;
    currency: string;
    image: string | null;
    is_active: string;
    is_featured: boolean;
    created_at: string;
    updated_at: string;
}


export interface LicenseOption {
    id: string;
    title: string;
    description: string;
    price: number;
}

export interface WhatsInsideItem {
    id: string;
    metric: string;
    title: string;
    description: string;
    highlighted?: boolean;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface ValueProp {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface ProductDetailsData {
    id: string;
    title: string;
    category: string;
    customers: string;
    description: string;
    highlights: string[];
    licenses: LicenseOption[];
    whatsInside: {
        title: string;
        description: string;
        items: WhatsInsideItem[];
    };
    feature: {
        eyebrow: string;
        title: string;
        description: string;
    };
    valueProps: ValueProp[];
    faqs: FAQItem[];
}