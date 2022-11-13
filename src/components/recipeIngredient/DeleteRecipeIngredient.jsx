import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import RecipeIngredientService from '../../services/RecipeIngredientService';


const DeleteRecipeIngredient = (props) => {
    const [recipeIngredientId] = useState(props.match.params.id);
    const [amount, setAmount] = useState("");
    const [measurement, setMeasurement] = useState("");
    const [ingredientName, setIngredientName] = useState("");

    useMemo(() => {
        RecipeIngredientService.getRecipeIngredientById(props.match.params.id).then((response) => {
            setAmount(response.data.amount);
            setMeasurement(response.data.measurement);
            setIngredientName(response.data.ingredientView.ingredientName);
        });
    }, []);

    const deleteRecipeIngredient = (e) => {
        e.preventDefault();
        RecipeIngredientService.deleteRecipeIngredient(recipeIngredientId).then(res => {
            backToRecipeIngredientList();
        });
    }

    const backToRecipeIngredientList = () => {
        props.history.push('/recipe-ingredients');
    }


    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className='mt-5'>
                        <h4>
                            Do you want to delete this ingredient?
                        </h4>
                    </div>

                    <div className="card mt-5">
                        <div className="d-md-flex flex-row mb-3">
                            <div className="col-md-3 ps-3 boldFont" >
                                <span>Id :</span>
                            </div>
                            <div className="col-md-10">
                                <span>{recipeIngredientId}</span>
                            </div>
                        </div>
                        <div className="d-md-flex flex-row mb-3">
                            <div className="col-md-3 ps-3 boldFont">
                                <span>Ingredient :</span>
                            </div>
                            <div className="col-md-10">
                                <span>{ingredientName}</span>
                            </div>
                        </div>
                        <div className="d-md-flex flex-row mb-3">
                            <div className="col-md-3 ps-3 boldFont">
                                <span>Amount :</span>
                            </div>
                            <div className="col-md-10">
                                <span>{amount}</span>
                            </div>
                        </div>
                        <div className="d-md-flex flex-row mb-3">
                            <div className="col-md-3 ps-3 boldFont">
                                <span>Measurement :</span>
                            </div>
                            <div className="col-md-10">
                                <span>{measurement}</span>
                            </div>
                        </div>
                    </div>

                    <button className='btn btn-outline-danger mt-2' onClick={deleteRecipeIngredient}>
                        <i className="fas fa-trash"></i>Delete
                    </button>
                    <button className='btn btn-outline-primary mt-2 ms-3' >
                        <Link to="/recipe-ingredients" className="nav-link active">
                            <i className="fa fa-arrow-left"></i>Cancel
                        </Link>
                    </button>
                </div>

                <div class="col mt-5 ps-5">
                    <h4></h4>
                </div>
            </div>
        </div>
    );
}

export default DeleteRecipeIngredient;