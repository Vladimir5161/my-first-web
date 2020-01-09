import React from "react";
import { connect } from "react-redux"

const SearchField = ({searchField } ) => {
    return (
      <div className={searchField}>
        <input type="text" />
        <button className="searchButton">Search</button>
      </div>
    );
  }

export default connect(null)(SearchField);
