"use client";

import { useState, useEffect } from 'react';
import AppHeader from '@/components/app-header';
import DisclaimerModal from '@/components/disclaimer-modal';
import PrescriptionSearch from '@/components/prescription-search';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import SplashScreen from '@/components/splash-screen';

export default function Home() {
  const [searchTags, setSearchTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Duração da splash screen

    return () => clearTimeout(timer);
  }, []);


  const removeTag = (tagToRemove: string) => {
    setSearchTags(searchTags.filter(tag => tag !== tagToRemove));
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <DisclaimerModal />
      <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
        <AppHeader searchTags={searchTags} setSearchTags={setSearchTags} />
        <main className="flex-1 px-4 py-6 md:px-6 md:py-8">
          {searchTags.length > 0 && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <h2 className="text-sm font-medium text-muted-foreground">Filtros:</h2>
              {searchTags.map(tag => (
                <Badge key={tag} variant="secondary" className="gap-1.5 pl-2 pr-1">
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="rounded-full bg-background/50 p-0.5 text-muted-foreground hover:bg-background hover:text-foreground"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {tag}</span>
                  </button>
                </Badge>
              ))}
            </div>
          )}
          <PrescriptionSearch searchTags={searchTags} />
        </main>
      </div>
    </>
  );
}
