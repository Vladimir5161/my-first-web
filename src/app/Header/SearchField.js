import React from "react";

class SearchField extends React.Component {
  render() {
    const { searchField } = this.props;
    return (
      <div className={searchField}>
        <input type="text" />
        <button className="searchButton">Search</button>
      </div>
    );
  }
}
export default SearchField;
