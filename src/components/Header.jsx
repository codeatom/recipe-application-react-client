import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">

        <div className="row">
          <div className="col-1">
            <Link to="/home" className="nav-link active">
              <img src="../images/logo.png" alt="Home" />
            </Link>
          </div>

          <div className="col-11">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/ingredients" className="nav-link active">Ingredients</Link>
              </li>
              <li className="nav-item">
                <Link to="/recipe-ingredients" className="nav-link active">RecipeIngredients</Link>
              </li>
              <li className="nav-item">
                <Link to="/recipe-instructions" className="nav-link active">Instructions</Link>
              </li>
              <li className="nav-item">
                <Link to="/recipe-categories" className="nav-link active">Categories</Link>
              </li>
              <li className="nav-item">
                <Link to="/recipes" className="nav-link active">Recipes</Link>
              </li>
              <li>
                <Link to="/home" className="nav-link active">Recipe List</Link>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Header;
