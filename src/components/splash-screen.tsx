"use client";

export default function SplashScreen() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="animate-fade-in-splash font-headline text-6xl font-extrabold tracking-tight text-foreground">
        <span>Dose</span>
        <span className="text-primary animate-dot-color-change">.</span>
      </div>
    </div>
  );
}
