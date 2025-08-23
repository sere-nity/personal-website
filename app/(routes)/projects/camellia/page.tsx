'use client';

import Link from 'next/link';
import { AudioLink } from '@/components/common/AudioLink';

export default function CamelliaPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Name */}
        <h1 className="text-[62px] mb-2">
          <AudioLink href="/" className="hover:text-gray-700">
            Serene Liu
          </AudioLink>
        </h1>
        <hr className="border-gray-300 mb-4" />
        
        {/* Subtitle, Navigation, and Age */}
        <div className="grid grid-cols-[1fr_1fr] gap-4 mb-12">
          <div className="text-gray-500 text-[16px] max-w-[300px]">
            <div>Building at the Intersection</div>
            <div>of Creativity and Tech</div>
          </div>
          <div className="flex justify-between items-start">
            <nav className="text-left">
              <div className="text-gray-500 text-[16px]">
                <AudioLink href="/" className="hover:text-gray-700">About</AudioLink>
              </div>
              <div className="text-black text-[16px]">
                <AudioLink href="/projects" className="hover:text-gray-700">Projects</AudioLink>
              </div>
            </nav>
            <div className="text-right">
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mt-8 mb-4" />

        {/* Main Content Section */}
        <div className="grid grid-cols-[1fr_1fr] gap-4">
          {/* Left Column */}
          <div>
            <div className="text-gray-500 text-[18px] mb-2">Project</div>
            <div className="text-black text-[16px]">
              Camellia
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="text-gray-500 text-[18px] mb-2">Description</div>
            <div className="space-y-4 text-black text-[16px]">
              <p>
                My attempt at worldbuilding. This took an entire summer.
              </p>
              <p>
                Content coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 