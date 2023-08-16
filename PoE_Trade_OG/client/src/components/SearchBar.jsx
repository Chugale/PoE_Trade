import React, {useState} from 'react'

const Search = ({searchInput, setSearchInput}) => {

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
}

  return (
    <label className="m-8">
      <input type="text"
        size="32"
        placeholder="Search by name..."
        value={searchInput}
        onChange={handleSearch}>
      </input>
    </label>
  )

}

export default Search