import React, {useState, useEffect} from 'react';
// import GemsEntry from './GemsEntry.jsx';
import axios from 'axios';
import {images} from '../../assets/Images.jsx'
import Search from '../../components/SearchBar.jsx';
import AwakenedGemsEntry from './AwakenedGemsEntry.jsx';
import BeastTable from './BeastTable.jsx'

const AwakenedGems = ({divine, awakened}) => {
  const [searchInput, setSearchInput] = useState('');
  const [level, setLevel] = useState([]);
  const [reroll, setReroll] = useState([]);

  const getBeasts = () => {
    axios.get('/api/beasts')
    .then((response) => {
      // console.log('testing beast', response.data)
      let watcher = response.data[0]
      let leveler = response.data[1]
      if(response.data[0].name === "Vivid Watcher"){
        setReroll([watcher.chaosValue, watcher.divineValue])
        setLevel([leveler.chaosValue, leveler.divineValue])
      } else {
        setReroll([leveler.chaosValue, leveler.divineValue])
        setLevel([watcher.chaosValue, watcher.divineValue])
      }
    })
    .catch((error) => {
      console.log('beast frontend', error)
    })
  }

  useEffect(() => {
    getBeasts()
  }, [])

  let worth = awakened
    .filter((gemObj) => (gemObj.divineValue >= 1) === true)
    .filter((gemObj) => gemObj.name.toLowerCase().includes(searchInput.toLowerCase()))
    .map((gemObj, ind) => <AwakenedGemsEntry gemObj={gemObj} key={ind} />)

    const test = () => {
      console.log(level)
    }
    return (
      <div className="flex space-x-1">
        <section className="border relative overflow-y-auto max-h-[50rem]">
          <table className="px-2 border-spacing-5 py-3 divide-y divide-gray-300 bg-gray-500">
            <thead className="flex-box">
              <tr className="sticky top-0 bg-gray-500">
                <th scope="col" className=" px-2 py-2">Name</th>
                <th scope="col" className=" px-2 py-2">L/Q</th>
                <th scope="col" className=" px-2 py-2">Price</th>
              </tr>
            </thead>
            <tbody className="flex-box">
            {
              worth.length !== 0 ? worth : null
            }
            </tbody>
          </table>
        </section>
        <section className="flex-auto">
          <BeastTable
            level={level}
            reroll={reroll}
            divine={divine} />
          <Search
            searchInput={searchInput}
            setSearchInput={setSearchInput} />
        </section>
      </div>
    )



}

export default AwakenedGems