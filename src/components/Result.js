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
            .then(async (result) => {
              setWeatherValue([result.data]);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="day">
        <h1>Today</h1>
        <h1>Next day</h1>
      </div>
      {weatherValue &&
        weatherValue.map((w) => (
          <div key={w.daily[1].weather[0].id} className="weather">
            <div className="day-1">
              <h1>{w.daily[1].weather[0].main}</h1>
              <h1>{w.daily[1].weather[0].description}</h1>
              <img
                src={`http://openweathermap.org/img/w/${w.daily[1].weather[0].icon}.png`}
                alt={w.daily[1].weather[0].icon}
              />
              <h1>{w.daily[1].temp.day}°C</h1>
            </div>
            <div className="day-2">
              <h1>{w.daily[2].weather[0].main}</h1>
              <h1>{w.daily[2].weather[0].description}</h1>
              <img
                src={`http://openweathermap.org/img/w/${w.daily[2].weather[0].icon}.png`}
                alt={w.daily[2].weather[0].icon}
              />
              <h1>{w.daily[2].temp.day}°C</h1>
            </div>
            <div className="day-3">
              <h1>{w.daily[3].weather[0].main}</h1>
              <h1>{w.daily[3].weather[0].description}</h1>
              <img
                src={`http://openweathermap.org/img/w/${w.daily[3].weather[0].icon}.png`}
                alt={w.daily[3].weather[0].icon}
              />
              <h1>{w.daily[3].temp.day}°C</h1>
            </div>
            <div className="day-4">
              <h1>{w.daily[4].weather[0].main}</h1>
              <h1>{w.daily[4].weather[0].description}</h1>
              <img
                src={`http://openweathermap.org/img/w/${w.daily[4].weather[0].icon}.png`}
                alt={w.daily[4].weather[0].icon}
              />
              <h1>{w.daily[4].temp.day}°C</h1>
            </div>
            <div className="day-5">
              <h1>{w.daily[5].weather[0].main}</h1>
              <h1>{w.daily[5].weather[0].description}</h1>
              <img
                src={`http://openweathermap.org/img/w/${w.daily[5].weather[0].icon}.png`}
                alt={w.daily[5].weather[0].icon}
              />
              <h1>{w.daily[5].temp.day}°C</h1>
            </div>
            <div className="day-6">
              <h1>{w.daily[6].weather[0].main}</h1>
              <h1>{w.daily[6].weather[0].description}</h1>
              <img
                src={`http://openweathermap.org/img/w/${w.daily[6].weather[0].icon}.png`}
                alt={w.daily[6].weather[0].icon}
              />
              <h1>{w.daily[6].temp.day}°C</h1>
            </div>
            <div className="day-7">
              <h1>{w.daily[7].weather[0].main}</h1>
              <h1>{w.daily[7].weather[0].description}</h1>
              <img
                src={`http://openweathermap.org/img/w/${w.daily[7].weather[0].icon}.png`}
                alt={w.daily[7].weather[0].icon}
              />
              <h1>{w.daily[7].temp.day}°C</h1>
            </div>
          </div>
        ))}
    </>
  );
}
