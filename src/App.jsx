import React, { useEffect, useState } from 'react';
import MainPanel from './components/MainPanel'
import SidePanel from './components/SidePanel';
import LoadingPanel from './components/LoadingPanel';

import {fetchCurrentData} from './API_CURRENT'
import {fetchForecastData} from './API_FORECAST'


function App() {
  const [currentWeatherData,setCurrentWeatherData] = useState({})
  const [forecastWeatherData,setforecastWeatherData] = useState({})

  const [isLoaded, setLoaded] = useState(false)
  const [iscurrentFetched,setiscurrentFetched] = useState(false);
  const [isForecastFetched,setisForecastFetched] = useState(false);

  
   const searchCurrent = (place) => {
      setLoaded(true)
      fetchCurrentData(place)
      .then(data => {
        setCurrentWeatherData(data);
        setLoaded(false)
        setiscurrentFetched(true)
      })
    }
   const searchForecast = (place) => {
      setLoaded(true)
      fetchForecastData(place)
      .then(data => {
        setforecastWeatherData(data);
        setLoaded(false)
        setisForecastFetched(true)
      })
    }

  
    useEffect(() => {
      searchCurrent("Kraków")
      searchForecast("Kraków")
    },[])

    const handleLocation = (data) => {
      searchCurrent(data)
      searchForecast(data)
    }
    const display = () =>{
      console.log(forecastWeatherData)
    }
    
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <button onClick={display}>
          a
        </button>
        {isLoaded && <LoadingPanel/>}
        {iscurrentFetched && <MainPanel data={currentWeatherData} searchWeather={handleLocation}/>}
        {isForecastFetched && <SidePanel data={forecastWeatherData}/>}
        {/* <SidePanel/> */}
      </div>
    </>
  )
}

export default App
