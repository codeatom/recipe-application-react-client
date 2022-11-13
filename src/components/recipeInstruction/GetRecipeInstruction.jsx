import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import RecipeInstructionService from '../../services/RecipeInstructionService';
import '../Style.css';


const GetRecipeInstruction = (props) => {
    const [recipeInstructionId] = useState(props.match.params.id);
    const [title, setTitle] = useState("");
    const [instruction, setInstruction] = useState("");

    useMemo(() => {
        RecipeInstructionService.getRecipeInstructionById(props.match.params.id).then((response) => {
            setTitle(response.data.title);
            setInstruction(response.data.instruction);
        });
    }, []);


    return (
        <div>
            <div className="row">

                {/* column 1 */}
                <div className="col-8">
                    <div className="mt-5">
                        <h3>Instuction</h3>
                    </div>

                    <div className="card mt-4">
                        <div className="card-header bg-success text-white boldFont">
                            Instuction Details
                        </div>

                        <div className="d-md-flex flex-row mb-3">
                            <div className="col-md-2 ps-3 boldFont" >
                                <span>Id</span>
                            </div>
                            <div className="col-md-10">
                                <span>{recipeInstructionId}</span>
                            </div>
                        </div>
                        <div className="d-md-flex flex-row mb-3">
                            <div className="col-md-2 ps-3 boldFont">
                                <span>Title</span>
                            </div>
                            <div className="col-md-10">
                                <span>{title}</span>
                            </div>
                        </div>
                        <div className="d-md-flex flex-row mb-3">
                            <div className="col-md-2 ps-3 boldFont">
                                <span>Directions</span>
                            </div>
                            <div className="col-md-10">
                                <span>{instruction}</span>
                            </div>
                        </div>
                    </div>

                    <button className='btn btn-outline-info mt-2' >
                        <Link to={`/update-recipe-instruction/${recipeInstructionId}`} className="nav-link active">
                            <i className="fas fa-pen-to-square"></i>Edit
                        </Link>
                    </button>
                    <button className='btn btn-outline-primary mt-2 ms-3' >
                        <Link to="/recipe-instructions" className="nav-link active">
                            <i className="fa fa-arrow-left"></i>Back
                        </Link>
                    </button>
                </div>

                {/* column 2 */}
                <div className="col-4 mt-5 ps-5">
                    <h4></h4>
                </div>
            </div>
        </div>
    );
}

export default GetRecipeInstruction;