import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
export default function Home() {
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
                              Home
                          </a>
                          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                              About
                          </a>
                          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                              Skills
                          </a>
                          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                              Projects
                          </a>
                          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                              Contact
                          </a>
                      </div>

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
          </nav>

          {/*Container Utama*/}
          <div className="container mx-auto px-4 py-16 pt-20">
              {/* Hero Section */}
              <section id="home" className="text-center mb-20">
                  <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                      Halo Aku Rocky
                  </h1>
                  <p className="text-xl text-gray-300">
                      Web Developer | Javascript Enthusiast | Learner
                  </p>
              </section>

              {/* About Me Section */}
              <section id="about" className="mb-20">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                      Tentang Saya
                  </h2>
                  <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
                      <p className="text-gray-300 leading-relaxed mb-4">
                          Halo! Saya adalah seorang web developer yang passionate tentang
                          teknologi dan selalu ingin belajar hal-hal baru. Saat ini sedang
                          fokus mempelajari Next.Js dan modern web development.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                          Saya percaya bahwa coding adalah seni untuk memecahkan masalah dan
                          membuat sesuatu yang bermanfaat bagi orang lain.
                      </p>
                      <div className="flex gap-4 mt-6">
                          <a 
                              href="mailto:rockerbest06@gmail.com?subject=Request%20CV%20-%20Rocky%20Portfolio&body=Hi%20Rocky,%0A%0AI'm%20interested%20in%20your%20CV%20and%20would%20like%20to%20know%20more%20about%20your%20experience.%0A%0AThank%20you!"
                              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                          >
                              📄 Request CV
                          </a>
                          <a 
                              href="#contact" 
                              className="px-4 py-2 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors inline-block text-center"
                          >
                              💬 Hubungi Saya
                          </a>
                      </div>
                  </div>
              </section>

              {/* Skills Section */}
              <section id="skills" className="mb-20">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                      Skills & Teknologi
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Frontend Skills */}
                      <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                          <h3 className="text-xl font-semibold mb-4 text-blue-400">
                              Frontend
                          </h3>
                          <div className="space-y-4">
                              <div>
                                  <div className="flex justify-between mb-1">
                                      <span className="text-sm">HTML/CSS</span>
                                      <span className="text-sm text-gray-400">80%</span>
                                  </div>
                                  <div className="w-full bg-gray-700 rounded-full h-2">
                                      <div className="bg-blue-500 h-2 rounded-full" style={{width: "80%"}}></div>
                                  </div>
                              </div>
                              <div>
                                  <div className="flex justify-between mb-1">
                                      <span className="text-sm">Javascript</span>
                                      <span className="text-sm text-gray-400">50%</span>
                                  </div>
                                  <div className="w-full bg-gray-700 rounded-full h-2">
                                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: "50%"}}></div>
                                  </div>
                              </div>
                              <div>
                                  <div className="flex justify-between mb-1">
                                      <span className="text-sm">React/Next.js</span>
                                      <span className="text-sm text-gray-400">50%</span>
                                  </div>
                                  <div className="w-full bg-gray-700 rounded-full h-2">
                                      <div className="bg-cyan-500 h-2 rounded-full" style={{width: "50%"}}></div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Backend Skills */}
                      <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                          <h3 className="text-xl font-semibold mb-4 text-purple-400">
                              Backend
                          </h3>
                      <div className="space-y-4">
                          <div>
                              <div className="flex justify-between mb-1">
                                  <span className="text-sm">PHP/Laravel</span>
                                  <span className="text-sm text-gray-400">75%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                  <div className="bg-purple-500 h-2 rounded-full" style={{width: "75%"}}></div>
                              </div>
                          </div>
                          <div>
                              <div className="flex justify-between mb-1">
                                  <span className="text-sm">Node.js</span>
                                  <span className="text-sm text-gray-400">55%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                  <div className="bg-green-500 h-2 rounded-full" style={{width: "55%"}}></div>
                              </div>
                          </div>
                          <div>
                              <div className="flex justify-between mb-1">
                                  <span className="text-sm">MySQL</span>
                                  <span className="text-sm text-gray-400">70%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                  <div className="bg-orange-500 h-2 rounded-full" style={{width: "70%"}}></div>
                              </div>
                          </div>
                      </div>
                      </div>
                  </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="mb-20">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                      My Project
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Project 1: Todo Free */}
                      <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                          <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                              <div className="text-white text-4xl">📝</div>
                          </div>
                          <div className="p-6">
                              <div className="flex items-center gap-2 mb-2">
                                  <h3 className="text-xl font-semibold">Todo Free</h3>
                                  <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 border border-green-600/30 rounded-full animate-pulse">
                                      • LIVE
                                  </span>
                              </div>
                              <p className="text-gray-400 text-sm mb-4">
                                  Aplikasi To do gratis dengan fitur add,edit,delete dan mark complete.Simple dan user friendly.
                              </p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                  <span className="text-xs px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded">Vanilla Javascript</span>
                                  <span className="text-xs px-2 py-1 bg-orange-600/20 text-orange-400 rounded">HTML & CSS</span>
                                  <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded">Local Storage</span>
                              </div>
                              <div className="flex gap-4">
                                  <a href="https://github.com/Rock-Code-Brutal/-todo-free" target="_blank" className="text-sm text-blue-400 hover:text-blue-300">
                                      GitHub →
                                  </a>
                                  <a href="https://todo-free.vercel.app" target="_blank" className="text-sm text-blue-400 hover:text-blue-300">
                                      Live Demo →
                                  </a>
                              </div>
                          </div>
                      </div>

                      {/* Project 2: RockBlog */}
                      <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                          <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                              <div className="text-white text-4xl">📰</div>
                          </div>
                          <div className="p-6">
                              <h3 className="text-xl font-semibold mb-2">RockBlog</h3>
                              <p className="text-gray-400 text-sm mb-4">
                                  Personal blog website dengan fitur posting artikel, kategori, dan admin panel untuk content management.
                              </p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                  <span className="text-xs px-2 py-1 bg-purple-600/20 text-purple-400 rounded">Laravel</span>
                                  <span className="text-xs px-2 py-1 bg-orange-600/20 text-orange-400 rounded">MySQL</span>
                                  <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded">Bootstrap</span>
                                  <span className="text-xs px-2 py-1 bg-gray-600/20 text-gray-400 rounded">Backend</span>
                              </div>
                              <div className="flex gap-4">
                                  <a href="https://github.com/Rock-Code-Brutal/RockBlog" target="_blank" className="text-sm text-blue-400 hover:text-blue-300">
                                      GitHub →
                                  </a>
                                  <span className="text-sm text-gray-500 cursor-not-allowed">
                                      Repository Only
                                  </span>
                              </div>
                          </div>
                      </div>

                      {/* Project 3: Expense Tracker */}
                      <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                          <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                              <div className="text-white text-4xl">💰</div>
                          </div>
                          <div className="p-6">
                              <h3 className="text-xl font-semibold mb-2">Expense Tracker</h3>
                              <p className="text-gray-400 text-sm mb-4">
                                  Aplikasi pencatat pengeluaran dengan dashboard, kategori spending, dan laporan keuangan bulanan.
                              </p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                  <span className="text-xs px-2 py-1 bg-red-600/20 text-red-400 rounded">Laravel</span>
                                  <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded">Chart.js</span>
                                  <span className="text-xs px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded">MySQL</span>
                                  <span className="text-xs px-2 py-1 bg-gray-600/20 text-gray-400 rounded">Backend</span>
                              </div>
                              <div className="flex gap-4">
                                  <a href="https://github.com/Rock-Code-Brutal/ExpenseTracker" target="_blank" className="text-sm text-blue-400 hover:text-blue-300">
                                      GitHub →
                                  </a>
                                  <span className="text-sm text-gray-500 cursor-not-allowed">
                                      Repository Only
                                  </span>
                              </div>
                          </div>
                      </div>

                  </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="mb-20">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                      Let&apos;s Connect! 🤝
                  </h2>
                  <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
                      Tertarik untuk kolaborasi atau punya projek menarik?
                      Mari kita diskusi! Saya selalu terbuka untuk opportunity baru.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {/* Email */}
                      <a
                          href="mailto:rockerbest06@gmail.com"
                          className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
                      >
                          <div className="text-4xl mb-3 group-hover:animate-bounce">📧</div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-sm text-gray-400">rockerbest06@gmail.com</p>
                      </a>

                      {/* GitHub */}
                      <a
                          href="https://github.com/Rock-Code-Brutal"
                          target="_blank"
                          className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
                      >
                          <div className="text-4xl mb-3 group-hover:animate-pulse">🔗</div>
                          <h3 className="font-semibold mb-1">GitHub</h3>
                          <p className="text-sm text-gray-400">Rock-Code-Brutal</p>
                      </a>

                      {/* LinkedIn */}
                      <a
                          href="https://linkedin.com/in/rocky-dev"
                          target="_blank"
                          className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
                      >
                          <div className="text-4xl mb-3 group-hover:animate-bounce">💼</div>
                          <h3 className="font-semibold mb-1">LinkedIn</h3>
                          <p className="text-sm text-gray-400">Connect with me</p>
                      </a>

                      {/* WhatsApp */}
                      <a
                          href="https://wa.me/6283167818834"
                          target="_blank"
                          className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
                      >
                          <div className="text-4xl mb-3 group-hover:animate-bounce">💬</div>
                          <h3 className="font-semibold mb-1">WhatsApp</h3>
                          <p className="text-sm text-gray-400">Chat langsung</p>
                      </a>
                  </div>
                  {/* CTA Button */}
                  <div className="text-center mt-8">
                      <a
                          href="mailto:rockerbest06@gmail.com"
                          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                          Hire Me! 🚀
                      </a>
                  </div>
              </section>
          </div>
      </main>
  );
}
