import { useState, useEffect } from 'react'

import './App.css';
import './Buttons.tsx'

function App() {
  const [view, setView] = useState('home')

  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <div>
            Welcome To PoE Trade
            <Buttons view={view} setView={setView}/>
          </div>
        );
    }
  }
  return (
    <div>
      {renderView()}
    </div>
  )
}

export default App
