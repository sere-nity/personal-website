'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AudioLink } from '@/components/common/AudioLink';
import { useAudio } from '@/lib/useAudio';

type ProjectCategory = 'technical' | 'in-between' | 'creative';

interface Project {
  title: string;
  description: string;
  link: string;
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('technical');
  const { playClickSound } = useAudio();

  const projectData = {
    technical: [
      {
        title: 'PintOS',
        description: 'Operating system framework for x86 architecture',
        link: 'https://github.com/sere-nity/pintos-os'
      },
      {
        title: 'Knowledge Graph Visualiser',
        description: 'Turns your documents into knowledge graphs',
        link: 'https://github.com/sere-nity/KGVisualiser'
      },
      {
        title: 'EventHive',
        description: 'Venue Search + Risk Assessment generator for Imperial societies',
        link: 'https://eventhive-drp.vercel.app/'
      },
      {
        title: 'WACC Compiler',
        description: 'Translates WACC language into machine code',
        link: 'https://github.com/sere-nity/wacc-compiler'
      },
      {
        title: 'Branching Narrative System',
        description: 'Disco Elysium\'s narrative system technically speaking.',
        link: '/projects/branching-narrative'
      }
    ],
    'in-between': [
      {
        title: 'YAO - farming simulator',
        description: 'Video demo. Heavily inspired by Stardew Valley',
        link: 'https://drive.google.com/file/d/1ybGPPaTccY4FtovreXkKF-9IoTbwN6gq/view?usp=drive_link'
      },
      {
        title: 'High Altitude Ballooning',
        description: 'Built and launched a balloon into space with a team',
        link: 'https://www.youtube.com/watch?v=BC5vjrGRdFc&ab_channel=BlakeMorris'
      },
      {
        title: 'Living Painting',
        description: 'Painting that responds to dynamic lighting in real time.',
        link: 'https://app.milanote.com/1SRXzL1IgMiN95?p=GGM6yLSOb1h'
      },
      {
        title: 'Animated Educational Video',
        description: 'Pulled several all-nighters fiddling around with After Effects',
        link: 'https://youtu.be/vAeZf6Mnnz4'
      }
    ],
    creative: [
      {
        title: 'Camellia',
        description: 'My attempt at worldbuilding. This took an entire summer',
        link: '/projects/camellia'
      },
      {
        title: 'Orchestral Soundtrack Composition',
        description: 'Wanted to create something that sounded epic',
        link: 'https://drive.google.com/file/d/19vBm2rWjwQzJRwYdlm7fxvEyWgigipyr/view?usp=sharing'
      },
      {
        title: 'Lifestyle Vlog',
        description: 'LoFI and matcha',
        link: 'https://www.youtube.com/watch?v=DXpwICJnNbc&ab_channel=SereneLiu'
      }
    ]
  };

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
          {/* Left Column - The SPECTRUM Navigation */}
          <div>
            <div className="text-gray-500 text-[18px] mb-2">
              The SPECTRUM
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 w-px h-full bg-gray-300"></div>
              
              {/* Category items with horizontal lines */}
              <div className="space-y-6 ml-4">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 w-4 h-px bg-gray-300 transform -translate-x-full"></div>
                  <button
                    onClick={() => {
                      playClickSound();
                      setSelectedCategory('technical');
                    }}
                    className={`text-left underline ${
                      selectedCategory === 'technical' ? 'text-black' : 'text-gray-500'
                    }`}
                  >
                    Technical
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 top-1/2 w-4 h-px bg-gray-300 transform -translate-x-full"></div>
                  <button
                    onClick={() => {
                      playClickSound();
                      setSelectedCategory('in-between');
                    }}
                    className={`text-left underline ${
                      selectedCategory === 'in-between' ? 'text-black' : 'text-gray-500'
                    }`}
                  >
                    Somewhere In-Between
                  </button>
                  <div className="text-gray-500 text-sm italic mt-1">Yea idk what's happening here</div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 top-1/2 w-4 h-px bg-gray-300 transform -translate-x-full"></div>
                  <button
                    onClick={() => {
                      playClickSound();
                      setSelectedCategory('creative');
                    }}
                    className={`text-left underline ${
                      selectedCategory === 'creative' ? 'text-black' : 'text-gray-500'
                    }`}
                  >
                    Creative
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Portfolio */}
          <div>
            <div className="text-gray-500 text-[18px] mb-2">Portfolio</div>
            <div className="space-y-4">
              {projectData[selectedCategory].map((project, index) => (
                <div key={index} className="text-black text-[16px]">
                  {project.link.startsWith('http') ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                      {project.title}
                    </a>
                  ) : (
                    <AudioLink href={project.link} className="underline hover:text-gray-700">
                      {project.title}
                    </AudioLink>
                  )}
                  <div className="text-gray-500 italic">{project.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}