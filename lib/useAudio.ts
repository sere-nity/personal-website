import { useCallback } from 'react';

export const useAudio = () => {
  const playClickSound = useCallback(() => {
    const audio = new Audio('/ES_Pen, Ballpoint Pen, Write On Paper - Epidemic Sound - 16877-17609.wav');
    audio.volume = 0.3; // Set volume to 30%
    audio.play().catch(error => {
      console.log('Audio playback failed:', error);
    });
  }, []);

  return { playClickSound };
}; 