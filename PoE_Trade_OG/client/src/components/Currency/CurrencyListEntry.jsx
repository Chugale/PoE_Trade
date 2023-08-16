import React from 'react';

const CurrencyListEntry = ({currObj, divine}) => {

  const chaosOrb = 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png';
  const divineOrb = 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png';

  const divConversion = () => {
    return (currObj.chaosEquivalent / divine).toFixed(1)
  }

  return(
    <div className="flex justify-between">
      <label>
        {currObj.currencyTypeName}:
      {divConversion()}
      <img src={divineOrb} className="max-w-5 max-h-5 inline"></img> OR

      {currObj.chaosEquivalent.toFixed(1)}
      <img src={chaosOrb} className="max-w-5 max-h-5 inline"></img>
      </label>
    </div>
  )

}

export default CurrencyListEntry