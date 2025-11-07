import { Shield, Check, Lock } from "lucide-react";
import { motion } from "framer-motion";

interface TrustBadgeProps {
  icon: "shield" | "check" | "lock";
  text: string;
  delay?: number;
}

export default function TrustBadge({ icon, text, delay = 0 }: TrustBadgeProps) {
  const icons = {
    shield: Shield,
    check: Check,
    lock: Lock,
  };

  const Icon = icons[icon];

  return (
    <motion.div
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      data-testid={`badge-${icon}`}
    >
      <Icon className="w-4 h-4 text-purple-200" />
      <span className="text-sm font-semibold text-white tracking-wide uppercase">
        {text}
      </span>
    </motion.div>
  );
}
