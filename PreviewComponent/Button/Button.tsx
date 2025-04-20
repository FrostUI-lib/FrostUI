// components/docs/button-variants.tsx

"use client";

import { Button } from "@/components/Button/button";
import { OpenInV0Button } from "@/components/v0Button/Button";

export function ButtonVariantsOne() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <OpenInV0Button 
    url="npx shadcn@latest add http://frost-ui-seven.vercel.app/r/Button.json" 
  />
      <Button variant="solid" colorscheme="primary">Primary</Button>
      <Button variant="solid" colorscheme="secondary">Secondary</Button>
      <Button variant="solid" colorscheme="success">Success</Button>
      <Button variant="solid" colorscheme="danger">Danger</Button>
    </div>
  );
}

export function ButtonVariantsTwo() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Button variant="solid" colorscheme="warning">Warning</Button>
      <Button variant="solid" colorscheme="info">Info</Button>
      <Button variant="solid" colorscheme="light">Light</Button>
      <Button variant="outline" colorscheme="primary">Outline</Button>
    </div>
  );
}

export function ButtonVariantsThree() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Button variant="ghost" colorscheme="primary">Ghost</Button>
      <Button variant="soft" colorscheme="primary">Soft</Button>
      <Button variant="link" colorscheme="primary">Link</Button>
      <Button variant="outline" colorscheme="success">Outline Success</Button>
    </div>
  );
}

export function ButtonSizeVariants() {
    return (
      <div className="flex flex-row items-start gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
    );
  }
  

  export function ButtonVariantsFour() {
    const svgIcon = (
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
      </svg>
    );
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button isLoading>Loading</Button>
        <Button leftIcon={svgIcon}>Left Icon</Button>
        <Button rightIcon={svgIcon}>Right Icon</Button>
      </div>
    );
  }
