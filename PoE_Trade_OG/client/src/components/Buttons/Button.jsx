import React, {useState, useEffect} from 'react';

const Button = ({setView}) => {
  return(
    <div className="min-w-fit px-4 text-xl">
      <ul>
        <li className="border px-4 text-center">
          <button onClick={(e) => setView('gems')}>Gems</button>
        </li>

        <li className="border px-4 text-center">
          <button onClick={(e) => setView('awakened')}>Awakened Gems</button>
        </li>
      </ul>
    </div>

  )
}

export { Button }