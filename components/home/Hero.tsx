'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="bg-gray-50 relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">👋</span>
              <p className="text-lg">Hello there, I'm</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              Your Name
            </h1>
            
            <div className="flex items-center gap-2">
              <p className="text-xl">I build</p>
              <Typewriter
                options={{
                  strings: ['websites', 'applications', 'experiences'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-xl text-blue-600 font-medium",
                }}
              />
            </div>
            
            <p className="text-gray-600 text-lg">
              A passionate web developer focused on creating interactive, accessible, and responsive web applications.
            </p>
            
            <div className="flex gap-4">
              <Link 
                href="/about"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                About Me
              </Link>
              <Link 
                href="/projects"
                className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                View Work
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="https://picsum.photos/400/400"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
              
              {/* Tech stack icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute top-1/2 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl">🔥</span>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}