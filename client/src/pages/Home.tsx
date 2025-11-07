import ShaderBackground from "@/components/ShaderBackground";
import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <ShaderBackground />
      <HeroContent />
    </div>
  );
}
