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
        relative aspect-square group
        transition-all duration-300
        ${!isUnlocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
      `}
      onClick={handleClick}
    >
      <div
        className={`
          w-full h-full rounded-xl backdrop-blur-md
          ${isOpened 
      ? 'bg-zinc-100/10' 
      : 'bg-white/10 group-hover:bg-red-50/80 group-hover:shadow-lg group-hover:shadow-red-100'
    }
          shadow-sm
          flex flex-col items-center justify-center
          transition-all duration-300
          ${isFlipping && !isOpened ? 'scale-95 rotate-3' : 'scale-100 rotate-0'}
        `}
      >
        <div
          className={`text-3xl md:text-4xl lg:text-5xl font-light ${
            isOpened ? 'text-red-600' : 'text-zinc-800 group-hover:text-red-600'
          }`}
        >
          {isOpened ? '✓' : gift.id}
        </div>
      </div>
    </button>
  );
};
