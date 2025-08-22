"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Clock, Mountain, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-eucalyptus-500/20" />
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgb(255,255,255)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container flex flex-row gap-4 mx-auto px-6 py-20 relative z-10">
        <div className="flex-1 rounded-lg overflow-hidden">
          <Image src="/coal.jpg" alt="Coal" width={500} height={500} />
        </div>
        <div className="flex-1 max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <Mountain className="h-12 w-12 text-gold-500 mr-4 text-gray-200 mb-2" />
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-0">
                MinVesco
              </h1>
            </div>

            <h2 className="text-xl md:text-2xl font-light text-gold-400 mb-8 tracking-wide text-slate-400">
              Premium Mining Investment Opportunities
            </h2>
          </div>

          {/* Subheading */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Unlock the potential of Australia&apos;s next low cost PCI
              resource in the Bowen Basin to be a leading supplier of PCI to the
              global steel industry.
            </p>
          </div>

          {/* Statistics */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-gray-100" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">67%</div>
                <div className="text-sm text-slate-300">
                  Internal Rate Of Return (IRR)
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Mountain className="h-8 w-8 text-gray-100" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  $600 Million
                </div>
                <div className="text-sm text-slate-300">
                  Project Net Present Value (NPV)
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-gray-100" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  15 Years
                </div>
                <div className="text-sm text-slate-300">Life Of Mine</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                variant="gold"
                onClick={() => scrollToSection("offerings")}
                className="text-lg px-8 py-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 shadow-2xl"
              >
                Explore Opportunities
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 bg-gold-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
