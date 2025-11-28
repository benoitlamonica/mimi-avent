interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Falling hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute left-[12%] text-3xl text-red-300 animate-fall-slow" style={{ animationDelay: '0s' }}>❤️</div>
        <div className="absolute left-[28%] text-2xl text-red-200 animate-fall-slow" style={{ animationDelay: '2.5s', animationDuration: '12s' }}>❤️</div>
        <div className="absolute left-[45%] text-4xl text-red-300 animate-fall-slow" style={{ animationDelay: '5.5s', animationDuration: '14s' }}>❤️</div>
        <div className="absolute left-[62%] text-3xl text-red-200 animate-fall-slow" style={{ animationDelay: '1.5s', animationDuration: '11s' }}>❤️</div>
        <div className="absolute left-[78%] text-2xl text-red-300 animate-fall-slow" style={{ animationDelay: '4s', animationDuration: '13s' }}>❤️</div>
        <div className="absolute left-[20%] text-2xl text-red-200 animate-fall-slow" style={{ animationDelay: '7s', animationDuration: '15s' }}>🎄</div>
        <div className="absolute left-[70%] text-3xl text-red-300 animate-fall-slow" style={{ animationDelay: '3s', animationDuration: '11.5s' }}>🎄</div>
      </div>
      <div className="text-center max-w-2xl animate-fade-in relative z-10">
        <div className="text-7xl mb-6">🎄</div>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4">
          <span className="text-zinc-800">Calendrier </span>
          <span className="text-red-600">de l&apos;Avent</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 mb-12">
          24 surprises à découvrir
        </p>
        <button
          onClick={onStart}
          className="px-10 py-4 text-lg font-medium text-white bg-red-600 rounded-full hover:bg-red-700 shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 transform hover:scale-105 transition-all duration-300"
        >
          Commencer
        </button>
      </div>
    </div>
  );
};
