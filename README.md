# Kushal Adhyaru - Portfolio

A production-quality portfolio website showcasing AI/ML projects, full-stack development work, and professional experience. Built with cutting-edge technologies and an extremely advanced, interactive UI.

## 🚀 Features

- **Advanced UI/UX**: Premium design with Framer Motion animations, micro-interactions, and smooth transitions
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Command Palette**: Quick navigation with ⌘K/Ctrl+K
- **Project Showcase**: 9 detailed projects with rich descriptions and tech stacks
- **Resume Modal**: Interactive PDF preview with dual resume options
- **Contact Form**: Validated form with Zod schema validation
- **Fully Responsive**: Optimized for all devices and screen sizes
- **SEO Optimized**: Meta tags, OpenGraph, and semantic HTML
- **Accessibility**: WCAG AA+ compliant with keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State**: Zustand
- **Validation**: Zod
- **Theme**: next-themes
- **Command Menu**: cmdk

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Content Management

### Adding/Editing Projects

Projects are managed in `/content/projects-new.ts`. Each project has:

```typescript
{
  slug: 'project-slug',
  title: 'Project Title',
  repo: 'https://github.com/username/repo',
  summary: 'Brief description',
  description: 'Detailed description (2-3 paragraphs)',
  tags: ['Tag1', 'Tag2'],
  tech: ['Tech1', 'Tech2'],
  highlights: ['Feature 1', 'Feature 2'],
  images: [
    { src: '/projects/slug/image.jpg', alt: 'Description', gradient: 'from-color to-color' }
  ],
  gradient: 'from-color via-color to-color',
  icon: '🚀'
}
```

### Adding Project Images

1. Create a folder: `/public/projects/[project-slug]/`
2. Add images: `hero.jpg`, `screenshot1.jpg`, etc.
3. Update the `images` array in the project data

### Updating Resumes

Replace these files in `/public/`:
- `resume_primary.pdf` - Your main resume
- `resume_alt.pdf` - Alternative version

### Updating Profile Photo

Replace `/public/profile.jpg` with your photo (recommended: 800x800px, square)

### Updating Personal Info

Edit these files:
- `/app/layout.tsx` - Meta tags and SEO
- `/components/SiteFooter.tsx` - Social links and footer text
- `/app/about/page.tsx` - Bio, skills, and experience
- `/app/contact/page.tsx` - Contact information

## 🎨 Customization

### Colors

The portfolio uses Tailwind's color system. Main accent colors:
- Primary: Indigo (500-700)
- Secondary: Cyan
- Accent: Purple

Modify in `/app/globals.css` CSS variables.

### Fonts

Currently using Inter. To change:
1. Update font import in `/app/layout.tsx`
2. Modify the `font-sans` variable

### Animations

All animations use Framer Motion. Adjust timing in component files:
- Duration: 0.3-0.5s for most transitions
- Delays: Staggered by 0.1s for lists
- Easing: Default spring physics

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

No environment variables required for basic deployment. Add these if using external services:
- Email service API keys
- Analytics tokens
- etc.

## 📱 Pages

- `/` - Home with hero and featured projects
- `/projects` - All projects with search
- `/project/[slug]` - Individual project details
- `/about` - About me, skills, experience
- `/contact` - Contact form and social links

## ⌨️ Keyboard Shortcuts

- `⌘K` / `Ctrl+K` - Open command palette
- `Esc` - Close modals/dialogs
- `Tab` - Navigate form fields

## 🎯 Performance

- Lighthouse Score: 95+ (Performance, Best Practices, SEO)
- Accessibility: 100
- Image optimization with next/image
- Code splitting per route
- Font subsetting

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Open an issue or PR.

## 📧 Contact

- Email: kushal@example.com
- LinkedIn: [kushal-adhyaru](https://www.linkedin.com/in/kushal-adhyaru/)
- GitHub: [kushal511](https://github.com/kushal511)

---

Built with ❤️ by Kushal Adhyaru
