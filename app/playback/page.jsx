"use client"; // Ensure this is a client-side component

import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';

export default function PlaybackPage() {
  const router = useRouter();
  const [pecs, setPecs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const pecsParam = searchParams.get('pecs');

    if (pecsParam) {
      setPecs(JSON.parse(decodeURIComponent(pecsParam)));
      setIsPlaying(true);
    }
  }, []);

  useEffect(() => {
    if (isPlaying && pecs.length > 0) {
      const currentPEC = pecs[currentIndex];
      const audio = new Audio(`/audio/${currentPEC.replace('.svg', '.mp3')}`);
      audio.play();

      audio.onended = () => {
        if (currentIndex < pecs.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsPlaying(false); // Stop when all PECs are played
        }
      };
    }
  }, [currentIndex, isPlaying, pecs]);

  const handlePlayAgain = () => {
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  const handleGoBack = () => {
    // Store the PECs in history state
    const state = { pecs: pecs };
    // Use replaceState to update the current history entry
    window.history.replaceState(state, '', window.location.href);
    // Go back to the previous page
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {pecs.length > 0 && (
        <img
          src={`/pecs/${pecs[currentIndex]}`}
          alt={pecs[currentIndex]}
          className="max-w-full max-h-full w-auto h-auto"
          style={{ maxWidth: '90vw', maxHeight: '90vh' }}
        />
      )}

      <div className="flex space-x-4">
        <button
          onClick={handlePlayAgain}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Play Again
        </button>

        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          Back
        </button>
      </div>
    </div>
  );
}
