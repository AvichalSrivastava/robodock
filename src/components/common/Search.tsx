import React from "react";
interface SearchProps {
  searchField: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ searchField, onSearchChange }) => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="Search Monsters"
        className="search-input"
        value={searchField}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;