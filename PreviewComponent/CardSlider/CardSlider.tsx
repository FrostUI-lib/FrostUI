"use client";

import { ImageCarousel } from "@/components/ImageCarousel/imagecarousel";

const sampleImages = [
  {
    src: "/test.jpg",
    title: "james anderson",
    description: "Director of research at data science institute.",
  },
  {
    src: "/Manuji.jpg",
    title: "Manu Arora",
    description: "Founder of Aceternity-labs.",
  },
  {
    src: "/unsplash.jpeg",
    title: "Emily Devis",
    description: "A talented photographer.",
  },
];

export function BasicImageCarouselDemo() {
  return <ImageCarousel images={sampleImages} />;
}
