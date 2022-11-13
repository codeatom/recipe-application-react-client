import React, { useState, useMemo } from 'react';
import RecipeService from '../../services/RecipeService';
import '../Style.css';


const UpdateRecipe = (props) => {
    const [recipeId] = useState(props.match.params.id);
    const [instructionId, setInstructionId] = useState("");
    const [recipeName, setRecipeName] = useState("");
    const [instructionTitle, setInstructionTitle] = useState("");
    const [instructionDetail, setInstructionDetail] = useState("");

    useMemo(() => {
        RecipeService.getRecipeById(props.match.params.id).then((response) => {
            setInstructionId(response.data.instruction.id);
            setRecipeName(response.data.recipeName);
            setInstructionTitle(response.data.instruction.title);
            setInstructionDetail(response.data.instruction.instruction);
        });
    }, []);

    const editRecipe = (e) => {
        e.preventDefault();
        let recipe = {
            id: recipeId,
            instructionId: instructionId,
            recipeName: recipeName,
            instructionTitle: instructionTitle,
            instructionDetail: instructionDetail,
        };

        RecipeService.updateRecipe(recipeId, recipe).then(res => {
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
            <div className='row'>
                <div className="col">
                    <div className='card mt-5'>
                        <div className='card-body'>
                            <div className='mb-5'>
                                <h3 className='text-center text-decoration-underline'>Edit Recipe</h3>
                            </div>

                            <form>
                                <div className='form-group'>
                                    <label className='boldFont'>Recipe Name :</label>
                                    <input className='form-control' placeholder='Recipe name' id='recipeName' name='recipeName' value={recipeName} onChange={handleRecipeName} />
                                </div>
                                <div className='form-group'>
                                    <label className='boldFont'>Instruction Title :</label>
                                    <input className='form-control' placeholder='Instruction title' id='instructionTitle' name='instructionTitle' value={instructionTitle} onChange={handleInstructionTitle} />
                                </div>
                                <div className='form-group'>
                                    <label className='boldFont'>Instruction Details :</label>
                                    <input className='form-control' placeholder='Instruction detail' id='instructionDetail' name='instructionDetail' value={instructionDetail} onChange={handleInstructionDetail} />
                                </div>

                                <button className='btn btn-outline-success mt-3' onClick={editRecipe}>
                                    <i className="fa-solid fa-check"></i>Save
                                </button>
                                <button className='btn btn-outline-danger mt-3 ms-3' onClick={cancel}>
                                    <i className="fa fa-times"></i>Cancel
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="col mt-5 ps-5">
                    <h4></h4>
                </div>
            </div>
        </div>
    );
}

export default UpdateRecipe;