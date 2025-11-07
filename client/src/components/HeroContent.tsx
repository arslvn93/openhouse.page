import { motion } from "framer-motion";
import TrustBadge from "./TrustBadge";
import { Sparkles } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.div
        className="mb-8 inline-flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <Sparkles className="w-12 h-12 text-purple-300" data-testid="icon-logo" />
          <div className="absolute inset-0 blur-xl bg-purple-400/50 animate-pulse" />
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        data-testid="text-heading"
      >
        giveaway.bz
      </motion.h1>

      <motion.div
        className="max-w-2xl mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h2
          className="text-2xl md:text-3xl font-semibold text-purple-100 mb-4"
          data-testid="text-tagline"
        >
          Official Giveaway Platform
        </h2>
        <p
          className="text-lg md:text-xl text-purple-200/90 font-normal"
          data-testid="text-description"
        >
          Secure. Verified. Trusted.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <TrustBadge icon="shield" text="Secure Platform" delay={0.8} />
        <TrustBadge icon="lock" text="SSL Encrypted" delay={0.9} />
        <TrustBadge icon="check" text="Verified" delay={1.0} />
      </motion.div>

      <motion.div
        className="max-w-3xl px-6 py-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        data-testid="card-info"
      >
        <p className="text-base md:text-lg text-purple-100/80 leading-relaxed">
          All giveaways are hosted on unique, secure URLs.
          <br />
          <span className="text-purple-200 font-semibold">
            Each giveaway has its own dedicated page at giveaway.bz/[id]
          </span>
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.3 }}
      >
        <p className="text-sm text-purple-300/60 font-medium tracking-wider uppercase">
          Trusted by Realtors Nationwide
        </p>
      </motion.div>
    </div>
  );
}
