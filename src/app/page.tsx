"use client";

import { useState } from 'react';
import AppHeader from '@/components/app-header';
import DisclaimerModal from '@/components/disclaimer-modal';
import PrescriptionSearch from '@/components/prescription-search';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <DisclaimerModal />
      <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
        <AppHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="flex-1 px-4 py-6 md:px-6 md:py-8">
          <PrescriptionSearch searchQuery={searchQuery} />
        </main>
      </div>
    </>
  );
}
