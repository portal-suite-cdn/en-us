import React, { useState, useEffect } from 'react';
import { Shield, ChevronRight, Timer, Trophy, Zap, Gamepad, Cpu, Globe, Wifi, Command, Hexagon, Heart, Leaf, Apple, Carrot } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import ContentSection from './components/ContentSection';
import HealthyMenu from './components/HealthyMenu';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-purple-900 text-white overflow-x-hidden">
      <Header scrollPosition={scrollPosition} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center z-10">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <HealthyMenu />
            
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                Trézor Suite
              </h1>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
            </div>
            
            <p className="text-2xl md:text-3xl font-bold mb-4 text-emerald-400">
              Secure Your Digital Future
            </p>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Experience unparalleled security and control with our advanced cryptocurrency management platform
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg text-xl font-semibold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  Get Started Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
              
              <button className="group relative px-8 py-4 bg-transparent border-2 border-emerald-500 rounded-lg text-xl font-semibold transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Core Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-emerald-500" />}
              title="Military-Grade Security"
              description="State-of-the-art encryption protocols and multi-layer security measures protect your digital assets with uncompromising security standards."
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-cyan-500" />}
              title="Lightning Fast Performance"
              description="Experience blazing-fast transaction speeds and real-time portfolio updates without compromising security."
            />
            <FeatureCard
              icon={<Trophy className="w-12 h-12 text-yellow-500" />}
              title="Industry Leading Solution"
              description="Join millions of users who trust Trézor Suite for their cryptocurrency management needs."
            />
            <FeatureCard
              icon={<Cpu className="w-12 h-12 text-purple-500" />}
              title="Smart Monitoring"
              description="AI-powered threat detection system that continuously adapts to new security challenges in real-time."
            />
            <FeatureCard
              icon={<Globe className="w-12 h-12 text-blue-500" />}
              title="Global Accessibility"
              description="Access your digital assets securely from anywhere in the world with our distributed network infrastructure."
            />
            <FeatureCard
              icon={<Command className="w-12 h-12 text-pink-500" />}
              title="Advanced Controls"
              description="Customizable security settings and powerful administrative controls for complete portfolio management."
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <ContentSection
            icon={<Hexagon className="w-8 h-8" />}
            title="Next-Generation Security Architecture"
            content="Trézor Suite employs quantum-resistant encryption protocols, advanced biometric authentication, and cutting-edge hardware security modules. Our revolutionary multi-signature technology creates an impenetrable shield around your digital assets, ensuring maximum protection against even the most sophisticated cyber threats."
          />
          <ContentSection
            icon={<Wifi className="w-8 h-8" />}
            title="Intelligent Threat Detection"
            content="Experience unparalleled protection with our AI-driven threat detection system. Our advanced algorithms continuously monitor and analyze network traffic, identifying and neutralizing potential threats before they can cause harm. Stay one step ahead of cybercriminals with proactive security measures."
          />
          <ContentSection
            icon={<Heart className="w-8 h-8" />}
            title="User-Centric Design"
            content="We believe security shouldn't come at the cost of usability. Our intuitive interface makes managing your digital assets simple and efficient, while maintaining the highest security standards. Enjoy features like one-click portfolio management, automated backups, and seamless integration with major exchanges."
          />
          <ContentSection
            icon={<Leaf className="w-8 h-8" />}
            title="Sustainable Security"
            content="Our commitment to environmental responsibility extends to our security infrastructure. We utilize energy-efficient protocols and green data centers to minimize our carbon footprint while maintaining superior security standards."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;