import React, { useState, useMemo } from 'react';
import RecipeCategoryService from '../../services/RecipeCategoryService';
import RecipeService from '../../services/RecipeService';


const AddRecipeToRecipeCategory = (props) => {
    const [recipeCategoryId] = useState(props.match.params.id);
    const [recipeId, setRecipeId] = useState(0);
    const [recipes, setRecipes] = useState([]);

    useMemo(() => {
        RecipeService.getRecipes().then((res) => {
            setRecipes(res.data);
        });
    }, []);

    const addRecipeToRecipeCategory = (e) => {
        e.preventDefault();
        let addRecipeForm = {
            id: recipeCategoryId,
            recipeId: recipeId,
        };

        RecipeCategoryService.addRecipe(addRecipeForm).then(res => {
            backToRecipeCategory();
        });
    };

    const backToRecipeCategory = () => {
        props.history.push(`/get-recipe-category/${recipeCategoryId}`);
    };

    const handleRecipeId = (event) => {
        setRecipeId(event.target.value);
    }

    const cancel = () => {
        backToRecipeCategory();
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

                            <button className='btn btn-outline-success mt-3' onClick={addRecipeToRecipeCategory}>
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

export default AddRecipeToRecipeCategory;
