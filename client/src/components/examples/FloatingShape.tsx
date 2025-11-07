import FloatingShape from "../FloatingShape";

export default function FloatingShapeExample() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 overflow-hidden">
      <FloatingShape
        type="sphere"
        size={80}
        color="rgba(139, 92, 246, 0.3)"
        initialX={20}
        initialY={30}
        delay={0}
      />
      <FloatingShape
        type="cube"
        size={60}
        color="rgba(236, 72, 153, 0.3)"
        initialX={70}
        initialY={50}
        delay={1}
      />
      <FloatingShape
        type="torus"
        size={100}
        color="rgba(167, 139, 250, 0.4)"
        initialX={50}
        initialY={60}
        delay={2}
      />
    </div>
  );
}
