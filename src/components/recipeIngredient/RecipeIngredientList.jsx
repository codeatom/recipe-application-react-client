import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeIngredientService from '../../services/RecipeIngredientService';


const RecipeIngredientList = (props) => {
    const [recipeIngredients, setRecipeIngredients] = useState([])

    useEffect(() => {
        RecipeIngredientService.getRecipeIngredients().then((res) => {
            setRecipeIngredients(res.data);
        });
    }, []);


    return (
        <div>
            <div className='mt-4'>
                <h2>Recipe Ingredients</h2>
            </div>

            {/* row 2 */}
            <div className="row">
                {/* column 1 */}
                <div className="col-8">
                    <button className='btn btn-success mt-4 mb-1' >
                        <Link to="/create-recipe-ingredient" className="nav-link active">
                            <i className="fas fa-plus"></i>Add
                        </Link>
                    </button>

                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Amount</th>
                                <th>Measurement</th>
                                <th>Ingredient</th>
                                <th>Recipe type</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                recipeIngredients.map(
                                    recipeIngredient =>
                                        <tr key={recipeIngredient.id}>
                                            <td> {recipeIngredient.id} </td>
                                            <td> {recipeIngredient.amount} </td>
                                            <td> {recipeIngredient.measurement} </td>
                                            <td> {recipeIngredient.ingredientView.ingredientName} </td>
                                            <td> {recipeIngredient.recipeView ? recipeIngredient.recipeView.recipeName : "no data"} </td>
                                            <td>
                                                <button className='btn btn-outline-primary btn-sm mb-1 me-2' >
                                                    <Link to={`/get-recipe-ingredient/${recipeIngredient.id}`} className="nav-link active">
                                                        <i className="fas fa-circle-info"></i>Detail
                                                    </Link>
                                                </button>
                                                <button className='btn btn-outline-info btn-sm mb-1 me-2' >
                                                    <Link to={`/update-recipe-ingredient/${recipeIngredient.id}`} className="nav-link active">
                                                        <i className="fas fa-pen-to-square"></i>Edit
                                                    </Link>
                                                </button>
                                                <button className='btn btn-outline-danger btn-sm mb-1 me-2' >
                                                    <Link to={`/delete-recipe-ingredient/${recipeIngredient.id}`} className="nav-link active">
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

export default RecipeIngredientList;