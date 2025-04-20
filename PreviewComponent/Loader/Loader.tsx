"use client";

import { Loader } from "@/components/Loader/loader";

export function BasicLoader() {
    return <Loader />;
  }

export function SizeLoadersDemo() {
    return (
        <div className="flex gap-4 items-center">
            <Loader size="sm" className="text-blue-500"/>
            <Loader size="md" className="text-red-500"/>
            <Loader size="lg" className="text-green-500"/>
        </div>
    );
}

export function SpeedLoadersDemo() {
    return (
        <div className="flex gap-4 items-center">
            <Loader speed="0.7s" className="text-blue-500"/>
            <Loader speed="1s" className="text-red-500"/>
            <Loader speed="2s" className="text-green-500"/>
        </div>
    );
}

export function InlineLoaderDemo() {
    return <Loader type="inline" />;
}

export function DotsLoaderDemo() {
    return <Loader type="dots" speed="2.1s" />;
}

