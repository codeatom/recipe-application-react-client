import axios from 'axios';

const INGREDIENT_BASE_URL = "http://localhost:8080/api/v1/ingredient";

class IngredientService{
    getIngredients(){
        return axios.get(INGREDIENT_BASE_URL + '/search?search=list');
    }

    createIngredient(ingredient){
        return axios.post(INGREDIENT_BASE_URL + '/add', ingredient);
    }

    getIngredientById(ingredientId){
        return axios.get(INGREDIENT_BASE_URL + '/get/' + ingredientId);
    }

    updateIngredient(ingredientId, ingredient){
        return axios.put(INGREDIENT_BASE_URL + '/update/' + ingredientId, ingredient);
    }

    deleteIngredient(ingredientId){
        return axios.delete(INGREDIENT_BASE_URL + '/delete/' + ingredientId);
    }

    searchForIngredient(searchString){
        return axios.get(INGREDIENT_BASE_URL + '/search?search=' + searchString);
    }
    
}

export default new IngredientService()