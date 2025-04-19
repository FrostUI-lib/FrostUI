"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-md",
    "font-medium",
    "transition-all",
    "duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "active:scale-[0.97]",
    "active:translate-y-[1px]",
    "shadow-sm",
    "active:shadow-none",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "",
        soft: "",
        link: "underline-offset-4 hover:underline",
        shadow: "",
      },
      size: {
        xs: "px-2.5 py-1 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-2.5 text-lg",
        xl: "px-6 py-3 text-xl",
      },
      colorscheme: {
        primary: "",
        secondary: "",
        success: "",
        danger: "",
        warning: "",
        info: "",
        light: "",
        dark: "",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      // PRIMARY
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className: "border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/20",
      },
      {
        variant: "soft",
        colorscheme: "primary",
        className: "bg-blue-100 text-blue-700 hover:bg-blue-200 focus-visible:ring-blue-500 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800",
      },
      {
        variant: "link",
        colorscheme: "primary",
        className: "text-blue-600 hover:text-blue-700 focus-visible:ring-blue-500 dark:text-blue-400 dark:hover:text-blue-300",
      },

      // SECONDARY
      {
        variant: "solid",
        colorscheme: "secondary",
        className: "bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500 dark:bg-gray-500 dark:hover:bg-gray-400",
      },
      {
        variant: "outline",
        colorscheme: "secondary",
        className: "border-gray-600 text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-500 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-900/20",
      },
      {
        variant: "ghost",
        colorscheme: "secondary",
        className: "text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-500 dark:text-gray-400 dark:hover:bg-gray-900/20",
      },
      {
        variant: "soft",
        colorscheme: "secondary",
        className: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-500 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800",
      },
      {
        variant: "link",
        colorscheme: "secondary",
        className: "text-gray-600 hover:text-gray-700 focus-visible:ring-gray-500 dark:text-gray-400 dark:hover:text-gray-300",
      },

      // SUCCESS
      {
        variant: "solid",
        colorscheme: "success",
        className: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500 dark:bg-green-500 dark:hover:bg-green-400",
      },
      {
        variant: "outline",
        colorscheme: "success",
        className: "border-green-600 text-green-600 hover:bg-green-50 focus-visible:ring-green-500 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20",
      },
      {
        variant: "ghost",
        colorscheme: "success",
        className: "text-green-600 hover:bg-green-50 focus-visible:ring-green-500 dark:text-green-400 dark:hover:bg-green-900/20",
      },
      {
        variant: "soft",
        colorscheme: "success",
        className: "bg-green-100 text-green-700 hover:bg-green-200 focus-visible:ring-green-500 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800",
      },
      {
        variant: "link",
        colorscheme: "success",
        className: "text-green-600 hover:text-green-700 focus-visible:ring-green-500 dark:text-green-400 dark:hover:text-green-300",
      },

      // DANGER
      {
        variant: "solid",
        colorscheme: "danger",
        className: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 dark:bg-red-500 dark:hover:bg-red-400",
      },
      {
        variant: "outline",
        colorscheme: "danger",
        className: "border-red-600 text-red-600 hover:bg-red-50 focus-visible:ring-red-500 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/20",
      },
      {
        variant: "ghost",
        colorscheme: "danger",
        className: "text-red-600 hover:bg-red-50 focus-visible:ring-red-500 dark:text-red-400 dark:hover:bg-red-900/20",
      },
      {
        variant: "soft",
        colorscheme: "danger",
        className: "bg-red-100 text-red-700 hover:bg-red-200 focus-visible:ring-red-500 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800",
      },
      {
        variant: "link",
        colorscheme: "danger",
        className: "text-red-600 hover:text-red-700 focus-visible:ring-red-500 dark:text-red-400 dark:hover:text-red-300",
      },

      // WARNING
      {
        variant: "solid",
        colorscheme: "warning",
        className: "bg-yellow-500 text-black hover:bg-yellow-600 focus-visible:ring-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-black",
      },
      {
        variant: "outline",
        colorscheme: "warning",
        className: "border-yellow-500 text-yellow-600 hover:bg-yellow-50 focus-visible:ring-yellow-400 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-900/20",
      },
      {
        variant: "ghost",
        colorscheme: "warning",
        className: "text-yellow-600 hover:bg-yellow-50 focus-visible:ring-yellow-400 dark:text-yellow-300 dark:hover:bg-yellow-900/20",
      },
      {
        variant: "soft",
        colorscheme: "warning",
        className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus-visible:ring-yellow-400 dark:bg-yellow-900 dark:text-yellow-200 dark:hover:bg-yellow-800",
      },
      {
        variant: "link",
        colorscheme: "warning",
        className: "text-yellow-600 hover:text-yellow-700 focus-visible:ring-yellow-400 dark:text-yellow-300 dark:hover:text-yellow-200",
      },

      // INFO
      {
        variant: "solid",
        colorscheme: "info",
        className: "bg-cyan-600 text-white hover:bg-cyan-700 focus-visible:ring-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400",
      },
      {
        variant: "outline",
        colorscheme: "info",
        className: "border-cyan-600 text-cyan-600 hover:bg-cyan-50 focus-visible:ring-cyan-500 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900/20",
      },
      {
        variant: "ghost",
        colorscheme: "info",
        className: "text-cyan-600 hover:bg-cyan-50 focus-visible:ring-cyan-500 dark:text-cyan-400 dark:hover:bg-cyan-900/20",
      },
      {
        variant: "soft",
        colorscheme: "info",
        className: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 focus-visible:ring-cyan-500 dark:bg-cyan-900 dark:text-cyan-300 dark:hover:bg-cyan-800",
      },
      {
        variant: "link",
        colorscheme: "info",
        className: "text-cyan-600 hover:text-cyan-700 focus-visible:ring-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300",
      },

      // LIGHT
      {
        variant: "solid",
        colorscheme: "light",
        className: "bg-white text-black hover:bg-gray-100 focus-visible:ring-gray-300 dark:bg-white dark:text-black dark:hover:bg-gray-200",
      },
      {
        variant: "outline",
        colorscheme: "light",
        className: "border-white text-black hover:bg-gray-50 focus-visible:ring-gray-300 dark:border-white dark:text-black dark:hover:bg-gray-100",
      },
      {
        variant: "ghost",
        colorscheme: "light",
        className: "text-black hover:bg-gray-100 focus-visible:ring-gray-300 dark:text-black dark:hover:bg-gray-200",
      },
      {
        variant: "soft",
        colorscheme: "light",
        className: "bg-gray-100 text-black hover:bg-gray-200 focus-visible:ring-gray-300 dark:bg-white dark:text-black dark:hover:bg-gray-100",
      },
      {
        variant: "link",
        colorscheme: "light",
        className: "text-black hover:text-gray-800 focus-visible:ring-gray-300 dark:text-black dark:hover:text-gray-600",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
      rounded: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant,
    size,
    colorscheme,
    rounded,
    fullWidth,
    className,
    children,
    leftIcon,
    rightIcon,
    isLoading = false,
    disabled,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(className, buttonStyles({
          variant,
          size,
          colorscheme,
          rounded,
          fullWidth,
        }),
          )}
        {...props}
      >
        {isLoading && (
          <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="button-left-icon">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="button-right-icon">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";