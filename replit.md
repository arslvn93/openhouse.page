# giveaway.bz

## Overview

giveaway.bz is a stunning single-page landing site for an official giveaway platform. The project features an immersive, full-viewport experience with animated 3D-style elements. The landing page emphasizes trust, security, and professionalism through modern design and smooth motion graphics.

The application is built with:
- **Frontend**: React with TypeScript, Framer Motion animations
- **Backend**: Express.js server (minimal, serving the frontend)
- **Build System**: Vite for frontend bundling
- **Styling**: Tailwind CSS with custom animations
- **Animation**: Framer Motion for smooth, Framer-style animations

This is a pure landing page with no database or API functionality - designed to communicate that giveaways are hosted at unique URLs like giveaway.bz/12345.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Component Structure**
- Component library follows atomic design principles with UI primitives from Radix UI wrapped in shadcn/ui components
- Custom components for landing page features (AnimatedBackground, FloatingShape, HeroContent, TrustBadge)
- Route-based page organization using Wouter for client-side routing
- Example components provided for development reference

**State Management**
- React Query (TanStack Query) for server state management
- React Context for global UI state (toast notifications, tooltips)
- Local component state using React hooks

**Styling System**
- Tailwind CSS with custom configuration for consistent spacing (4, 6, 8 unit rhythm)
- CSS variables for theming support (light/dark modes)
- Custom color tokens following HSL color space for better manipulation
- Design tokens for borders, shadows, and interactive states (hover-elevate, active-elevate-2)

**Animation Strategy**
- Framer Motion for component-level animations with staggered entrance effects
- CSS-based animations for background gradients and floating elements
- Mouse parallax effects for interactive 3D elements
- Performance-conscious animations targeting 60fps

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for type-safe server code
- Middleware chain: JSON parsing with raw body preservation, URL encoding, request logging
- Custom logging system tracking API request duration and response payloads

**Data Layer Design**
- Abstracted storage interface (IStorage) for database operations
- In-memory storage implementation (MemStorage) as default, prepared for database migration
- Drizzle ORM configuration for PostgreSQL with schema definition
- Schema uses Zod for runtime validation and type inference

**Development Environment**
- Vite development server with HMR (Hot Module Replacement)
- Middleware mode integration between Express and Vite
- Separate build processes for client (Vite) and server (esbuild)
- Replit-specific plugins for error overlays and development tools

### Design Philosophy

**Single Viewport Experience**
- All content fits within 100vh with no scrolling required
- Z-index layering: 3D background (z-0), animated shapes (z-10), content (z-20)
- Centered content with max-width constraint (max-w-4xl)

**Typography Hierarchy**
- Inter font family with strategic weight usage (400, 600, 800)
- Responsive text sizing with breakpoints (base → md → lg)
- Clear hierarchy from hero heading to body text

**Component Patterns**
- Reusable UI primitives with consistent API surface
- Variant-based styling using class-variance-authority
- Composition patterns with Radix UI Slot component
- Accessibility-first approach with ARIA attributes

## External Dependencies

### UI Framework
- **Radix UI**: Headless component primitives for accessible UI components (dialogs, popovers, dropdowns, etc.)
- **shadcn/ui**: Pre-styled components built on Radix UI with Tailwind CSS integration
- **Lucide React**: Icon library for consistent iconography

### State & Data Management
- **TanStack React Query**: Server state management with caching, background updates, and optimistic updates
- **Wouter**: Lightweight client-side router (alternative to React Router)

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Framer Motion**: Production-ready motion library for React
- **class-variance-authority**: Utility for creating component variants
- **clsx & tailwind-merge**: Conditional class name utilities

### Form Handling
- **React Hook Form**: Form state management with validation
- **@hookform/resolvers**: Validation resolver for Zod schemas
- **Zod**: TypeScript-first schema validation

### Database (Configured but not yet implemented)
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-zod**: Integration between Drizzle schema and Zod validation

### Development Tools
- **Vite**: Next-generation frontend build tool
- **esbuild**: Fast JavaScript bundler for server code
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing with Autoprefixer
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Session Management (Configured)
- **connect-pg-simple**: PostgreSQL session store for Express (prepared for future use)

### Utilities
- **date-fns**: Modern date utility library
- **nanoid**: Tiny, secure URL-friendly unique ID generator