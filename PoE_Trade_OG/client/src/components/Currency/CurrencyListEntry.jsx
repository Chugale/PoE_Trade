import React from 'react';
import {images} from '../../assets/Images.jsx'

const CurrencyListEntry = ({currObj, divine}) => {

  const divConversion = () => {
    return (currObj.chaosEquivalent / divine).toFixed(1)
  }

  return(
    <div className="flex justify-between">
      <label>
        {currObj.currencyTypeName}:
      {divConversion()}{images.Divine} OR

      {currObj.chaosEquivalent.toFixed(1)}{images.Chaos}
      </label>
    </div>
  )

}

export default CurrencyListEntry