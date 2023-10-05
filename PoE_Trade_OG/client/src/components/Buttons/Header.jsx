import React, {useState, useEffect} from 'react';

const Header = ({setView}) => {
  return(
    <div className="text-center ">
      <h1>
        <button onClick={(e) => setView('home')}>Path of Exile Gem Weight Crafting
        </button>
      </h1>
    </div>

  )
}

export { Header }