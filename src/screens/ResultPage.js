import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav';
import Result from '../components/Result';

export default function ResultPage() {
  return (
    <>
      <Nav />
      <Result />
      <div className="returnButton">
        <NavLink exact to="/">
          <h1 className="return">Return</h1>
        </NavLink>
      </div>
    </>
  );
}
