import { useState, useEffect } from 'react';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { CalendarBox } from '@/components/CalendarBox';
import { GiftModal } from '@/components/GiftModal';
import { useGifts } from '@/hooks/useGifts';

interface Gift {
  id: number;
  name: string;
  description: string;
  action: string;
}

const STORAGE_KEY = 'advent-calendar-opened-boxes';

function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [openedBoxes, setOpenedBoxes] = useState<Set<number>>(() => {
    // Initialize from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as number[];
        return new Set(parsed);
      } catch (error) {
        console.error('Error loading opened boxes:', error);
        return new Set();
      }
    }
    return new Set();
  });
  const gifts = useGifts();

  // Save opened boxes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(openedBoxes)));
  }, [openedBoxes]);

  const getCurrentDay = (): number => {
    const today = new Date();
    const startDate = new Date(import.meta.env.VITE_START_DATE);
    const endDate = new Date(import.meta.env.VITE_END_DATE);
    
    // Check if today is within the advent calendar period
    if (today < startDate) return 0;
    if (today > endDate) return 24;
    
    // Calculate days since start
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return Math.min(diffDays, 24);
  };

  const isBoxUnlocked = (giftId: number): boolean => {
    // Check environment variable for development mode
    const unlockAll = import.meta.env.VITE_UNLOCK_ALL_BOXES === 'true';
    
    if (unlockAll) {
      return giftId <= 24; // All boxes unlocked for development
    }
    
    // For production, unlock based on current date
    const currentDay = getCurrentDay();
    return giftId <= currentDay && giftId <= 24;
  };

  const handleOpenGift = (gift: Gift) => {
    setSelectedGift(gift);
    // Mark box as opened
    setOpenedBoxes((prev) => {
      const newSet = new Set(prev);
      newSet.add(gift.id);
      return newSet;
    });
  };

  const handleCloseModal = () => {
    setSelectedGift(null);
  };

  const isBoxOpened = (giftId: number): boolean => {
    return openedBoxes.has(giftId);
  };

  if (!showCalendar) {
    return <WelcomeScreen onStart={() => setShowCalendar(true)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 p-4 md:p-8 relative overflow-auto">
      {/* Draggable area for frameless window */}
      <div className="fixed top-0 left-0 right-0 h-16 z-50 draggable" />
      
      {/* Falling hearts decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute left-[10%] text-2xl text-red-300 animate-fall-slow" style={{ animationDelay: '0s' }}>❤️</div>
        <div
          className="absolute left-[25%] text-xl text-red-200 animate-fall-slow"
          style={{
            animationDelay: '2s',
            animationDuration: '12s' 
          }}
        >❤️
        </div>
        <div
          className="absolute left-[40%] text-3xl text-red-300 animate-fall-slow"
          style={{
            animationDelay: '5s',
            animationDuration: '14s' 
          }}
        >❤️
        </div>
        <div
          className="absolute left-[55%] text-2xl text-red-200 animate-fall-slow"
          style={{
            animationDelay: '1s',
            animationDuration: '11s' 
          }}
        >❤️
        </div>
        <div
          className="absolute left-[70%] text-xl text-red-300 animate-fall-slow"
          style={{
            animationDelay: '3.5s',
            animationDuration: '13s' 
          }}
        >❤️
        </div>
        <div
          className="absolute left-[85%] text-2xl text-red-200 animate-fall-slow"
          style={{
            animationDelay: '0.5s',
            animationDuration: '11.5s' 
          }}
        >❤️
        </div>
        <div
          className="absolute left-[15%] text-xl text-red-300 animate-fall-slow"
          style={{
            animationDelay: '6s',
            animationDuration: '15s' 
          }}
        >🎄
        </div>
        <div
          className="absolute left-[65%] text-2xl text-red-200 animate-fall-slow"
          style={{
            animationDelay: '4s',
            animationDuration: '12.5s' 
          }}
        >🎄
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 non-draggable w-full py-2">
        <header className="text-center mb-6 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-2">
            <span className="text-zinc-800">{import.meta.env.VITE_APP_NAME.split(' ')[0]} </span>
            <span className="text-red-600">{import.meta.env.VITE_APP_NAME.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-500">
            Décembre 2025 • 24 surprises
          </p>
        </header>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {gifts.map((gift) => (
            <CalendarBox
              key={gift.id}
              gift={gift}
              isUnlocked={isBoxUnlocked(gift.id)}
              isOpened={isBoxOpened(gift.id)}
              onOpen={() => handleOpenGift(gift)}
            />
          ))}
        </div>
      </div>

      <GiftModal key={selectedGift?.id} gift={selectedGift} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
