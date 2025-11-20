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
    <div className="min-h-screen bg-linear-to-br from-orange-100 via-white to-red-100 p-4 md:p-8 relative overflow-hidden">
      <div className="absolute top-10 animate-fly-across">
        <span className="text-4xl">🦌</span>
      </div>
      <div className="absolute top-32 animate-fly-across-delayed">
        <span className="text-3xl">🦌</span>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 via-orange-600 to-red-700 mb-4">
            🎄 {import.meta.env.VITE_APP_NAME} 🎄
          </h1>
          <p className="text-lg md:text-xl text-transparent bg-clip-text bg-linear-to-r from-orange-700 to-red-700">
            Découvre une surprise chaque jour jusqu&apos;à Noël ❄️
          </p>
        </header>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
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
