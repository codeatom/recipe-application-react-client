import React, { useState, useMemo } from 'react';
import RecipeService from '../../services/RecipeService';
import RecipeCategoryService from '../../services/RecipeCategoryService';



const AddRecipeCategoryToRecipe = (props) => {
    const [recipeId] = useState(props.match.params.id);
    const [recipeCategoryId, setRecipeCategoryId] = useState(0);
    const [recipeCategories, setRecipeCategories] = useState([]);

    useMemo(() => {
        RecipeCategoryService.getRecipeCategories().then((response) => {
            setRecipeCategories(response.data);
        });
    }, []);

    const addRecipeCategoryToRecipe = (e) => {
        e.preventDefault();
        let addRecipeCategoryForm = {
            recipeId: recipeId,
            recipeCategoryId: recipeCategoryId,
        };

        RecipeService.addRecipeCategory(addRecipeCategoryForm).then(response => {
            backToRecipe();
        });
    };

    const backToRecipe = () => {
        props.history.push(`/get-recipe/${recipeId}`);
    };

    const handleRecipeCategoryId = (event) => {
        setRecipeCategoryId(event.target.value);
    }

    const cancel = () => {
        backToRecipe();
    };


    return (
        <div>
            <div className='container'>
                <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
                    <h3 className='text-center text-decoration-underline'>Add Recipe Category To Recipe</h3>
                    <div className='card-body'>

                        <form>
                            <div className='form-group'>
                                <label className='boldFont'>Categories</label>
                                <select id="recipeCategoryId" name="recipeCategoryId" defaultValue={0} value={recipeCategoryId} onChange={handleRecipeCategoryId} className="form-control">
                                    <option value="0" disabled>select category</option>
                                    {recipeCategories.map(recipeCategory => (
                                        <option key={recipeCategory.id} value={recipeCategory.id}>{recipeCategory.category}</option>
                                    ))}
                                </select>
                            </div>

                            <button className='btn btn-outline-success mt-3' onClick={addRecipeCategoryToRecipe}>
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

export default AddRecipeCategoryToRecipe;
