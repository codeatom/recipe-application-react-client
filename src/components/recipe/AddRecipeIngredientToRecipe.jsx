import React, { useState, useMemo } from 'react';
import RecipeService from '../../services/RecipeService';
import RecipeIngredientService from '../../services/RecipeIngredientService';


const AddRecipeIngredientToRecipe = (props) => {
    const [recipeId] = useState(props.match.params.id);
    const [recipeIngredientId, setRecipeIngredientId] = useState(0);
    const [recipeIngredients, setRecipeIngredients] = useState([]);

    useMemo(() => {
        RecipeIngredientService.getNonAssociatedRecipeIngredients().then((response) => {
            setRecipeIngredients(response.data);
        });
    }, []);

    const addRecipeIngredientToRecipe = (e) => {
        e.preventDefault();
        let addRecipeIngredientForm = {
            recipeId: recipeId,
            recipeIngredientId: recipeIngredientId,
        };

        RecipeService.addRecipeIngredient(addRecipeIngredientForm).then(res => {
            backToRecipe();
        });
    };

    const backToRecipe = () => {
        props.history.push(`/get-recipe/${recipeId}`);
    };

    const handleRecipeIngredientId = (event) => {
        setRecipeIngredientId(event.target.value);
    }

    const cancel = () => {
        backToRecipe();
    };


    return (
        <div>
            <div className='container'>
                <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
                    <h3 className='text-center text-decoration-underline'>Add Recipe Ingredient To Recipe</h3>
                    <div className='card-body'>

                        <form>
                            <div className='form-group'>
                                <label className='boldFont'>Ingredients</label>
                                <select id="recipeIngredientId" name="recipeIngredientId" defaultValue={0} value={recipeIngredientId} onChange={handleRecipeIngredientId} className="form-control">
                                    {recipeIngredients.length != 0 ?
                                        (<option value="0" disabled>select ingredient</option>) :
                                        (<option value="0" disabled>No unused recipe ingredient available. Create new before adding.</option>)}

                                    {recipeIngredients.map(recipeIngredient => (
                                        <option key={recipeIngredient.id} value={recipeIngredient.id}>{recipeIngredient.ingredientView.ingredientName}</option>
                                    ))}
                                </select>
                            </div>

                            <button className='btn btn-outline-success mt-3' onClick={addRecipeIngredientToRecipe}>
                                <i className="fa-solid fa-check"></i>Save
                            </button>
                            <button className='btn btn-outline-danger mt-3 ms-3' onClick={cancel} >
                                <i className="fa fa-times"></i>Cancel
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddRecipeIngredientToRecipe;
