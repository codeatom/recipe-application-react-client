import React, { useState } from 'react';
import RecipeService from '../../services/RecipeService';


const CreateRecipe = (props) => {
    const [recipeName, setRecipeName] = useState("");
    const [instructionTitle, setInstructionTitle] = useState("");
    const [instructionDetail, setInstructionDetail] = useState("");

    const saveRecipe = (e) => {
        e.preventDefault();
        let recipe = {
            recipeName: recipeName,
            instructionTitle: instructionTitle,
            instructionDetail: instructionDetail,
        };

        RecipeService.createRecipe(recipe).then(res => {
            props.history.push('/recipes');
        });
    }

    const handleRecipeName = (event) => {
        setRecipeName(event.target.value);
    }

    const handleInstructionTitle = (event) => {
        setInstructionTitle(event.target.value);
    }

    const handleInstructionDetail = (event) => {
        setInstructionDetail(event.target.value);
    }

    const cancel = () => {
        props.history.push('/recipes');
    }


    return (
        <div>
            <div className='container'>
                <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
                    <h3 className='text-center text-decoration-underline'>Add Recipe</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label className='boldFont mt-3'>Recipe Name :</label>
                                <input className='form-control' placeholder='Enter recipe name' id='recipeName' name='recipeName' value={recipeName} onChange={handleRecipeName} />
                            </div>
                            <div className='form-group'>
                                <label className='boldFont mt-3'>Instruction Title :</label>
                                <input className='form-control' placeholder='Enter instruction title' id='instructionTitle' name='instructionTitle' value={instructionTitle} onChange={handleInstructionTitle} />
                            </div>
                            <div className='form-group'>
                                <label className='boldFont mt-3'>Instruction Details :</label>
                                <input className='form-control' placeholder='Enter instruction details' id='instructionDetail' name='instructionDetail' value={instructionDetail} onChange={handleInstructionDetail} />
                            </div>

                            <button className='btn btn-outline-success mt-3' onClick={saveRecipe}>
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

export default CreateRecipe;