// app/page.tsx
'use client';

import { Button } from '@/components/Button/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Link href="/docs">
        <Button size="lg" colorscheme="primary">
          Go to Documentation
        </Button>
      </Link>
    </main>
  );
}
