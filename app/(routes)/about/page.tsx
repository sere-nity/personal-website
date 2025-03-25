'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64">
              <Image
                src="/images/PFPic.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-600 mb-6">
              Hi! I'm a second year Computer Science student at Imperial College London.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {/* <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <FaGithub size={24} />
              </Link> */}
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold">DoCSoC Events Officer</h3>
              <p className="text-gray-600">Imperial Department of Computing Society • Oct 2024 - Present</p>
              <p className="mt-2">
                Elected for Imperial Department of Computing Society's Events Officer Role. 
                Helped run both large and small events including IC Hack 25.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold">PlayStation Work Experience</h3>
              <p className="text-gray-600">Sony Interactive Entertainment London UK • Aug 2023 - Sep 2023</p>
              <p className="mt-2">
                Learnt shader coding with GLSL + Shadertoy and utilisation of Unity's Render Pipeline 
                to create stylized graphic effects.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold">Accio Research Contractor</h3>
              <p className="text-gray-600">Remote • Jul 2023</p>
              <p className="mt-2">
                Built a model for smooth interpolation between two known positions of a football player 
                using the Stone Soup framework in Python.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold">Imperial College London</h3>
              <p className="text-gray-600">Computing BEng • 2023 - Present</p>
              <p className="mt-2">
                First Year (1:1) (79.75%) <br />
                Relevant Modules: Computer Architecture, Functional Programming, 
                Compilers, Object Oriented Programming
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold">Westminster School</h3>
              <p className="text-gray-600">A-Levels & Pre-U • 2021 - 2023</p>
              <p className="mt-2">
                Maths (A*), Further Maths (A*), Physics (D1/A** eq.), Chemistry (D2/A* eq.)
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold">Junior Royal Northern College Of Music</h3>
              <p className="text-gray-600">2018 - 2021</p>
              <p className="mt-2">
                DipABRSM Piano (Distinction) <br />
                Grade 8 Piano, Oboe, Organ and Violin (All Distinctions + Merit)
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}