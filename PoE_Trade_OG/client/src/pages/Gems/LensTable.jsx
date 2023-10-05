import React, {useState} from 'react';
import {images} from '../../assets/Images.jsx';

const LensTable = ({prime, secondary, divine}) => {

  return (
    <table className="table-auto">
      <tbody>
        <tr>
          <td className="border px-2 font-bold" colSpan="2">Prime</td>
          <td className="border px-2">{prime}{images.Chaos}</td>
          <td className="border px-2">{(prime/divine).toFixed(1)}{images.Divine}</td>
          <td className="border px-2 font-bold" colSpan="2">Secondary</td>
          <td className="border px-2">{secondary}{images.Chaos}</td>
          <td className="border px-2">{(secondary/divine).toFixed(1)}{images.Divine}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default LensTable