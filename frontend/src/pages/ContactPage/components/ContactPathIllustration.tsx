import { motion } from "motion/react";

function ContactPathIllustration() {
  return (
    <motion.svg
      viewBox="0 0 900 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full overflow-visible"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      aria-label="Illustration showing a path from learning to building and growing"
      role="img"
    >
      {/* Background landscape */}
      <path
        d="M0 333C90 305 140 328 211 310C290 290 329 316 408 294C497 270 566 296 645 274C731 251 791 270 900 244V430H0V333Z"
        fill="#F0F9FF"
      />

      {/* Distant hills */}
      <path
        d="M0 330C95 300 133 321 206 302C277 283 332 300 402 281C489 258 554 281 631 261C714 239 799 258 900 230"
        stroke="#BAE6FD"
        strokeWidth="3"
      />

      {/* Main journey path */}
      <motion.path
        d="M45 360C135 357 145 283 222 283C302 283 297 355 377 355C458 355 450 218 537 218C620 218 613 309 690 309C768 309 768 155 855 126"
        stroke="white"
        strokeWidth="42"
        strokeLinecap="round"
        animate={{
          pathLength: [0.92, 1, 0.92],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <path
        d="M45 360C135 357 145 283 222 283C302 283 297 355 377 355C458 355 450 218 537 218C620 218 613 309 690 309C768 309 768 155 855 126"
        stroke="#0EA5E9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="10 13"
      />

      {/* Start point */}
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <circle cx="45" cy="360" r="20" fill="white" />
        <circle cx="45" cy="360" r="10" fill="#0284C7" />
      </motion.g>

      {/* Learn sign */}
      <motion.g
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.2, repeat: Infinity }}
      >
        <path
          d="M180 224H270V279H180V224Z"
          fill="white"
          stroke="#E2E8F0"
          strokeWidth="2"
        />

        <path
          d="M225 279V300"
          stroke="#94A3B8"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <text
          x="225"
          y="257"
          textAnchor="middle"
          fill="#0284C7"
          fontSize="20"
          fontWeight="700"
        >
          LEARN
        </text>
      </motion.g>

      {/* Build sign */}
      <motion.g
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <path
          d="M480 154H570V209H480V154Z"
          fill="#0284C7"
        />

        <path
          d="M525 209V225"
          stroke="#0284C7"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <text
          x="525"
          y="188"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="700"
        >
          BUILD
        </text>
      </motion.g>

      {/* Automate sign */}
      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <path
          d="M638 254H744V309H638V254Z"
          fill="#F59E0B"
        />

        <path
          d="M691 309V327"
          stroke="#F59E0B"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <text
          x="691"
          y="288"
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="700"
        >
          AUTOMATE
        </text>
      </motion.g>

      {/* Grow sign */}
      <motion.g
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 3.7, repeat: Infinity }}
      >
        <path
          d="M805 83H895V137H805V83Z"
          fill="#22C55E"
        />

        <path
          d="M850 137V153"
          stroke="#22C55E"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <text
          x="850"
          y="117"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="700"
        >
          GROW
        </text>
      </motion.g>

      {/* Little trees */}
      <g opacity="0.9">
        <path
          d="M100 318L115 282L130 318H122V330H108V318H100Z"
          fill="#38A169"
        />

        <path
          d="M742 245L756 212L770 245H763V258H749V245H742Z"
          fill="#22C55E"
        />

        <path
          d="M314 285L327 251L340 285H333V297H321V285H314Z"
          fill="#16A34A"
        />
      </g>

      {/* Small floating stars */}
      <motion.g
        animate={{ rotate: [0, 8, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <path
          d="M578 80L584 94L598 100L584 106L578 120L572 106L558 100L572 94L578 80Z"
          fill="#F59E0B"
        />
      </motion.g>

      <motion.circle
        cx="335"
        cy="120"
        r="7"
        fill="#87CEFA"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.svg>
  );
}

export default ContactPathIllustration;