import axios from 'axios';

const RECIPE_INSTRUCTION_BASE_URL = "http://localhost:8080/api/v1/recipe-instruction";

class RecipeInstructionService{
    
    getRecipeInstructions(){
        return axios.get(RECIPE_INSTRUCTION_BASE_URL + '/list');
    }

    createRecipeInstruction(recipeInstruction){
        return axios.post(RECIPE_INSTRUCTION_BASE_URL + '/add', recipeInstruction);
    }

    getRecipeInstructionById(recipeInstructionId){
        return axios.get(RECIPE_INSTRUCTION_BASE_URL + '/get/' + recipeInstructionId);
    }

    updateRecipeInstruction(recipeInstructionId, recipeInstruction){
        return axios.put(RECIPE_INSTRUCTION_BASE_URL + '/update/' + recipeInstructionId, recipeInstruction);
    }

    deleteRecipeInstruction(recipeInstructionId){
        return axios.delete(RECIPE_INSTRUCTION_BASE_URL + '/delete/' + recipeInstructionId);
    }

}

export default new RecipeInstructionService()