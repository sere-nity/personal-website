'use client';

import { useState } from 'react';
import Link from 'next/link';

type ContentType = 'contact' | 'education' | 'experiences' | 'skills';

export default function Home() {
  const [selectedContent, setSelectedContent] = useState<ContentType>('contact');

  const contentData = {
    contact: {
      title: 'Contact',
      content: 'serene@gliahq.com'
    },
    education: {
      title: 'Education',
      content: (
        <div className="space-y-4">
          <div>
            <div className="text-black">Imperial College London</div>
            <div className="text-gray-500">(2023-Present)</div>
            <div className="text-gray-600 italic">Computing</div>
          </div>
          <div>
            <div className="text-black">Westminster School</div>
            <div className="text-gray-500">(2021-23)</div>
            <div className="text-gray-600 italic">Maths + Further Maths, Chemistry, Physics</div>
          </div>
          <div>
            <div className="text-black">Royal Northern College of Music</div>
            <div className="text-gray-500">(2021-23)</div>
            <div className="text-gray-600 italic">Piano, Oboe, Violin, Organ</div>
            <div className="text-gray-500">Grade 8+</div>
          </div>
        </div>
      )
    },
    experiences: {
      title: 'Experiences',
      content: (
        <div className="space-y-4">
          <div>
            <div className="text-black">Glia HQ <span className="text-gray-500">(Present)</span></div>
            <div className="text-gray-600 italic">Co-Founder & CTO</div>
          </div>
          <div>
            <div className="text-black">DoCSoc <span className="text-gray-500">(2024)</span></div>
            <div className="text-gray-600 italic">Events Officer</div>
          </div>
          <div>
            <div className="text-black">PlayStation <span className="text-gray-500">(2023)</span></div>
            <div className="text-gray-600 italic">Graphics Intern</div>
          </div>
          <div>
            <div className="text-black">Accio Research <span className="text-gray-500">(2022)</span></div>
            <div className="text-gray-600 italic">Software Engineer</div>
          </div>
        </div>
      )
    },
    skills: {
      title: 'Skills',
      content: 'Haskell, Kotlin, SQL, Scala, Git, Unity, C#, Java, Python, Video Production, Animation'
    }
  };

  const handleContentClick = (type: ContentType) => {
    setSelectedContent(type);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Name */}
        <h1 className="text-[62px] mb-2">
          <button 
            onClick={() => setSelectedContent('contact')}
            className="hover:text-gray-700"
          >
            Serene Liu
          </button>
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
              <div className="text-black text-[16px]">
                <button 
                  onClick={() => setSelectedContent('contact')}
                  className="hover:text-gray-700"
                >
                  About
                </button>
              </div>
              <div className="text-black text-[16px]">
                <Link href="/projects" className="hover:text-gray-700">Projects</Link>
              </div>
            </nav>
            <div className="text-right">
              <div className="text-gray-500 text-[16px]">
                <Link href="/projects/camellia" className="hover:text-gray-700">Camellia</Link>
              </div>
              <div className="text-gray-500 text-[16px]">
                <Link href="/projects/branching-narrative" className="hover:text-gray-700">Dynamic Storytelling</Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mt-8 mb-4" />

        {/* Main Content Section */}
        <div className="grid grid-cols-[1fr_1fr] gap-4">
          {/* Left Column - Dynamic Content */}
          <div>
            <div className="text-gray-500 text-[18px] mb-2">
              {contentData[selectedContent].title}
            </div>
            <div className="text-black text-[16px]">
              {contentData[selectedContent].content}
            </div>
          </div>

          {/* Right Column - About Text */}
          <div>
            <div className="text-gray-500 text-[18px] mb-2">Hello</div>
            <div className="space-y-4 text-black text-[16px]">
              <p>
                My lifelong passion is bringing ideas to life.
              </p>
              <p>
                I've experimented with many mediums; video games, videos, music, writing and of course, software. You can see the results{' '}
                <Link
                  href="/projects"
                  className="underline hover:no-underline text-black"
                >
                  here
                </Link>
              </p>
              <p>
                I'm privileged to have an incredible{' '}
                <button
                  onClick={() => handleContentClick('education')}
                  className={`underline hover:no-underline ${
                    selectedContent === 'education' ? 'text-gray-500' : 'text-black'
                  }`}
                >
                  education
                </button>
                , as well as{' '}
                <button
                  onClick={() => handleContentClick('experiences')}
                  className={`underline hover:no-underline ${
                    selectedContent === 'experiences' ? 'text-gray-500' : 'text-black'
                  }`}
                >
                  experiences
                </button>
                {' '}working with people.
              </p>

              <p>
                Above all, I hope what I create means something to someone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}