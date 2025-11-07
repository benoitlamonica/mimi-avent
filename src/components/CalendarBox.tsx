import { useState } from 'react';

interface Gift {
  id: number;
  name: string;
  description: string;
}

interface CalendarBoxProps {
  gift: Gift;
  isUnlocked: boolean;
  isOpened: boolean;
  onOpen: () => void;
}

export const CalendarBox = ({
  gift, isUnlocked, isOpened, onOpen 
}: CalendarBoxProps) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = () => {
    if (!isUnlocked) return;
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false); // Reset flip animation
      onOpen();
    }, 600);
  };

  return (
    <button
      type="button"
      disabled={!isUnlocked}
      className={`
        relative aspect-square
        transition-transform duration-300 hover:scale-105
        ${!isUnlocked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
      `}
      onClick={handleClick}
    >
      <div
        className={`
          w-full h-full rounded-2xl
          ${isOpened 
      ? 'bg-linear-to-br from-green-400 via-emerald-400 to-teal-500' 
      : 'bg-linear-to-br from-red-400 via-pink-400 to-purple-500'
    }
          shadow-xl hover:shadow-2xl
          flex flex-col items-center justify-center
          transition-all duration-500
          ${isFlipping && !isOpened ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
        `}
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {isOpened ? '✓' : gift.id}
        </div>
        <div className="text-xs md:text-sm text-white/80 mt-2">
          {isOpened ? '✨ Ouvert' : isUnlocked ? '✨ Ouvrir' : '🔒 Bientôt'}
        </div>
      </div>
    </button>
  );
};
