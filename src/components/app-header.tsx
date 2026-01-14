"use client";

import { useState } from 'react';
import type { Dispatch, SetStateAction, KeyboardEvent } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type AppHeaderProps = {
  searchTags: string[];
  setSearchTags: Dispatch<SetStateAction<string[]>>;
};

export default function AppHeader({ searchTags, setSearchTags }: AppHeaderProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      const newTag = inputValue.trim().toLowerCase();
      if (!searchTags.includes(newTag)) {
        setSearchTags([...searchTags, newTag]);
      }
      setInputValue('');
    } else if (e.key === 'Backspace' && !inputValue && searchTags.length > 0) {
      setSearchTags(searchTags.slice(0, -1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSearchTags(searchTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-headline text-2xl font-extrabold sm:inline-block">Dose.</span>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             <div className={cn(
                "flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                "md:w-64 lg:w-96"
              )}>
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="flex flex-wrap gap-1.5 ml-2">
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
              <Input
                type="text"
                placeholder={searchTags.length === 0 ? "Buscar por condição ou remédio..." : ""}
                className="h-auto flex-1 border-0 bg-transparent p-0 pl-2 shadow-none focus-visible:ring-0"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
