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
          w-full h-full rounded-2xl border-4
          ${isOpened 
      ? 'bg-linear-to-br from-orange-500 to-orange-600 border-orange-700 shadow-lg shadow-orange-500/50' 
      : 'bg-linear-to-br from-red-600 to-red-700 border-gray-900 shadow-lg shadow-red-500/50'
    }
          shadow-xl hover:shadow-2xl
          flex flex-col items-center justify-center
          transition-all duration-500
          ${isFlipping && !isOpened ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
        `}
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          {isOpened ? '✓' : gift.id}
        </div>
        <div className="text-xs md:text-sm text-white font-semibold mt-2">
          {isOpened ? '❄️ Ouvert' : isUnlocked ? '🎁 Ouvrir' : '🔒 Bientôt'}
        </div>
      </div>
    </button>
  );
};
