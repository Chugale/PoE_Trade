const axios = require('axios');

//edit league as needed

const GemsAPI = `https://poe.ninja/api/data/itemoverview?league=Crucible&type=SkillGem`;
const CurrencyAPI = 'https://poe.ninja/api/data/currencyoverview?league=Crucible&type=Currency'

module.exports = {
  getCurrency: (req, res) => {
    const options = {
      method: 'GET',
      url: CurrencyAPI
    }
    return axios(options)
      .then((response) => {
        let currArr = response.data.lines;
        const allowed = ['Secondary Regrading Lens', 'Prime Regrading Lens', 'Divine Orb', 'Mirror of Kalandra', 'Awakened Sextant', 'Mirror Shard'];
        return currArr.filter((currObj) => allowed.includes(currObj.currencyTypeName)
        )
      })
      .then((setting) =>{
        const findDiv = (el) => el.currencyTypeName === 'Divine Orb'
        let index = setting.findIndex(findDiv)
        let div = setting.splice(index, 1)
        setting.unshift(div)
        return setting
      })
      .then((result) => {
        res.status(200).send(result)
      })
      .catch(err => {
        console.log('API_CONTROLLER Currency error', err)
        res.sendStatus(500)
      })
  },

  getGems: async (req, res) => {
    try {
      const response = await axios.get(GemsAPI);
      const tooBig = response.data.lines.filter((gemObj) => gemObj.gemLevel >= 20 && gemObj.count >= 5);
      const chunkSize = 15;
      const result = {};

      const chunkArr = []
      for(let i = 0; i < tooBig.length; i += chunkSize) {
        chunkArr.push(tooBig.slice(i, i + chunkSize))
      }
      result.regular = chunkArr
      res.status(200).send(result)
    } catch(err) {
      console.log('API_CONTROLLER Gem error', err)
      res.sendStatus(500)
    }
  }
}
