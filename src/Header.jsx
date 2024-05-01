import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {

  const setActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "white",
    fontWeight: isActive ? "bold" : "normal"
  });

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={setActiveStyle}>
              Домашня сторінка
            </NavLink>
          </li>
          <li>
            <NavLink to="/horizontal" style={setActiveStyle}>
              Горизонтальний світлофор
            </NavLink>
          </li>
          <li>
            <NavLink to="/vertical" style={setActiveStyle}>
              Вертикальний світлофор
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
