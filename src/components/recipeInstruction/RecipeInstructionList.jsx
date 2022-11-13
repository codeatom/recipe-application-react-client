import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeInstructionService from '../../services/RecipeInstructionService';


const RecipeInstructionList = (props) => {
    const [recipeInstructions, setRecipeInstructions] = useState([])

    useEffect(() => {
        RecipeInstructionService.getRecipeInstructions().then((res) => {
            setRecipeInstructions(res.data);
        });
    }, []);


    return (
        <div>
            <div className='mt-4'>
                <h2 >Recipe Instructions</h2>
            </div>

            <div className="row">

                {/* column 1 */}
                <div className="col-8">
                    <div>
                        <button className='btn btn-success mt-4 mb-1' >
                            <Link to="/create-recipe-instruction" className="nav-link active">
                                <i className="fas fa-plus"></i>Add
                            </Link>
                        </button>
                    </div>

                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Instruction</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recipeInstructions.map(
                                    recipeInstruction =>
                                        <tr key={recipeInstruction.id}>
                                            <td> {recipeInstruction.id}</td>
                                            <td> {recipeInstruction.title}</td>
                                            <td> {recipeInstruction.instruction}</td>
                                            <td>
                                                <button className='btn btn-outline-primary btn-sm mb-1 me-2' >
                                                    <Link to={`/get-recipe-instruction/${recipeInstruction.id}`} className="nav-link active">
                                                        <i className="fas fa-circle-info"></i>Detail
                                                    </Link>
                                                </button>
                                                <button className='btn btn-outline-info btn-sm mb-1 me-2' >
                                                    <Link to={`/update-recipe-instruction/${recipeInstruction.id}`} className="nav-link active">
                                                        <i className="fas fa-pen-to-square"></i>Edit
                                                    </Link>
                                                </button>
                                                <button className='btn btn-outline-danger btn-sm mb-1' >
                                                    <Link to={`/delete-recipe-instruction/${recipeInstruction.id}`} className="nav-link active">
                                                        <i className="fas fa-trash"></i>Delete
                                                    </Link>
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                {/* column 2 */}
                <div className="col-4">
                    <h1></h1>
                </div>
            </div>
        </div>
    );
}

export default RecipeInstructionList;