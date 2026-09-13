import { motion } from "motion/react";

function ProductEcosystemIllustration() {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <svg
        viewBox="0 0 560 440"
        className="w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Connected ByteNol software ecosystem"
        role="img"
      >
        <circle
          cx="280"
          cy="220"
          r="175"
          fill="#F0F9FF"
        />

        {/* Connection lines */}
        <path
          d="M280 220L125 115"
          stroke="#BAE6FD"
          strokeWidth="3"
        />

        <path
          d="M280 220L435 115"
          stroke="#BAE6FD"
          strokeWidth="3"
        />

        <path
          d="M280 220L125 325"
          stroke="#BAE6FD"
          strokeWidth="3"
        />

        <path
          d="M280 220L435 325"
          stroke="#BAE6FD"
          strokeWidth="3"
        />

        {/* Central product */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle
            cx="280"
            cy="220"
            r="73"
            fill="#0F172A"
          />

          <rect
            x="245"
            y="185"
            width="70"
            height="55"
            rx="10"
            fill="#E0F2FE"
          />

          <rect
            x="256"
            y="198"
            width="32"
            height="6"
            rx="3"
            fill="#0284C7"
          />

          <rect
            x="256"
            y="213"
            width="48"
            height="6"
            rx="3"
            fill="#BAE6FD"
          />

          <rect
            x="256"
            y="228"
            width="38"
            height="6"
            rx="3"
            fill="#0284C7"
          />

          <text
            x="280"
            y="270"
            textAnchor="middle"
            fill="#7DD3FC"
            fontFamily="sans-serif"
            fontSize="11"
            fontWeight="700"
          >
            BYTENOL
          </text>
        </motion.g>

        {/* Product nodes */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="60"
            y="70"
            width="130"
            height="90"
            rx="18"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="2"
          />

          <rect
            x="78"
            y="90"
            width="38"
            height="38"
            rx="10"
            fill="#E0F2FE"
          />

          <rect
            x="127"
            y="91"
            width="43"
            height="7"
            rx="3.5"
            fill="#0F172A"
          />

          <rect
            x="127"
            y="107"
            width="31"
            height="6"
            rx="3"
            fill="#CBD5E1"
          />

          <rect
            x="78"
            y="140"
            width="80"
            height="6"
            rx="3"
            fill="#BAE6FD"
          />
        </motion.g>

        <motion.g
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="370"
            y="70"
            width="130"
            height="90"
            rx="18"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="2"
          />

          <rect
            x="388"
            y="90"
            width="38"
            height="38"
            rx="10"
            fill="#0F172A"
          />

          <path
            d="M398 116L407 107L416 113L423 102"
            stroke="#7DD3FC"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <rect
            x="437"
            y="91"
            width="43"
            height="7"
            rx="3.5"
            fill="#0F172A"
          />

          <rect
            x="437"
            y="107"
            width="31"
            height="6"
            rx="3"
            fill="#CBD5E1"
          />

          <rect
            x="388"
            y="140"
            width="80"
            height="6"
            rx="3"
            fill="#BAE6FD"
          />
        </motion.g>

        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="60"
            y="280"
            width="130"
            height="90"
            rx="18"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="2"
          />

          <rect
            x="78"
            y="300"
            width="38"
            height="38"
            rx="10"
            fill="#0F172A"
          />

          <text
            x="97"
            y="325"
            textAnchor="middle"
            fill="#7DD3FC"
            fontFamily="monospace"
            fontSize="16"
            fontWeight="700"
          >
            {"{}"}
          </text>

          <rect
            x="127"
            y="301"
            width="43"
            height="7"
            rx="3.5"
            fill="#0F172A"
          />

          <rect
            x="127"
            y="317"
            width="31"
            height="6"
            rx="3"
            fill="#CBD5E1"
          />

          <rect
            x="78"
            y="350"
            width="80"
            height="6"
            rx="3"
            fill="#BAE6FD"
          />
        </motion.g>

        <motion.g
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="370"
            y="280"
            width="130"
            height="90"
            rx="18"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="2"
          />

          <rect
            x="388"
            y="300"
            width="38"
            height="38"
            rx="10"
            fill="#E0F2FE"
          />

          <circle
            cx="407"
            cy="319"
            r="10"
            stroke="#0284C7"
            strokeWidth="3"
          />

          <path
            d="M407 309V329M397 319H417"
            stroke="#0284C7"
            strokeWidth="2"
          />

          <rect
            x="437"
            y="301"
            width="43"
            height="7"
            rx="3.5"
            fill="#0F172A"
          />

          <rect
            x="437"
            y="317"
            width="31"
            height="6"
            rx="3"
            fill="#CBD5E1"
          />

          <rect
            x="388"
            y="350"
            width="80"
            height="6"
            rx="3"
            fill="#BAE6FD"
          />
        </motion.g>
      </svg>
    </div>
  );
}

export default ProductEcosystemIllustration;