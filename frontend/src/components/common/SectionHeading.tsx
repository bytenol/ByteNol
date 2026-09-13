interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionHeadingProps) {
    const alignment =
        align === "center"
            ? "mx-auto text-center"
            : "text-left";

    return (
        <div className={`max-w-2xl ${alignment}`}>
            {eyebrow && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-dark">
                    {eyebrow}
                </p>
            )}

            <h2 className="font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionHeading;