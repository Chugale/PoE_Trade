import React from 'react';

const CurrencyListEntry = ({currObj, divine}) => {

  const conversion = () => {
    return (currObj.chaosEquivalent / divine).toFixed(2)
  }

  return(
    <div>
      <label>
        {currObj.currencyTypeName}:
      </label>
      {conversion()}
    </div>
  )

}

export default CurrencyListEntry