"use client";

import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav 
        className="flex items-center gap-4 md:gap-12 px-6 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10"
        style={{
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)'
        }}
      >
        
        <Link 
          href="#how-it-works" 
          className="text-sm md:text-base hover:text-blue-500 transition-colors"
          onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
        >
          How It Works
        </Link>
        <Link 
          href="#what-we-look-for" 
          className="hidden md:block text-sm md:text-base hover:text-blue-500 transition-colors"
          onClick={(e) => handleSmoothScroll(e, 'what-we-look-for')}
        >
          What We Look For
        </Link>
        <Link 
          href="#about-us" 
          className="text-sm md:text-base hover:text-blue-500 transition-colors"
          onClick={(e) => handleSmoothScroll(e, 'about-us')}
        >
          About Us
        </Link>
        <Link 
          href="#faq" 
          className="text-sm md:text-base hover:text-blue-500 transition-colors"
          onClick={(e) => handleSmoothScroll(e, 'faq')}
        >
          FAQ
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#why-partner" 
            className="text-sm md:text-base hover:text-blue-500 transition-colors"
            onClick={(e) => handleSmoothScroll(e, 'why-partner')}
          >
            Why Partner?
          </Link>
        </div>
      </nav>

      <button
        onClick={toggleSidebar}
        className="md:hidden absolute right-6 md:right-12 p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
        style={{
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)'
        }}
      >
        {isSidebarOpen ? <LuX size={20} /> : <LuMenu size={20} />}
      </button>

      {isSidebarOpen && (
        <motion.div
          className="fixed top-0 left-0 h-full w-64 bg-black/95 backdrop-blur-md border-r border-white/10 z-40 md:hidden"
          style={{
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)'
          }}
          initial={{ x: -256 }}
          animate={{ x: 0 }}
          exit={{ x: -256 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col p-6 pt-20">
            <Link 
              href="#why-partner" 
              className="text-lg py-4 hover:text-blue-500 transition-colors border-b border-white/10"
              onClick={(e) => {
                handleSmoothScroll(e, 'why-partner');
                setIsSidebarOpen(false);
              }}
            >
              Why Partner?
            </Link>
            <Link 
              href="#what-we-look-for" 
              className="text-lg py-4 hover:text-blue-500 transition-colors border-b border-white/10"
              onClick={(e) => {
                handleSmoothScroll(e, 'what-we-look-for');
                setIsSidebarOpen(false);
              }}
            >
              What We Look For
            </Link>
          </div>
        </motion.div>
      )}

      {isSidebarOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </motion.header>
  );
};
