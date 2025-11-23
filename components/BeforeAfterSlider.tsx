import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, className = "" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event 
      ? event.touches[0].clientX - containerRect.left 
      : (event as React.MouseEvent).clientX - containerRect.left;

    const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-[400px] md:h-[500px] overflow-hidden cursor-ew-resize select-none ${className}`}
      onMouseMove={isDragging ? handleMove : undefined}
      onTouchMove={handleMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMove}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Label After */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 text-sm font-bold uppercase tracking-wider rounded backdrop-blur-sm">
        Après
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          // We need to set width to the container's width to prevent aspect ratio distortion
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          draggable={false}
        />
         {/* Label Before */}
        <div className="absolute top-4 left-4 bg-white/80 text-black px-3 py-1 text-sm font-bold uppercase tracking-wider rounded backdrop-blur-sm">
          Avant
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center border-2 border-white shadow-lg">
          <ChevronsLeftRight size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;