import { motion } from "motion/react";

function NotFoundIllustration() {
  return (
    <div className="relative h-[360px] w-full max-w-[460px]">
      {/* Floating code card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-4 top-4 z-20 rounded-2xl border border-border bg-white p-4 shadow-xl"
      >
        <div className="font-mono text-xs leading-6">
          <p>
            <span className="text-primary-dark">const</span>{" "}
            <span className="text-dark">page</span> ={" "}
            <span className="text-primary-bright">null</span>;
          </p>

          <p className="text-muted">
            // where did it go?
          </p>
        </div>
      </motion.div>

      {/* Main illustration */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2">
        {/* Outer circle */}
        <div className="absolute inset-0 rounded-full border-[18px] border-primary-light" />

        {/* Inner circle */}
        <div className="absolute inset-8 rounded-full bg-primary-light" />

        {/* Character head */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-16 h-24 w-24 -translate-x-1/2 rounded-[40%] border-4 border-dark bg-white"
        >
          {/* Hair */}
          <div className="absolute -top-3 left-2 right-2 h-9 rounded-t-full bg-dark" />

          {/* Eyes */}
          <div className="absolute left-5 top-11 h-2.5 w-2.5 rounded-full bg-dark" />
          <div className="absolute right-5 top-11 h-2.5 w-2.5 rounded-full bg-dark" />

          {/* Face */}
          <div className="absolute bottom-4 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full border-b-2 border-dark" />
        </motion.div>

        {/* Body */}
        <div className="absolute bottom-8 left-1/2 h-24 w-28 -translate-x-1/2 rounded-t-[45px] border-4 border-dark bg-white" />

        {/* Laptop */}
        <div className="absolute bottom-4 left-1/2 z-10 h-16 w-28 -translate-x-1/2 rounded-lg border-4 border-dark bg-dark">
          <div className="m-2 h-9 rounded bg-primary-light">
            <div className="p-2 font-mono text-[7px] text-primary-dark">
              404
            </div>
          </div>
        </div>
      </div>

      {/* Floating geometry */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-8 left-4 h-14 w-14 rounded-2xl border-2 border-primary-dark"
      />

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-14 right-12 h-8 w-8 rounded-full bg-primary-dark"
      />
    </div>
  );
}

export default NotFoundIllustration;