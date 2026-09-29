
import React from "react";

const SearchFilter = ({
  Categories,
  Sort,
  setSort,
  Input,
  setInput,
  Category,
  setCategory
}) => {

  return (
    <div
      className="w-full px-4 py-3 bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950 text-white flex flex-wrap items-center justify-between gap-3 shadow-md"
      id="Filter-Container"
    >

      <input
        value={Input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Products..."
        type="text"
        className="w-full sm:w-64 bg-gray-900 border border-purple-700 text-white placeholder-gray-400 px-4 py-2 rounded-lg outline-none focus:border-purple-500"
      />

      <select
        value={Sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full sm:w-48 bg-gray-900 border border-purple-700 text-white px-3 py-2 rounded-lg outline-none"
      >
        <option value="default">Default</option>
        <option value="low">Low To High</option>
        <option value="high">High To Low</option>
      </select>

      <div className="w-full sm:w-auto flex flex-wrap justify-center gap-2">

        {Categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold capitalize whitespace-nowrap transition ${
              Category === item
                ? "bg-purple-600 text-white"
                : "bg-gray-900 text-gray-300 hover:bg-purple-900"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

    </div>
  );
};

export default SearchFilter;