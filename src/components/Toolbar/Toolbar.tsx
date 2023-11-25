import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger mb-3" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">InnovateHub</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About us</NavLink>
            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;