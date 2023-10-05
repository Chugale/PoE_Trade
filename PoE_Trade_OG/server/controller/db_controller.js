const Gem_Weight = require('../../database/query/dbGemWeight')

module.exports = {
  gem_Weight: (req, res) => {
    const name = req.query.name;
    Gem_Weight({name})
      .then((data) => {
        // console.log('this is data', data.results)
        res.status(200).send(data.results)
      })
      .catch((err) => {
        console.log(`ERROR CONTROLLERS GET GEMS`, err)
        res.sendStatus(500)
      })
  },
}