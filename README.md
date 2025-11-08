# RV University - Official Website

Official website for RV University, showcasing academic programs, admissions information, fee structure, and campus facilities.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive Chatbot**: Integrated Dialogflow CX FAQ bot for instant student assistance
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS for a professional appearance
- **Fast Performance**: Optimized with Vite for lightning-fast load times
- **Accessibility**: WCAG compliant design with proper semantic HTML and ARIA labels

## Tech Stack

This project is built with modern web technologies:

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **Dialogflow CX** - Conversational AI chatbot

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rvu-legacy-build-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
rvu-legacy-build-main/
├── src/
│   ├── components/      # React components
│   │   ├── ui/          # Reusable UI components (shadcn/ui)
│   │   ├── Header.tsx   # Site header with navigation
│   │   ├── Hero.tsx     # Hero section
│   │   ├── About.tsx    # About section
│   │   ├── Admissions.tsx
│   │   ├── Courses.tsx
│   │   ├── Fees.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   ├── assets/          # Images and static assets
│   ├── lib/             # Utility functions
│   └── hooks/           # Custom React hooks
├── public/              # Public assets
├── bot/                 # Dialogflow CX bot configuration
└── index.html           # HTML entry point
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses ESLint for code quality. Make sure to follow the existing code style and run `npm run lint` before committing.

## Deployment

The application can be deployed to any static hosting service:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Cloudflare Pages**: Connect repository for automatic deployments
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

## Chatbot Integration

The website includes a Dialogflow CX conversational chatbot for handling student FAQs. The chatbot is configured in the `bot/` directory and integrated via the Dialogflow Messenger widget in `index.html`.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Copyright © 2024 RV University. All rights reserved.

## Contact

For inquiries about this website, please contact:
- Email: webmaster@rvu.edu.in
- Phone: +91 80 6712 5000
