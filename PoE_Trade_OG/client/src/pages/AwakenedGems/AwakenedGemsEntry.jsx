import React, {useEffect, useState} from 'react';
import {images} from '../../assets/Images.jsx';
import axios from 'axios';


const GemsEntry = ({gemObj}) => {

  return (
    <tr className="flex-box odd:bg-gray-400 even:bg-gray-300">
      <td className="px-2 py-2">{gemObj.name}</td>
      <td className="px-2 py-2">
        {/* L/Q */}
        {gemObj.variant}</td>
      <td className="flex px-2 py-2 justify-between">{gemObj.divineValue}{images.Divine}</td>
    </tr>
  )

}

export default GemsEntry