import axios from 'axios';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [localisationValue, setLocalisationValue] = useState([]);

  const API_KEY = '8f161085171f9ecdd70d8b95726fbc6b';

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleLocalisationSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=${API_KEY}`
      )
      .then((res) => setLocalisationValue(res.data));
  };

  return (
    <div className="form">
      <form onSubmit={handleLocalisationSubmit}>
        <input
          type="search"
          placeholder="Search a city, country"
          required
          value={searchValue}
          onChange={handleChangeSearchValue}
        />
        <button type="submit">Get weather !</button>
      </form>
      {localisationValue &&
        localisationValue.map((result) => (
          // eslint-disable-next-line react/jsx-indent
          <div key={result.id} className="result">
            <NavLink exact to={`/city/${result.name}`}>
              <h1>{result.name}</h1>
            </NavLink>
          </div>
        ))}
    </div>
  );
}
