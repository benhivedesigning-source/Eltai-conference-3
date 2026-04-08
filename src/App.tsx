/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  Share2,
  Twitter, 
  Instagram, 
  Facebook, 
  MapPin, 
  Calendar, 
  Mic, 
  Lightbulb, 
  Users, 
  Presentation,
  ArrowRight,
  Play,
  Mail,
  Phone,
  ChevronRight,
  Globe,
  Plus,
  Building2,
  Download
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', hasDropdown: false },
    { name: 'Theme', href: '#', hasDropdown: true },
    { name: 'Submit', href: '#', hasDropdown: true },
    { name: 'Programme', href: '#', hasDropdown: true },
    { name: 'Highlights', href: '#', hasDropdown: true },
    { name: 'Register', href: '#', hasDropdown: true },
    { name: 'Travel', href: '#', hasDropdown: true },
    { name: 'Organizers', href: '#', hasDropdown: true },
    { name: 'Contact', href: '#', hasDropdown: true },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto px-6 transition-all duration-500",
        isScrolled ? "px-4 sm:px-6" : "px-6"
      )}>
        <div className={cn(
          "flex items-center justify-between transition-all duration-500",
          isScrolled 
            ? "bg-[#151619]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "bg-transparent px-0 py-0"
        )}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-white p-1.5 rounded-lg h-12 flex items-center justify-center">
              <img src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" alt="ELT@I Logo" className="h-full w-auto" />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  "relative px-2.5 py-2 transition-colors text-[13px] font-semibold flex items-center gap-1 group rounded-full",
                  link.name === 'Home' 
                    ? "bg-[#c4f042] text-black" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronRight size={14} className={cn(
                    "rotate-90 transition-transform duration-300",
                    link.name === 'Home' ? "text-black/50" : "text-white/50 group-hover:text-white group-hover:rotate-[-90deg]"
                  )} />
                )}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex relative overflow-hidden bg-[#c4f042] text-black px-6 py-2 rounded-full text-sm font-bold group shadow-[0_0_20px_rgba(196,240,66,0.2)] hover:shadow-[0_0_30px_rgba(196,240,66,0.4)] transition-all duration-300">
              <span className="relative z-10">Register Now</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -skew-x-12"
                initial={{ x: '-150%' }}
                whileHover={{ x: '150%' }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </button>
            <div className="hidden sm:flex bg-white p-1.5 rounded-lg h-12 items-center justify-center">
              <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT Logo" className="h-full w-auto" />
            </div>
            <button 
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-[#151619]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between text-white/80 hover:text-white text-lg font-medium py-3 border-b border-white/5"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronRight size={16} className="text-white/30" />}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full mt-4 bg-gradient-to-r from-[#c4f042] to-[#b0d83b] text-white py-4 rounded-xl text-sm font-bold tracking-wider"
              >
                BUY TICKET
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 273,
    hours: 9,
    minutes: 1,
    seconds: 37
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <div className="text-white text-4xl font-bold font-mono">
            {item.value.toString().padStart(2, '0')}
          </div>
          <div className="text-white/50 text-[10px] font-bold tracking-widest mt-1">
            {item.label}
          </div>
          {item.label !== 'SECONDS' && (
            <div className="w-full h-[1px] bg-white/10 my-4" />
          )}
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Floating Animations */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[5%] w-16 h-16 rounded-full border-[6px] border-[#b0d83b]/20 z-10"
      />
      <motion.div
        animate={{ y: [0, 50, 0], rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-[25%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#c4f042]/30 z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.8, 0.2], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[15%] text-[#b0d83b]/50 text-7xl font-light z-10"
      >
        +
      </motion.div>
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, -20, 0], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[15%] w-12 h-12 rounded-full bg-blue-500/20 z-10 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 40, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-[30%] w-4 h-4 rounded-full bg-[#c4f042]/40 z-10"
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-64 h-64 border-[1px] border-white/5 rounded-full z-0"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-96 h-96 border-[1px] border-white/5 rounded-full z-0"
      />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://conf2026.eltai.in/assets/21-D1C84hWl.JPG" 
          alt="Speaker" 
          className="w-full h-full object-cover object-right"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20 pt-20">
        {/* Left: Socials */}
        <div className="hidden lg:flex flex-col justify-center col-span-1 relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-[#151619]/80 backdrop-blur-md rounded-full p-3 flex flex-col gap-4 border border-[#b0d83b]/30 shadow-[0_0_30px_rgba(196,240,66,0.2)] w-max"
          >
            {[Twitter, Instagram, Facebook].map((Icon, i) => (
              <motion.a 
                key={i}
                href="#"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#c4f042] hover:to-[#b0d83b] transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Center: Content */}
        <div className="col-span-1 lg:col-span-11 flex flex-col justify-center"  style={{ marginTop:'100px'}}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4"
            >
              <span className="text-white font-semibold text-lg md:text-xl">The 20th International and 56th Annual Conference of ELTAI</span>
            </motion.div>
            
            <h1 className="text-white text-5xl md:text-7xl lg:text-[70px] font-black leading-[1.1] mb-8 tracking-tight uppercase">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block mb-2"
              >
                ENGLISH ON THE EDGE:
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-[#c4f042] block"
              >
                SURVIVE? EVOLVE? THRIVE?
              </motion.span>
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap items-center gap-8 mb-16"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest group shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2"
              >
                <span className="relative z-10">Register Now</span>
                <ArrowRight size={18} className="relative z-10" />
                <motion.div 
                  className="absolute inset-0 bg-gray-200 -skew-x-12"
                  initial={{ x: '-150%' }}
                  whileHover={{ x: '150%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </motion.div>

            {/* 4 Cards at the bottom */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {[
                {
                  icon: Calendar,
                  title: "DATES",
                  content: "07th - 10th October 2026",
                  sub: "(Wednesday - Saturday)"
                },
                {
                  icon: MapPin,
                  title: "VENUE",
                  content: "MIT Art, Design & Technology University",
                  sub: "Pune, Maharashtra"
                },
                {
                  icon: Users,
                  title: "ORGANISED BY",
                  content: "English Language Teachers' Association of India",
                  sub: "(ELTAI)"
                },
                {
                  icon: Building2,
                  title: "HOSTED BY",
                  content: "School of Humanities & School of Holistic Development",
                  sub: "MIT Art, Design & Technology University, Pune, Maharashtra"
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + idx * 0.1 }}
                  className="bg-[#151619]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-[#151619] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#c4f042]">
                    <card.icon size={20} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-bold tracking-wider mb-2">{card.title}</div>
                    <div className="text-white font-bold text-sm mb-1 leading-tight">{card.content}</div>
                    <div className="text-white/60 text-xs">{card.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => (
  <div className="w-full overflow-hidden bg-[#151619] py-8 flex whitespace-nowrap border-y border-white/5 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
    <motion.div
      animate={{ x: [0, -2000] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex gap-16 text-6xl md:text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/5"
    >
      {[...Array(6)].map((_, i) => (
        <span key={i} className="flex items-center gap-16">
          CONFERENCE  
          <span className="text-[#c4f042]/20">*</span> 
          PUNE 
          <span className="text-[#b0d83b]/20">*</span> 
          MAHARASHTRA 
          <span className="text-[#b0d83b]/20">*</span>
        </span>
      ))}
    </motion.div>
  </div>
);

const AboutSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Side: Images & Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[500px] lg:h-[600px]"
        >
          {/* Decorative Triangles */}
          <div className="absolute top-10 -left-10 w-24 h-24 z-0 opacity-80">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,10 90,90 10,90" fill="none" stroke="#e91e63" strokeWidth="4" />
              <polygon points="50,20 80,80 20,80" fill="none" stroke="#ffc107" strokeWidth="4" />
            </svg>
          </div>

          {/* Large Image */}
          <img 
            src="https://picsum.photos/seed/conf1/600/800" 
            alt="Conference" 
            className="absolute top-0 left-0 w-[80%] h-[80%] rounded-[2rem] object-cover shadow-lg z-10"
            referrerPolicy="no-referrer"
          />
          
          {/* Small Image */}
          <img 
            src="https://picsum.photos/seed/conf2/600/600" 
            alt="Conference" 
            className="absolute bottom-[5%] right-0 w-[55%] h-[55%] rounded-[2rem] object-cover shadow-2xl border-[12px] border-white z-20"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 }}
          className="flex flex-col justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-[#e91e63] font-bold text-sm tracking-widest uppercase">ELTAI ANNUAL CONFERENCE 2026</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#151619] text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight"
          >
            THE 20TH INTERNATIONAL AND 56TH ANNUAL ELTAI CONFERENCE
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base mb-4 leading-relaxed"
          >
            For over five decades, ELTAI Annual Conferences have stood as landmark events in the journey of English language and literature education in India.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base mb-4 leading-relaxed"
          >
            Bringing together teachers, scholars, researchers, and practitioners from across the nation and beyond, these conferences celebrate shared learning, collective wisdom, and the enduring spirit of the teaching community. Each year, ELTAI creates spaces for dialogue through inspiring keynote addresses, engaging workshops, research presentations, creative sessions, and exhibitions of innovative educational resources.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base mb-10 leading-relaxed"
          >
            Hosted by the School of Humanities and the School of Holistic Development, MIT Art, Design & Technology University, Pune, from 07th to 10th October 2026. As ELTAI continues its legacy of nurturing teachers, promoting reading cultures, and advancing English education across diverse contexts, ELTAI 2026 invites you to come together in Pune, the Oxford of the East, to reflect, reimagine, and reaffirm our shared commitment to the future of English education.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="bg-[#c4f042] hover:bg-[#b0d83b] text-[#151619] px-8 py-4 rounded-full font-bold text-sm tracking-widest flex items-center gap-3 transition-colors shadow-lg">
              <div className="bg-[#151619] text-white rounded-full p-1">
                <ArrowRight size={16} />
              </div>
              REGISTER NOW
            </button>
            <button className="bg-white hover:bg-gray-50 text-[#e91e63] px-8 py-4 rounded-full font-bold text-sm tracking-widest flex items-center gap-2 transition-colors shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
              <Download size={18} />
              BROCHURE
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { icon: Users, title: 'ELT@I', desc: "English Language Teachers' Association of India", role: 'ORGANISER', color: 'bg-[#b0d83b]', shadow: 'shadow-[0_0_30px_rgba(196,240,66,0.3)]' },
    { icon: Building2, title: 'MIT-ADT University', desc: 'Pune, India. A leap towards World Class Education.', role: 'HOST', color: 'bg-[#c4f042]', shadow: 'shadow-[0_0_30px_rgba(196,240,66,0.3)]' },
  ];

  return (
    <section className="py-32 bg-[#151619] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }} />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#151619]/80 to-[#151619] pointer-events-none" />

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-24 h-24 border border-[#b0d83b]/20 rounded-full"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 border border-[#c4f042]/20 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#c4f042] to-[#b0d83b]" />
            <span className="text-[#b0d83b] font-bold tracking-[0.3em] text-sm uppercase">Partners</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-[#c4f042] to-[#b0d83b]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Organiser &<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8f471] to-[#c4f042]">Host</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1C1D21] p-12 rounded-[40px] border border-white/5 hover:-translate-y-4 transition-all duration-500 group relative overflow-hidden hover:border-white/10 hover:shadow-2xl"
            >
              <div className={cn("absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-5 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-20", f.color)} />
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={cn("w-20 h-20 rounded-2xl flex items-center justify-center text-white transition-all duration-300 group-hover:rounded-full", f.color, f.shadow)}
                >
                  <f.icon size={32} />
                </motion.div>
                <div className="text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 transform group-hover:scale-110 origin-top-right">
                  0{i + 1}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#d8f471] group-hover:to-[#c4f042] transition-all duration-300">{f.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed relative z-10 mb-10 group-hover:text-gray-300 transition-colors duration-300">
                {f.desc}
              </p>
              
              <button className="text-white text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-3 group-hover:text-[#c4f042] transition-colors duration-300 relative z-10">
                {f.role} 
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#b0d83b]/20 group-hover:translate-x-2 transition-all duration-300">
                  <ArrowRight size={16} />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-center mt-16 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          A collaboration between India's premier English teaching association and one of the nation's most innovative universities.
        </motion.p>
      </div>
    </section>
  );
};

const SpeakersSection = () => {
  const pastConferences = [
    { name: 'ELTAI 2023', role: 'Annual Conference', img: 'https://picsum.photos/seed/conf3/400/500' },
    { name: 'ELTAI 2022', role: 'Annual Conference', img: 'https://picsum.photos/seed/conf4/400/500' },
    { name: 'ELTAI 2021', role: 'Annual Conference', img: 'https://picsum.photos/seed/conf5/400/500' },
    { name: 'ELTAI 2020', role: 'Annual Conference', img: 'https://picsum.photos/seed/conf6/400/500' },
    { name: 'ELTAI 2019', role: 'Annual Conference', img: 'https://picsum.photos/seed/conf7/400/500' },
    { name: 'ELTAI 2018', role: 'Annual Conference', img: 'https://picsum.photos/seed/conf8/400/500' },
    { name: 'ELTAI 2017', role: 'Annual Conference', img: 'https://picsum.photos/seed/conf9/400/500' },
    { name: 'ELTAI 2016', role: 'Annual Conference', img: 'https://picsum.photos/seed/conf10/400/500' },
  ];

  return (
    <section className="py-32 bg-[#151619] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }} />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#151619]/80 to-[#151619] pointer-events-none" />

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-[#b0d83b]/20 to-[#c4f042]/20 rounded-xl blur-sm"
      />
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-32 h-32 bg-[#c4f042]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#c4f042] to-[#b0d83b]" />
            <span className="text-[#b0d83b] font-bold tracking-[0.3em] text-sm uppercase">Looking Back</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-[#c4f042] to-[#b0d83b]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Our Past<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8f471] to-[#c4f042]">Conferences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
          >
            Moments and milestones from our previous conference editions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pastConferences.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[40px] aspect-[4/5] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#151619] via-transparent to-transparent opacity-60 z-10" />
                <img 
                  src={s.img} 
                  alt={s.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Social Overlay */}
                <div className="absolute bottom-6 right-6 flex flex-col-reverse items-center gap-3 z-20 group/share">
                  <button className="w-14 h-14 bg-gradient-to-r from-[#c4f042] to-[#b0d83b] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(196,240,66,0.4)] relative z-20 hover:scale-110 transition-transform duration-300">
                    <Share2 size={20} />
                  </button>
                  <div className="flex flex-col gap-4 overflow-hidden h-0 opacity-0 group-hover/share:h-[160px] group-hover/share:opacity-100 transition-all duration-500 bg-white rounded-full p-3 absolute bottom-0 pb-20 z-10 w-14 items-center shadow-xl">
                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-[#b0d83b] hover:text-white transition-colors duration-300">
                      <Twitter size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-[#b0d83b] hover:text-white transition-colors duration-300">
                      <Facebook size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-[#b0d83b] hover:text-white transition-colors duration-300">
                      <Instagram size={14} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-white text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#d8f471] group-hover:to-[#c4f042] transition-all duration-300">{s.name}</h3>
                <p className="text-white/40 text-sm font-bold tracking-[0.2em] mt-2 uppercase group-hover:text-white/60 transition-colors">{s.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button className="relative overflow-hidden bg-gradient-to-r from-[#c4f042] to-[#b0d83b] text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest flex items-center gap-3 mx-auto group shadow-[0_10px_30px_rgba(196,240,66,0.3)] hover:shadow-[0_15px_40px_rgba(196,240,66,0.5)] transition-all">
            <span className="relative z-10">VIEW FULL GALLERY</span> 
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <motion.div 
              className="absolute inset-0 bg-white/20 -skew-x-12"
              initial={{ x: '-150%' }}
              whileHover={{ x: '150%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(0);
  const days = [
    { label: 'Day 01', date: '01 DEC 2025' },
    { label: 'Day 02', date: '02 DEC 2025' },
    { label: 'Day 03', date: '03 DEC 2025' },
    { label: 'Day 04', date: '04 DEC 2025' },
  ];

  const events = [
    { time: '2:15 pm - 10:15 pm', title: 'Social Profit from Venture (SROI) Gathering', speaker: 'Michael Dover', role: 'Founder & CEO', img: 'https://i.pravatar.cc/100?u=20' },
    { time: '11:15 am - 10:15 pm', title: 'Home Life Open Entryway Open Occasion of 21', speaker: 'Mike Michael', role: 'Founder & CEO', img: 'https://i.pravatar.cc/100?u=21' },
    { time: '12:15 am - 10:15 pm', title: 'Modern Marketing Summit Sydney 2025', speaker: 'Ashli Scrogey', role: 'Founder & CEO', img: 'https://i.pravatar.cc/100?u=22' },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#c4f042] to-[#b0d83b]" />
            <span className="text-[#b0d83b] font-bold tracking-[0.3em] text-sm uppercase">Event Schedule</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-[#c4f042] to-[#b0d83b]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Digital Events List
          </motion.h2>
        </div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {days.map((day, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={cn(
                "px-10 py-5 rounded-full transition-all duration-300 text-left min-w-[220px] relative overflow-hidden group",
                activeDay === i 
                  ? "text-white shadow-[0_10px_30px_rgba(196,240,66,0.3)]" 
                  : "bg-gray-50 text-black hover:bg-gray-100"
              )}
            >
              {activeDay === i && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#c4f042] to-[#b0d83b]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-10">
                <div className={cn("text-xs font-bold tracking-[0.2em] mb-1 uppercase transition-colors", activeDay === i ? "text-white/80" : "text-[#b0d83b]")}>{day.label}</div>
                <div className="text-xl font-bold">{day.date}</div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mt-16">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#b0d83b]/20 via-[#c4f042]/20 to-transparent hidden md:block" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {events.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "flex flex-col md:flex-row items-center justify-between w-full mb-16 relative group",
                    i % 2 !== 0 ? "md:flex-row-reverse" : ""
                  )}
                >
                  <div className="w-full md:w-[45%] bg-white p-10 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-[#c4f042]/30 hover:shadow-[0_20px_50px_rgba(196,240,66,0.1)] transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#b0d83b]/5 to-[#c4f042]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="inline-block px-6 py-2 bg-[#c4f042]/10 rounded-full text-[#b0d83b] text-xs font-bold tracking-[0.2em] mb-6 group-hover:bg-gradient-to-r group-hover:from-[#c4f042] group-hover:to-[#b0d83b] group-hover:text-white transition-all duration-300">
                      {e.time}
                    </div>
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#c4f042] group-hover:to-[#b0d83b] transition-all duration-300">{e.title}</h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-8">
                      Dolor sit amet consectetur elit sed do eiusmod tempor incid idunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris...
                    </p>
                    <button className="text-black font-bold text-sm tracking-[0.2em] uppercase flex items-center gap-3 group-hover:text-[#b0d83b] transition-colors duration-300">
                      READ MORE 
                      <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#c4f042]/10 group-hover:translate-x-2 transition-all duration-300">
                        <ArrowRight size={16} />
                      </span>
                    </button>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full items-center justify-center border-4 border-gray-50 z-10 group-hover:border-[#c4f042]/20 transition-colors duration-500 shadow-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#c4f042] to-[#b0d83b] rounded-full shadow-[0_0_15px_rgba(196,240,66,0.5)] group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  <div className={cn(
                    "w-full md:w-[45%] flex items-center gap-6 mt-8 md:mt-0",
                    i % 2 !== 0 ? "md:justify-end text-right" : "md:justify-start text-left"
                  )}>
                    <div className={cn("relative", i % 2 !== 0 ? "order-2" : "order-1")}>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#c4f042] to-[#b0d83b] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      <img 
                        src={e.img} 
                        alt={e.speaker} 
                        className="w-20 h-20 rounded-full relative z-10 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className={cn(i % 2 !== 0 ? "order-1" : "order-2")}>
                      <div className="font-bold text-2xl mb-1 group-hover:text-[#b0d83b] transition-colors">{e.speaker}</div>
                      <div className="text-sm text-gray-400 uppercase tracking-[0.2em] font-bold">{e.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const images = [
    'https://picsum.photos/seed/g1/600/400',
    'https://picsum.photos/seed/g2/400/600',
    'https://picsum.photos/seed/g3/600/600',
    'https://picsum.photos/seed/g4/800/400',
    'https://picsum.photos/seed/g5/400/400',
    'https://picsum.photos/seed/g6/600/800',
    'https://picsum.photos/seed/g7/600/400',
    'https://picsum.photos/seed/g8/400/600',
  ];
  return (
    <section className="w-full flex flex-wrap bg-white">
      {images.map((img, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="relative w-full sm:w-1/2 md:w-1/4 h-[350px] group overflow-hidden"
        >
          <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-lime-900/90 via-[#9bc234]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-light transform group-hover:scale-110 transition-transform duration-300 border border-white/30"
            >
              +
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Column 1: ELT@I */}
          <div>
            <div className="bg-white inline-block p-2 rounded-lg mb-6">
              <img src="https://conf2026.eltai.in/assets/ELTAI-DxCx19mA.png" alt="ELT@I Logo" className="h-12 w-auto" />
            </div>
            <h3 className="text-white font-bold text-lg mb-4">English Language Teachers' Association of India</h3>
            <div className="text-gray-400 space-y-2 text-sm">
              <p>D-54 Third Floor, Anandham Apartments</p>
              <p>156, SIDCO Nagar Main Road</p>
              <p>Villivakkam, Chennai - 600 049, India</p>
            </div>
          </div>

          {/* Column 2: MIT-ADT */}
          <div>
            <div className="bg-white inline-block p-2 rounded-lg mb-6">
              <img src="https://conf2026.eltai.in/assets/MITADT-KRFaF891.png" alt="MIT-ADT University Logo" className="h-12 w-auto" />
            </div>
            <h3 className="text-white font-bold text-lg mb-4">School of Humanities & School of Holistic Development</h3>
            <div className="text-gray-400 space-y-2 text-sm">
              <p>MIT Art, Design & Technological University</p>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

          {/* Column 3: Join Us */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Join Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm font-bold">
            © 2026 ELT@I. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Designed and Developed by</span>
            <div className="flex items-center gap-1 font-bold text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" />
              </svg>
              Deemsys
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#b0d83b] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <AboutSection />
        <FeaturesSection />
        <SpeakersSection />
        <ScheduleSection />
        <GallerySection />
        
        {/* CTA Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#151619] rounded-[60px] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#b0d83b]/20 to-transparent rounded-l-full blur-3xl group-hover:from-[#b0d83b]/30 transition-colors duration-700" />
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#c4f042]/20 to-transparent rounded-br-full blur-2xl group-hover:from-[#c4f042]/30 transition-colors duration-700" />
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-[#c4f042] to-[#b0d83b]" />
                  <span className="text-[#c4f042] font-bold tracking-[0.3em] text-sm uppercase">07-10 OCTOBER 2026 • PUNE, INDIA</span>
                </div>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight uppercase">
                  JOIN US AT ELTAI 2026 - WHERE<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8f471] to-[#c4f042]">ENGLISH EDUCATION MEETS INNOVATION</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
                  Be part of the 20th International and 56th Annual ELTAI Conference. Connect with educators, researchers, and thought leaders shaping the future of English education.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="relative overflow-hidden bg-gradient-to-r from-[#c4f042] to-[#b0d83b] text-black px-8 py-4 rounded-full font-bold text-sm tracking-[0.1em] flex items-center gap-3 group/btn shadow-[0_10px_30px_rgba(196,240,66,0.3)] hover:shadow-[0_15px_40px_rgba(196,240,66,0.5)] transition-all uppercase">
                    <span className="relative z-10">REGISTER NOW</span> 
                    <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <motion.div 
                      className="absolute inset-0 bg-white/30 -skew-x-12"
                      initial={{ x: '-150%' }}
                      whileHover={{ x: '150%' }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </button>
                  <button className="relative overflow-hidden border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm tracking-[0.1em] flex items-center gap-3 group/btn hover:bg-white/5 transition-all uppercase">
                    <span className="relative z-10">SUBMIT ABSTRACT</span> 
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex items-center justify-center"
              >
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-4">
                      <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite]">
                        <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                        <text className="text-[8px] font-bold fill-white/40 uppercase tracking-[0.2em]">
                          <textPath href="#textPath">
                            Watch the video for conference conference
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                  <button className="w-28 h-28 bg-gradient-to-br from-[#c4f042] to-[#b0d83b] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(196,240,66,0.5)] relative z-20 group/play">
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                    <Play fill="currentColor" size={36} className="ml-2 group-hover/play:scale-110 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
