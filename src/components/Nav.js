import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink exact to="/">
        <img
          className="moon"
          src="https://purepng.com/public/uploads/large/purepng.com-realistic-moonmoonskyrealisticnight-591521584176vbjmv.png"
          alt="logo"
        />
      </NavLink>
      <h1 className="title">Sweathy</h1>
    </nav>
  );
}
