import { useEffect, useRef } from "react";

// Store global audio instance for optional external use
let globalAudio: HTMLAudioElement | null = null;

export const playLoveMusic = () => {
  if (globalAudio) {
    globalAudio.play().catch((e) => console.warn("Playback failed:", e));
  }
};

const LoveMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Smooth volume fade-in utility
  const fadeInVolume = (audio: HTMLAudioElement, targetVolume = 0.5, step = 0.01, interval = 100) => {
    let vol = 0;
    audio.volume = 0;

    const fade = setInterval(() => {
      if (vol < targetVolume) {
        vol = Math.min(vol + step, targetVolume);
        audio.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, interval);
  };

  useEffect(() => {
    const audio = new Audio("/Love.mp3");
    audio.loop = true;
    audioRef.current = audio;
    globalAudio = audio;

    const handleFirstClick = () => {
      audio
        .play()
        .then(() => fadeInVolume(audio))
        .catch((e) => console.warn("Playback blocked:", e));

      document.body.removeEventListener("click", handleFirstClick);
    };

    document.body.addEventListener("click", handleFirstClick);

    return () => {
      audio.pause();
      document.body.removeEventListener("click", handleFirstClick);
      globalAudio = null;
    };
  }, []);

  return null; // No UI rendered
};

export default LoveMusicPlayer;
