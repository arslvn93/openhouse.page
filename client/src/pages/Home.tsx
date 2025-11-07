import Hero from "@/components/ui/animated-shader-hero";
import { Shield, Lock, Check } from "lucide-react";

export default function Home() {
  return (
    <Hero
      trustBadge={{
        text: "Official & Secure Platform",
        icons: ["🔒"]
      }}
      headline={{
        line1: "giveaway.bz",
        line2: "Official Giveaway Platform"
      }}
      subtitle="Secure. Verified. Trusted. All giveaways are hosted on unique URLs like giveaway.bz/12345"
    />
  );
}
