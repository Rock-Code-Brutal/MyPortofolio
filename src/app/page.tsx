'use client';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { CheckSquare, Newspaper, Wallet, Mail, Github, Linkedin, MessageCircle, Briefcase, FileText, Users, Shield, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/20 backdrop-blur-md border-b border-gray-700">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Rocky.dev
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex space-x-8">
                            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                                {t.nav.home}
                            </a>
                            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                {t.nav.about}
                            </a>
                            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                                {t.nav.skills}
                            </a>
                            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                                {t.nav.projects}
                            </a>
                            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                                {t.nav.contact}
                            </a>
                        </div>

                        {/* Language Toggle & Mobile Menu */}
                        <div className="flex items-center gap-3">
                            <LanguageToggle />
                            
                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <button className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Container */}
            <div className="container mx-auto px-4 py-16 pt-20">
                {/* Hero Section */}
                <section id="home" className="text-center mb-20">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        {t.hero.greeting}
                    </h1>
                    <p className="text-xl text-gray-300">
                        {t.hero.title}
                    </p>
                </section>

                {/* About Me Section */}
                <section id="about" className="mb-20">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        {t.about.title}
                    </h2>
                    <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
                        <p className="text-gray-300 leading-relaxed mb-4">
                            {t.about.description1}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            {t.about.description2}
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="mailto:rockerbest06@gmail.com?subject=Request%20CV%20-%20Rocky%20Portfolio&body=Hi%20Rocky,%0A%0AI'm%20interested%20in%20your%20CV%20and%20would%20like%20to%20know%20more%20about%20your%20experience.%0A%0AThank%20you!"
                                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 text-center"
                            >
                                <FileText size={18} />
                                {t.about.requestCV}
                            </a>
                            <a
                                href="#contact"
                                className="px-4 py-2 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors inline-flex items-center gap-2 text-center"
                            >
                                <MessageCircle size={18} />
                                {t.about.contact}
                            </a>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="mb-20">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        {t.skills.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Frontend Skills */}
                        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">
                                {t.skills.frontend}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-lg text-sm font-medium">HTML/CSS</span>
                                <span className="px-3 py-1.5 bg-yellow-600/20 text-yellow-400 border border-yellow-600/30 rounded-lg text-sm font-medium">JavaScript</span>
                                <span className="px-3 py-1.5 bg-cyan-600/20 text-cyan-400 border border-cyan-600/30 rounded-lg text-sm font-medium">React</span>
                                <span className="px-3 py-1.5 bg-cyan-600/20 text-cyan-400 border border-cyan-600/30 rounded-lg text-sm font-medium">Next.js</span>
                                <span className="px-3 py-1.5 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-lg text-sm font-medium">Tailwind CSS</span>
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4 text-purple-400">
                                {t.skills.backend}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-purple-600/20 text-purple-400 border border-purple-600/30 rounded-lg text-sm font-medium">PHP</span>
                                <span className="px-3 py-1.5 bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg text-sm font-medium">Laravel</span>
                                <span className="px-3 py-1.5 bg-green-600/20 text-green-400 border border-green-600/30 rounded-lg text-sm font-medium">Node.js</span>
                                <span className="px-3 py-1.5 bg-orange-600/20 text-orange-400 border border-orange-600/30 rounded-lg text-sm font-medium">MySQL</span>
                                <span className="px-3 py-1.5 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-lg text-sm font-medium">REST API</span>
                            </div>
                        </div>

                        {/* AI Workflow */}
                        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4 text-emerald-400">
                                {t.skills.aiWorkflow}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 rounded-lg text-sm font-medium">Prompt Engineering</span>
                                <span className="px-3 py-1.5 bg-teal-600/20 text-teal-400 border border-teal-600/30 rounded-lg text-sm font-medium">AI-Assisted Development</span>
                                <span className="px-3 py-1.5 bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 rounded-lg text-sm font-medium">Claude AI</span>
                                <span className="px-3 py-1.5 bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 rounded-lg text-sm font-medium">ChatGPT</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="mb-20">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        {t.projects.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* FEATURED Project: BPR Dumai Kapital Lestari */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300 border border-yellow-600/30">
                            <div className="h-48 bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-600 flex items-center justify-center relative">
                                <Building2 className="text-white" size={64} strokeWidth={1.5} />
                                <div className="absolute top-3 right-3">
                                    <Shield className="text-white/80" size={24} strokeWidth={2} />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                                        {t.projects.bpr.title}
                                    </h3>
                                    <span className="text-xs px-2 py-1 bg-yellow-600/20 text-yellow-400 border border-yellow-600/30 rounded-full">
                                        {t.projects.bpr.confidential}
                                    </span>
                                </div>
                                <p className="text-xs text-yellow-400/80 font-medium mb-3">
                                    🏛️ {t.projects.bpr.subtitle}
                                </p>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {t.projects.bpr.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-2 py-1 bg-slate-600/20 text-slate-300 rounded border border-slate-600/30">Next.js 16</span>
                                    <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded border border-blue-600/30">React 19</span>
                                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">TypeScript</span>
                                    <span className="text-xs px-2 py-1 bg-cyan-600/20 text-cyan-400 rounded border border-cyan-600/30">Tailwind CSS</span>
                                    <span className="text-xs px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded border border-yellow-600/30">OJK Compliant</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500 italic border-t border-gray-700 pt-3">
                                    <Shield size={14} />
                                    <span>{t.projects.bpr.securityNote}</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 1: Todo Free */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                                <CheckSquare className="text-white" size={64} strokeWidth={1.5} />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-xl font-semibold">{t.projects.todoFree.title}</h3>
                                    <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 border border-green-600/30 rounded-full animate-pulse">
                                        • {t.projects.todoFree.live}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t.projects.todoFree.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded">Vanilla Javascript</span>
                                    <span className="text-xs px-2 py-1 bg-orange-600/20 text-orange-400 rounded">HTML & CSS</span>
                                    <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded">Local Storage</span>
                                </div>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Rock-Code-Brutal/-todo-free" target="_blank" className="text-sm text-blue-400 hover:text-blue-300">
                                        {t.projects.todoFree.github}
                                    </a>
                                    <a href="https://todo-free.vercel.app" target="_blank" className="text-sm text-blue-400 hover:text-blue-300">
                                        {t.projects.todoFree.liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 2: RockBlog */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                                <Newspaper className="text-white" size={64} strokeWidth={1.5} />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{t.projects.rockBlog.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t.projects.rockBlog.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-2 py-1 bg-purple-600/20 text-purple-400 rounded">Laravel</span>
                                    <span className="text-xs px-2 py-1 bg-orange-600/20 text-orange-400 rounded">MySQL</span>
                                    <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded">Bootstrap</span>
                                    <span className="text-xs px-2 py-1 bg-gray-600/20 text-gray-400 rounded">Backend</span>
                                </div>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Rock-Code-Brutal/RockBlog" target="_blank" className="text-sm text-blue-400 hover:text-blue-300">
                                        {t.projects.rockBlog.github}
                                    </a>
                                    <span className="text-sm text-gray-500 cursor-not-allowed">
                                        {t.projects.rockBlog.repoOnly}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Project 3: Expense Tracker */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                                <Wallet className="text-white" size={64} strokeWidth={1.5} />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{t.projects.expenseTracker.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t.projects.expenseTracker.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-2 py-1 bg-red-600/20 text-red-400 rounded">Laravel</span>
                                    <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded">Chart.js</span>
                                    <span className="text-xs px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded">MySQL</span>
                                    <span className="text-xs px-2 py-1 bg-gray-600/20 text-gray-400 rounded">Backend</span>
                                </div>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Rock-Code-Brutal/ExpenseTracker" target="_blank" className="text-sm text-blue-400 hover:text-blue-300">
                                        {t.projects.expenseTracker.github}
                                    </a>
                                    <span className="text-sm text-gray-500 cursor-not-allowed">
                                        {t.projects.expenseTracker.repoOnly}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-20">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <h2 className="text-3xl font-bold text-center">
                            {t.contact.title}
                        </h2>
                        <Users className="text-blue-400" size={32} />
                    </div>
                    <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
                        {t.contact.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {/* Email */}
                        <a
                            href="mailto:rockerbest06@gmail.com"
                            className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
                        >
                            <div className="flex justify-center mb-3">
                                <Mail className="text-blue-400 group-hover:animate-bounce" size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-semibold mb-1">{t.contact.email}</h3>
                            <p className="text-sm text-gray-400">rockerbest06@gmail.com</p>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/Rock-Code-Brutal"
                            target="_blank"
                            className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
                        >
                            <div className="flex justify-center mb-3">
                                <Github className="text-purple-400 group-hover:animate-pulse" size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-semibold mb-1">{t.contact.github}</h3>
                            <p className="text-sm text-gray-400">Rock-Code-Brutal</p>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/rocky-kho-75aa40294/"
                            target="_blank"
                            className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
                        >
                            <div className="flex justify-center mb-3">
                                <Linkedin className="text-cyan-400 group-hover:animate-bounce" size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-semibold mb-1">{t.contact.linkedin}</h3>
                            <p className="text-sm text-gray-400">{t.contact.linkedinText}</p>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/6283167818834"
                            target="_blank"
                            className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
                        >
                            <div className="flex justify-center mb-3">
                                <MessageCircle className="text-green-400 group-hover:animate-bounce" size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-semibold mb-1">{t.contact.whatsapp}</h3>
                            <p className="text-sm text-gray-400">{t.contact.whatsappText}</p>
                        </a>
                    </div>
                    {/* CTA Button */}
                    <div className="text-center mt-8">
                        <a
                            href="mailto:rockerbest06@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                        >
                            <Briefcase size={20} />
                            {t.contact.cta}
                        </a>
                    </div>
                </section>
            </div>
            <SpeedInsights />
        </main>
    );
}
