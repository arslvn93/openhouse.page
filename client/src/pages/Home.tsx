import Hero from "@/components/ui/animated-shader-hero";

export default function Home() {
  return (
    <Hero
      trustBadge={{
        text: "giveaway.bz",
        icons: ["✨"],
      }}
      headline={{
        line1: "Launch Your",
        line2: "Open House Into Orbit",
      }}
      subtitle="Official Open House platform built for realtors and forward-thinking teams — secure, verified, and seamless."
      buttons={{
        primary: {
          text: "Create Your Open House Page",
          onClick: () => console.log("Create giveaway clicked"),
        },
        secondary: {
          text: "SalesGenius",
          onClick: () => console.log("SalesGenius clicked"),
        },
      }}
    />
  );
}
