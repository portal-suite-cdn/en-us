import React from 'react';

interface ContentSectionProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ icon, title, content }) => {
  return (
    <div className="mb-12 p-8 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-emerald-500/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-emerald-500">{icon}</div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
      <p className="text-gray-300 leading-relaxed">{content}</p>
    </div>
  );
};

export default ContentSection;