interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-100 via-white to-red-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-20 animate-fly-across">
        <span className="text-5xl">🦌</span>
      </div>
      <div className="absolute top-48 animate-fly-across-delayed">
        <span className="text-4xl">🦌</span>
      </div>
      <div className="text-center max-w-2xl animate-fade-in relative z-10">
        <div className="text-8xl mb-8 animate-bounce-slow">🎅</div>
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 via-orange-600 to-red-700 mb-6">
          Calendrier de l&apos;Avent
        </h1>
        <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-linear-to-r from-orange-700 to-red-700 mb-12">
          24 jours de surprises ❄️
        </p>
        <button
          onClick={onStart}
          className="px-12 py-4 text-xl font-bold text-white bg-linear-to-r from-red-600 to-orange-600 rounded-full shadow-2xl shadow-orange-500/50 hover:shadow-red-500/50 transform hover:scale-110 transition-all duration-300"
        >
          Découvrir 🎁
        </button>
      </div>
    </div>
  );
};
