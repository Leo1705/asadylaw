# Asady Law Website

Toronto's Premier Virtual Real Estate Law Firm - Modern, professional website built with Next.js.

## Features

- **Home Page**: Hero with Google Reviews badge, Services (4 cards), Step-by-step process (parallax), Reviews/Testimonials, Why Virtual section, Booking (Calendar + Form)
- **Services Page**: Detailed service offerings
- **About Page**: Firm values and mission
- **Contact Page**: Contact form and details
- **Onboarding Page** (URL-only: `/onboarding`): Multi-step form with ID upload - not in main navigation
- **Interactive Chatbot**: Virtual real estate law assistant (bottom left)

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- date-fns

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Logo

Place your official Asady Law logo (lion with laurel wreath) at `public/assets/logo.png` to replace the SVG placeholder. The logo should have a transparent background with white and gold (#c9a227) brand colors for best results on the dark theme.

## Google Reviews

The Reviews section uses placeholder content. To pull live Google My Business reviews, integrate the Google Places API or Google My Business API.

## Onboarding

The onboarding page is accessible only via URL: `/onboarding`. It's not linked in the main navigation. Share this link with clients when starting their onboarding process.
