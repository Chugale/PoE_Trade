const dbSuperior = require('../../database/query/dbSuperior')

module.exports = {
  dbSuperior: (req, res) => {
    const name = req.query.name;
    dbSuperior({name})
      .then((data) => {
        // console.log('this is data', data.results)
        res.status(200).send(data.results)
      })
      .catch((err) => {
        console.log(`ERROR CONTROLLERS GETREVIEWS`, err)
        res.sendStatus(500)
      })
  },
}