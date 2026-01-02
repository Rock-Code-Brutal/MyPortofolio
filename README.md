# 🚀 Rocky's Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, and TypeScript. Features bilingual support (English/Indonesian) with dynamic language switching.

## ✨ Features

- **Bilingual Support**: Seamlessly switch between English and Indonesian
- **Modern Tech Stack**: Built with Next.js 16, React 19, and TypeScript
- **Responsive Design**: Optimized for all devices
- **Performance Optimized**: Vercel Analytics & Speed Insights integrated
- **Professional UI**: Glassmorphism effects with Tailwind CSS
- **Smooth Animations**: Hover effects and transitions throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   └── LanguageToggle.tsx  # Language switcher component
├── contexts/
│   └── LanguageContext.tsx # Language context provider
└── locales/
    └── translations.ts      # Translations (EN/ID)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Rock-Code-Brutal/MyPortofolio.git

# Navigate to project directory
cd MyPortofolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🌐 Language Support

The portfolio supports two languages:
- **English (EN)**: Default language
- **Indonesian (ID)**: Bahasa Indonesia

Language preference is saved in localStorage and persists across sessions.

## 📦 Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎨 Key Sections

1. **Hero Section**: Introduction and tagline
2. **About Me**: Professional background and expertise
3. **Skills**: Technical skills organized by category
4. **Projects**: Portfolio of notable projects including:
   - BPR Dumai Kapital Lestari (Banking Platform)
   - Todo Free (Task Management)
   - RockBlog (CMS Platform)
   - Expense Tracker (Financial Analysis)
5. **Contact**: Multiple contact channels

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Rocky Kho**
- GitHub: [@Rock-Code-Brutal](https://github.com/Rock-Code-Brutal)
- LinkedIn: [rocky-kho-75aa40294](https://www.linkedin.com/in/rocky-kho-75aa40294/)
- Email: rockerbest06@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)
