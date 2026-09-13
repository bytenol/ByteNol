import type { SVGProps } from "react";

type SocialPlatform =
    | "github"
    | "linkedin"
    | "instagram"
    | "x"
    | "facebook"
    | "gmail"
    | "tiktok"
    | "whatsapp"
    | "youtube";

interface SocialIconProps extends SVGProps<SVGSVGElement> {
    platform: SocialPlatform;
    fill?: string;
}

function SocialIcon({
    platform,
    fill = "currentColor",
    className = "h-5 w-5",
    ...props
}: SocialIconProps) {
    const paths = {

        facebook: (
            <img src="./icons/socials/facebook.svg" />
        ),

        gmail: (
            <img src="./icons/socials/gmail.svg" />
        ),

        tiktok: (
            <img src="./icons/socials/tiktok.svg" />
        ),

        whatsapp: (
            <img src="./icons/socials/whatsapp.svg" />
        ),

        youtube: (
            <img src="./icons/socials/youtube.svg" />
        ),

        github: (
            <path
                fill={fill}
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.35-3.86-1.35-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 8.1c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
            />
        ),

        linkedin: (
            <path
                fill={fill}
                d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
            />
        ),

        instagram: (
            <img src="./icons/socials/insta.svg" />
        ),

        x: (
            <path
                fill={fill}
                d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.605l-5.17-6.76L5.06 22H1.8l7.61-8.7L1.25 2H8.02l4.67 6.17L18.244 2Zm-1.145 17.82h1.803L7.015 4.06H5.08L17.1 19.82Z"
            />
        ),
    };

    if (paths[platform].type === "img")
        return paths[platform];


    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
            {...props}
        >
            {paths[platform]}
        </svg>
    );
}

export default SocialIcon;