import React from 'react'
import CountUp from 'react-countup';

const WeekForecast = ({forecastData}) => {
  console.log(forecastData)
  let arrayIndexes = [9, 17, 25, 33, 39]

  const date = new Date(forecastData.list[0].dt * 1000)
  const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const currentTime = days[date.getDay()-1]

  return (
    <>
    <div className='flex flex-row justify-evenly bg-gradient-to-br from-white to-blue-200 rounded-xl shadow-xl p-5 m-5'>
        {arrayIndexes.map((index) => (
            <div className='bg-gradient-to-br from-cyan-500 to-blue-500 w-1/6 md:w-1/6 shadow-xl p-5 rounded-xl'>
            <div className='flex flex-col items-center'>
                <img src={"http://openweathermap.org/img/wn/"+ forecastData.list[index].weather[0].icon +  "@4x.png"} alt="Weather icon"/>
                <div className='flex text-2xl lg:text-5xl text-white'>
                    <p>
                        <CountUp start={-5} end={Math.round(forecastData.list[index].main.temp)} />
                    </p>
                    <p>°C</p>
                </div>
                <p className='text-xs text-center text-white'>{forecastData.list[index].weather[0].description}</p>
            </div>
            <div className='flex flex-col justify-center text-center'>
                <p className='text-sm text-white'>{days[new Date(forecastData.list[index].dt * 1000).getDay()]}</p>
                <p id='currentTime'>{}</p>
            </div>
            <div>
              
            </div>
        </div>
        ))}
    </div>
    </>
  )
}

export default WeekForecast