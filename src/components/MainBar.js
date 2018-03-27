import React from 'react';

const MainBar = () => (
  <div className="row">
    <div className="btn-group m-3" role="group" aria-label="MainBar">
      <button type="button" className="btn btn-outline-danger">En Cartelera</button>
      <button type="button" className="btn btn-outline-danger">Próximos estrenos</button>
    </div>
  </div>
)

export default MainBar;