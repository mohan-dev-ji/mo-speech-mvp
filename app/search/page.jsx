"use client"; 


import React, { useState, useEffect } from 'react';

import TopLine from '../components/TopLine';
import SearchBar from '../components/SearchBar';
import PecsGrid from '../components/PecsGrid';
import { useRouter } from 'next/navigation'; 


function Search() {

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
  

  // const handleAddToTopLine = (pec) => {
  //   setSelectedPECs([...selectedPECs, pec]);
  //   // Play the corresponding audio file
  //   const audio = new Audio(`/audio/${pec.replace('.svg', '.mp3')}`);
  //   audio.play();
  // };
  
  const handleAddToTopLine = (pecs) => {
    console.log('handleAddToTopLine called with:', pecs);
    // Ensure pecs is an array, even if a single string is passed
    const pecsArray = Array.isArray(pecs) ? pecs : [pecs];
    // Process each item in the array
    pecsArray.forEach((pec) => {
      if (typeof pec === 'string') {
        // Check if the PEC ends with '.svg'
        
        if (!pec.endsWith('.svg')) {
          pec = `${pec}.svg`;
        }
  
        // Add to the selectedPECs state
        setSelectedPECs((prevSelectedPECs) => [...prevSelectedPECs, pec]);
  
        // Play the corresponding audio file
        // const audio = new Audio(`/audio/${pec.replace('.svg', '.mp3')}`);
        // audio.play();
      } else {
        console.error('Invalid PEC type:', pec);
      }
    });
  };

  // const handlePlaySentence = () => {
  //   if (selectedPECs.length === 0) return;
  //   console.log("selected pecs:", selectedPECs);
  //   let currentIndex = 0;
  //   const playNextAudio = () => {
  //     if (currentIndex < selectedPECs.length) {
  //       const pec = selectedPECs[currentIndex];
  //       const audio = new Audio(`/audio/${pec.replace('.svg', '.mp3')}`);
  //       audio.play();
  //       audio.onended = () => {
  //         currentIndex += 1;
  //         playNextAudio();
  //       };
  //     }
  //   };
  //   playNextAudio();
  // };

  const handlePlaySentence = () => {
    if (selectedPECs.length === 0) return;

    // const router = useRouter(); // Initialize the router

    // Encode the selectedPECs array as a string to pass in the URL
    const pecsString = encodeURIComponent(JSON.stringify(selectedPECs));

    // Redirect to the playback page with the PECs array in the query
    router.push(`/playback?pecs=${pecsString}`);
  };

  const filteredPECs = searchQuery ? pecs.filter((pec) =>
    pec.toLowerCase().includes(searchQuery.toLowerCase())
  )
  : [];


  return (
    <>
      {/* Main Content */}
      <div>
      <TopLine 
          selectedPECs={selectedPECs}
          handleClearTopLine={handleClearTopLine}
          handlePlaySentence={handlePlaySentence}
        />
      {/* Search Bar */}
      <SearchBar 
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          pecs={pecs}
          handleAddToTopLine={handleAddToTopLine}
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

export default Search;
