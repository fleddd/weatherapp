import { useQuery } from 'react-query'
import './App.css'


import LoadingSpinner from './components/LoadingSpinner'
import CurrentWeather from './components/currentWeather'
import Header from './components/header'
import Search from './components/search'
import axios from 'axios'
import { useState } from 'react'
import Forecast from './components/forecast'

function App() {
  const [weatherSearch, setWeatherSearch] = useState('')

  const fetchForecastData = (searchTerm) => {
    return axios.get(`http://api.weatherapi.com/v1/forecast.json?key=aca93c5e40b6486fb8d125118232207&q=${searchTerm}&days=7&aqi=no&alerts=no&lang=uk`).then(data =>{
      return data.data
    })
  }
  const handleOnChangeSearch = (searchTerm) => {
    setWeatherSearch(searchTerm)
  }

  const {data: weatherData, isLoading} = useQuery(['weather', weatherSearch],() => fetchForecastData(weatherSearch), {
    enabled: !!weatherSearch,
    retry: 1,
    refetchOnWindowFocus: false,
  })

  return (
    <>
      <Header />
      <div className="content">
         <Search handleOnChangeSearch={handleOnChangeSearch}/>
         {isLoading ? <LoadingSpinner /> : <div className="weather">
          {weatherData && <CurrentWeather 
            name={weatherData?.location.name} 
            icon={weatherData?.current.condition.icon}
            temp={weatherData?.current.temp_c} 
            feelsLike={weatherData?.current.feelslike_c}
            condition={weatherData?.current.condition.text}
            humidity={weatherData?.current.humidity}
            cloud={weatherData?.current.cloud}
            wind_kph={weatherData?.current.wind_kph}
            isLoading={weatherData}
            />}
            {weatherData && <Forecast data={weatherData?.forecast.forecastday}/>}          
         </div>}      
      </div>
      
        
    </>
  )
}

export default App
