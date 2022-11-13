import axios from 'axios';

const RECIPE_CATEGORY_BASE_URL = "http://localhost:8080/api/v1/recipe-category";

class RecipeCategoryService{

    getRecipeCategories(){
        return axios.get(RECIPE_CATEGORY_BASE_URL + '/list');
    }

    createRecipeCategory(recipeCategory){
        return axios.post(RECIPE_CATEGORY_BASE_URL + '/add', recipeCategory);
    }

    getRecipeCategoryById(recipeCategoryId){
        return axios.get(RECIPE_CATEGORY_BASE_URL + '/get/' + recipeCategoryId);
    }

    updateRecipeCategory(recipeCategoryId, recipeCategory){
        return axios.put(RECIPE_CATEGORY_BASE_URL + '/update/' + recipeCategoryId, recipeCategory);
    }

    addRecipe(addRecipeForm){
        return axios.post(RECIPE_CATEGORY_BASE_URL + '/add-recipe', addRecipeForm);
    }  

    removeRecipe(recipeCategoryId, recipeId){
        return axios.get(RECIPE_CATEGORY_BASE_URL + '/remove-recipe/' + recipeCategoryId + '/' + recipeId);
    }  

    deleteRecipeCategory(recipeCategoryId){
        return axios.delete(RECIPE_CATEGORY_BASE_URL + '/delete/' + recipeCategoryId);
    }     
}

export default new RecipeCategoryService() 