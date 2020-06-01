import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>Games!</Link>
      </div>
      <div className="links">
        <ul>
          <li><Link to={'/games'}>All Games</Link></li>
          <li><Link to={'/'}>Add New Game</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;