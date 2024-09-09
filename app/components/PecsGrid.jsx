function PecsGrid({ filteredPECs, handleAddToTopLine }) {

  
  return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {filteredPECs.map((pec, index) => (
        <div 
        key={index} 
        className="bg-white p-2 shadow-md rounded-md border-4 border-orange-500"
        onClick={() => handleAddToTopLine(pec)}
        >
          <img src={`/pecs/${pec}`} alt={pec} className="w-24 h-24 mx-auto cursor-pointer" />
        </div>
      ))}
    </div>
  )
};

export default PecsGrid;