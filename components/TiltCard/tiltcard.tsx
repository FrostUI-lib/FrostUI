'use client'

import { ReactNode } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
export interface TiltCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
}

export const TiltCard = ({ 
  title, 
  description, 
  imageUrl,
  className, 
  imgClassName,
  children 
}: TiltCardProps) => {
  // Create motion values with default position at the center (0.5)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  // Transform x and y values to proper rotation angles
  // Note: Reversed the ranges to make the tilt follow the mouse naturally
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate the normalized position of the mouse over the card (0 to 1)
    const offsetX = (e.clientX - rect.left) / rect.width;
    const offsetY = (e.clientY - rect.top) / rect.height;
    
    // Update motion values
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    // Reset to center position when mouse leaves
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        perspective: "1000px"
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]",
        "rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 text-white",
        "w-full max-w-xs md:max-w-sm",
        "hover:shadow-[0_30px_60px_-10px_rgba(59,130,246,0.5)] border border-white/10",
        imageUrl ? "h-auto" : "h-64",
        className
      )}
    >
      <div 
        className="relative z-10 flex flex-col justify-between h-full pointer-events-none"
        style={{ transform: "translateZ(80px)" }}
      >
        {imageUrl && (
          <div 
            className="mb-3 sm:mb-4 overflow-hidden rounded-lg shadow-md"
            style={{ transform: "translateZ(15px)" }}
          >
            <img
              src={imageUrl}
              alt={title}
              className={cn(
                "w-full aspect-video object-cover rounded-lg", 
                imgClassName
              )}
            />
          </div>
        )}
        
        <div>
          <h3 
            className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 drop-shadow-md"
            style={{ transform: "translateZ(10px)" }}
          >
            {title}
          </h3>
          {description && (
            <p 
              className="text-xs sm:text-sm text-zinc-300"
              style={{ transform: "translateZ(5px)" }}
            >
              {description}
            </p>
          )}
        </div>
        
        {children && <div className="mt-3 sm:mt-4">{children}</div>}
      </div>
    </motion.div>
  );
};