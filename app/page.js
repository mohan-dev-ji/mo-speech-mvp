"use client"; // This makes the component a Client Component

// import path from 'path';
// import fs from 'fs';
import React, { useState, useEffect } from 'react';


export default function Home() {

  const [pecs, setPecs] = useState([]);
  const [selectedPECs, setSelectedPECs] = useState([]);

  const handleClearTopLine = () => {
    setSelectedPECs([]);
  };

  useEffect(() => {
    fetch('/api/pecs')
      .then((response) => response.json())
      .then((data) => setPecs(data))
      .catch((error) => console.error('Error fetching PECs:', error));
  }, []);
  console.log(pecs);
  

  const handleAddToTopLine = (pec) => {
    setSelectedPECs([...selectedPECs, pec]);
    // Play the corresponding audio file
    const audio = new Audio(`/audio/${pec.replace('.svg', '.mp3')}`);
    audio.play();
  };

  const handlePlaySentence = () => {
    if (selectedPECs.length === 0) return;
    let currentIndex = 0;
    const playNextAudio = () => {
      if (currentIndex < selectedPECs.length) {
        const pec = selectedPECs[currentIndex];
        const audio = new Audio(`/audio/${pec.replace('.svg', '.mp3')}`);
        audio.play();
        audio.onended = () => {
          currentIndex += 1;
          playNextAudio();
        };
      }
    };
    playNextAudio();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4">
      {/* Top Line */}
      <div 
        className="w-full max-w-3xl bg-white p-4 mb-8 shadow-md flex items-center cursor-pointer"
        style={{ height: '120px' }}
        onClick={handlePlaySentence} 
      >
        <div className="flex flex-grow space-x-4 overflow-x-auto">
          {selectedPECs.map((pec, index) => (
            <img key={index} src={`/pecs/${pec}`} alt={pec} className="w-20 h-20" />
          ))}
        </div>
        <button
           onClick={(e) => {
            e.stopPropagation(); // Prevents the click event from bubbling up to the top line
            handleClearTopLine();
          }}
          className="text-red-500 font-bold text-xl"
        >
          X
        </button>
      </div>

      {/* PECs Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {pecs.map((pec, index) => (
          <div 
          key={index} 
          className="bg-white p-2 shadow-md rounded-md border-4 border-orange-500"
          onClick={() => handleAddToTopLine(pec)}
          >
            <img src={`/pecs/${pec}`} alt={pec} className="w-24 h-24 mx-auto cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}


