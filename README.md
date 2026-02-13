# Muhammad Taimoor - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring smooth animations, interactive elements, and a beautiful UI design.

## 🚀 Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Smooth Animations**: Framer Motion powered animations throughout the site
- **Interactive Code Viewport**: Live typing animation showcasing different technologies
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete meta tags and structured data
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Contact Form**: Functional contact form with validation
- **Dark Mode Ready**: CSS variables setup for easy theme switching

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Forms**: React Hook Form + Zod validation
- **Notifications**: Sonner
- **TypeScript**: Full type safety

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── About.tsx          # About section
│   ├── BackgroundEffects.tsx
│   ├── CodeViewport.tsx   # Interactive code display
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Projects.tsx       # Portfolio projects
│   ├── Services.tsx       # Services offered
│   └── Skills.tsx         # Technical skills
├── styles/
│   └── globals.css        # Global styles and CSS variables
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables in `styles/globals.css`:

```css
:root {
  --gold-start: #FFD479;
  --gold-end: #E6AB28;
  --purple: #7C3AED;
  --teal: #06B6D4;
}
```

### Content
Update the following files to customize your content:

- **Personal Info**: `components/Hero.tsx`, `components/About.tsx`
- **Skills**: `components/Skills.tsx`
- **Projects**: `components/Projects.tsx`
- **Services**: `components/Services.tsx`
- **Contact Info**: `components/Contact.tsx`, `components/Footer.tsx`

### Images
Replace placeholder images with your own:
- Hero section: Update the image URL in `components/About.tsx`
- Project images: Update URLs in `components/Projects.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- ESLint configuration included
- Prettier recommended for code formatting
- TypeScript strict mode enabled

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Muhammad Taimoor - [@your-twitter](https://twitter.com/your-twitter) - hello@muhammadtaimoor.dev

Project Link: [https://github.com/your-username/portfolio-website](https://github.com/your-username/portfolio-website)

---

⭐ If you found this project helpful, please give it a star!



