import React, { useState } from 'react'
import SidePanelElement from './SidePanelElement'
import TodayForecast from './TodayForecast'
import WeekForecast from './WeekForecast'



const SidePanel = ({data}) => {
  const [isToday, setIsToday] = useState(true)

  const handleClickWeek = () => {
    setIsToday(false)
    document.getElementById('buttonToday').style.color = "#abaaaa"
    document.getElementById('buttonWeek').style.color = "black"

  }
  const handleClickToday = () => {
    setIsToday(true)
    document.getElementById('buttonToday').style.color = "black"
    document.getElementById('buttonWeek').style.color = "#abaaaa"
  }

  return (
    <div className='md:bg-gradient-to-b from-white to-blue-200 w-full md:w-2/3 md:h-screen p-5'>
        <div className='text-3xl flex flex-row justify-start md:justify-center gap-4 font-light'>
            <button id='buttonToday' className='duration-150' onClick={handleClickToday}>Today</button>
            <button id='buttonWeek' className='text-[#abaaaa] duration-150' onClick={handleClickWeek}>5 Days</button>
        </div>
        <div className='h-[80vh] flex flex-col justify-center'>
          {/* {data.city.name} */}
          {isToday && <TodayForecast forecastData={data}/>}
          {isToday || <WeekForecast forecastData={data}/>}
        </div>
    </div>
  )
}

export default SidePanel