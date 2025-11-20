import { useState, useMemo } from 'react';

const generateConfetti = () => {
  const emojis = ['🎉', '✨', '🎊', '⭐', '💫'];
  return Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    emoji: emojis[i % emojis.length],
    left: `${(i * 37) % 100}%`,
    delay: `${(i * 0.03) % 0.5}s`,
    duration: `${2 + (i % 3)}s`
  }));
};

export const useConfetti = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiItems = useMemo(() => generateConfetti(), []);

  const triggerConfetti = () => {
    setShowConfetti(true);
  };

  const stopConfetti = () => {
    setShowConfetti(false);
  };

  return {
    showConfetti,
    confettiItems,
    triggerConfetti,
    stopConfetti
  };
};
