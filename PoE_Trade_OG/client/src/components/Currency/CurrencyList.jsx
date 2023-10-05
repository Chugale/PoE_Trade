import React, {useEffect} from 'react';
import {images} from '../../assets/Images.jsx'
import CurrencyListEntry from './CurrencyListEntry.jsx'

const CurrencyList = ({currency, divine}) => {


  const listFilter = currency.map((currObj, ind) => <CurrencyListEntry currObj={currObj} key={ind} divine={divine}/>)


  return(
    <div>
      <table className="table-fixed text-xl">
        <thead>
          <tr className="text-center">
            <td className="font-semibold border px-4" colSpan="2">Name</td>
            <td className="font-semibold border px-2">Chaos{images.Chaos}</td>
            <td className="font-semibold border px-2">Divine{images.Divine}</td>
          </tr>
        </thead>

      {
        listFilter.length !== 0 ? listFilter : null
      }
      </table>
    </div>
  )

}

export default CurrencyList