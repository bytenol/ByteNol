import { motion } from "motion/react";

function CoursesHeroIllustration() {
  return (
    <motion.svg
      viewBox="0 0 680 560"
      className="w-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      aria-label="Illustration of a developer learning programming"
      role="img"
    >
      {/* Main background */}
      <path
        d="M373 34C495 12 615 77 641 183C672 309 598 438 481 478C353 522 199 479 153 362C108 246 171 105 286 65C314 55 344 43 373 34Z"
        fill="#F0F9FF"
      />

      {/* Floating code window */}
      <motion.g
        animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <rect
          x="400"
          y="55"
          width="160"
          height="112"
          rx="18"
          fill="#0F172A"
        />

        <circle cx="423" cy="79" r="5" fill="#475569" />
        <circle cx="441" cy="79" r="5" fill="#475569" />
        <circle cx="459" cy="79" r="5" fill="#475569" />

        <path
          d="M424 111L408 124L424 137"
          stroke="#38BDF8"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M445 111L461 124L445 137"
          stroke="#87CEFA"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <rect x="480" y="111" width="52" height="6" rx="3" fill="#334155" />
        <rect x="480" y="126" width="34" height="6" rx="3" fill="#334155" />
      </motion.g>

      {/* Graduation cap */}
      <motion.g
        animate={{ y: [0, -8, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <path
          d="M109 180L176 153L243 180L176 207L109 180Z"
          fill="#0284C7"
        />

        <path
          d="M134 189V214C157 231 195 231 218 214V189"
          fill="#0EA5E9"
        />

        <path
          d="M243 180V216"
          stroke="#0284C7"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <circle cx="243" cy="221" r="7" fill="#F59E0B" />
      </motion.g>

      {/* Hair */}
      <path
        d="M271 180C271 142 300 115 343 115C386 115 413 145 413 190V244H277C273 223 271 202 271 180Z"
        fill="#171717"
      />

      <circle cx="295" cy="142" r="25" fill="#171717" />
      <circle cx="325" cy="126" r="25" fill="#171717" />
      <circle cx="357" cy="127" r="24" fill="#171717" />
      <circle cx="387" cy="144" r="22" fill="#171717" />

      {/* Face */}
      <path
        d="M288 184C288 150 310 136 342 136C377 136 399 157 399 190V225C399 255 378 276 344 276C312 276 288 255 288 225V184Z"
        fill="#A9684E"
      />

      {/* Eyes */}
      <ellipse cx="325" cy="199" rx="5" ry="6" fill="#0F172A" />
      <ellipse cx="372" cy="199" rx="5" ry="6" fill="#0F172A" />

      {/* Smile */}
      <path
        d="M332 235C340 242 353 243 362 235"
        stroke="#5C3027"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Neck */}
      <path
        d="M321 268V300C321 312 313 319 302 324L347 345L390 320C376 312 369 302 369 289V268"
        fill="#A9684E"
      />

      {/* Shirt */}
      <path
        d="M302 314C270 323 248 346 236 381L211 453H446L419 376C409 344 390 326 363 314L347 345L302 314Z"
        fill="#0284C7"
      />

      {/* Shirt shadow */}
      <path
        d="M302 314C270 323 248 346 236 381L219 431C257 418 288 401 310 378L347 345L302 314Z"
        fill="#0369A1"
      />

      {/* ByteNol mark */}
      <circle cx="349" cy="384" r="27" fill="white" />

      <path
        d="M339 396V373L349 364L359 373V396"
        stroke="#0284C7"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Desk */}
      <path
        d="M162 449C241 432 434 432 518 449L536 470H143L162 449Z"
        fill="#E7C49A"
      />

      {/* Laptop */}
      <rect
        x="260"
        y="353"
        width="179"
        height="103"
        rx="8"
        fill="#CBD5E1"
      />

      <rect
        x="273"
        y="366"
        width="153"
        height="73"
        rx="5"
        fill="#0F172A"
      />

      <rect x="286" y="379" width="55" height="6" rx="3" fill="#38BDF8" />
      <rect x="286" y="394" width="104" height="5" rx="2.5" fill="#334155" />
      <rect x="286" y="407" width="81" height="5" rx="2.5" fill="#334155" />

      <path
        d="M244 456H457L477 473H224L244 456Z"
        fill="#94A3B8"
      />

      {/* Coffee */}
      <path
        d="M173 408H214L211 446C210 453 205 457 194 457C183 457 178 453 177 446L173 408Z"
        fill="white"
      />

      <path
        d="M214 416C229 414 232 435 214 439"
        stroke="#CBD5E1"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Floating Python mark */}
      <motion.g
        animate={{ y: [0, 9, 0], rotate: [-4, 3, -4] }}
        transition={{ duration: 4.5, repeat: Infinity }}
      >
        <rect
          x="523"
          y="216"
          width="70"
          height="70"
          rx="20"
          fill="white"
          stroke="#E2E8F0"
          strokeWidth="2"
        />

        <text
          x="558"
          y="261"
          textAnchor="middle"
          fontSize="27"
          fontWeight="700"
          fill="#0284C7"
        >
          Py
        </text>
      </motion.g>

      {/* Spark */}
      <motion.path
        d="M150 295L157 311L173 318L157 325L150 341L143 325L127 318L143 311L150 295Z"
        fill="#F59E0B"
        animate={{ rotate: [0, 12, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Floating circles */}
      <motion.circle
        cx="525"
        cy="330"
        r="8"
        fill="#0EA5E9"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.circle
        cx="188"
        cy="116"
        r="7"
        fill="#87CEFA"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.7, repeat: Infinity }}
      />
    </motion.svg>
  );
}

export default CoursesHeroIllustration;