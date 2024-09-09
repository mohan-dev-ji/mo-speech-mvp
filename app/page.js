"use client"; 


import React, { useState, useEffect } from 'react';

import TopLine from './components/TopLine';

import PecsGrid from './components/PecsGrid';

import { useRouter } from 'next/navigation'; 

function Home() {

  const [pecs, setPecs] = useState([]);
  const [selectedPECs, setSelectedPECs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter(); 

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

    // const router = useRouter(); // Initialize the router

    // Encode the selectedPECs array as a string to pass in the URL
    const pecsString = encodeURIComponent(JSON.stringify(selectedPECs));

    // Redirect to the playback page with the PECs array in the query
    router.push(`/playback?pecs=${pecsString}`);
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
            pecs={pecs}
        />
        
        </div>
      </>
    )
};

export default Home;
