import { motion } from "motion/react";

function ContactGirlIllustration() {
  return (
    <motion.svg
      viewBox="0 0 620 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full overflow-visible"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      aria-label="Illustration of a developer working on a laptop"
      role="img"
    >
      {/* Background organic blob */}
      <motion.path
        d="M385 70C486 37 575 99 594 190C615 290 550 389 458 423C361 458 237 439 190 347C141 251 203 126 290 93C320 82 352 80 385 70Z"
        fill="#F0F9FF"
        animate={{
          d: [
            "M385 70C486 37 575 99 594 190C615 290 550 389 458 423C361 458 237 439 190 347C141 251 203 126 290 93C320 82 352 80 385 70Z",
            "M397 64C495 53 575 110 590 201C607 299 526 391 443 424C341 465 230 422 188 330C147 239 213 134 302 92C334 77 363 70 397 64Z",
            "M385 70C486 37 575 99 594 190C615 290 550 389 458 423C361 458 237 439 190 347C141 251 203 126 290 93C320 82 352 80 385 70Z",
          ],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative dots */}
      <g opacity="0.55">
        <circle cx="110" cy="120" r="4" fill="#0EA5E9" />
        <circle cx="130" cy="120" r="4" fill="#87CEFA" />
        <circle cx="150" cy="120" r="4" fill="#0EA5E9" />

        <circle cx="104" cy="140" r="4" fill="#87CEFA" />
        <circle cx="124" cy="140" r="4" fill="#0EA5E9" />
        <circle cx="144" cy="140" r="4" fill="#87CEFA" />
      </g>

      {/* Floating code symbol */}
      <motion.g
        animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <rect
          x="425"
          y="58"
          width="74"
          height="55"
          rx="15"
          fill="#0F172A"
        />

        <path
          d="M447 75L436 86L447 97"
          stroke="#87CEFA"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M468 75L479 86L468 97"
          stroke="#38BDF8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>

      {/* Speech bubble */}
      <motion.g
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M130 187C130 169.327 144.327 155 162 155H280C297.673 155 312 169.327 312 187V224C312 241.673 297.673 256 280 256H218L190 279V256H162C144.327 256 130 241.673 130 224V187Z"
          fill="white"
          stroke="#E2E8F0"
          strokeWidth="2"
        />

        <circle cx="163" cy="190" r="6" fill="#0EA5E9" />
        <circle cx="184" cy="190" r="6" fill="#87CEFA" />
        <circle cx="205" cy="190" r="6" fill="#CBD5E1" />

        <path
          d="M157 218H257"
          stroke="#CBD5E1"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <path
          d="M157 232H225"
          stroke="#E2E8F0"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Light bulb */}
      <motion.g
        animate={{
          y: [0, -9, 0],
          rotate: [-4, 4, -4],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <circle cx="492" cy="155" r="29" fill="#FEF3C7" />

        <path
          d="M480 151C480 143 485 137 492 137C499 137 504 143 504 151C504 157 501 161 498 164C496 166 495 169 495 172H489C489 169 488 166 486 164C482 161 480 157 480 151Z"
          fill="#F59E0B"
        />

        <path
          d="M488 177H496"
          stroke="#F59E0B"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M492 119V108M466 128L457 119M518 128L527 119"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Hair behind head */}
      <path
        d="M292 194C292 151 322 120 364 120C411 120 438 151 438 199C438 238 418 262 392 274L313 259C301 240 292 218 292 194Z"
        fill="#171717"
      />

      {/* Neck */}
      <path
        d="M347 260V294C347 307 335 316 324 320L379 348L415 314C398 309 390 300 390 286V260H347Z"
        fill="#9A5B45"
      />

      {/* Face */}
      <path
        d="M313 186C313 151 337 136 370 136C404 136 425 156 425 191V224C425 254 403 275 370 275C337 275 313 254 313 224V186Z"
        fill="#A9684E"
      />

      {/* Ear */}
      <path
        d="M312 202C301 198 297 207 301 220C304 231 310 235 316 233"
        fill="#A9684E"
      />

      {/* Hair top */}
      <path
        d="M302 183C292 154 311 116 356 110C399 104 433 132 441 167C424 154 412 146 396 144C376 141 364 150 344 147C327 145 315 155 302 183Z"
        fill="#171717"
      />

      {/* Hair curls */}
      <circle cx="315" cy="145" r="21" fill="#171717" />
      <circle cx="338" cy="126" r="24" fill="#171717" />
      <circle cx="367" cy="119" r="23" fill="#171717" />
      <circle cx="397" cy="125" r="24" fill="#171717" />
      <circle cx="420" cy="145" r="20" fill="#171717" />

      {/* Hair side */}
      <path
        d="M304 174C296 194 301 222 312 239L327 221L325 183L304 174Z"
        fill="#171717"
      />

      {/* Eyebrows */}
      <path
        d="M335 194C344 189 352 189 360 194"
        stroke="#542F26"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M386 194C394 189 402 190 409 195"
        stroke="#542F26"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Eyes */}
      <ellipse cx="349" cy="204" rx="5" ry="6" fill="#0F172A" />
      <ellipse cx="397" cy="204" rx="5" ry="6" fill="#0F172A" />

      {/* Nose */}
      <path
        d="M373 207C371 218 369 224 376 226"
        stroke="#7D4536"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Smile */}
      <path
        d="M357 239C365 246 377 247 386 239"
        stroke="#5C3027"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Neckline */}
      <path
        d="M345 275C358 284 377 285 392 275"
        stroke="#7D4536"
        strokeWidth="3"
      />

      {/* Body / hoodie */}
      <path
        d="M321 310C290 319 264 343 252 378L229 450H462L434 365C425 337 405 319 379 310L351 340L321 310Z"
        fill="#0284C7"
      />

      {/* Hoodie shadow */}
      <path
        d="M321 310C290 319 264 343 252 378L238 430C275 420 307 408 331 385L351 340L321 310Z"
        fill="#0369A1"
        opacity="0.45"
      />

      {/* Hoodie strings */}
      <path
        d="M348 342V376"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M390 342V376"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* ByteNol mark */}
      <circle cx="370" cy="386" r="25" fill="white" opacity="0.95" />

      <path
        d="M360 397V374L370 365L380 374V397"
        stroke="#0284C7"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Arm */}
      <path
        d="M423 361C453 365 470 385 490 407L464 432C442 409 422 394 404 387L423 361Z"
        fill="#A9684E"
      />

      {/* Laptop behind hands */}
      <path
        d="M272 376L471 376L493 472H250L272 376Z"
        fill="#CBD5E1"
      />

      {/* Laptop screen */}
      <rect
        x="285"
        y="388"
        width="173"
        height="63"
        rx="7"
        fill="#0F172A"
      />

      {/* Laptop UI */}
      <rect x="299" y="400" width="72" height="7" rx="3.5" fill="#38BDF8" />
      <rect x="299" y="416" width="119" height="5" rx="2.5" fill="#334155" />
      <rect x="299" y="430" width="94" height="5" rx="2.5" fill="#334155" />
      <rect x="404" y="416" width="14" height="19" rx="3" fill="#0EA5E9" />

      {/* Laptop base */}
      <path
        d="M244 472H495L514 489H225L244 472Z"
        fill="#94A3B8"
      />

      {/* Hand on keyboard */}
      <path
        d="M401 395C417 394 429 402 442 415L431 430C416 421 404 417 392 416L401 395Z"
        fill="#A9684E"
      />

      {/* Desk */}
      <path
        d="M177 486C249 470 426 470 512 486L529 505H159L177 486Z"
        fill="#E7C49A"
      />

      {/* Coffee cup */}
      <g>
        <path
          d="M202 435H244L240 477C239 484 233 488 223 488C213 488 207 484 206 477L202 435Z"
          fill="white"
        />

        <path
          d="M244 444C259 443 262 464 244 467"
          stroke="#CBD5E1"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <text
          x="211"
          y="461"
          fill="#0284C7"
          fontSize="13"
          fontWeight="700"
        >
          b
        </text>
      </g>

      {/* Floating envelope */}
      <motion.g
        animate={{
          x: [0, 8, 0],
          y: [0, -6, 0],
          rotate: [2, -2, 2],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <rect
          x="488"
          y="247"
          width="72"
          height="54"
          rx="14"
          fill="white"
          stroke="#E2E8F0"
          strokeWidth="2"
        />

        <path
          d="M503 263L524 280L545 263"
          stroke="#0EA5E9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>

      {/* Small decorative stars */}
      <motion.g
        animate={{ rotate: [0, 10, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <path
          d="M184 303L189 315L201 320L189 325L184 338L179 325L167 320L179 315L184 303Z"
          fill="#F59E0B"
        />
      </motion.g>

      <motion.circle
        cx="535"
        cy="342"
        r="8"
        fill="#0EA5E9"
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.svg>
  );
}

export default ContactGirlIllustration;