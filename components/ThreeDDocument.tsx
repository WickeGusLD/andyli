import React, { useRef, useState } from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

interface ThreeDDocumentProps {
  href: string;
  label: string;
  className?: string;
}

const ThreeDDocument: React.FC<ThreeDDocumentProps> = ({ href, label, className = "" }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation degrees
    const maxDeg = 12;
    
    // Calculate rotation based on cursor position relative to center
    // If mouse is at top (y < center), rotateX should be positive (top tilts back)
    const rotateX = ((centerY - y) / centerY) * maxDeg; 
    // If mouse is at left (x < center), rotateY should be negative (left tilts back)
    const rotateY = ((x - centerX) / centerX) * maxDeg;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className={`relative perspective-[1000px] inline-block py-4 ${className}`}>
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative block w-32 h-44 bg-white rounded-md shadow-md border border-slate-200 transition-all duration-100 ease-out z-10"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(${isHovering ? '-15px' : '0'}) scale(${isHovering ? 1.02 : 1})`,
            transformStyle: 'preserve-3d',
            boxShadow: isHovering 
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Paper texture/lines */}
          <div className="absolute inset-0 p-4 flex flex-col items-center justify-between pointer-events-none overflow-hidden rounded-md bg-gradient-to-b from-white to-slate-50/50">
            
            {/* Header Area */}
            <div className="w-full space-y-2 mb-2">
               <div className="w-full h-1 bg-slate-100 rounded"></div>
               <div className="w-2/3 h-1 bg-slate-100 rounded"></div>
            </div>

            {/* Icon & Label */}
            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <div className={`p-3 rounded-full mb-3 transition-colors duration-300 ${isHovering ? 'bg-teal-50 text-teal-600' : 'bg-slate-50 text-slate-400'}`}>
                <FileText size={28} />
              </div>
              <span className={`text-[10px] font-serif font-bold text-center leading-tight line-clamp-3 transition-colors duration-300 ${isHovering ? 'text-teal-800' : 'text-slate-600'}`}>
                {label}
              </span>
            </div>
            
            {/* Footer action */}
            <div className="w-full pt-3 mt-1 flex justify-center border-t border-slate-50">
              <span className={`text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 transition-all duration-300 ${isHovering ? 'text-teal-600 opacity-100 translate-y-0' : 'text-slate-400 opacity-0 translate-y-2'}`}>
                OPEN <ArrowUpRight size={10} />
              </span>
            </div>
            
            {/* Highlight/Glare effect */}
            <div 
               className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent transition-opacity duration-300 pointer-events-none"
               style={{ opacity: isHovering ? 1 : 0 }}
            ></div>
          </div>
        </a>
        
        {/* Floor Shadow */}
        <div 
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900/20 blur-lg rounded-[100%] transition-all duration-300 z-0 pointer-events-none"
          style={{ 
            opacity: isHovering ? 0.4 : 0,
            transform: `translate(-50%, ${isHovering ? '20px' : '0'}) scale(${isHovering ? 1 : 0.5})`
          }}
        ></div>
    </div>
  );
};

export default ThreeDDocument;