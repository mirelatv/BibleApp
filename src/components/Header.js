import React from 'react';

const Header = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand font-weight-bold" href="#">Películas</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#"><img src="assets/movie-symbol.svg" className="icon-header mr-3" alt="Icon"/>Salas de cine<span className="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="#"><img src="assets/discount.svg" className="icon-header mr-3" alt="Icon"/>Promociones</a>
        <a class="nav-item nav-link" href="#"><img src="assets/information.svg" className="icon-header mr-3" alt="Icon"/>Acerca de</a>
        <a class="nav-item nav-link" href="#"><img src="assets/settings.svg" className="icon-header mr-3" alt="Icon"/>Configuración</a>
        <a class="nav-item nav-link" href="#"><img src="assets/sign-out.svg" className="icon-header mr-3" alt="Icon"/>Cerrar sesión</a>
      </div>
    </div>
  </nav>
)

export default Header;