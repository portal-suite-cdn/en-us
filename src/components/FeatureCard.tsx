import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-emerald-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-cyan-600/0 group-hover:from-emerald-600/10 group-hover:to-cyan-600/10 rounded-xl transition-all duration-300" />
      <div className="relative">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;