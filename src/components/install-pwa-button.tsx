"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Tipagem para o evento beforeinstallprompt
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function InstallPwaButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showButton, setShowButton] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [showIosInstructions, setShowIosInstructions] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      // Força a exibição do botão em dispositivos não-iOS quando o evento é disparado
      if (!isIos) {
        setShowButton(true);
      }
    };

    const userAgent = window.navigator.userAgent.toLowerCase();
    const isSafariOnIos = /iphone|ipad|ipod/.test(userAgent) && /safari/.test(userAgent) && !/crios/.test(userAgent) && !/fxios/.test(userAgent);
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

    setIsIos(isSafariOnIos);

    if (isMobile && !isStandalone) {
        if (isSafariOnIos) {
            setShowButton(true);
        } else {
            // Para outros dispositivos móveis, esperamos o 'beforeinstallprompt',
            // mas também podemos mostrá-lo se o evento não disparar por algum motivo.
            // Por enquanto, vamos confiar no evento.
        }
    }
    
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [isIos]); // Adicionado isIos como dependência

  const handleInstallClick = async () => {
    if (isIos) {
      setShowIosInstructions(true);
      return;
    }

    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    setDeferredPrompt(null);
    setShowButton(false);
  };

  if (!showButton) {
    return null;
  }

  return (
    <>
      <Button
        onClick={handleInstallClick}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
        size="icon"
      >
        <Download className="h-6 w-6" />
        <span className="sr-only">Instalar App</span>
      </Button>

      <Dialog open={showIosInstructions} onOpenChange={setShowIosInstructions}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Instalar App no iOS</DialogTitle>
            <DialogDescription>
              Para instalar o aplicativo no seu dispositivo iOS, siga estes passos:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p>1. Toque no ícone de <span className="font-semibold">Compartilhar</span> <Share className="inline-block h-4 w-4" /> na barra de ferramentas do Safari.</p>
            <p>2. Role para baixo e selecione a opção <span className="font-semibold">"Adicionar à Tela de Início"</span>.</p>
            <p>3. Toque em <span className="font-semibold">"Adicionar"</span> no canto superior direito para confirmar.</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
