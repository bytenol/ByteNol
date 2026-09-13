import { motion } from "motion/react";

function AboutHeroIllustration() {
  return (
    <div className="relative w-full max-w-[620px]">
      <svg
        viewBox="0 0 620 540"
        className="h-auto w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ByteNol technology and learning illustration"
        role="img"
      >
        {/* Background glow */}
        <circle
          cx="315"
          cy="270"
          r="205"
          fill="#F0F9FF"
        />

        <circle
          cx="315"
          cy="270"
          r="160"
          stroke="#BAE6FD"
          strokeWidth="2"
          strokeDasharray="7 9"
        />

        {/* Decorative orbit */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: "315px 270px",
          }}
        >
          <circle
            cx="315"
            cy="270"
            r="220"
            stroke="#E0F2FE"
            strokeWidth="2"
            strokeDasharray="2 14"
          />

          <circle
            cx="315"
            cy="50"
            r="7"
            fill="#0284C7"
          />
        </motion.g>

        {/* Floating code card */}
        <motion.g
          animate={{ y: [0, -9, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="55"
            y="82"
            width="160"
            height="112"
            rx="18"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="2"
          />

          <circle cx="77" cy="105" r="4" fill="#CBD5E1" />
          <circle cx="91" cy="105" r="4" fill="#CBD5E1" />
          <circle cx="105" cy="105" r="4" fill="#CBD5E1" />

          <rect
            x="75"
            y="126"
            width="42"
            height="6"
            rx="3"
            fill="#0284C7"
          />

          <rect
            x="123"
            y="126"
            width="27"
            height="6"
            rx="3"
            fill="#BAE6FD"
          />

          <rect
            x="75"
            y="143"
            width="72"
            height="6"
            rx="3"
            fill="#0F172A"
          />

          <rect
            x="153"
            y="143"
            width="34"
            height="6"
            rx="3"
            fill="#7DD3FC"
          />

          <rect
            x="75"
            y="160"
            width="51"
            height="6"
            rx="3"
            fill="#64748B"
          />

          <rect
            x="132"
            y="160"
            width="27"
            height="6"
            rx="3"
            fill="#0284C7"
          />
        </motion.g>

        {/* Product UI card */}
        <motion.g
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="405"
            y="92"
            width="150"
            height="105"
            rx="18"
            fill="#0F172A"
          />

          <rect
            x="420"
            y="108"
            width="120"
            height="11"
            rx="5.5"
            fill="#1E293B"
          />

          <circle cx="430" cy="113.5" r="3" fill="#7DD3FC" />

          <rect
            x="421"
            y="136"
            width="48"
            height="43"
            rx="8"
            fill="#E0F2FE"
          />

          <rect
            x="479"
            y="136"
            width="61"
            height="8"
            rx="4"
            fill="#334155"
          />

          <rect
            x="479"
            y="151"
            width="43"
            height="8"
            rx="4"
            fill="#334155"
          />

          <rect
            x="479"
            y="166"
            width="54"
            height="8"
            rx="4"
            fill="#0284C7"
          />
        </motion.g>

        {/* Main character */}
        <g>
          {/* Body */}
          <path
            d="M244 375C244 327 275 302 315 302C355 302 386 327 386 375V429H244V375Z"
            fill="#0284C7"
          />

          {/* Shirt detail */}
          <path
            d="M296 311L315 336L334 311"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Neck */}
          <path
            d="M299 287V315C299 325 307 331 315 331C323 331 331 325 331 315V287"
            fill="#F8C9A9"
          />

          {/* Face */}
          <path
            d="M271 226C271 190 290 166 315 166C340 166 359 190 359 226V254C359 283 341 301 315 301C289 301 271 283 271 254V226Z"
            fill="#FFD6BA"
          />

          {/* Hair */}
          <path
            d="M271 226C268 181 288 151 316 151C344 151 365 178 359 225C348 211 340 202 328 193C313 211 293 218 271 226Z"
            fill="#0F172A"
          />

          {/* Hair highlight */}
          <path
            d="M286 184C295 169 307 163 321 163"
            stroke="#334155"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Eyes */}
          <circle cx="295" cy="238" r="4" fill="#0F172A" />
          <circle cx="335" cy="238" r="4" fill="#0F172A" />

          {/* Smile */}
          <path
            d="M304 258C311 264 319 264 326 258"
            stroke="#0F172A"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Arm left */}
          <path
            d="M258 341C236 353 223 371 219 392"
            stroke="#0284C7"
            strokeWidth="23"
            strokeLinecap="round"
          />

          {/* Arm right */}
          <path
            d="M372 341C394 352 407 370 411 391"
            stroke="#0284C7"
            strokeWidth="23"
            strokeLinecap="round"
          />

          {/* Hands */}
          <circle cx="219" cy="394" r="11" fill="#FFD6BA" />
          <circle cx="411" cy="394" r="11" fill="#FFD6BA" />

          {/* Laptop */}
          <rect
            x="214"
            y="352"
            width="202"
            height="118"
            rx="12"
            fill="#0F172A"
          />

          <rect
            x="227"
            y="365"
            width="176"
            height="88"
            rx="6"
            fill="#E0F2FE"
          />

          {/* Laptop code */}
          <rect
            x="245"
            y="383"
            width="43"
            height="6"
            rx="3"
            fill="#0284C7"
          />

          <rect
            x="294"
            y="383"
            width="35"
            height="6"
            rx="3"
            fill="#7DD3FC"
          />

          <rect
            x="245"
            y="399"
            width="67"
            height="6"
            rx="3"
            fill="#0F172A"
          />

          <rect
            x="318"
            y="399"
            width="45"
            height="6"
            rx="3"
            fill="#0284C7"
          />

          <rect
            x="245"
            y="415"
            width="52"
            height="6"
            rx="3"
            fill="#64748B"
          />

          <rect
            x="303"
            y="415"
            width="75"
            height="6"
            rx="3"
            fill="#0EA5E9"
          />

          {/* Laptop base */}
          <path
            d="M188 470H442L421 486H209L188 470Z"
            fill="#334155"
          />
        </g>

        {/* Floating code symbols */}
        <motion.g
          animate={{ y: [0, -7, 0], rotate: [0, 4, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="83"
            y="295"
            width="64"
            height="64"
            rx="18"
            fill="#0F172A"
          />

          <text
            x="115"
            y="335"
            textAnchor="middle"
            fill="#7DD3FC"
            fontSize="25"
            fontFamily="monospace"
            fontWeight="700"
          >
            {"</>"}
          </text>
        </motion.g>

        <motion.g
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="467"
            y="304"
            width="74"
            height="54"
            rx="16"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="2"
          />

          <text
            x="504"
            y="338"
            textAnchor="middle"
            fill="#0284C7"
            fontSize="18"
            fontFamily="monospace"
            fontWeight="700"
          >
            {"{ }"}
          </text>
        </motion.g>

        {/* Small decorative elements */}
        <circle cx="164" cy="242" r="7" fill="#0284C7" />
        <circle cx="451" cy="246" r="6" fill="#7DD3FC" />

        <rect
          x="387"
          y="47"
          width="18"
          height="18"
          rx="5"
          transform="rotate(20 387 47)"
          fill="#BAE6FD"
        />

        <rect
          x="179"
          y="418"
          width="14"
          height="14"
          rx="4"
          transform="rotate(-20 179 418)"
          fill="#0284C7"
        />
      </svg>
    </div>
  );
}

export default AboutHeroIllustration;