import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState()

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=32f8dc10c58c1d1cfe5e634336a7ed8b`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        console.log(response.data.sys.country + " => this is the selected country")
      }
      )
    }
  }
 
   
  /////////////////////////////// Country/City Specific Emojis
  function Flag(props) {
   let targetCountry = props.country 

    if (targetCountry === "US") {
      switch(data.name) {
        case "New York":
          return (
          <h1>🗽</h1>
          )
          break;
          case "Miami":
            return (
            <h1>⛱️</h1>
            )
            break;
        default:
          console.log("DEFAULT")
      }
    }
    if (targetCountry=== null){
      return (
        <div>
        <h1> Weather Radar </h1>
        <h1> Realtime Weather from Across The Globe</h1>
      </div>
      )
    }
  }

  const countryFind= <Flag country={data.sys ? data.sys.country : null}/>;
  ////////////////



  //////////////
  return (
    <div className="App">
     {countryFind}
      <div className="location">
        <h1>{data.name}</h1>
        {data.sys ? <h1>{data.sys.country}</h1> : null}
      </div>

      <div className="temp">
       <h3>{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</h3>
      </div>
      <div className="details">

        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

        <div className="feels">
          {data.main ? <p className='bold'> Feels Like: {data.main.feels_like.toFixed()}°F</p> : null}
        </div>

        <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
        </div>

      </div>

      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder={"Enter Location"}
          type="text">
        </input>
      </div>

    </div>
  );
}

export default App;
