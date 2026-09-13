import { motion } from "motion/react";

function FullstackPythonIllustration() {
  return (
    <motion.svg
      viewBox="0 0 620 420"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fullstack Python development illustration"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <circle
        cx="310"
        cy="210"
        r="178"
        fill="#E0F2FE"
        opacity="0.55"
      />

      <circle
        cx="470"
        cy="95"
        r="46"
        fill="#BAE6FD"
        opacity="0.45"
      />

      <circle
        cx="115"
        cy="315"
        r="35"
        fill="#BAE6FD"
        opacity="0.5"
      />

      {/* Decorative dots */}
      <circle cx="92" cy="112" r="5" fill="#38BDF8" />
      <circle cx="532" cy="285" r="6" fill="#7DD3FC" />
      <circle cx="500" cy="330" r="4" fill="#0284C7" />

      {/* =========================================================
          FLOATING PYTHON CARD
      ========================================================= */}

      <motion.g
        animate={{
          y: [0, -9, 0],
          rotate: [-2, 1, -2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <rect
          x="390"
          y="48"
          width="128"
          height="92"
          rx="18"
          fill="white"
          stroke="#BAE6FD"
          strokeWidth="2"
        />

        {/* Python logo-like mark */}
        <path
          d="M432 68H455C465 68 471 73 471 83V94H442C432 94 426 89 426 80V74C426 70 428 68 432 68Z"
          fill="#3776AB"
        />

        <path
          d="M455 116H432C422 116 416 111 416 101V90H445C455 90 461 95 461 104V110C461 114 459 116 455 116Z"
          fill="#FFD343"
        />

        <circle cx="439" cy="76" r="3" fill="white" />
        <circle cx="448" cy="108" r="3" fill="#3776AB" />

        <text
          x="483"
          y="84"
          fontFamily="Inter, sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="#0F172A"
        >
          Python
        </text>

        <text
          x="483"
          y="103"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          fill="#64748B"
        >
          backend
        </text>
      </motion.g>

      {/* =========================================================
          LAPTOP
      ========================================================= */}

      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Screen frame */}
        <rect
          x="174"
          y="184"
          width="280"
          height="165"
          rx="14"
          fill="#0F172A"
        />

        {/* Screen */}
        <rect
          x="188"
          y="198"
          width="252"
          height="137"
          rx="7"
          fill="#111827"
        />

        {/* Browser bar */}
        <rect
          x="188"
          y="198"
          width="252"
          height="27"
          rx="7"
          fill="#1E293B"
        />

        <circle cx="204" cy="211" r="4" fill="#64748B" />
        <circle cx="217" cy="211" r="4" fill="#64748B" />
        <circle cx="230" cy="211" r="4" fill="#64748B" />

        {/* Browser URL */}
        <rect
          x="251"
          y="205"
          width="129"
          height="12"
          rx="6"
          fill="#334155"
        />

        {/* Web UI inside laptop */}
        <rect
          x="202"
          y="239"
          width="226"
          height="82"
          rx="5"
          fill="#F8FAFC"
        />

        {/* Navbar */}
        <rect
          x="213"
          y="250"
          width="52"
          height="8"
          rx="4"
          fill="#0284C7"
        />

        <rect
          x="349"
          y="249"
          width="27"
          height="7"
          rx="3"
          fill="#CBD5E1"
        />

        <rect
          x="383"
          y="249"
          width="30"
          height="7"
          rx="3"
          fill="#CBD5E1"
        />

        {/* Hero text */}
        <rect
          x="214"
          y="271"
          width="74"
          height="7"
          rx="3.5"
          fill="#0F172A"
        />

        <rect
          x="214"
          y="284"
          width="103"
          height="5"
          rx="2.5"
          fill="#CBD5E1"
        />

        <rect
          x="214"
          y="294"
          width="83"
          height="5"
          rx="2.5"
          fill="#CBD5E1"
        />

        {/* Button */}
        <rect
          x="214"
          y="306"
          width="51"
          height="10"
          rx="5"
          fill="#0284C7"
        />

        {/* Dashboard card */}
        <rect
          x="334"
          y="270"
          width="78"
          height="45"
          rx="6"
          fill="#E0F2FE"
        />

        <rect
          x="343"
          y="280"
          width="29"
          height="5"
          rx="2.5"
          fill="#0284C7"
        />

        <rect
          x="343"
          y="291"
          width="55"
          height="4"
          rx="2"
          fill="#94A3B8"
        />

        <rect
          x="343"
          y="301"
          width="42"
          height="4"
          rx="2"
          fill="#CBD5E1"
        />

        {/* Laptop base */}
        <path
          d="M154 349H474L493 367H135L154 349Z"
          fill="#CBD5E1"
        />

        <path
          d="M257 352H371L379 359H249L257 352Z"
          fill="#94A3B8"
        />
      </motion.g>

      {/* =========================================================
          DEVELOPER
      ========================================================= */}

      {/* Hair */}
      <path
        d="M99 187C99 151 122 126 158 126C195 126 217 151 217 188V224H104C100 212 99 199 99 187Z"
        fill="#171717"
      />

      <circle cx="120" cy="151" r="23" fill="#171717" />
      <circle cx="148" cy="137" r="24" fill="#171717" />
      <circle cx="177" cy="139" r="23" fill="#171717" />
      <circle cx="201" cy="155" r="20" fill="#171717" />

      {/* Face */}
      <path
        d="M113 183C113 154 132 141 158 141C188 141 204 158 204 187V218C204 246 185 264 159 264C132 264 113 246 113 218V183Z"
        fill="#A9684E"
      />

      {/* Ear */}
      <circle cx="112" cy="202" r="11" fill="#A9684E" />
      <circle cx="205" cy="202" r="11" fill="#A9684E" />

      {/* Eyes */}
      <ellipse cx="143" cy="193" rx="4" ry="5" fill="#0F172A" />
      <ellipse cx="178" cy="193" rx="4" ry="5" fill="#0F172A" />

      {/* Nose */}
      <path
        d="M160 196L156 213L163 216"
        stroke="#7C4939"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Smile */}
      <path
        d="M149 230C155 235 164 236 171 230"
        stroke="#6B3A31"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Neck */}
      <path
        d="M140 254V280C140 291 132 298 121 303L160 326L199 301C187 294 180 287 180 276V254"
        fill="#A9684E"
      />

      {/* Shirt */}
      <path
        d="M121 294C93 302 75 321 65 348L51 389H267L251 345C241 319 222 301 199 294L160 326L121 294Z"
        fill="#0284C7"
      />

      {/* Shirt shadow */}
      <path
        d="M121 294C93 302 75 321 65 348L51 389H115C131 368 143 348 160 326L121 294Z"
        fill="#0369A1"
      />

      {/* Shirt logo */}
      <circle cx="160" cy="353" r="21" fill="white" />

      <path
        d="M151 362V345L160 338L169 345V362"
        stroke="#0284C7"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* =========================================================
          DEVELOPER ARM
      ========================================================= */}

      <path
        d="M207 306C225 316 239 333 251 352"
        stroke="#A9684E"
        strokeWidth="22"
        strokeLinecap="round"
      />

      <circle cx="252" cy="353" r="11" fill="#A9684E" />

      {/* =========================================================
          DESK
      ========================================================= */}

      <path
        d="M72 388C145 378 363 378 495 388L510 404H57L72 388Z"
        fill="#E7C49A"
      />

      <path
        d="M90 404V418"
        stroke="#B08968"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M475 404V418"
        stroke="#B08968"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* =========================================================
          COFFEE CUP
      ========================================================= */}

      <path
        d="M92 349H130L127 379C126 385 121 388 111 388C101 388 96 385 95 379L92 349Z"
        fill="white"
      />

      <path
        d="M130 356C143 354 145 373 130 376"
        stroke="#CBD5E1"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M103 342C98 334 106 329 102 321"
        stroke="#94A3B8"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M116 342C111 334 119 329 115 321"
        stroke="#94A3B8"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* =========================================================
          DATABASE FLOATING CARD
      ========================================================= */}

      <motion.g
        animate={{
          y: [0, 8, 0],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <rect
          x="430"
          y="220"
          width="108"
          height="91"
          rx="18"
          fill="#0F172A"
        />

        {/* Database */}
        <ellipse
          cx="484"
          cy="246"
          rx="29"
          ry="10"
          fill="#38BDF8"
        />

        <path
          d="M455 246V270C455 276 468 281 484 281C500 281 513 276 513 270V246"
          fill="#0284C7"
        />

        <ellipse
          cx="484"
          cy="270"
          rx="29"
          ry="10"
          fill="#0EA5E9"
        />

        <path
          d="M455 270V294C455 300 468 305 484 305C500 305 513 300 513 294V270"
          fill="#0369A1"
        />

        <ellipse
          cx="484"
          cy="294"
          rx="29"
          ry="10"
          fill="#0284C7"
        />

        <text
          x="484"
          y="237"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fontWeight="700"
          fill="white"
        >
          DATABASE
        </text>
      </motion.g>

      {/* =========================================================
          API CONNECTION
      ========================================================= */}

      <motion.path
        d="M425 272C402 273 392 285 379 300"
        stroke="#38BDF8"
        strokeWidth="3"
        strokeDasharray="7 7"
        strokeLinecap="round"
        animate={{
          strokeDashoffset: [0, -28],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* API badge */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <rect
          x="474"
          y="340"
          width="74"
          height="34"
          rx="12"
          fill="white"
          stroke="#BAE6FD"
          strokeWidth="2"
        />

        <text
          x="511"
          y="362"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fontWeight="700"
          fill="#0284C7"
        >
          REST API
        </text>
      </motion.g>

      {/* =========================================================
          FLOATING CODE SYMBOL
      ========================================================= */}

      <motion.g
        animate={{
          y: [0, -10, 0],
          rotate: [-5, 3, -5],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
        }}
      >
        <circle
          cx="89"
          cy="92"
          r="31"
          fill="white"
          stroke="#BAE6FD"
          strokeWidth="2"
        />

        <path
          d="M79 92L70 100L79 108"
          stroke="#0284C7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M99 92L108 100L99 108"
          stroke="#0EA5E9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M93 86L85 114"
          stroke="#0F172A"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.g>

      {/* =========================================================
          SPARKLES
      ========================================================= */}

      <motion.path
        d="M555 158L561 173L576 179L561 185L555 200L549 185L534 179L549 173L555 158Z"
        fill="#F59E0B"
        animate={{
          rotate: [0, 15, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <motion.circle
        cx="561"
        cy="120"
        r="5"
        fill="#38BDF8"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      <motion.circle
        cx="53"
        cy="260"
        r="5"
        fill="#0284C7"
        animate={{
          y: [0, 8, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </motion.svg>
  );
}

export default FullstackPythonIllustration;