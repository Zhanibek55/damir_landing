import { motion } from 'framer-motion'
import { ArrowDown, Mail, ShoppingBag, PlaySquare, Camera, Briefcase, Palette, Music, ArrowUpRight } from 'lucide-react'

// Simple SVG for LinkedIn since Lucide removed brand icons
const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// Placeholder images for carousels (representing 3D renders, videos, photos)
const artStationImages = [
  "/artstation/damir-kairbekov-axzurdgdd-c.jpg",
  "/artstation/damir-kairbekov-dddddd.jpg",
  "/artstation/damir-kairbekov-finalrender-i-think.webp",
  "/artstation/damir-kairbekov-finalrender-i-think (1).webp"
];

const youtubeImages = [
  "https://i.ytimg.com/vi/Ftrx3Z_oyLE/maxresdefault.jpg",
  "https://i.ytimg.com/vi/_ptV8v1QrqA/maxresdefault.jpg"
];

const instagramImages = [
  "/instagram/1.png",
  "/instagram/2.png",
  "/instagram/3.png",
  "/instagram/4.png"
];

const linkedinImages = [
  "/linkedin/1.png",
  "/linkedin/2.png",
  "/linkedin/3.png",
  "/linkedin/4.png"
];

const tiktokImages = [
  "/tiktok/1.png",
  "/tiktok/2.png",
  "/tiktok/3.png",
  "/tiktok/4.png",
  "/tiktok/5.png"
];

const gumroadImages = [
  "https://public-files.gumroad.com/sklzzv36iop6210jnof92z4rv3zi",
  "https://public-files.gumroad.com/9t0140n94d06szub10ofo6mmgwn5",
  "https://public-files.gumroad.com/892w4gaybi4oe79suyf2zodihuvw",
  "https://public-files.gumroad.com/ib2wz4h2titk4ikbieowgkwcyial",
  "https://public-files.gumroad.com/d70wqjl4blh1gfooug534lvcn55a"
];

const tools = [
  "Blender", "Maya", "Cinema 4D", "ZBrush", "Unreal Engine",
  "Substance Painter", "Marvelous Designer", "After Effects", "Nuke", "Premiere Pro",
  "Blender", "Maya", "Cinema 4D", "ZBrush", "Unreal Engine"
];

// Reusable Carousel Component for Bento Grid backgrounds
const Carousel = ({ 
  images, 
  direction = "horizontal", 
  reverse = false, 
  speed = 30, 
  className = "", 
  imageClassName = "" 
}: { 
  images: string[], 
  direction?: "horizontal"|"vertical", 
  reverse?: boolean, 
  speed?: number, 
  className?: string, 
  imageClassName?: string 
}) => {
  const isHorizontal = direction === "horizontal";
  const animateFrames = reverse ? ["-50%", "0%"] : ["0%", "-50%"];
  const animateProp = isHorizontal ? { x: animateFrames } : { y: animateFrames };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-700 ${className}`}>
      <motion.div
        className={`flex ${isHorizontal ? 'w-max flex-row' : 'h-max flex-col'} gap-4 p-4`}
        animate={animateProp}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {[...images, ...images].map((src, i) => (
          <img key={i} src={src} className={`object-cover rounded-2xl ${imageClassName}`} alt="" />
        ))}
      </motion.div>
    </div>
  );
};

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
          href="mailto:damirasema@gmail.com" 
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
          ref={(videoEl) => {
            if (videoEl) {
              videoEl.playbackRate = 1.4;
            }
          }}
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-[40vh] md:mt-16">
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 drop-shadow-lg"
          >
            Damir Kairbekov
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-200/90 font-light mb-10 max-w-2xl drop-shadow-md"
          >
            3D Animation Artist crafting immersive visual experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.a 
              href="#portfolio" 
              className="relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600/80 hover:bg-indigo-600/100 text-white rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)]"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(79,70,229,0.7)" }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glare/Shimmer effect */}
              <motion.div 
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{ x: ["-200%", "300%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <ArrowDown size={18} />
              </span>
            </motion.a>
            <a 
              href="https://www.linkedin.com/in/damir-kairbekov" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 text-white/90 rounded-full font-semibold transition-all shadow-lg"
            >
              <LinkedinIcon size={18} />
              Get in Touch
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
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            I am a 3D animator specializing in creating dynamic and visually appealing scenes. 
            I am open to collaborating on exciting projects and working with great teams. 
            I constantly improve my skills and look for new challenges in the industry.
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
      <section id="portfolio" className="py-32 px-6 bg-slate-950 relative z-20 overflow-hidden">
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-center uppercase">
              View Work
            </h2>
            <div className="w-16 h-1 bg-indigo-500 rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
            {/* Artstation (Large 2x2) */}
            <motion.a
              href="https://www.artstation.com/yespeace"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative col-span-1 md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-slate-900 to-slate-950 transition-transform duration-700 group-hover:scale-105" />
              
              {/* Carousel Layer */}
              <Carousel images={artStationImages} speed={40} className="-rotate-6 scale-125" imageClassName="w-64 h-64 shadow-2xl opacity-80" />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
              
              <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors z-10">
                <ArrowUpRight size={24} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              
              <div className="relative h-full p-8 flex flex-col justify-end z-10">
                <div className="w-14 h-14 mb-6 bg-blue-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-blue-500/30">
                  <Palette size={28} className="text-blue-400" />
                </div>
                <h3 className="text-4xl font-black text-white mb-2 tracking-tight uppercase">ArtStation</h3>
                <p className="text-slate-300 text-lg max-w-sm font-medium">Main portfolio. Modeling, renders, and key projects.</p>
              </div>
            </motion.a>

            {/* YouTube (Wide 2x1) */}
            <motion.a
              href="https://youtube.com/@yespeace"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative col-span-1 md:col-span-2 md:row-span-1 rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-red-950/40 transition-transform duration-700 group-hover:scale-105" />
              
              {/* Carousel Layer */}
              <Carousel images={youtubeImages} speed={30} className="-rotate-2 scale-110" imageClassName="w-80 h-44 shadow-2xl opacity-80" />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />

              <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors z-10">
                <ArrowUpRight size={20} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div className="relative h-full p-8 flex items-center gap-6 z-10">
                <div className="w-16 h-16 shrink-0 bg-red-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-red-500/30 shadow-lg">
                  <PlaySquare size={32} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-1 tracking-tight uppercase">YouTube</h3>
                  <p className="text-slate-300 font-medium">Showreels and breakdowns</p>
                </div>
              </div>
            </motion.a>

            {/* Instagram (Tall 1x2) */}
            <motion.a
              href="https://www.instagram.com/yespeaceful"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative col-span-1 md:col-span-1 md:row-span-2 rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-fuchsia-950/40 transition-transform duration-700 group-hover:scale-105" />
              
              {/* Carousel Layer */}
              <Carousel images={instagramImages} direction="vertical" speed={25} className="scale-105" imageClassName="w-full h-56 shadow-xl opacity-80" />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors z-10">
                <ArrowUpRight size={20} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div className="w-14 h-14 bg-pink-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-pink-500/30">
                  <Camera size={28} className="text-pink-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase">Instagram</h3>
                  <p className="text-slate-300 text-sm font-medium">Lifestyle and behind the scenes</p>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn (1x1) */}
            <motion.a
              href="https://www.linkedin.com/in/damir-kairbekov"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative col-span-1 md:col-span-1 md:row-span-1 rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between p-6"
            >
              <div className="absolute inset-0 bg-blue-900/40 transition-transform duration-700 group-hover:scale-105" />
              
              {/* Carousel Layer */}
              <Carousel images={linkedinImages} direction="vertical" reverse speed={35} className="scale-105" imageClassName="w-full h-40 shadow-xl opacity-80" />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <div className="relative flex justify-between items-start z-10">
                <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-blue-500/30">
                  <Briefcase size={24} className="text-blue-400" />
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight size={20} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">LinkedIn</h3>
                <p className="text-slate-300 font-medium text-sm">Resume & Networking</p>
              </div>
            </motion.a>

            {/* Gumroad (Wide 2x1) */}
            <motion.a
              href="https://yespeace.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative col-span-1 md:col-span-2 md:row-span-1 rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 hover:border-white/20 transition-all duration-500 flex items-center p-8 gap-6"
            >
              <div className="absolute inset-0 bg-[#FF90E8]/10" />

              {/* Carousel Layer */}
              <Carousel images={gumroadImages} reverse speed={40} className="rotate-2 scale-110 opacity-10 group-hover:opacity-30" imageClassName="w-56 h-40 shadow-xl" />

              <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-900/90 to-transparent" />

              <div className="absolute top-6 right-6 z-10">
                <ArrowUpRight size={20} className="text-slate-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div className="relative w-16 h-16 shrink-0 bg-[#FF90E8]/20 rounded-2xl flex items-center justify-center border border-[#FF90E8]/30 z-10">
                <ShoppingBag size={32} className="text-[#FF90E8]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-1 uppercase tracking-tight">Gumroad</h3>
                <p className="text-slate-300 font-medium">My 3D assets and materials</p>
              </div>
            </motion.a>

            {/* TikTok (1x1) */}
            <motion.a
              href="https://www.tiktok.com/@yespeaceyes?_r=1&_t=ZS-95BNwXyqImi"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative col-span-1 md:col-span-1 md:row-span-1 rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between p-6"
            >
              <div className="absolute inset-0 bg-cyan-500/10 transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
              
              {/* Carousel Layer */}
              <Carousel images={tiktokImages} direction="vertical" speed={30} className="scale-105" imageClassName="w-full h-48 shadow-xl opacity-80" />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <div className="relative flex justify-between items-start z-10">
                <div className="w-12 h-12 bg-cyan-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-cyan-500/30">
                  <Music size={24} className="text-cyan-400" />
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight size={20} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">TikTok</h3>
                <p className="text-slate-300 font-medium text-sm">Short clips</p>
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
            Ready to discuss your project?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 mb-8"
          >
            Open to new opportunities, collaborations, and complex challenges.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:damirasema@gmail.com" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold transition-all shadow-xl hover:shadow-white/20 mb-12"
          >
            <Mail size={18} />
            Email Me
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