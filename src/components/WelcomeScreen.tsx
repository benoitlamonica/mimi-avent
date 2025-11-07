interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl animate-fade-in">
        <div className="text-8xl mb-8 animate-bounce-slow">🎄</div>
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-6">
          Calendrier de l&apos;Avent
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          24 jours de surprises et d&apos;amour ✨
        </p>
        <button
          onClick={onStart}
          className="px-12 py-4 text-xl font-bold text-white bg-linear-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
        >
          Découvrir 💝
        </button>
      </div>
    </div>
  );
};
