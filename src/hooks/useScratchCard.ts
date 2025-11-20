import { useState, useRef, useEffect } from 'react';

const SCRATCH_STORAGE_KEY = 'advent-calendar-scratched';

const getScratchedState = (giftId: number): string | null => {
  const saved = localStorage.getItem(SCRATCH_STORAGE_KEY);
  if (!saved) return null;
  try {
    const parsed = JSON.parse(saved);
    return parsed[giftId] || null;
  } catch {
    return null;
  }
};

const saveScratchedState = (giftId: number, imageData: string) => {
  const saved = localStorage.getItem(SCRATCH_STORAGE_KEY);
  let parsed: Record<number, string> = {};
  if (saved) {
    try {
      parsed = JSON.parse(saved);
    } catch {
      parsed = {};
    }
  }
  parsed[giftId] = imageData;
  localStorage.setItem(SCRATCH_STORAGE_KEY, JSON.stringify(parsed));
};

interface UseScratchCardOptions {
  giftId: number | undefined;
  onScratch?: () => void;
  onComplete?: () => void;
}

export const useScratchCard = ({
  giftId,
  onScratch,
  onComplete
}: UseScratchCardOptions) => {
  const [isScratching, setIsScratching] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !giftId) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const container = containerRef.current;
    if (container) {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }

    const savedState = getScratchedState(giftId);
    if (savedState) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        let transparent = 0;
        for (let i = 3; i < pixels.length; i += 4) {
          if (pixels[i] === 0) transparent++;
        }
        const percentage = (transparent / (pixels.length / 4)) * 100;
        if (percentage > 50) {
          canvas.style.opacity = '0';
        }
      };
      img.src = savedState;
      return;
    }

    ctx.fillStyle = '#ea580c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f97316');
    gradient.addColorStop(0.5, '#ea580c');
    gradient.addColorStop(1, '#dc2626');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🦌 Gratte pour découvrir', canvas.width / 2, canvas.height / 2);
  }, [giftId]);

  const handleScratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !isScratching) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++;
    }

    const percentage = (transparent / (pixels.length / 4)) * 100;

    if (percentage > 5 && onScratch) {
      onScratch();
    }

    if (giftId) {
      const dataUrl = canvas.toDataURL();
      saveScratchedState(giftId, dataUrl);
    }

    if (percentage > 50 && canvas.style.opacity !== '0') {
      canvas.style.transition = 'opacity 0.5s';
      canvas.style.opacity = '0';
      if (onComplete) {
        setTimeout(() => onComplete(), 3000);
      }
    }
  };

  const handleMouseDown = () => setIsScratching(true);
  const handleMouseUp = () => setIsScratching(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    handleScratch(e.clientX, e.clientY);
  };

  const handleTouchStart = () => setIsScratching(true);
  const handleTouchEnd = () => setIsScratching(false);
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleScratch(touch.clientX, touch.clientY);
  };

  return {
    canvasRef,
    containerRef,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseUp,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove
    }
  };
};
