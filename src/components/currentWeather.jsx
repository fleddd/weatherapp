import './styles/currentWeather.css'
import PropTypes from 'prop-types'
const CurrentWeather = ({name, temp, feelsLike, icon, condition, wind_kph, humidity, cloud}) => {
  

  return (
    <>
      <div className="currentWeather">
      
      <div className="currentWeather-title">
        <div className="currentWeather__name">
            {name}
        </div>
        <div className="currentWeather__icon">
            <img src={`${icon}`} alt="" />
        </div>
        
      </div>
      <div className="currentWeather-desc">
            <div className="currentWeather__item">
              <span className='title'>Temperature:</span>
              <span className='item-value'>{temp}°</span>
            </div>
            <div className="currentWeather__item">
              <span className='title'>Condition:</span>
              <span className='item-value'>{condition}</span>
            </div>
            <div className="currentWeather__item">
            <span className='title'>Feels like:</span>
            <span className='item-value'>{feelsLike}°</span>
            </div>
            <div className="currentWeather__item">
              <span className='title'>Швидкість вітру:</span>
              <span className='item-value'>{wind_kph} км/год</span>
            </div>
            <div className="currentWeather__item">
              <span className='title'>Вологість:</span>
              <span className='item-value'>{humidity}%</span>
            </div>
            <div className="currentWeather__item">
              <span className='title'>Хмарність:</span>
              <span className='item-value'>{cloud}%</span>
            </div>
      </div>
  </div>
    
    </>
     
  );
}
 
CurrentWeather.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  wind_kph: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  cloud: PropTypes.number.isRequired,
}


export default CurrentWeather;