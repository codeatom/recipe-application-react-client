import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import RecipeInstructionService from '../../services/RecipeInstructionService';


const DeleteRecipeInstruction = (props) => {
  const [recipeInstructionId] = useState(props.match.params.id);
  const [title, setTitle] = useState("");
  const [instruction, setInstruction] = useState("");

  useMemo(() => {
    RecipeInstructionService.getRecipeInstructionById(props.match.params.id).then((response) => {
      setTitle(response.data.title);
      setInstruction(response.data.instruction);
    });
  }, []);

  const deleteRecipeInstruction = (e) => {
    e.preventDefault();
    RecipeInstructionService.deleteRecipeInstruction(recipeInstructionId).then(res => {
      backToIngredientList();
    });
  }

  const backToIngredientList = () => {
    props.history.push('/recipe-instructions');
  }


  return (
    <div>
      <div className="row">

        {/* column 1 */}
        <div className="col-10">
          <div className='mt-5'>
            <h4>
              Do you want to delete this recipe instruction?
            </h4>
          </div>

          <div className="card mt-5">
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-2 ps-3 boldFont" >
                <span>Id :</span>
              </div>
              <div className="col-md-10">
                <span>{recipeInstructionId}</span>
              </div>
            </div>
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-2 ps-3 boldFont">
                <span>Instruction title :</span>
              </div>
              <div className="col-md-10">
                <span>{title}</span>
              </div>
            </div>
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-2 ps-3 boldFont">
                <span>Instruction :</span>
              </div>
              <div className="col-md-10">
                <span>{instruction}</span>
              </div>
            </div>
          </div>

          <button className='btn btn-outline-danger mt-2' onClick={deleteRecipeInstruction}>
            <i className="fas fa-trash"></i>Delete
          </button>
          <button className='btn btn-outline-primary mt-2 ms-3' >
            <Link to="/recipe-instructions" className="nav-link active">
              <i className="fa fa-arrow-left"></i>Cancel
            </Link>
          </button>
        </div>

        {/* column 2 */}
        <div class="col-2 mt-5 ps-5">
          <h4></h4>
        </div>
      </div>
    </div>
  );
}


export default DeleteRecipeInstruction;