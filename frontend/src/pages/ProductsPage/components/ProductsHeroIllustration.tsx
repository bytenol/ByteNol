import { motion } from "motion/react";

function ProductsHeroIllustration() {
  return (
    <div className="relative w-full max-w-[650px]">
      <svg
        viewBox="0 0 650 540"
        className="h-auto w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="ByteNol software products illustration"
      >
        {/* Background */}
        <circle
          cx="325"
          cy="270"
          r="210"
          fill="#F0F9FF"
        />

        <circle
          cx="325"
          cy="270"
          r="165"
          stroke="#BAE6FD"
          strokeWidth="2"
          strokeDasharray="6 10"
        />

        {/* Orbit */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: "325px 270px",
          }}
        >
          <circle
            cx="325"
            cy="270"
            r="220"
            stroke="#E0F2FE"
            strokeWidth="2"
            strokeDasharray="2 14"
          />

          <circle
            cx="325"
            cy="50"
            r="7"
            fill="#0284C7"
          />
        </motion.g>

        {/* Left floating dashboard */}
        <motion.g
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="45"
            y="125"
            width="155"
            height="120"
            rx="20"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="2"
          />

          <rect
            x="62"
            y="144"
            width="70"
            height="8"
            rx="4"
            fill="#0F172A"
          />

          <rect
            x="62"
            y="166"
            width="120"
            height="43"
            rx="10"
            fill="#F0F9FF"
          />

          <path
            d="M73 194L94 181L112 190L132 174L153 185L172 169"
            stroke="#0284C7"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle
            cx="73"
            cy="194"
            r="3"
            fill="#0284C7"
          />

          <circle
            cx="172"
            cy="169"
            r="3"
            fill="#0284C7"
          />

          <rect
            x="62"
            y="220"
            width="47"
            height="7"
            rx="3.5"
            fill="#CBD5E1"
          />

          <rect
            x="117"
            y="220"
            width="65"
            height="7"
            rx="3.5"
            fill="#BAE6FD"
          />
        </motion.g>

        {/* Right floating application */}
        <motion.g
          animate={{ y: [0, 9, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="455"
            y="110"
            width="150"
            height="125"
            rx="20"
            fill="#0F172A"
          />

          <rect
            x="474"
            y="130"
            width="112"
            height="10"
            rx="5"
            fill="#334155"
          />

          <circle
            cx="482"
            cy="135"
            r="3"
            fill="#7DD3FC"
          />

          <rect
            x="474"
            y="158"
            width="48"
            height="53"
            rx="9"
            fill="#E0F2FE"
          />

          <rect
            x="534"
            y="160"
            width="51"
            height="7"
            rx="3.5"
            fill="#64748B"
          />

          <rect
            x="534"
            y="176"
            width="38"
            height="7"
            rx="3.5"
            fill="#64748B"
          />

          <rect
            x="534"
            y="192"
            width="48"
            height="7"
            rx="3.5"
            fill="#0284C7"
          />
        </motion.g>

        {/* Central product */}
        <g>
          {/* Main window */}
          <rect
            x="175"
            y="145"
            width="300"
            height="245"
            rx="24"
            fill="white"
            stroke="#CBD5E1"
            strokeWidth="3"
          />

          {/* Header */}
          <rect
            x="175"
            y="145"
            width="300"
            height="52"
            rx="24"
            fill="#0F172A"
          />

          <rect
            x="175"
            y="173"
            width="300"
            height="24"
            fill="#0F172A"
          />

          <circle
            cx="198"
            cy="171"
            r="5"
            fill="#7DD3FC"
          />

          <rect
            x="214"
            y="166"
            width="85"
            height="10"
            rx="5"
            fill="#334155"
          />

          {/* Sidebar */}
          <rect
            x="195"
            y="218"
            width="52"
            height="145"
            rx="10"
            fill="#F0F9FF"
          />

          <rect
            x="207"
            y="234"
            width="28"
            height="7"
            rx="3.5"
            fill="#0284C7"
          />

          <rect
            x="207"
            y="254"
            width="24"
            height="7"
            rx="3.5"
            fill="#BAE6FD"
          />

          <rect
            x="207"
            y="274"
            width="28"
            height="7"
            rx="3.5"
            fill="#BAE6FD"
          />

          <rect
            x="207"
            y="294"
            width="20"
            height="7"
            rx="3.5"
            fill="#BAE6FD"
          />

          {/* Dashboard */}
          <rect
            x="263"
            y="218"
            width="190"
            height="48"
            rx="12"
            fill="#F8FAFC"
          />

          <rect
            x="278"
            y="231"
            width="54"
            height="7"
            rx="3.5"
            fill="#0F172A"
          />

          <rect
            x="278"
            y="247"
            width="90"
            height="6"
            rx="3"
            fill="#CBD5E1"
          />

          <rect
            x="388"
            y="231"
            width="44"
            height="22"
            rx="8"
            fill="#E0F2FE"
          />

          {/* Cards */}
          <rect
            x="263"
            y="280"
            width="88"
            height="83"
            rx="12"
            fill="#0F172A"
          />

          <rect
            x="365"
            y="280"
            width="88"
            height="83"
            rx="12"
            fill="#E0F2FE"
          />

          <rect
            x="279"
            y="296"
            width="36"
            height="6"
            rx="3"
            fill="#7DD3FC"
          />

          <rect
            x="279"
            y="312"
            width="51"
            height="6"
            rx="3"
            fill="#334155"
          />

          <rect
            x="381"
            y="296"
            width="35"
            height="6"
            rx="3"
            fill="#0284C7"
          />

          <rect
            x="381"
            y="312"
            width="53"
            height="6"
            rx="3"
            fill="#BAE6FD"
          />

          {/* Graph */}
          <path
            d="M279 343L291 334L304 339L317 325L330 332"
            stroke="#7DD3FC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Bottom floating code card */}
        <motion.g
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="90"
            y="385"
            width="150"
            height="88"
            rx="18"
            fill="#0F172A"
          />

          <text
            x="109"
            y="412"
            fill="#7DD3FC"
            fontSize="12"
            fontFamily="monospace"
          >
            {"<Product />"}
          </text>

          <rect
            x="109"
            y="428"
            width="75"
            height="6"
            rx="3"
            fill="#334155"
          />

          <rect
            x="109"
            y="444"
            width="101"
            height="6"
            rx="3"
            fill="#475569"
          />
        </motion.g>

        {/* Floating symbols */}
        <motion.g
          animate={{ rotate: [0, 8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="500"
            y="355"
            width="62"
            height="62"
            rx="18"
            fill="#0284C7"
          />

          <text
            x="531"
            y="393"
            textAnchor="middle"
            fill="white"
            fontSize="25"
            fontFamily="monospace"
            fontWeight="700"
          >
            {"{}"}
          </text>
        </motion.g>

        <circle
          cx="125"
          cy="285"
          r="7"
          fill="#0284C7"
        />

        <circle
          cx="518"
          cy="275"
          r="6"
          fill="#7DD3FC"
        />
      </svg>
    </div>
  );
}

export default ProductsHeroIllustration;