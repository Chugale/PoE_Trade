import { useState, useEffect, lazy, Suspense } from 'react'
import axios from 'axios';
import './App.css'

const App = () => {
  // const [view, setView] = useState('main');
  // const [gems, setGems] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  //MARKET API CALL
  // const getGems = async () => {
  //   setIsLoading(true)
  //   try{
  //    const response = await axios.get('./api/gem_weight')
  //     const chunked = response.data.regular
  //     const combinedData = chunked.reduce((acc, chunk) => [...acc, ...chunk], [])
  //     setGems(combinedData)
  //     //THIS IS BEFORE CHUNKING ON SERVER SIDE
  //     // .then((response) => {
  //       // console.log('this is response', response.data.regular) //results in array of arrays, inner array of obj
  //       // setGems(response.data.regular)
  //       // setAwakened(response.data.awakened)
  //     // })
  //   }catch(err) {console.log('app side error', err  )}
  //     //THIS IS FOR PRE SERVER CHUNK
  //     // .catch(err => console.log('APP side error', err))
  //   setIsLoading(false)
  // }

  // useEffect(() => {
  //   getGems()
  // }, []);

  // //VIEW RENDER
  // const renderView = () => {
  //   switch (view) {
  //     case 'main':
  //     return (
  //       <div>
  //         main pages


  //       </div>
  //     );
  //   }
  // }

  //testing
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('./api/users')
      .then(res => {
        setUsers(res.data)
      }).catch(err => {
        console.log('this is error from app.jsx', err)
      })
  }, [])
  return (
    <div>
      {/* {renderView()} */}
      <h1>User App</h1>
      {
        users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default App
