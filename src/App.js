import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=32f8dc10c58c1d1cfe5e634336a7ed8b`

  const searchLocation = (event) =>{
    if(event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">

      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder={"Enter Location"}
        type="text">
        </input>
      </div>

      <div className="location">
        <h1>{data.name} {`FLAG`}</h1>
      </div>

      <div className="temp">
        TEMPORARY TEMP *F
      </div>

      <div className="feels">
        TEMPORARY FEELS *F
      </div>

      <div className="wind">
        TEMPORARY WIND
      </div>

    </div>
  );
}

export default App;
