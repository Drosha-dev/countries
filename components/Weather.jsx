import { useState, useEffect } from "react"
import weatherService from "../src/services/weather"


const Weather = ({ lat, lng, capital }) => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        weatherService.getWeather(lat, lng).then((weather) => {
            setWeather(weather);
        })
    }, [lat, lng])

    console.log(weather);


    return (<>
        {
            weather ? (
                <div>
                    <h1>In {capital}</h1>
                    <p>Temperature : {weather.main.temp} C&deg;</p>
                    <p>Feels Like : {weather.main.feels_like} C&deg; </p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                    />
                    <p>Wind Speeds: {weather.wind.speed} knots</p>
                </div>
            ) : (

                <p> No weather Data available</p>

            )
        }


    </>)


}

export default Weather

