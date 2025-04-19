'use client'

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PointerFollowerCardProps {
  label: string;
  className?: string;
  labelClassName?: string;
  children?: React.ReactNode;
}

const gradientClasses = [
  "bg-gradient-to-br from-pink-500/80 to-purple-600/80",
  "bg-gradient-to-br from-emerald-500/80 to-teal-600/80",
  "bg-gradient-to-br from-yellow-400/80 to-orange-500/80",
  "bg-gradient-to-br from-indigo-500/80 to-blue-600/80",
];

export const PointerFollower = ({
  label,
  className,
  children,
  labelClassName,
}: PointerFollowerCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const [randomBg, setRandomBg] = useState(gradientClasses[0]);

  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseEnter = () => {
    const random = gradientClasses[Math.floor(Math.random() * gradientClasses.length)];
    setRandomBg(random);
    setIsHovered(true);
  };

  return (
    <div
      ref={ref}
      className={cn(className, "relative overflow-hidden")}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {isHovered && (
        <motion.div
          style={{
            translateX: x,
            translateY: y,
          }}
          className="pointer-events-none absolute top-0 left-0 z-10"
        >
          <div
            className={cn(
              "px-3 py-1 text-xs font-semibold text-white rounded-full backdrop-blur-md shadow-xl",
              randomBg,
              labelClassName
            )}
          >
            {label}
          </div>
        </motion.div>
      )}
    </div>
  );
};