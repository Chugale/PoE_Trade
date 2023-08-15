import React from 'react';
import axios from 'axios';


const API_Calls = {
  getCurrency: () =>
    axios({
      method: 'GET',
      url: '/api/currency'
    })


}

export default API_Calls