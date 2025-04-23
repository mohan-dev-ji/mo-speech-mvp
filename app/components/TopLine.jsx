import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

function TopLine({ selectedPECs, handleClearTopLine, handlePlaySentence }) {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToLists = async () => {
    try {
      // Load current lists
      const res = await fetch('/api/loadPecsLists');
      const currentLists = await res.json();
  
      // Add the new list
      const newList = {
        id: Date.now(),
        pecs: selectedPECs,
      }
      currentLists.push(newList);
  
      // Save the updated lists
      await fetch('/api/savePecsLists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentLists),
      });
  
      console.log('List saved successfully!');
      setShowAlert(true);
    } catch (error) {
      console.error('Error saving list:', error);
    }
  };

  return (
    <>
      <div>
        <div 
          className="bg-white h-20 flex items-center justify-between px-4 shadow-lg mb-4"
          style={{ height: '120px' }}
          onClick={handlePlaySentence} 
        >
          <div className="flex space-x-4">
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
        <div className="justify-center flex mb-4">
          <button
            onClick={handleAddToLists}
            className="bg-green-600 text-white px-4 py-2 mt-2 rounded"
          >
            Add to Lists
          </button>
        </div>
      </div>

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Success!</AlertDialogTitle>
            <AlertDialogDescription>
              Your sequence of PECs has been added to the lists page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default TopLine;