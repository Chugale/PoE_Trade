import React, {useEffect, useState} from 'react';
import axios from 'axios';

const div = 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png'

const GemsEntry = ({gemObj}) => {
  const [types, setTypes] = useState('')

  const baseName = () => {
    let fullName = gemObj.name.split(' ').slice(1).join(' ');
    axios.get('/db/gem_weight',{
      params: {
        name: fullName
      }
    })
    .then((response) => {
      if(response.data.length  >= 1){
        setTypes(response.data[0])
      } else {
        setTypes({superior: 0, anomalous: 0, divergent: 0, phantasmal: 0})
      }
    })
    .catch((error) => {
      console.log('this is react error', error)
    })
  };


  useEffect(() => {
    baseName()
  }, [gemObj])

  return (
    <tr className="flex-box odd:bg-gray-400 even:bg-gray-300">
      <td className="px-2 py-2">{gemObj.name}</td>
      <td className="px-2 py-2">
        {/* L/Q */}
        {gemObj.variant}</td>
      <td className="flex px-2 py-2 justify-between">{gemObj.divineValue}
        <img src={div} className="flex max-w-5 max-h-5 justify-between"></img></td>
        <td className="px-2 py-2 text-center">{types.superior}</td>
        <td className="px-2 py-2 text-center">{types.divergent}</td>
        <td className="px-2 py-2 text-center">{types.anomalous}</td>
        <td className="px-2 py-2 text-center">{types.phantasmal}</td>
    </tr>
  )

}

export default GemsEntry