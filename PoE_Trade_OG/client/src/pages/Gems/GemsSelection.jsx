import React, {useState} from 'react';

const GemsSelection = ({setSelection}) => {

  return(
    <label>
      <select
        onChange={(e) => setSelection(e.target.value)}>
        <option value="/">All</option>
        <option value="20">20</option>
        <option value="21">21</option>
      </select>
    </label>
  )

}

export default GemsSelection