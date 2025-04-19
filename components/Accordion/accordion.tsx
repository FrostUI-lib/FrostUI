"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionVariant =
  | "basic"
  | "bordered"
  | "gradient"
  | "neon"
  | "shadow"
  | "timeline"
  | "iconBadge";

export interface AccordionProps {
  label: string;
  children: React.ReactNode;
  variant?: AccordionVariant;
  isOpen?: boolean;
  className?: string;
  disabled?: boolean;
  avatarSrc?: string; // for iconBadge
}

export const Accordion: React.FC<AccordionProps> = ({
  label,
  children,
  variant = "basic",
  isOpen = false,
  className,
  disabled = false,
  avatarSrc,
}) => {
  const [open, setOpen] = useState(isOpen);

  const toggle = () => {
    if (!disabled) {
      setOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={cn(
        "w-1/2 rounded-md transition-all text-black dark:text-white dark:bg-gray-700",
        variant === "bordered" && "border border-gray-300",
        variant === "gradient" &&
          "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md",
        variant === "neon" &&
          "border border-pink-500 text-pink-500 shadow-[0_0_10px_rgba(255,0,128,0.8)] dark:bg-black bg-white",
        variant === "shadow" &&
          "bg-white dark:bg-gray-900 shadow-[0_4px_20px_rgba(0,112,243,0.3)]",
        variant === "timeline" &&
          "border-l-4 border-blue-500 bg-white dark:bg-gray-900",
        variant === "iconBadge" &&
          "relative bg-white dark:bg-gray-900",
        className
      )}
    >
      {/* Header */}
      <button
        disabled={disabled}
        onClick={toggle}
        className={cn(
          "w-full flex justify-between items-center gap-2 px-4 py-3 font-medium transition-colors duration-200",
          "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
          variant === "gradient" && "bg-transparent hover:bg-white/10",
          variant === "neon" && "bg-transparent",
        )}
      >
        <div className="flex items-center gap-3 text-start">
          {variant === "iconBadge" && avatarSrc && (
            <img
              src={avatarSrc}
              alt="avatar"
              className="w-7 h-7 rounded-full object-cover"
            />
          )}
          {label}
        </div>

        {/* Chevron */}
        <svg
          viewBox="0 0 16 16"
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.293 5.293a1 1 0 0 1 1.414 0L8 7.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      {/* Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out px-4",
          open ? "max-h-[500px] py-2 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};
