import React, {useState} from 'react';
import {images} from '../../assets/Images.jsx';

const BeastTable = ({level, reroll, divine}) => {

  return (
    <table className="table-auto px-4">
      <thead>
        <tr>
          <th className="border px-2" colSpan="3">Wild Brambleback</th>
          <th className="border px-2" colSpan="3">Vivid Watcher</th>
        </tr>
        <tr>
          <th className="border px-2">{images.Chaos}</th>
          <th className="border px-2">{images.Divine}</th>
          <th className="border px-2">/{images.Divine}</th>
          <th className="border px-2">{images.Chaos}</th>
          <th className="border px-2">{images.Divine}</th>
          <th className="border px-2">/{images.Divine}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 text-center">{level[0]}</td>
          <td className="border px-2 text-center">{level[1]}</td>
          <td className="border px-2 text-center">{(divine / level[0]).toFixed(1)}/{images.Divine}</td>
          <td className="border px-2 text-center">{reroll[0]}</td>
          <td className="border px-2 text-center">{reroll[1]}</td>
          <td className="border px-2 text-center">{(divine / reroll[0]).toFixed(1)}/{images.Divine}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default BeastTable