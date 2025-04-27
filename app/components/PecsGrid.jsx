function PecsGrid({ filteredPECs, handleAddToTopLine }) {

  
  return (
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {filteredPECs.map((pec, index) => (
        <div 
        key={index} 
        className="bg-white p-2 rounded-md border-4 border-gray-200"
        onClick={() => handleAddToTopLine(pec)}
        >
          <img src={`/pecs/${pec}`} alt={pec} className="max-w-full h-auto mx-auto cursor-pointer" />
        </div>
      ))}
    </div>
  )
};

export default PecsGrid;