import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import {Button} from './Buttons/Button.jsx';
// import Api_Calls from '../api_calls/Api_calls.jsx'
import CurrencyList from './Currency/CurrencyList.jsx'

const App = () => {
  const [view, setView] = useState('home');
  const [divine, setDivine] = useState (null);
  const [currency, setCurrency] = useState([]);
  const [mirror, setMirror] = useState(null)

  const currencyData = () => {
    axios.get('/api/currency')
    .then((res) => {
      let div = res.data[0]
      let curr = res.data.slice(1)
      setDivine(div[0].chaosEquivalent)
      // console.log(curr)
      setCurrency(curr)
    })
    .catch((err) => {
      console.log('FE Currency Error', err)
    })
  }


  useEffect(() => {
    currencyData()
  }, [])


  const RenderView = () => {
    switch (view) {
      case 'home':
        return (
          <div>
            <h1>Welcome to Aggregated PoE Market Data</h1>
            {/* <CurrencyList
              currency={currency}
              divine={divine}/> */}
            <label>Divine Orb:{divine}</label>
            <CurrencyList currency={currency} divine={divine} />
          </div>
        );
      case 'gems':
        return (
          <div>gem view</div>
        );
      case 'sextants':
        return (
          <div>sextant pricing</div>
        );
      case 'cards':
        return (
          <div>div card pricing</div>
        )
    };
  }

  return(
    <div>
      {/* <Button setView={setView}/> */}
      {RenderView()}
    </div>
  )

}

export default App