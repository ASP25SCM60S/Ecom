# Fresh Foods - E-commerce Website

A responsive e-commerce website built with Next.js 15 for selling premium food products online.

## Features

- Responsive design for all devices
- Product listing with filtering by category
- Product detail pages with related products
- Shopping cart functionality with add/remove/update
- Beautiful UI with smooth transitions
- SEO optimized

## Technologies Used

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS for styling
- Zustand for state management
- React Icons

## Getting Started

### Prerequisites

- Node.js 18.0 or later

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd food-ecommerce
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── cart/         # Cart page
│   ├── products/     # Products listing and detail pages
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Homepage
├── components/       # Reusable UI components
├── lib/              # Utilities and data
├── store/            # State management
└── types/            # TypeScript types
```

## Deployment

The application can be deployed to Vercel with the following command:

```bash
npm run build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details. 