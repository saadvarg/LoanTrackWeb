import { Github, Mail, Linkedin, ExternalLink, Sparkles, Code2, Smartphone, Zap, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PortfolioPhoneMockup } from './components/PortfolioPhoneMockup';
import { FeatureShowcase } from './components/FeatureShowcase';

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl">LoanTrack</span>
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/saadvarg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors border border-white/10"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:elmouataz.saad@gmail.com"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-24"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300">iOS Mobile Application</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  LoanTrack
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-4">
                  AI-Powered Lead Management CRM
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  A comprehensive mobile CRM solution built with Swift, featuring real-time analytics,
                  intelligent lead scoring, and seamless team collaboration.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/saadvarg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-xl hover:shadow-white/20 transition-all flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View GitHub Profile
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.fiverr.com/s/dDKN71Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-semibold hover:shadow-xl hover:shadow-green-500/50 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Hire Me on Fiverr
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>

              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-white/10"
              >
                <p className="text-sm text-gray-500 mb-3">Quick Contact</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href="mailto:elmouataz.saad@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>elmouataz.saad@gmail.com</span>
                  </a>
                  <a href="tel:+212762178594" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>+212 762 178 594</span>
                  </a>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-6"
              >
                <p className="text-sm text-gray-500 mb-4">Built with</p>
                <div className="flex flex-wrap gap-3">
                  {['Swift', 'SwiftUI', 'CoreData', 'Combine', 'Charts', 'REST API'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-3xl opacity-30 rounded-full" />
              <PortfolioPhoneMockup />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Interactive Demo Section */}
      <section id="demo" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Interactive Demo</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore the app's key features with live interactions and animations
            </p>
          </motion.div>

          <FeatureShowcase />
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 p-12 text-center"
          >
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center"
              >
                <Zap className="w-10 h-10" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
                Interested in discussing this project or exploring collaboration opportunities?
              </p>
              <div className="flex flex-col items-center gap-2 mb-8 text-gray-300">
                <a href="mailto:elmouataz.saad@gmail.com" className="hover:text-purple-400 transition-colors">
                  📧 elmouataz.saad@gmail.com
                </a>
                <a href="tel:+212762178594" className="hover:text-purple-400 transition-colors">
                  📱 +212 762 178 594
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/saadvarg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub Profile
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.fiverr.com/s/dDKN71Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-semibold hover:shadow-xl hover:shadow-green-500/50 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Hire Me on Fiverr
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:elmouataz.saad@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 LoanTrack Portfolio Project. Developed by Saad El Mouataz.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/saadvarg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.fiverr.com/s/dDKN71Y" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Fiverr
            </a>
            <a href="mailto:elmouataz.saad@gmail.com" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}