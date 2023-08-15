import React, {useState, useEffect} from 'react';

const Button = ({setView}) => {
  return(
    <div>
      <div>
        <button onClick={(e) => setView('gems')}>Gems</button>
      </div>

      <div>
        <button onClick={(e) => setView('sextants')}>Sextants</button>
      </div>

      <div>
        <button onClick={(e) => setView('cards')}>Cards</button>
      </div>
    </div>

  )
}

export { Button }