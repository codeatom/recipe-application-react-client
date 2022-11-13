import React, { useState, useMemo } from 'react';
import RecipeInstructionService from '../../services/RecipeInstructionService';
import '../Style.css';


const UpdateRecipeInstruction = (props) => {
  const [recipeInstructionId] = useState(props.match.params.id);
  const [title, setTitle] = useState("");
  const [instruction, setInstruction] = useState("");

  useMemo(() => {
    RecipeInstructionService.getRecipeInstructionById(props.match.params.id).then((response) => {
      setTitle(response.data.title);
      setInstruction(response.data.instruction);
    });
  }, []);

    const editRecipeInstruction = (e) => {
        e.preventDefault();
        let recipeInstruction = {
          id: recipeInstructionId,
          title: title,
          instruction: instruction,
        };

        RecipeInstructionService.updateRecipeInstruction(recipeInstructionId, recipeInstruction).then(res => {
            props.history.push('/recipe-instructions');
        });
    }

    const handleTitle = (event) => {
      setTitle(event.target.value);
    }

    const handleInstruction = (event) => {
      setInstruction(event.target.value);
  }

    const cancel = () => {
        props.history.push('/recipe-instructions');
    }


    return (
        <div>
            <div className='row'>

                {/* column 1 */}
                <div className="col">
                    <div className='card mt-5'>
                        <div className='card-body'>
                            <div className='mb-5'>
                                <h3 className='text-center text-decoration-underline'>Edit Ingredient</h3>
                            </div>

                            <form>
                                <div className='form-group'>
                                    <label className='boldFont'>Title :</label>
                                    <input className='form-control' placeholder='Instruction title' id='title' name='title' value={title} onChange={handleTitle} />
                                </div>
                                <div className='form-group'>
                                    <label className='boldFont'>Instruction :</label>
                                    <input className='form-control' placeholder='Instruction' id='instruction' name='instruction' value={instruction} onChange={handleInstruction} />
                                </div>

                                <button className='btn btn-outline-success mt-3' onClick={editRecipeInstruction}>
                                    <i className="fa-solid fa-check"></i>Save
                                </button>
                                <button className='btn btn-outline-danger mt-3 ms-3' onClick={cancel}>
                                    <i className="fa fa-times"></i>Cancel
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                {/* column 2 */}
                <div className="col mt-5 ps-5">
                    <h4></h4>
                </div>
            </div>
        </div>
    );
}

export default UpdateRecipeInstruction;