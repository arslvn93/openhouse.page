# Design Guidelines: giveaway.bz Landing Page

## Design Approach
Reference-Based: Draw inspiration from Framer's motion design philosophy and modern 3D web experiences (Spline, Awwwards winners). Create an immersive, full-viewport experience that communicates trust and innovation through cutting-edge visual design.

## Core Design Principles
- **Single Viewport Impact**: Everything fits within 100vh - no scrolling, maximum visual impact
- **3D Immersion**: Floating 3D geometric elements create depth and modern aesthetics
- **Motion as Communication**: Smooth, purposeful animations convey professionalism and security
- **Centered Focus**: All content centered and balanced within the viewport

## Layout System

**Spacing**: Use Tailwind units of 4, 6, and 8 for consistent rhythm (p-4, gap-6, mb-8)

**Viewport Structure**:
- Container: Full viewport (h-screen, w-screen)
- Content Zone: Centered with max-w-4xl
- Z-index Layers: 3D background (z-0), animated shapes (z-10), content (z-20)

## Typography

**Font Stack**: 
- Primary: Inter (Google Fonts) - clean, modern, professional
- Weights: 400 (regular), 600 (semibold), 800 (extrabold)

**Hierarchy**:
- Hero Heading: text-6xl md:text-7xl lg:text-8xl font-extrabold
- Tagline: text-xl md:text-2xl font-semibold  
- Body Text: text-base md:text-lg font-normal
- Security Badge: text-sm font-semibold uppercase tracking-wider

## Component Library

**Hero Content Block**:
- Centered vertically and horizontally
- Logo/Brand (giveaway.bz) at top with icon accent
- Main headline emphasizing "Official Giveaway Platform"
- Supporting text about security and trust
- Subtle security badges or trust indicators
- Clean spacing between elements (gap-6 to gap-8)

**3D Background Scene**:
- Floating geometric shapes (spheres, toruses, cubes) using React Three Fiber
- Subtle rotation and floating animations on 3D objects
- Ambient gradient lighting for depth
- Interactive mouse parallax effect (subtle movement following cursor)

**Animated Elements**:
- Staggered fade-in animations for text elements (Framer Motion)
- Floating animation on geometric accent shapes (y-axis oscillation)
- Gradient background with slow color transitions
- Particle effects or ambient orbs in the background

**Trust Indicators**:
- Small badge/shield icon with "Secure Platform" text
- Subtle checkmark or verification symbol
- Minimal, elegant presentation - not intrusive

## Visual Treatment

**Background**: 
- Dynamic gradient backdrop (dark to medium tones for contrast)
- Animated gradient shift creating ambient movement
- 3D scene renders behind all content

**Depth & Layers**:
- 3D elements provide background depth
- Content floats above with subtle shadow/glow
- Glass morphism effect on content container (backdrop-blur-lg, bg-white/10)

**Geometric Accents**:
- 2-3 floating 3D shapes strategically placed
- Wireframe or solid geometric forms
- Subtle emission/glow effects on shapes
- Continuous slow rotation and position drift

## Animation Strategy

**Entry Sequence** (1-2 seconds total):
1. 3D scene fades in (0-0.5s)
2. Logo/brand appears with scale effect (0.3-0.8s)
3. Headline fades in from below (0.5-1.2s)
4. Supporting content staggers in (0.8-1.5s)

**Ambient Motion**:
- 3D shapes: Continuous slow float and rotate
- Background gradient: 10-15 second color cycle
- Subtle parallax on mouse movement
- Content container: Very subtle breathing effect (scale 1.0 to 1.01)

**Interaction**:
- Smooth hover states on any interactive elements
- 3D objects react subtly to mouse proximity
- Cursor trail or glow effect (minimal)

## Responsive Behavior

**Desktop (lg:)**: Full immersive 3D experience, large typography
**Tablet (md:)**: Reduced 3D complexity, adjusted font sizes
**Mobile**: Simplified 3D scene or gradient fallback, stacked content, text-5xl minimum for headline

## Content Structure

**Main Messaging**:
- Primary: "giveaway.bz" or "Official Giveaway Platform"
- Secondary: "Secure. Verified. Trusted."
- Tertiary: Brief explanation that giveaways are hosted on unique URLs
- Trust elements: "SSL Encrypted" "Verified Platform" badges

**No Navigation**: This is a pure landing experience - no header/footer clutter

## Images
No hero images required. The visual impact comes entirely from 3D elements, animations, and gradient backgrounds. All visual interest is generated through code-based graphics.