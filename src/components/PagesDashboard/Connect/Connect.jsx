import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import Button from '../../Button/Button';

import './Connect.css';

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Connect({ setTitlePage, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning('Vous devez fournir toutes les informations');
    } else {
      try {
        await axios
          .post(
            `${API_URL}/api/auth/connect`,
            {
              email,
              password,
            },
            {
              withCredentials: true,
            }
          )
          .then(() => {
            setUser(true);
            toast.success('Bravo, vous êtes connecté');
          });
        navigate('/Private/Admin/Files');
      } catch (err) {
        toast.error(err.response.data);
      }
    }
  };

  useEffect(() => {
    setTitlePage('Connexion');
  }, []);

  return (
    <div className="dashboard-connect">
      <h1 className="connect-title">Se connecter</h1>
      <div className="container-connect">
        <div className="connect">
          <form onSubmit={handleSubmit}>
            <div className="container-form-connect">
              <div className="form-group-user">
                <label
                  htmlFor="username"
                  className="username"
                  id="label-connect"
                >
                  Nom d&#39;utilisateur
                  <input
                    type="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    id="username"
                    placeholder="Entrer votre nom d'utilisateur"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group-password">
                <label
                  htmlFor="password"
                  className="password"
                  id="label-connect"
                >
                  Mot de passe
                  <input
                    type="password"
                    minLength="10"
                    id="password"
                    placeholder="Entrer votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="button-connect">
                <Button className="validate" buttonName="Valider" submit />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connect;