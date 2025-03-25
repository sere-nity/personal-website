'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center h-16">
          <Link href="/" className="text-xl font-poppins font-bold text-purple-600">
            Serene Liu
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                } transition-colors font-light px-4`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Placeholder div to balance the layout */}
          <div className="w-[91px] flex justify-end">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t">
          <nav className="md:hidden py-4 px-4 max-w-6xl mx-auto">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`${
                      pathname === link.path
                        ? 'text-purple-600'
                        : 'text-gray-600'
                    } block py-2 font-light text-center`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}