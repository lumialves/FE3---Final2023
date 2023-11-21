import { Link } from "react-router-dom";
import { useContextGlobal, TOGGLE_THEME } from './utils/global.context';


const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
    const handleThemeToggle = () => {
      dispatch({ type: TOGGLE_THEME });
    };

  return (
    <nav className={state.theme === 'dark' ? 'dark' : ''}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/favs">Favoritos</Link>
      <button className="buttonChangeTheme" onClick={handleThemeToggle} > Cambiar tema </button>
    </nav>
  )
}

export default Navbar

