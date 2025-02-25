import React from 'react';
import { Apple, Carrot, Leaf } from 'lucide-react';

const HealthyMenu: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-8 mb-12 overflow-hidden">
      <div className="animate-float-1 flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-full">
        <Apple className="w-6 h-6 text-green-400" />
        <span className="text-green-400 font-medium">Healthy</span>
      </div>
      <div className="animate-float-2 flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-3 rounded-full">
        <Carrot className="w-6 h-6 text-emerald-400" />
        <span className="text-emerald-400 font-medium">Secure</span>
      </div>
      <div className="animate-float-3 flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 p-3 rounded-full">
        <Leaf className="w-6 h-6 text-teal-400" />
        <span className="text-teal-400 font-medium">Sustainable</span>
      </div>
    </div>
  );
};

export default HealthyMenu;