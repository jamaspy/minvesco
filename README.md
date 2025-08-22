# MinVesco - Mining Investment Landing Page

A modern, professional landing page for a mining investment company built with Next.js, shadcn/ui components, and Tailwind CSS featuring an Australian color scheme.

## Features

### 🎨 Design
- **Australian Color Scheme**: Gold, eucalyptus green, and earth tones
- **Modern Animations**: Smooth scroll animations and hover effects
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Professional Styling**: Clean, corporate design suitable for investment company

### 🏗️ Sections
1. **Hero Section**: Eye-catching introduction with company branding and key statistics
2. **Offerings Section**: Three main investment categories (Gold, Lithium, Iron Ore)
3. **Contact Section**: Professional contact form with Resend email integration

### ⚡ Technical Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom Australian theme colors
- **Components**: shadcn/ui component library
- **Email**: Resend for contact form submissions
- **TypeScript**: Full TypeScript support
- **Build Tool**: Turbopack for fast development and builds

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Resend API key to `.env.local`:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Email Configuration

The contact form uses [Resend](https://resend.com) for email delivery:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your environment variables
4. Update the email addresses in `app/api/contact/route.ts`:
   - Change `from` address to your verified domain
   - Change `to` address to your business email

## Customization

### Colors
The Australian color scheme is defined in:
- `tailwind.config.ts` - Color palette definitions
- `app/globals.css` - CSS custom properties

### Content
Update company information in:
- `components/sections/hero-section.tsx` - Company name, statistics
- `components/sections/offerings-section.tsx` - Investment opportunities
- `components/sections/contact-section.tsx` - Contact details

### Investment Minimums
Modify investment amounts in the offerings and contact sections to match your requirements.

## Project Structure

```
├── app/
│   ├── api/contact/          # Contact form API endpoint
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── sections/             # Page sections
│   │   ├── hero-section.tsx
│   │   ├── offerings-section.tsx
│   │   └── contact-section.tsx
│   └── ui/                   # shadcn/ui components
├── lib/
│   └── utils.ts              # Utility functions
└── tailwind.config.ts        # Tailwind configuration
```

## Performance Features

- **Static Generation**: Pages are pre-built for optimal performance
- **Image Optimization**: Next.js automatic image optimization
- **Turbopack**: Fast bundler for development
- **Tree Shaking**: Unused code elimination in production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.
