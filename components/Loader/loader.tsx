import { useEffect } from "react";
import { cn } from "@/lib/utils";

export interface LoaderProps {
  className?: string;
  dotClassName?: string;
  size?: "sm" | "md" | "lg";
  speed?: string; // e.g., "1s", "0.5s"
  type?: "default" | "inline" | "dots";
}

const sizeMap = {
  sm: "h-5 w-5",
  md: "h-7 w-7",
  lg: "h-10 w-10",
};

export const Loader = ({
  className,
  dotClassName,
  size = "md",
  speed = "1s",
  type = "default",
}: LoaderProps) => {

  useEffect(() => {
    const styleId = "frost-loader-keyframes";

    if (!document.getElementById(styleId)) {

      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        @keyframes lineLoading {
          0% { width: 0%; left: 0%; right: auto; }
          50% { width: 100%; }
          100% { width: 0%; right: 0%; left: auto; }
        }
        @keyframes bounceDot {
          50% { transform: translateY(-18px); }
        }`;
      document.head.appendChild(style);

    }

  }, []);

  if (type === "inline") {
    return (
      <div
        className={cn(
          "relative h-1 w-32 rounded-full bg-white",
          className
        )}
        role="status"
        aria-label="Loading"
      >
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-blue-500"
          style={{ animation: `lineLoading ${speed} ease-in-out infinite` }}
        />
      </div>
    );
  }

  if (type === "dots") {
    return (
      <ul className={cn("w-16 h-4 flex gap-2 list-none", className)}>
        <li
          className={cn("w-3 h-3 rounded-full bg-white", dotClassName)}
          style={{
            animation: `bounceDot ${speed} ease-in-out infinite`,
          }}
        />
        <li
          className={cn("w-3 h-3 rounded-full bg-white", dotClassName)}
          style={{
            animation: `bounceDot ${speed} ease-in-out 0.3s infinite`,
          }}
        />
        <li
          className={cn("w-3 h-3 rounded-full bg-white", dotClassName)}
          style={{
            animation: `bounceDot ${speed} ease-in-out 0.6s infinite`,
          }}
        />
      </ul>
    );
  }

  return (
    <div
      className={cn(
        "inline-block rounded-full border-4 border-solid border-current border-r-transparent",
        sizeMap[size],
        className
      )}
      style={{ animation: `spin ${speed} linear infinite` }}
      role="status"
      aria-label="Loading"
    />
  );
};
