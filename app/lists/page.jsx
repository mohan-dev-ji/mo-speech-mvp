
"use client"; 

import React, { useEffect, useState } from 'react';

function Lists() {
  const [savedLists, setSavedLists] = useState([]);

  useEffect(() => {
    fetch('/api/loadPecsLists')
      .then((response) => response.json())
      .then((data) => {
        setSavedLists(data);
      })
      .catch((error) => console.error('Error loading PECs Lists:', error));
  }, []);

  console.log(savedLists);
  

  
  const handlePlayList = (pecs) => {
    let currentIndex = 0;
    const playNextAudio = () => {
      if (currentIndex < pecs.length) {
        const audio = new Audio(`/audio/${pecs[currentIndex].replace('.svg', '.mp3')}`);
        audio.play();
        audio.onended = () => {
          currentIndex += 1;
          playNextAudio();
        };
      }
    };
    playNextAudio();
  };

  const handleDeleteList = async (id) => {
    const updatedLists = savedLists.filter(list => list.id !== id);

    await fetch('/api/savePecsLists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedLists),
    });

    setSavedLists(updatedLists);
  };

  return (
    <div className="ml-64 p-8">
      <h1 className="text-2xl font-bold mb-4">Saved Lists</h1>
      {savedLists.map((list) => (
        <div key={list.id} className="flex items-center mb-4">
          <div className="flex-1">
            {list.pecs.map((pec, index) => (
              <img key={index} src={`/pecs/${pec}`} alt={pec} className="w-12 h-12 inline-block mr-2" />
            ))}
          </div>
          <button
                onClick={() => handlePlayList(list.pecs)}
                className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
            >
                Play
            </button>
            <button
                onClick={() => handleDeleteList(list.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Delete
            </button>
            </div>
        ))}
        </div>
    );
    }

export default Lists;
