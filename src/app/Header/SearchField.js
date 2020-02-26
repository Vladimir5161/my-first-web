import React from "react";

const SearchField = ({searchField } ) => {
    return (
      <div className={searchField}>
        <input type="text" />
        <button className="searchButton">Search</button>
      </div>
    );
  }

export default SearchField;
