import FloatingShape from "./FloatingShape";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 animate-gradient-shift"
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      <FloatingShape
        type="sphere"
        size={120}
        color="rgba(139, 92, 246, 0.2)"
        initialX={15}
        initialY={20}
        delay={0}
        duration={8}
      />

      <FloatingShape
        type="cube"
        size={80}
        color="rgba(236, 72, 153, 0.15)"
        initialX={85}
        initialY={15}
        delay={1.5}
        duration={7}
      />

      <FloatingShape
        type="torus"
        size={150}
        color="rgba(167, 139, 250, 0.2)"
        initialX={75}
        initialY={70}
        delay={2}
        duration={9}
      />

      <FloatingShape
        type="pyramid"
        size={70}
        color="rgba(219, 39, 119, 0.18)"
        initialX={10}
        initialY={75}
        delay={3}
        duration={6.5}
      />

      <FloatingShape
        type="sphere"
        size={90}
        color="rgba(99, 102, 241, 0.15)"
        initialX={45}
        initialY={10}
        delay={0.5}
        duration={7.5}
      />

      <FloatingShape
        type="cube"
        size={60}
        color="rgba(192, 132, 252, 0.2)"
        initialX={30}
        initialY={85}
        delay={2.5}
        duration={8.5}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  );
}
