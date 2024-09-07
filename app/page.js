"use client"; 


import React, { useState, useEffect } from 'react';

import TopLine from './components/TopLine';

import PecsGrid from './components/PecsGrid';

function Home() {

  const [pecs, setPecs] = useState([]);
  const [selectedPECs, setSelectedPECs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClearTopLine = () => {
    setSelectedPECs([]);
  };

  useEffect(() => {
    fetch('/api/pecs')
      .then((response) => response.json())
      .then((data) => setPecs(data))
      .catch((error) => console.error('Error fetching PECs:', error));
      console.log(pecs);
  }, []);
  

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
  };

  const filteredPECs = pecs.filter((pec) =>
    pec.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return (
      <>
        {/* Main Content */}
        <div>
        <TopLine 
            selectedPECs={selectedPECs}
            handleClearTopLine={handleClearTopLine}
            handlePlaySentence={handlePlaySentence}
          />
        {/* PECs Grid */}
        <PecsGrid 
            handleAddToTopLine={handleAddToTopLine}
            filteredPECs={filteredPECs}
        />
        
        </div>
      </>
    )
};

export default Home;
