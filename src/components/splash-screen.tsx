"use client";

export default function SplashScreen() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="relative font-headline text-6xl font-extrabold tracking-tight text-foreground animate-fade-in-splash">
        <div className="flex items-center justify-center">
          <span className="animate-slide-D">D</span>
          <span className="animate-fade-out-ose-splash">ose</span>
          <span className="animate-slide-dot">.</span>
        </div>
      </div>
    </div>
  );
}
