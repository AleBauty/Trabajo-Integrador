import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={state.theme}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favorite</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;