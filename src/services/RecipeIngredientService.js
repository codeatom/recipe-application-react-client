import axios from 'axios';

const RECIPE_INGREDIENT_BASE_URL = "http://localhost:8080/api/v1/recipe-ingredient";

class RecipeIngredientService{

    getRecipeIngredients(){
        return axios.get(RECIPE_INGREDIENT_BASE_URL + '/list');
    }

    getNonAssociatedRecipeIngredients(){
        return axios.get(RECIPE_INGREDIENT_BASE_URL + '/non-associated');
    }

    createRecipeIngredient(recipeIngredient){
        return axios.post(RECIPE_INGREDIENT_BASE_URL + '/add', recipeIngredient);
    }

    getRecipeIngredientById(recipeIngredientId){
        return axios.get(RECIPE_INGREDIENT_BASE_URL + '/get/' + recipeIngredientId);
    }

    updateRecipeIngredient(recipeIngredientId, recipeIngredient){
        return axios.put(RECIPE_INGREDIENT_BASE_URL + '/update/' + recipeIngredientId, recipeIngredient);
    }

    addRecipe(addRecipeForm){
        return axios.post(RECIPE_INGREDIENT_BASE_URL + '/add-recipe', addRecipeForm);
    }  

    removeRecipe(RecipeId){
        return axios.get(RECIPE_INGREDIENT_BASE_URL + '/remove-recipe/' + RecipeId);
    }  

    deleteRecipeIngredient(recipeIngredientId){
        return axios.delete(RECIPE_INGREDIENT_BASE_URL + '/delete/' + recipeIngredientId);
    }   
}

export default new RecipeIngredientService()