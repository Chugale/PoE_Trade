const pool = require('../index.js');

module.exports = ({name}) => {

  const query = {
    text: `SELECT superior AS superior, anomalous, divergent, phantasmal
      FROM gem_weight
      WHERE name=$1`,
      values: [name]
  };

  return pool.connect()
    .then((client) => {
      return client.query(query)
        .then((response) => {
          // console.log('this is db response', response)
          client.release()
          return {
            name: name,
            results: response.rows
            }
        })
        .catch((err) => {
          client.release()
          console.log('Get Reviews error', err)
          return err
        })
    })

}