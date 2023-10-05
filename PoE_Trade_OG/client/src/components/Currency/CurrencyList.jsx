import React, {useEffect} from 'react';
import CurrencyListEntry from './CurrencyListEntry.jsx'

const CurrencyList = ({currency, divine}) => {


  const listFilter = currency.map((currObj, ind) => <CurrencyListEntry currObj={currObj} key={ind} divine={divine}/>)


  return(
    <div>

      {
        listFilter.length !== 0 ? listFilter : <p>Loading...</p>
      }
    </div>
  )

}

export default CurrencyList