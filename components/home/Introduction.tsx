'use client';

import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h1 className="font-poppins text-3xl md:text-4xl font-bold mb-4 text-purple-600 tracking-tight">
        Serene Liu
      </h1>
      <p className="text-lg text-gray-600 mb-3 font-light">
        An Imperial Computing Student Passionate about Problem-Solving with Creativity and Tech
      </p>
      <div className="flex justify-center gap-4 text-sm">
        <a
          href="mailto:serene6197@gmail.com"
          className="text-gray-600 hover:text-purple-600 transition-colors"
        >
          serene6197@gmail.com
        </a>
        {/* <span className="text-gray-400">|</span>
        <a
          href="tel:+447403523182"
          className="text-gray-600 hover:text-purple-600 transition-colors"
        >
          +447403523182
        </a> */}
      </div>
    </motion.div>
  );
}
