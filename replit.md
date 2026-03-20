# Central Technologies

## Overview

Central Technologies is a premium multi-page marketing website for a private technology management service targeting affluent households across Greater London and surrounding areas. The site features multiple SEO-optimised pages, a contact inquiry form that submits to a PostgreSQL-backed API, smooth scroll navigation on the homepage, and subtle animations for a high-end feel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing (multi-page with 404 handling)
- **Styling**: Tailwind CSS with custom premium neutral color palette, Raleway font family
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for subtle entrance animations
- **Smooth Scrolling**: react-scroll for navigation between page sections
- **State Management**: TanStack React Query for server state and API mutations
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build Tool**: esbuild for server bundling, Vite for client bundling
- **API Pattern**: RESTful endpoints defined in shared route definitions with Zod schemas for type-safe request/response validation

### Data Storage
- **Database**: PostgreSQL via `pg` driver
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Drizzle Kit with `drizzle-kit push` for schema synchronization

### Project Structure
- `client/` - React frontend application
  - `src/components/` - React components including shadcn/ui primitives
  - `src/pages/` - Page components (Home, ITSupportHomeVisit, PrivateHouseholdTechnology, Services, Contact, 404)
  - `src/hooks/` - Custom React hooks for mutations and utilities
  - `public/` - Static assets including robots.txt
- `server/` - Express backend
  - `routes.ts` - API endpoint registration
  - `storage.ts` - Database access layer
  - `db.ts` - Database connection setup
- `shared/` - Shared code between client and server
  - `schema.ts` - Drizzle table definitions and Zod schemas
  - `routes.ts` - API route definitions with input/output types

### API Structure
Single endpoint currently implemented:
- `POST /api/inquiries` - Creates a new inquiry record with name, email, phone (optional), and requirements fields

### Build Process
- Development: `tsx` runs TypeScript directly with Vite dev server for HMR
- Production: Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`
- Server serves static files from `dist/public` in production

## External Dependencies

### Database
- **PostgreSQL**: Required, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available but not currently configured)

### Third-Party Services
- **Google Fonts**: Raleway font loaded via CDN
- **Replit Plugins**: Development-only plugins for error overlay, cartographer, and dev banner

### Key NPM Packages
- `drizzle-orm` / `drizzle-kit` - Database ORM and migration tooling
- `@tanstack/react-query` - Async state management
- `react-hook-form` - Form state management
- `framer-motion` - Animation library
- `react-scroll` - Smooth scrolling navigation
- Full shadcn/ui component suite via Radix UI primitives