import React from "react";

function ListItemCard({ key, list, onPlay, onDelete }) {
    return (
        <div 
            className="flex justify-between items-center border p-4 rounded-lg mb-2 cursor-pointer hover:bg-gray-100"
            onClick={() => onPlay(list.pecs)}
        >
          <div className="flex-1">
            {list.pecs.map((pec, index) => (
              <img key={index} src={`/pecs/${pec}`} alt={pec} className="w-20 h-20 inline-block mr-2" />
            ))}
          </div>
          {/* <button
                onClick={() => onPlay(list.pecs)}
                className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
            >
                Play
            </button> */}
            <button
                onClick={(e) => {
                e.stopPropagation(); // Prevents triggering onPlay when clicking the delete button
                onDelete(list.id);
                }}
                className="text-red-500 hover:text-red-700"
            >
                <img src="/icons/trash_can_icon.svg" alt="Delete" className="w-6 h-6" />
            </button>
          </div>
    )
};

export default ListItemCard;