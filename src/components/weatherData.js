import { useEffect, useState } from 'react'
import CardTemplate from './template'

const WeatherData = ({ coord }) => {

    const [cityData, setCityData] = useState(
        {   
            //demo data
            "coord": { "lon": 10.99, "lat": 44.34 },
            "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }],
            "base": "stations",
            "main": { "temp": 298.48, "feels_like": 298.74, "temp_min": 297.56, "temp_max": 300.05, "pressure": 1015, "humidity": 64, "sea_level": 1015, "grnd_level": 933 },
            "visibility": 10000, "wind": { "speed": 0.62, "deg": 349, "gust": 1.18 },
            "rain": { "1h": 3.16 },
            "clouds": { "all": 100 },
            "dt": 1661870592,
            "sys": { "type": 2, "id": 2075663, "country": "IT", "sunrise": 1661834187, "sunset": 1661882248 },
            "timezone": 7200,
            "id": 3163858,
            "name": "Zocca",
            "cod": 200
        }
    )

    // const fetchData = () => {
    //     //API

    //     //https://api.openweathermap.org/data/2.5/weather?lat={coord.lat}&lon={coord.lon}&appid={8ee633956bad6ae1965b557a94ecfcba}&units=metric&lang=he
    // }

    // useEffect(() => {
    //     const res = fetchData()
    //     setCityData(res) 
    // }, []);

    return (<>

        {cityData ?
        <CardTemplate
            name={cityData.name}
            descripthion={cityData.weather[0].description}
            temp={cityData.main.temp}
            feels_like={cityData.main.feels_like}
            humidity={cityData.main.humidity}
            icon={cityData.weather[0].icon}
        ></CardTemplate> : <h3>אין נתונים</h3>}
       
    </>);
}

export default WeatherData;