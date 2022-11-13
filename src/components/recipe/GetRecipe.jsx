import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import RecipeService from '../../services/RecipeService';
import RemoveOrAddRecipeIngredientToRecipe from './RemoveOrAddRecipeIngredientToRecipe';
import RemoveOrAddRecipeCategoryToRecipe from './RemoveOrAddRecipeCategoryToRecipe';
import '../Style.css';


const GetRecipe = (props) => {
    const [recipeId] = useState(props.match.params.id);
    const [recipeName, setRecipeName] = useState("");
    const [instruction, setInstruction] = useState("");
    const [recipeCategories, setCategories] = useState([]);
    const [recipeIngredients, setIngredients] = useState([]);
    const [refreshToggle, setRefreshToggle] = useState(true);

    useMemo(() => {
        RecipeService.getRecipeById(props.match.params.id).then((response) => {
            setRecipeName(response.data.recipeName);
            setInstruction(response.data.instruction.instruction);
            setCategories(response.data.recipeCategoryViews);
            setIngredients(response.data.recipeIngredientViews)
        });
    }, [refreshToggle]);

    const addRecipeCategoryToRecipe = () => {
        props.history.push(`/add-recipe-category-to-recipe/${recipeId}`);
    };

    const addRecipeIngredientToRecipe = () => {
        props.history.push(`/add-recipe-ingredient-to-recipe/${recipeId}`);
    };

    const removeRecipeCategoryFromRecipe = (recipeCategoryId) => {
        RecipeService.removeRecipeCategory(recipeId, recipeCategoryId).then((response) => {
            setRefreshToggle(!refreshToggle);
        });
    };

    const removeRecipeIngredientFromRecipe = (recipeIngredientId) => {
        RecipeService.removeRecipeIngredient(recipeId, recipeIngredientId).then((response) => {
            setRefreshToggle(!refreshToggle);
        });
    };

    const backToRecipes = () => {
        props.history.push('/recipes');
    };


    return (
        <div>
            <div className="row">

                {/* column 1 */}
                <div className="col-6">
                    <div className="mt-5">
                        <h3>Recipe</h3>
                    </div>

                    <div className="card mt-4">
                        <div className="card-header bg-success text-white boldFont">
                            Recipe Details
                        </div>

                        <div className="d-md-flex flex-row mb-3">
                            <div className="col-md-2 ps-3 boldFont" >
                                <span>Id</span>
                            </div>
                            <div className="col-md-10">
                                <span>{recipeId}</span>
                            </div>
                        </div>
                        <div className="d-md-flex flex-row mb-3">
                            <div className="col-md-2 ps-3 boldFont">
                                <span>Recipe</span>
                            </div>
                            <div className="col-md-10">
                                <span>{recipeName}</span>
                            </div>
                        </div>
                        <div className="d-md-flex flex-row mb-3">
                            <div className="col-md-2 ps-3 boldFont">
                                <span>Directions</span>
                            </div>
                            <div className="col-md-10">
                                <div>{instruction}</div>
                            </div>
                        </div>
                    </div>

                    <button className='btn btn-outline-info mt-2' >
                        <Link to={`/update-recipe/${recipeId}`} className="nav-link active">
                            <i className="fas fa-pen-to-square"></i>Edit
                        </Link>
                    </button>
                    <button className='btn btn-outline-primary mt-2 ms-3' onClick={backToRecipes}>
                        Back
                    </button>
                </div>

                {/* column 2 */}
                <div className="col-3">
                    <RemoveOrAddRecipeCategoryToRecipe
                        addRecipeCategoryToRecipe={addRecipeCategoryToRecipe}
                        removeRecipeCategoryFromRecipe={removeRecipeCategoryFromRecipe}
                        recipeCategories={recipeCategories}
                    />
                </div>

                {/* column 3 */}
                <div className="col-3">
                    <RemoveOrAddRecipeIngredientToRecipe
                        addRecipeIngredientToRecipe={addRecipeIngredientToRecipe}
                        removeRecipeIngredientFromRecipe={removeRecipeIngredientFromRecipe}
                        recipeIngredients={recipeIngredients}
                    />
                </div>

            </div>
        </div>
    );
}

export default GetRecipe;