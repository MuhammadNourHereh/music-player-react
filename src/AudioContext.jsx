import React, { createContext, useEffect, useRef, useState } from 'react';

// Create Context
export const AudioContext = createContext();

const tracksList = [
  'src/tracks/Bergentrückung_music.ogg',
  'src/tracks/Bird_That_Carries_You_Over_A_Disproportionately_Small_Gap_music.ogg'
]

// Provide Context
export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null); // Reference to the audio element
  const [track, setTrack] = useState(tracksList[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [title, setTitle] = useState('title')
  const [subtitle, setSubtitle] = useState('subtitle')
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Play the audio
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  // Pause the audio
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextTrack = () => {
    const currentIndex = tracksList.indexOf(track); // Find the current track index
    const nextIndex = (currentIndex + 1) % tracksList.length; // Loop back to the start if at the end
    const nextTrack = tracksList[nextIndex]; // Get the next track

    setTrack(nextTrack); // Update the track state

    // Reload the audio with the new track
    if (audioRef.current) {
      audioRef.current.load(); // Reload the audio element
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error); // Auto-play the next track
    }
  };

  const previousTrack = () => {
    const currentIndex = tracksList.indexOf(track); // Find the current track index
    const previousIndex = (currentIndex - 1 + tracksList.length) % tracksList.length;
    const previousTrack = tracksList[previousIndex]; // Get the next track

    setTrack(previousTrack); // Update the track state

    // Reload the audio with the new track
    if (audioRef.current) {
      audioRef.current.load(); // Reload the audio element
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error); // Auto-play the next track
    }
  };

  // Seek audio to a specific time
  const seekAudio = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  // Update current time and duration
  useEffect(() => {
    const audioElement = audioRef.current;

    const updateProgress = () => {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration || 0);
    };

    if (audioElement) {
      audioElement.addEventListener('timeupdate', updateProgress);
      audioElement.addEventListener('loadedmetadata', updateProgress);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('timeupdate', updateProgress);
        audioElement.removeEventListener('loadedmetadata', updateProgress);
      }
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        title,
        subtitle,
        isPlaying,
        currentTime,
        duration,
        playAudio,
        pauseAudio,
        seekAudio,
        nextTrack,
        previousTrack,
        audioRef,
      }}
    >
      {children}
      <audio ref={audioRef}>
        <source src={track} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </AudioContext.Provider>
  );
};
