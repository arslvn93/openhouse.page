import AnimatedBackground from "../AnimatedBackground";

export default function AnimatedBackgroundExample() {
  return (
    <div className="relative w-full h-96">
      <AnimatedBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-white text-2xl font-semibold">Background Preview</p>
      </div>
    </div>
  );
}
