import React, { useEffect } from 'react';

import './Projets.css';

function Projets({ setSiteTitle }) {
  useEffect(() => {
    setSiteTitle('Projets');
  }, []);
  return (
    <div className="page-projets">
      <div className="projets">
        <div>.</div>
      </div>
    </div>
  );
}

export default Projets;