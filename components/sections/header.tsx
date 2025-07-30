"use client";
import React from 'react'
import { Button } from "@/components/ui/moving-border";

export const Header = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">

      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at top center, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.3) 30%, rgba(29, 78, 216, 0.2) 60%, rgba(30, 64, 175, 0.1) 100%)"
        }}
      ></div>
      <div className="relative z-10 text-center mt-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-quicksand)' }}>
          <span 
            className="text-blue-600 font-extrabold" 
            style={{ 
              fontWeight: '900',
              textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
            }}
          >
            Yegna
          </span> Startup studio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-0.5 mb-12 saira-regular">
            Ethiopia's startup studio for creators without code
        </p>
        <Button 
          borderRadius="2rem"
          containerClassName="w-48 h-14"
          borderClassName="bg-blue-600"
          className="bg-blue-600/20 text-white text-lg font-semibold"
          duration={4000}
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}
