import React from 'react'
import CountUp from 'react-countup';

const TodayForecast = ({forecastData}) => {
    console.log(forecastData)
    let arrayIndexes = [1, 2, 3] 
  return (
    <>
    <div className='h-1/2 md:h-3/4 flex flex-row justify-evenly bg-gradient-to-br from-white to-blue-200 rounded-xl shadow-xl p-5 m-5'>
        {arrayIndexes.map((index) => (
            <div className='bg-gradient-to-br from-cyan-500 to-blue-500 w-1/4 shadow-xl p-5 rounded-xl'>
            <div className='flex flex-col items-center'>
                <img src={"http://openweathermap.org/img/wn/"+ forecastData.list[index].weather[0].icon +  "@4x.png"} alt="Weather icon"/>
                <div className='flex text-5xl text-white'>
                    <p>
                        <CountUp start={-5} end={Math.round(forecastData.list[index].main.temp)} />
                    </p>
                    <p>°C</p>
                </div>
                <p className='text-lg text-white'>{forecastData.list[index].weather[0].description}</p>
            </div>
            <div className='flex flex-col justify-center text-center'>
                <p className='text-lg text-white'>{forecastData.list[index].dt_txt.substring(11, 16)}</p>
                <p id='currentTime'>{}</p>
            </div>
        </div>
        ))}
    </div>
    </>
  )
}

export default TodayForecast