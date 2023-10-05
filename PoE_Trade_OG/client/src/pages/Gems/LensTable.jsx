import React, {useState} from 'react';
import {images} from '../../assets/Images.jsx';

const LensTable = ({prime, secondary, divine}) => {

  return (
    <table className="table-auto">
      <tbody>
        <tr>
          <td className="border px-2" colSpan="2">Prime({images.Chaos}:{images.Divine})</td>
          <td className="border px-2">{prime}</td>
          <td className="border px-2">{(prime/divine).toFixed(1)}</td>
          <td className="border px-2" colSpan="2">Second({images.Chaos}:{images.Divine})</td>
          <td className="border px-2">{secondary}</td>
          <td className="border px-2">{(secondary/divine).toFixed(1)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default LensTable