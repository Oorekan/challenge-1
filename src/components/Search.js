import { NavLink } from 'react-router-dom';

export default function Search() {
  return (
    <div className="form">
      <form>
        <input />
        <button type="button">➥</button>
      </form>
      <NavLink exact to="/name-city">
        Testy
      </NavLink>
    </div>
  );
}
