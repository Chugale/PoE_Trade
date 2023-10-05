import React, {useState} from 'react';
import GemsEntry from './GemsEntry.jsx';
import Search from '../../components/SearchBar.jsx';
import GemsSelection from './GemsSelection.jsx';
import LensTable from './LensTable.jsx';
import {images} from '../../assets/Images.jsx'

const GemList = ({divine, gems, prime, secondary}) => {

  const [searchInput, setSearchInput] = useState('');
  const [selection, setSelection] = useState('/');


  let value_div = gems
    .filter((gemObj) => (gemObj.divineValue >= 1) === true)
    .filter((gemObj) => gemObj.name.toLowerCase().includes(searchInput.toLowerCase()))
    .filter((gemObj) => gemObj.variant.slice(0, 3).includes(selection))
    .map((gemObj, ind) => <GemsEntry gemObj={gemObj} key={ind} />)


  return (
    <div className="flex space-x-1">

      <section className="relative overflow-y-auto max-h-[50rem] w-max">
      <section className="inline-flex space-x-16">
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput} />
        <GemsSelection setSelection={setSelection}/>
      <LensTable
          prime={prime}
          secondary={secondary}
          divine={divine} />
      </section>
        <table className="border-spacing-5 py-3 divide-y divide-gray-300 bg-gray-500">
          <thead className="flex-box">
            <tr className="sticky top-0 bg-gray-500">
              <th scope="col" className="px-2 py-2">Name</th>
              <th scope="col" className="px-2 py-2">L/Q</th>
              <th scope="col" className="px-2 py-2">Price</th>
              <th scope="col" className="px-2 py-2">Superior</th>
              <th scope="col" className="px-2 py-2">Divergent</th>
              <th scope="col" className="px-2 py-2">Anomalous</th>
              <th scope="col" className="px-2 py-2">Phantasmal</th>
            </tr>
          </thead>
          <tbody className="flex-box">
          {
            value_div.length !== 0 ? value_div : null
          }
          </tbody>
        </table>
      </section>
    </div>
  )

          {/* <section>
          <label>Primary: {(prime/divine).toFixed(1)}{images.Divine}</label>
        </section> */}
        {/* move this */}
        {/* <section>
          <label>Secondary: {(secondary/divine).toFixed(1)}{images.Divine}</label>
        </section>
        <section className="inline-flex">
          <Search
            searchInput={searchInput}
            setSearchInput={setSearchInput} />
          <GemsSelection setSelection={setSelection}/>
        </section> */}


}

export default GemList