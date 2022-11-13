import React, { useState, useMemo } from 'react';
import RecipeIngredientService from '../../services/RecipeIngredientService';
import RecipeService from '../../services/RecipeService';


const AddRecipeToRecipeIngredient = (props) => {
    const [recipeIngredientId] = useState(props.match.params.id);
    const [recipeId, setRecipeId] = useState(0);
    const [recipes, setRecipes] = useState([]);

    useMemo(() => {
        RecipeService.getRecipes().then((res) => {
            setRecipes(res.data);
        });
    }, []);

    const addRecipeToRecipeIngredient = (e) => {
        e.preventDefault();
        let addRecipeForm = {
            id: recipeIngredientId,
            recipeId: recipeId,
        };

        RecipeIngredientService.addRecipe(addRecipeForm).then(res => {
            backToRecipeIngredients();
        });
    };

    const backToRecipeIngredients = () => {
        props.history.push('/recipe-ingredients');
    };

    const handleRecipeId = (event) => {
        setRecipeId(event.target.value);
    }

    const cancel = () => {
        backToRecipeIngredients();
    };


    return (
        <div>
            <div className='container'>
                <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
                    <h3 className='text-center text-decoration-underline'>Add Recipe To Recipe Ingredient</h3>
                    <div className='card-body'>

                        <form>
                            <div className='form-group'>
                                <label className='boldFont'>Recipes</label>
                                <select id="recipeId" name="recipeId" defaultValue={0} value={recipeId} onChange={handleRecipeId} className="form-control">
                                    <option value="0" disabled>select recipe</option>
                                    {recipes.map(recipe => (
                                        <option key={recipe.id} value={recipe.id}>{recipe.recipeName}</option>
                                    ))}
                                </select>
                            </div>

                            <button className='btn btn-outline-success mt-3' onClick={addRecipeToRecipeIngredient}>
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

export default AddRecipeToRecipeIngredient;