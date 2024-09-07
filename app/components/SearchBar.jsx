import React, { useState, useEffect } from 'react';




function SearchBar({ setSearchQuery, searchQuery, speechRecognition }) {
  const [isListening, setIsListening] = useState(false);

  // Handle Speech Recognition
  const handleSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Your browser doesn't support speech recognition. Try Chrome.");
      return;
    }

    alert('Press ok to start recording')

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      setSearchQuery(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event);
      setIsListening(false);
    };

    // Alert box to prompt the user
    // alert('Please speak into your device and press OK when done.');

    recognition.start();
  };
  return (
      <div className="mb-4">
        <div className='flex items-center'>
      
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search PECs..."
        className="w-full p-2 border border-gray-300 rounded-full shadow-sm pr-10 pl-5"
      />
      {searchQuery && (
        <button
        onClick={() => setSearchQuery("")}
        className="absolute right-20 text-gray-500 pr-10"
        >
          X {/* Unicode character for "X" */}
        </button>
      )}
     


      {/* Microphone Icon */}
      <div className="mt-2 flex items-center pl-10">
        <button
          onClick={handleSpeechRecognition}
          className="text-gray-500 hover:text-gray-700"
          disabled={isListening}
        >
          <img src="/icons/microphone.svg" alt="Microphone" className="w-8 h-8" />
        </button>
        {isListening && (
          <p className="ml-2 text-gray-500">Listening...</p>
        )}
      </div>
      </div>
      
    </div>
  )
};

export default SearchBar;