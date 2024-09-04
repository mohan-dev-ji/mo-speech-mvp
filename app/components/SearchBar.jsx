function SearchBar({ setSearchQuery, searchQuery }) {
    return (
        <div className="flex mb-4 items-center">
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
          className="absolute right-2 text-gray-500 pr-10"
          >
            X {/* Unicode character for "X" */}
          </button>
        )}
      </div>
    )
};

export default SearchBar;