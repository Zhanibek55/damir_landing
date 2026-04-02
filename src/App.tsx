import { motion } from 'framer-motion'
import { ArrowDown, Mail, ShoppingBag, PlaySquare, Camera, Briefcase, Palette, Music } from 'lucide-react'

const tools = [
  "Blender", "Maya", "Cinema 4D", "ZBrush", "Unreal Engine",
  "Substance Painter", "Marvelous Designer", "After Effects", "Nuke", "Premiere Pro",
  "Blender", "Maya", "Cinema 4D", "ZBrush", "Unreal Engine"
];

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tight"
        >
          YESPEACE
        </motion.div>
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href="mailto:damir@example.com" 
          className="px-5 py-2 text-sm font-medium transition-all bg-white text-slate-900 rounded-full hover:bg-slate-200"
        >
          Hire Me
        </motion.a>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="object-cover w-full h-full opacity-60"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 drop-shadow-lg"
          >
            Damir Kairbekov
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-200 font-light mb-10 max-w-2xl drop-shadow-md"
          >
            3D Animation Artist crafting immersive visual experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#portfolio" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-500/25"
            >
              Смотреть работы
              <ArrowDown size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/damir-kairbekov" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold transition-all shadow-lg"
            >
              <Mail size={18} />
              Связаться
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-24 bg-slate-900 relative z-20">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Обо мне
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Я — 3D-аниматор, специализирующийся на создании динамичных и визуально 
            привлекательных сцен. Открыт к сотрудничеству с крутыми проектами и командами. 
            Постоянно совершенствую свои навыки и ищу новые вызовы в индустрии.
          </motion.p>
        </div>

        {/* Marquee */}
        <div className="relative flex overflow-hidden py-8 bg-slate-800/30 border-y border-white/5">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 
            }}
          >
            {tools.map((tool, index) => (
              <span 
                key={index} 
                className="mx-8 text-xl font-bold text-slate-500 uppercase tracking-widest"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Hub - Bento Grid */}
      <section id="portfolio" className="py-24 px-6 bg-slate-900 relative z-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Мои сети & Портфолио
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-[200px]">
            {/* Artstation */}
            <motion.a
              href="https://www.artstation.com/yespeace"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              className="group relative col-span-1 md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-800 p-8 flex flex-col justify-end shadow-xl border border-white/10"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full">
                <Palette size={24} className="text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-2">ArtStation</h3>
                <p className="text-blue-100 font-medium">Главное портфолио проектов и 3D моделей</p>
              </div>
            </motion.a>

            {/* YouTube */}
            <motion.a
              href="https://youtube.com/@yespeace"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
            transition={{ delay: 0.1 }}
              className="group relative col-span-1 md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden bg-gradient-to-br from-red-600 to-red-900 p-6 flex flex-col justify-end shadow-xl border border-white/10"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full">
                <PlaySquare size={24} className="text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1">YouTube</h3>
                <p className="text-red-100 text-sm font-medium">Шоурилы, брейкдауны и анимации</p>
              </div>
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://www.tiktok.com/@yespeaceyes?_r=1&_t=ZS-95BNwXyqImi"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
            transition={{ delay: 0.2 }}
              className="group relative col-span-1 md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-black p-6 flex flex-col justify-end shadow-xl border border-white/10"
            >
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
              <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full">
                <Music size={24} className="text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">TikTok</h3>
                <p className="text-gray-400 text-sm">Короткие форматы</p>
              </div>
            </motion.a>

            {/* Gumroad */}
            <motion.a
              href="https://yespeace.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative col-span-1 md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-[#FF90E8] p-6 flex flex-col justify-end shadow-xl border border-white/10"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-6 right-6 p-3 bg-black/10 backdrop-blur-md rounded-full">
                <ShoppingBag size={24} className="text-black" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-black mb-1">Gumroad</h3>
                <p className="text-black/70 text-sm font-medium">Ассеты и материалы</p>
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/yespeaceful"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative col-span-1 md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-6 flex flex-col justify-end shadow-xl border border-white/10"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full">
                <Camera size={24} className="text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1">Instagram</h3>
                <p className="text-white/80 text-sm font-medium">Лайфстайл и рабочие процессы</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/damir-kairbekov"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative col-span-1 md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden bg-[#0A66C2] p-6 flex flex-col justify-end shadow-xl border border-white/10"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full">
                <Briefcase size={24} className="text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1">LinkedIn</h3>
                <p className="text-blue-100 text-sm font-medium">Профессиональный нетворкинг и резюме</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-950 border-t border-white/5 relative z-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-6 text-slate-100"
          >
            Готов обсудить ваш проект?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 mb-8"
          >
            Открыт к новым предложениям, коллаборациям и сложным задачам.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:damir@example.com" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold transition-all shadow-xl hover:shadow-white/20 mb-12"
          >
            <Mail size={18} />
            Написать мне
          </motion.a>
          
          <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Damir Kairbekov. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://www.artstation.com/yespeace" className="hover:text-white transition-colors">ArtStation</a>
              <a href="https://youtube.com/@yespeace" className="hover:text-white transition-colors">YouTube</a>
              <a href="https://www.linkedin.com/in/damir-kairbekov" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
