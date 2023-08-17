import React, {useState, useEffect} from 'react';

const Button = ({setView}) => {
  return(
    <div className="min-w-fit">
      <ul>
        <li>
          <button onClick={(e) => setView('gems')}>Gems</button>
        </li>

        <li>
          <button onClick={(e) => setView('awakened')}>Awakened Gems</button>
        </li>

        <li>
          <button onClick={(e) => setView('cards')}>Cards</button>
        </li>
      </ul>
    </div>

  )
}

export { Button }