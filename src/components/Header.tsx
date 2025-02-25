import React from 'react';
import { Shield } from 'lucide-react';

interface HeaderProps {
  scrollPosition: number;
}

const Header: React.FC<HeaderProps> = ({ scrollPosition }) => {
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrollPosition > 50 ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <Shield className="w-8 h-8 text-emerald-500 animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-teal-500 group-hover:to-emerald-500 transition-all duration-300">
              Trézor Suite
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Features', 'Security', 'About', 'Support', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="text-gray-300 hover:text-white transition-colors">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;