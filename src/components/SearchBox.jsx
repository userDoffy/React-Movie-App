import React from "react";

function SearchBox({ searchValue, setSearchValue }) {
  return (
    <div className="col-md-6 col-10">
      <input
        className="form-control"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for a movie..."
        style={{ fontSize: "0.9rem" }}
      /> 
    </div>
  );
}

export default SearchBox;
