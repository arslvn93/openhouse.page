import AnimatedBackground from "@/components/AnimatedBackground";
import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatedBackground />
      <HeroContent />
    </div>
  );
}
