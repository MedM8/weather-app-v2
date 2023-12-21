import React, { useState } from 'react'
import CountUp from 'react-countup';


const MainPanel = ({data, searchWeather}) => {  

  const handleClick = () =>{
    searchWeather(document.getElementById("citySearch").value)
  }
  const date = new Date(data.dt * 1000)
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
  const currentTime = days[date.getDay()-1] + ", "+ date.getHours() + ":"+ date.getMinutes()

  
  return (
    <div className='w-full h-screen md:w-1/3 flex flex-col justify-start items-center  gap-4 p-5 duration-150	bg-gradient-to-b from-white to-blue-200'>
        <div className='bg-[#ecedef] rounded-full flex justify-between px-4 w-3/4 h-12 shadow-lg'>
            <input id='citySearch' placeholder={data.name + ", " + data.sys.country} className='bg-transparent w-full' type="text"/>
            <button onClick={handleClick} className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button>
        </div>
       <div className='h-4/5 w-3/4 md:w-3/4 flex flex-col justify-center'>
        <div className='shadow-2xl  rounded-lg px-12 p-10 bg-gradient-to-br from-cyan-500 to-blue-500'>
          <div className='flex flex-col items-center'>
            <img id="wicon" src={"http://openweathermap.org/img/wn/"+ data.weather[0].icon +  "@4x.png"} alt="Weather icon"/>
            <div className='flex text-7xl text-white'>
                <p className='' id='currentTemp'>
                <CountUp end={Math.round(data.main.temp)}/>  
                </p>
                <p>°C</p>
            </div>
            <p className='text-xl text-white' id='currentDescription'>{data.weather[0].description}</p>
          </div>
          <div className='flex flex-col items-center text-white'>
            <p id='currentDate'>{date.getDate() + "-" + date.getMonth() + "-" +date.getFullYear()}</p>
            <p id='currentTime'>{currentTime}</p>
          </div>
          <p className='text-6xl text-white text-center' id='currentPlace'>{data.name}</p>
        </div>
       </div>
    </div>
  )
}

export default MainPanel