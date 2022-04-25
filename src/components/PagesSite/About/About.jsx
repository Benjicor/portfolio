import React, { useEffect } from 'react';

import Button from '../../Button/Button';

import './About.css';

function About({ setSiteTitle }) {
  useEffect(() => {
    setSiteTitle('À propos');
  }, []);

  return (
    <div className="about-page">
      <div className="about">
        <h1 className="presentation">
          Bonjour et bienvenue, je suis Benjamin CORDREAUX et je vais tenter de
          vous présenter qui je suis.
          <br />
          <br />
          <p>
            Mes 20 années d’expériences en Hôtellerie-Restauration sur des
            postes de direction et d’encadrement m’ont permis de développer des
            compétences transversales certaines, et tout à fait transférables à
            mon récent métier de développeur web. <br />
            <br />
            En effet, je sais faire preuve d’une grande patience, d’une forte
            capacité à résoudre des problèmes et d’une grande faculté de gestion
            du temps et d’anticipation. <br />
            <br />
            Curieux de nature, je suis quotidiennement en veille sur le sujet
            des nouvelles technologies. Engagé dans le monde associatif, j’aime
            travailler en équipe et j’ai un très bon sens du relationnel et de
            la communication. Je souhaite désormais mettre tous mes atouts au
            service du développement de projets web et intégrer une équipe
            dynamique !
          </p>
        </h1>
        <ul className="grid-button-about">
          <li>
            <Button className="button-cv" buttonName="CV" submit />
          </li>
          <li>
            <Button
              className="button-contact-me"
              buttonName="Me contacter"
              submit
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;