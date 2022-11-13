import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import RecipeService from '../../services/RecipeService';


const DeleteRecipe = (props) => {
  const [recipeId] = useState(props.match.params.id);
  const [recipeName, setRecipeName] = useState("");
  const [instruction, setInstruction] = useState("");

  useMemo(() => {
    RecipeService.getRecipeById(props.match.params.id).then((response) => {
      setRecipeName(response.data.recipeName);
      setInstruction(response.data.instruction);
    });
  }, []);

  const deleteRecipe = (e) => {
    e.preventDefault();
    RecipeService.deleteRecipe(recipeId).then(res => {
      props.history.push('/recipes');
    });
  }


  return (
    <div>
      <div className="row">
        <div className="col-10">
          <div className='mt-5'>
            <h4>
              Do you want to delete this recipe?
            </h4>
          </div>

          <div className="card mt-5">
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-2 ps-3 boldFont" >
                <span>Id :</span>
              </div>
              <div className="col-md-10">
                <span>{recipeId}</span>
              </div>
            </div>
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-2 ps-3 boldFont">
                <span>Recipe Name :</span>
              </div>
              <div className="col-md-10">
                <span>{recipeName}</span>
              </div>
            </div>
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-2 ps-3 boldFont">
                <span>Instruction :</span>
              </div>
              <div className="col-md-10">
                <span>{instruction.instruction}</span>
              </div>
            </div>
          </div>

          <button className='btn btn-outline-danger mt-2' onClick={deleteRecipe}>
            <i className="fas fa-trash"></i>Delete
          </button>
          <button className='btn btn-outline-primary mt-2 ms-3' >
            <Link to="/recipes" className="nav-link active">
              <i className="fa fa-arrow-left"></i>Cancel
            </Link>
          </button>
        </div>

        <div class="col-2 mt-5 ps-5">
          <h4>Place general info here</h4>
        </div>
      </div>
    </div>
  );
}

export default DeleteRecipe;