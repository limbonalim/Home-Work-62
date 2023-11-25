import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <div className="mb-3 d-flex gap-3">
        <NavLink to="burger" className="btn btn-danger">Burger</NavLink>
        <NavLink to="findRing" className="btn btn-danger">Find Ring</NavLink>
      </div>
      <div className="d-flex justify-content-center">
        <Outlet/>
      </div>
    </>
  );
};

export default Portfolio;