/* eslint-disable */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function Result() {
  const { cityName } = useParams();
  const [localisationValue, setLocalisationValue] = useState([]);
  const [weatherValue, setWeatherValue] = useState([]);

  const API_KEY = '8f161085171f9ecdd70d8b95726fbc6b';

  useEffect(async () => {
    await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`
      )
      .then(async (res) => {
        await setLocalisationValue(res.data);
        const lat = await res.data[0].lat;
        const lon = await res.data[0].lon;
        if (lat && lon) {
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`
            )
            .then((result) => {
              setWeatherValue(result.data.daily);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="forecast">
        <h1>Weather forecast for the week</h1>
      </div>
      <div className="weather">
        {weatherValue &&
          weatherValue.map((w, i) => (
            <div key={w.weather[0].id} className={`day${i}`}>
              <h1>{w.weather[0].main}</h1>
              <h1>{w.weather[0].description}</h1>
              <img
                src={`http://openweathermap.org/img/w/${w.weather[0].icon}.png`}
                alt={w.weather[0].icon}
              />
              <h1>{Math.floor(w.temp.min + w.temp.max) / 2}°C</h1>
            </div>
          ))}
      </div>
    </>
  );
}
