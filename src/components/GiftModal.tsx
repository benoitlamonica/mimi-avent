import { useScratchCard } from '@/hooks/useScratchCard';
import { useConfetti } from '@/hooks/useConfetti';

interface Gift {
  id: number;
  name: string;
  description: string;
  action: string;
}

interface GiftModalProps {
  gift: Gift | null;
  onClose: () => void;
}

export const GiftModal = ({
  gift,
  onClose
}: GiftModalProps) => {
  const {
    showConfetti,
    confettiItems,
    triggerConfetti,
    stopConfetti
  } = useConfetti();

  const {
    canvasRef,
    containerRef,
    handlers
  } = useScratchCard({
    giftId: gift?.id,
    onScratch: triggerConfetti,
    onComplete: stopConfetti
  });

  if (!gift) return null;

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <button
      type="button"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      aria-label="Fermer la fenêtre"
    >
      <button
        type="button"
        aria-labelledby="gift-title"
        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 animate-scale-in relative overflow-hidden"
        onClick={handleModalClick}
      >
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {confettiItems.map((item) => (
              <div
                key={item.id}
                className="absolute animate-confetti"
                style={{
                  left: item.left,
                  top: '-10%',
                  animationDelay: item.delay,
                  animationDuration: item.duration
                }}
              >
                {item.emoji}
              </div>
            ))}
          </div>
        )}
        <div className="text-center relative z-0">
          <div className="text-5xl mb-4">🎁</div>
          <div className="inline-block px-4 py-1.5 bg-red-600 text-white text-sm font-medium rounded-full mb-3">Jour {gift.id}</div>
          <h2 id="gift-title" className="text-3xl font-medium text-zinc-800 mb-6">
            {gift.name}
          </h2>

          <div className="space-y-4">
            <div
              ref={containerRef}
              className="relative w-full p-6 bg-zinc-50 rounded-xl overflow-hidden"
              style={{ minHeight: '200px' }}
            >
              <p className="text-base text-zinc-700 mb-4">
                {gift.description}
              </p>
              <div className="text-sm font-medium text-red-600 mb-2">Ton action du jour</div>
              <p className="text-base text-zinc-800">
                {gift.action}
              </p>
              <canvas
                ref={canvasRef}
                className="absolute inset-0 cursor-pointer touch-none"
                {...handlers}
                style={{ borderRadius: '0.75rem' }}
              />
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full px-8 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 transform hover:scale-105 transition-all duration-200"
            >
              Fermer
            </button>
          </div>
        </div>
      </button>
    </button>
  );
};
