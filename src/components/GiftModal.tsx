interface Gift {
  id: number;
  name: string;
  description: string;
}

interface GiftModalProps {
  gift: Gift | null;
  onClose: () => void;
}

export const GiftModal = ({
  gift, onClose 
}: GiftModalProps) => {
  if (!gift) return null;

  return (
    <button
      type="button"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      aria-label="Fermer la fenêtre"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gift-title"
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-scale-in"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🎁</div>
          <div className="text-sm text-gray-500 mb-2">Jour {gift.id}</div>
          <h2 id="gift-title" className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600 mb-4">
            {gift.name}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {gift.description}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-3 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Fermer
          </button>
        </div>
      </div>
    </button>
  );
};
