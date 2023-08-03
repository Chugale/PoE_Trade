import {useState} from 'react';


type ButtonProps = {
  view: string;
  setView: string;
};

const Buttons = ({view, setView}:ButtonProps) => {

  return (
    <div>
      <button onClick={setView('gems')}>Regular Gems</button>
      <button onClick={setView('awakened')}>Awakened Gems</button>
    </div>

  )
}

export default Buttons