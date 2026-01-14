"use client";

export default function SplashScreen() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="font-headline text-6xl font-extrabold tracking-tight text-foreground animate-fade-in-splash">
        <span>D</span>
        <span className="animate-fade-out-splash animation-delay-1000">ose</span>
        <span>.</span>
      </div>
    </div>
  );
}

// Helper para delay da animação
const styles = `
  .animation-delay-1000 {
    animation-delay: 1s;
  }
`;

if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
