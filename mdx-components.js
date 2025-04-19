import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'; // or your custom theme
import { Button } from '@/components/Button/button';
import { Accordion } from '@/components/Accordion/accordion'; // Fixed import path

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    Button, // Add Button as a property
    Accordion, // Add Accordion as a property
    ...components,
  };
}