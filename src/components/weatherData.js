import { useEffect, useState } from 'react'
import CardTemplate from './template'
import axios from 'axios'

const WeatherData = ({ coord }) => {

    const [cityData, setCityData] = useState()

    const fetchData = () => {

        axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                lat: coord.lat,
                lon: coord.lon,
                appid: '8ee633956bad6ae1965b557a94ecfcba',
                units: 'metric',
                lang: 'he'
            }
        })
            .then(response => {
                setCityData(response.data);
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
            });
    }

    useEffect(() => {
        fetchData()
    }, []);

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