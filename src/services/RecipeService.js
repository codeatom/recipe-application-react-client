import axios from 'axios';

const RECIPE_BASE_URL = "http://localhost:8080/api/v1/recipe";

class RecipeService{
       
    getRecipes(){
        return axios.get(RECIPE_BASE_URL + '/search?search=list');
    }

    createRecipe(recipe){
        return axios.post(RECIPE_BASE_URL + '/add', recipe);
    }

    getRecipeById(recipeId){
        return axios.get(RECIPE_BASE_URL + '/get/' + recipeId);
    }

    updateRecipe(recipeId, recipe){
        return axios.put(RECIPE_BASE_URL + '/update/' + recipeId, recipe);
    }

    addRecipeIngredient(addRecipeIngredientForm){
        return axios.post(RECIPE_BASE_URL + '/add-recipe-ingredient', addRecipeIngredientForm);
    }  

    removeRecipeIngredient(recipeId, recipeIngredientId){
        return axios.get(RECIPE_BASE_URL + '/remove-recipe-ingredient/' + recipeId + '/' + recipeIngredientId);
    }  

    addRecipeCategory(addRecipeCategoryForm){
        console.log("==>", addRecipeCategoryForm.id, addRecipeCategoryForm.recipeCategoryId)
        return axios.post(RECIPE_BASE_URL + '/add-recipe-category', addRecipeCategoryForm);
    }  

    removeRecipeCategory(recipeId, recipeCategoryId){
        return axios.get(RECIPE_BASE_URL + '/remove-recipe-category/' + recipeId + '/' + recipeCategoryId);
    }  

    deleteRecipe(recipeId){
        return axios.delete(RECIPE_BASE_URL + '/delete/' + recipeId);
    }     
}

export default new RecipeService()