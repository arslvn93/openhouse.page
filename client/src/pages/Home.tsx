import Hero from "@/components/ui/animated-shader-hero";

export default function Home() {
  return (
    <Hero
      trustBadge={{
        text: "giveaway.bz",
        icons: ["✨"]
      }}
      headline={{
        line1: "Launch Your",
        line2: "Giveaway"
      }}
      subtitle="Official giveaway platform built for realtors and forward-thinking teams — secure, verified, and seamless. Host giveaways at unique URLs with confidence."
      buttons={{
        primary: {
          text: "Create Your Giveaway",
          onClick: () => console.log('Create giveaway clicked')
        },
        secondary: {
          text: "By SalesGenius",
          onClick: () => console.log('SalesGenius clicked')
        }
      }}
    />
  );
}
