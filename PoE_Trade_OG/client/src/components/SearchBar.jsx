import React, {useState} from 'react'

const Search = ({searchInput, setSearchInput}) => {

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
}
  const resetInput = (event) => {
    event.preventDefault()
    setSearchInput("")
  }
  return (
    <form onSubmit={resetInput}>
      <input className="px-2"
        type="text"
        size="20"
        placeholder="Search by gem name..."
        value={searchInput}
        onChange={handleSearch}>
      </input>
      <button className="border rounded-md bg-black text-white px-2">Enter to reset</button>
    </form>
  )
}

export default Search