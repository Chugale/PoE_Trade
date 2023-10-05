import React, {useState, useEffect, lazy, Suspense} from 'react';
import axios from 'axios';
import {Button} from './Buttons/Button.jsx';
import CurrencyList from './Currency/CurrencyList.jsx'
import Search from './SearchBar.jsx'
import {Header} from './Buttons/Header.jsx'
import {images} from '../assets/Images.jsx'

import GemList from '../pages/Gems/Gems.jsx'
import AwakenedGems from '../pages/AwakenedGems/AwakenedGems.jsx'

const App = () => {
  const [view, setView] = useState('home');
  const [currency, setCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //currency
  const [divine, setDivine] = useState(null);
  const [prime, setPrime] =  useState('');
  const [secondary, setSecondary] = useState('');

  // pages
  const [gems, setGems] = useState([]);
  const [awakened, setAwakened] = useState([]);

  const currencyData = () => {
    axios.get('/api/currency')
    .then((res) => {
      let div = res.data[0]
      let curr = res.data
      setDivine(div.chaosEquivalent)
      for(let i = 0; i < curr.length; i++){
        if(curr[i].currencyTypeName.includes("Prime")){
          setPrime(curr[i].chaosEquivalent)
        }else if(curr[i].currencyTypeName.includes("Secondary")){
          setSecondary(curr[i].chaosEquivalent)
        }
      }
      setCurrency(curr)
    })
    .catch((err) => {
      console.log('FE Currency Error', err)
    })
  }
  const getGemsData = async() => {
    setIsLoading(true)
    try{
     const response = await axios.get('./api/gems')
      const chunkedReg = response.data.regular
      const chunkedAwa = response.data.awakened
      // console.log('test', chunkedAwa)

      const combinedDataReg = chunkedReg.reduce((acc, chunk) => [...acc, ...chunk], [])
      const combinedDataAwa = chunkedAwa.reduce((acc, chunk) => [...acc, ...chunk], [])

      setGems(combinedDataReg)
      setAwakened(combinedDataAwa)

      //THIS IS BEFORE CHUNKING ON SERVER SIDE
      // .then((response) => {
        // console.log('this is response', response.data.regular) //results in array of arrays, inner array of obj
        // setGems(response.data.regular)
        // setAwakened(response.data.awakened)
      // })
    }catch(err) {console.log('app side error', err  )}
      //THIS IS FOR PRE SERVER CHUNK
      // .catch(err => console.log('APP side error', err))
    setIsLoading(false)
  }


  useEffect(() => {
    currencyData()
    getGemsData()
  }, [])


  const RenderView = () => {
    switch (view) {
      case 'home':
        return (
          <div>
              <CurrencyList
                currency={currency}
                divine={divine} />
          </div>
        );
      case 'gems':
        return (
          <div>
            <GemList
              divine={divine}
              gems={gems}
              prime={prime}
              secondary={secondary} />
          </div>
        );
      case 'awakened':
        return (
          <div>
            <AwakenedGems
            divine={divine}
            awakened={awakened} />
          </div>
        )
    };
  }

  return(
    <div>
      <Header setView={setView}/>
      <section className="flex flex-row">
        <Button setView={setView}/>
        {RenderView()}
      </section>
    </div>
  )

}

export default App