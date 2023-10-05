const axios = require('axios');

//edit league as needed

const GemsAPI = `https://poe.ninja/api/data/itemoverview?league=Crucible&type=SkillGem`;
const CurrencyAPI = 'https://poe.ninja/api/data/currencyoverview?league=Crucible&type=Currency';
const BeastAPI = 'https://poe.ninja/api/data/itemoverview?league=Crucible&type=Beast'

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

      const awake = response.data.lines.filter((gemObj) => gemObj.name.includes('Awakened') && gemObj.count >= 3 && gemObj.gemLevel >= 5);

      const result = {};

      const chunkArrReg = []
      const chunkArrAwa = []

      for(let i = 0; i < tooBig.length; i += chunkSize) {
        chunkArrReg.push(tooBig.slice(i, i + chunkSize))
      }
      for(let i = 0; i < awake.length; i += chunkSize) {
        chunkArrAwa.push(awake.slice(i, i + chunkSize))
      }

      result.regular = chunkArrReg
      result.awakened = chunkArrAwa
      res.status(200).send(result)
    } catch(err) {
      console.log('API_CONTROLLER Gem error', err)
      res.sendStatus(500)
    }
  },
  getBeasts: (req, res) => {
    const options = {
      method: 'GET',
      url: BeastAPI
    }
    return axios(options)
      .then((response) => {
        let currArr = response.data.lines;
        const allowed = ['Vivid Watcher', 'Wild Brambleback'];
        return currArr.filter((currObj) => allowed.includes(currObj.name)
        )
      })
      .then((result) => {
        res.status(200).send(result)
      })
      .catch((err) => {
        console.log('API BEAST ERROR,', err)
      })
  }

}
