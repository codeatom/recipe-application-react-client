import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import RecipeIngredientService from '../../services/RecipeIngredientService';
import '../Style.css';


const GetRecipeIngredient = (props) => {
  const [recipeIngredientId] = useState(props.match.params.id);
  const [amount, setAmount] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [recipeName, setRecipeName] = useState("");

  useMemo(() => {
    RecipeIngredientService.getRecipeIngredientById(props.match.params.id).then((response) => {
      setAmount(response.data.amount);
      setMeasurement(response.data.measurement);
      setIngredientName(response.data.ingredientView.ingredientName);
      setRecipeName(response.data.recipeView.recipeName);
    });
  }, []);

  const removeRecipeFromRecipeIngredient = () => {
    RecipeIngredientService.removeRecipe(recipeIngredientId).then((res) => {
      backToRecipeIngredients();
    });
  };

  const addRecipeToRecipeIngredient = () => {
    props.history.push(`/add-recipe-to-recipe-ingredient/${recipeIngredientId}`);
  };

  const backToRecipeIngredients = () => {
    props.history.push('/recipe-ingredients');
  };


  return (
    <div>
      <div className="row">

        {/* column 1 */}
        <div className="col">
          <div className="mt-5">
            <h3>Recipe Ingredient</h3>
          </div>

          <div className="card mt-4">
            <div className="card-header bg-success text-white boldFont">
              Recipe Ingredient Details
            </div>

            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-3 ps-3 boldFont" >
                <span>Id</span>
              </div>
              <div className="col-md-9">
                <span>{recipeIngredientId}</span>
              </div>
            </div>
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-3 ps-3 boldFont">
                <span>Ingredient</span>
              </div>
              <div className="col-md-9">
                <span>{ingredientName}</span>
              </div>
            </div>
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-3 ps-3 boldFont">
                <span>Amount</span>
              </div>
              <div className="col-md-9">
                <span>{amount}</span>
              </div>
            </div>
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-3 ps-3 boldFont">
                <span>Unit</span>
              </div>
              <div className="col-md-9">
                <span>{measurement}</span>
              </div>
            </div>
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-3 ps-3 boldFont">
                <span>Recipe</span>
              </div>
              <div className="col-md-3">
                {recipeName != "" ? recipeName : "no data"}
              </div>
              <div className="col-md-6">
                {
                  recipeName == "" ?
                    (<button className='btn btn-outline-success' onClick={addRecipeToRecipeIngredient}>Add recipe</button>) :
                    (<button className='btn btn-outline-danger' onClick={removeRecipeFromRecipeIngredient}>Remove recipe</button>)
                }
              </div>
            </div>
          </div>

          <button className='btn btn-outline-info mt-2' >
            <Link to={`/update-recipe-ingredient/${recipeIngredientId}`} className="nav-link active">
              <i className="fas fa-pen-to-square"></i>Edit
            </Link>
          </button>
          <button className='btn btn-outline-primary mt-2 ms-3' >
            <Link to="/recipe-ingredients" className="nav-link active">
              <i className="fa fa-arrow-left"></i>Back
            </Link>
          </button>
        </div>

        {/* column 2 */}
        <div className="col mt-5 ps-5">
          <h4></h4>
        </div>

      </div>
    </div>
  );

}

export default GetRecipeIngredient;