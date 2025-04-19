'use client';

import { ReactNode } from "react";
import {cn} from '@/lib/utils';

export interface FancyFloatingInfoProps {
  label: string;
  content?: {
    title?: string;
    description?: string;
  };
  icon?: ReactNode;
  variant?: "info" | "warning" | "error";
  className?: string;
  tooltipClassName?: string;
}

export const FancyFloatingInfo = ({
  label,
  content,
  icon,
  variant = "info",
  className,
  tooltipClassName,
}: FancyFloatingInfoProps) => {
  const {
    title = "No Title Provided",
    description = "No description available.",
  } = content ?? {};

  const variantStyles = {
    info: {
      buttonBg: "bg-indigo-600/90 hover:bg-indigo-700/90",
      iconBg: "bg-indigo-500/20 text-indigo-400",
      tooltipBg: "from-gray-900/95 to-gray-800/95",
      ring: "focus:ring-indigo-500",
      shadow: "shadow-[0_0_30px_rgba(79,70,229,0.15)]",
    },
    warning: {
      buttonBg: "bg-yellow-500/90 hover:bg-yellow-600/90",
      iconBg: "bg-yellow-500/20 text-yellow-400",
      tooltipBg: "from-yellow-950/90 to-yellow-900/90",
      ring: "focus:ring-yellow-500",
      shadow: "shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    },
    error: {
      buttonBg: "bg-red-600/90 hover:bg-red-700/90",
      iconBg: "bg-red-500/20 text-red-400",
      tooltipBg: "from-red-950/90 to-red-900/90",
      ring: "focus:ring-red-500",
      shadow: "shadow-[0_0_30px_rgba(239,68,68,0.15)]",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className="relative inline-block group">
      <button
        className={cn(
          "relative px-6 py-3 text-sm font-semibold text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 overflow-hidden",
          styles.buttonBg,
          styles.ring,
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:opacity-75 transition-opacity" />
        <span className="relative flex items-center gap-2">
          {icon ?? (
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-4 h-4"
            >
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          )}
          {label}
        </span>
      </button>

      <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 z-50">
        <div
          className={cn(tooltipClassName,
            "relative p-4 backdrop-blur-md rounded-2xl border border-white/10",
            "bg-gradient-to-br",
            styles.tooltipBg,
            styles.shadow,
            tooltipClassName
          )}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={cn("flex items-center justify-center w-8 h-8 rounded-full", styles.iconBg)}>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-white">{title}</h3>
          </div>

          <p className="text-sm text-gray-300">{description}</p>

          {/* Blur overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 blur-xl opacity-50" />

          {/* Tooltip arrow */}
          <div
            className={cn(
              "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r border-b border-white/10",
              "bg-gradient-to-br",
              styles.tooltipBg
            )}
          />
        </div>
      </div>
    </div>
  );
};