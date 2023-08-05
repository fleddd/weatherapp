
import PropTypes from 'prop-types'

const Forecast = (data) => {
  
 
  return ( <> 
    <div className="forecast">
      <div className="forecast__title">
          <h3>Прогноз на 7 днів</h3>
          
      </div>
      <div className="forecast__days">
        {data.data.map(day => <div key={self.crypto.randomUUID()} className="forecast__day">
                <div className="forecast__info">
                  <div className="forecast__title">День</div>
                  {day.date}
                </div>
                <div className="forecast__condition">
                  {day.day.condition.text}
                </div>
                <div className="forecast__icon">
                  <img src={`${day.day.condition.icon}`} alt="" />
                </div>
                <div className="forecast__info">
                  <div className="forecast__title">Температура</div>
                  {day.day.avgtemp_c}
                </div>
                <div className="forecast__info">
                  <div className="forecast__title">Шанс дощу</div>
                  {day.day.daily_chance_of_rain}%
                  </div>
                <div className="forecast__info">
                  <div className="forecast__title">Шанс снігу</div>
                  {day.day.daily_chance_of_snow}%
                </div>
        
           </div> )}



      

      </div>
    </div>
  
  </> );
}
 
Forecast.propTypes = {
  data: PropTypes.array.isRequired
}

export default Forecast;