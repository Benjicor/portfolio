import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './BurgerContentDashboard.css';

function BurgerContentDashboard({ handleClick }) {
  const handleLogOut = () => {
    handleClick();
    axios
      .get(`${process.env.REACT_APP_API_PORTFOLIO_URL}/api/auth/logOut`, {
        withCredentials: true,
      })
      .then(() => {
        alert('Vous avez bien été deconnecté');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <ul className="nav">
        <li>
          <Link className="link" to="/" onClick={handleClick}>
            Accueil
          </Link>
        </li>
        <li>
          <Link className="link" to="/About" onClick={handleClick}>
            À propos
          </Link>
        </li>
        <li>
          <Link className="link" to="/Projects" onClick={handleClick}>
            Projets
          </Link>
        </li>
        <li>
          <h1 className="admin-dash">ADMIN</h1>
        </li>
        <li>
          <Link
            className="link"
            to="/Private/Admin/Files"
            onClick={handleClick}
          >
            Fichiers
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/Private/Admin/Images"
            onClick={handleClick}
          >
            Images
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/Private/Admin/Technologies"
            onClick={handleClick}
          >
            Technologies
          </Link>
        </li>
        <li>
          <a className="link" href="/" onClick={handleLogOut}>
            Deconnexion
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContentDashboard;
