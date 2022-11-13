import React, { useState, useEffect } from 'react';
import RecipeInstructionService from '../../services/RecipeInstructionService';
import '../Style.css';


const CreateRecipeInstruction = (props) => {
    const [title, setTitle] = useState("");
    const [instruction, setInstruction] = useState("");


    const saveRecipeInstruction = (e) => {
        e.preventDefault();
        let recipeInstruction = {
            title: title,
            instruction: instruction,
        };

        RecipeInstructionService.createRecipeInstruction(recipeInstruction).then(res => {
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
            <div className='container'>
                <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
                    <h3 className='text-center text-decoration-underline'>Add Instruction</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label className='boldFont mt-3'>Title :</label>
                                <input className='form-control' placeholder='Instruction title' id='title' name='title' value={title} onChange={handleTitle} />
                            </div>
                            <div className='form-group'>
                                <label className='boldFont mt-3'>Instruction :</label>
                                <input className='form-control' placeholder='Enter instruction' id='instruction' name='instruction' value={instruction} onChange={handleInstruction} />
                            </div>

                            <button className='btn btn-outline-success mt-3' onClick={saveRecipeInstruction}>
                                <i className="fa-solid fa-check"></i>Save
                            </button>
                            <button className='btn btn-outline-danger mt-3 ms-3' onClick={cancel}>
                                <i className="fa fa-times"></i>Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateRecipeInstruction;