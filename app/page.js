"use client"; 

import React, { useState, useEffect } from 'react';
import TopLine from './components/TopLine';
import PecsGrid from './components/PecsGrid';
import { useRouter } from 'next/navigation'; 

function Home() {

  const [pecs, setPecs] = useState([]);
  const [selectedPECs, setSelectedPECs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter(); 

  useEffect(() => {
    fetch('/api/pecs')
      .then((response) => response.json())
      .then((data) => {
        setPecs(data);
        setIsLoading(false); // Data is now loaded
      })
      .catch((error) => {
        console.error('Error fetching PECs:', error);
        setIsLoading(false); // Even in case of error, stop loading
      });
  }, []);

  const handleClearTopLine = () => {
    setSelectedPECs([]);
  };
  
  const handleAddToTopLine = (pec) => {
    setSelectedPECs([...selectedPECs, pec]);
    // Play the corresponding audio file
    const audio = new Audio(`/audio/${pec.replace('.svg', '.mp3')}`);
    audio.play();
  };

  const handlePlaySentence = () => {
    if (selectedPECs.length === 0) return;

    // Encode the selectedPECs array as a string to pass in the URL
    const pecsString = encodeURIComponent(JSON.stringify(selectedPECs));

    // Redirect to the playback page with the PECs array in the query
    router.push(`/playback?pecs=${pecsString}`);
  };

  const filteredPECs = pecs.filter((pec) =>
    pec.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state until PECs are fetched
  }

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
