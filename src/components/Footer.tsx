import React from 'react';
import { Shield, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/50 backdrop-blur-lg py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Trézor Suite
              </span>
            </div>
            <p className="text-gray-400">
              Securing your digital future with advanced cryptocurrency management solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Features', 'Security', 'About', 'Support', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'API', 'Partners', 'Blog', 'News'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Trézor Suite. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Footer Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/20 to-transparent" />
        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </footer>
  );
};

export default Footer;