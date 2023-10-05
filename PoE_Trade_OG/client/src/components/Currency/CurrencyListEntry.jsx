import React from 'react';
import {images} from '../../assets/Images.jsx'

const CurrencyListEntry = ({currObj, divine}) => {

  const divConversion = () => {
    return (currObj.chaosEquivalent / divine).toFixed(1)
  }

  return(
    <>
      <tbody>
        <tr className="text-center border">
          <td colSpan="2">{currObj.currencyTypeName}</td>
          <td>{currObj.chaosEquivalent.toFixed(1)}</td>
          <td>{divConversion()}</td>
        </tr>
      </tbody>
    </>
  )

}

export default CurrencyListEntry