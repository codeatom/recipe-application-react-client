import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Recipe from './components/home/Recipe';

import IngredientList from './components/ingredient/IngredientList';
import CreateIngredient from './components/ingredient/CreateIngredient';
import GetIngredient from './components/ingredient/GetIngredient';
import UpdateIngredient from './components/ingredient/UpdateIngredient';
import DeleteIngredient from './components/ingredient/DeleteIngredient';
import SearchResult from './components/ingredient/SearchResult';

import RecipeIngredientList from './components/recipeIngredient/RecipeIngredientList';
import CreateRecipeIngredient from './components/recipeIngredient/CreateRecipeIngredient';
import GetRecipeIngredient from './components/recipeIngredient/GetRecipeIngredient';
import UpdateRecipeIngredient from './components/recipeIngredient/UpdateRecipeIngredient';
import AddRecipeToRecipeIngredient from './components/recipeIngredient/AddRecipeToRecipeIngredient';
import DeleteRecipeIngredient from './components/recipeIngredient/DeleteRecipeIngredient';

import RecipeInstructionList from './components/recipeInstruction/RecipeInstructionList';
import CreateRecipeInstruction from './components/recipeInstruction/CreateRecipeInstruction';
import GetRecipeInstruction from './components/recipeInstruction/GetRecipeInstruction';
import UpdateRecipeInstruction from './components/recipeInstruction/UpdateRecipeInstruction';
import DeleteRecipeInstruction from './components/recipeInstruction/DeleteRecipeInstruction';

import RecipeCategoryList from './components/recipeCategory/RecipeCategoryList';
import CreateRecipeCategory from './components/recipeCategory/CreateRecipeCategory';
import GetRecipeCategory from './components/recipeCategory/GetRecipeCategory';
import UpdateRecipeCategory from './components/recipeCategory/UpdateRecipeCategory';
import AddRecipeToRecipeCategory from './components/recipeCategory/AddRecipeToRecipeCategory';
import DeleteRecipeCategory from './components/recipeCategory/DeleteRecipeCategory';

import RecipeList from './components/recipe/RecipeList';
import CreateRecipe from './components/recipe/CreateRecipe';
import GetRecipe from './components/recipe/GetRecipe';
import UpdateRecipe from './components/recipe/UpdateRecipe';
import AddRecipeCategoryToRecipe from './components/recipe/AddRecipeCategoryToRecipe';
import AddRecipeIngredientToRecipe from './components/recipe/AddRecipeIngredientToRecipe';
import DeleteRecipe from './components/recipe/DeleteRecipe';


function App() {
  return (
    <div>
        <div className="row">
          <Header />
        </div>

        <div className="container">
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/home' exact component={Home}></Route>
            <Route path='/recipe/:id' component={Recipe}></Route>

            <Route path='/ingredients' component={IngredientList}></Route>
            <Route path='/create-ingredient' component={CreateIngredient}></Route>
            <Route path='/get-ingredient/:id' component={GetIngredient}></Route>
            <Route path='/update-ingredient/:id' component={UpdateIngredient}></Route>
            <Route path='/delete-ingredient/:id' component={DeleteIngredient}></Route>
            <Route path='/search-result/:searchString' component={SearchResult}></Route>
            
            <Route path='/recipe-ingredients' component={RecipeIngredientList}></Route>
            <Route path='/create-recipe-ingredient' component={CreateRecipeIngredient}></Route>
            <Route path='/get-recipe-ingredient/:id' component={GetRecipeIngredient}></Route>
            <Route path='/update-recipe-ingredient/:id' component={UpdateRecipeIngredient}></Route>
            <Route path='/delete-recipe-ingredient/:id' component={DeleteRecipeIngredient}></Route>
            <Route path='/add-recipe-to-recipe-ingredient/:id' component={AddRecipeToRecipeIngredient}></Route>

            <Route path='/recipe-instructions' component={RecipeInstructionList}></Route>
            <Route path='/create-recipe-instruction' component={CreateRecipeInstruction}></Route>
            <Route path='/get-recipe-instruction/:id' component={GetRecipeInstruction}></Route>
            <Route path='/update-recipe-instruction/:id' component={UpdateRecipeInstruction}></Route>
            <Route path='/delete-recipe-instruction/:id' component={DeleteRecipeInstruction}></Route>

            <Route path='/recipe-categories' component={RecipeCategoryList}></Route>
            <Route path='/create-recipe-category' component={CreateRecipeCategory}></Route>
            <Route path='/get-recipe-category/:id' component={GetRecipeCategory}></Route>
            <Route path='/update-recipe-category/:id' component={UpdateRecipeCategory}></Route>
            <Route path='/add-recipe-to-recipe-category/:id' component={AddRecipeToRecipeCategory}></Route>
            <Route path='/delete-recipe-category/:id' component={DeleteRecipeCategory}></Route>

            <Route path='/recipes' component={RecipeList}></Route>
            <Route path='/create-recipe' component={CreateRecipe}></Route>
            <Route path='/get-recipe/:id' component={GetRecipe}></Route>
            <Route path='/update-recipe/:id' component={UpdateRecipe}></Route>
            <Route path='/add-recipe-category-to-recipe/:id' component={AddRecipeCategoryToRecipe}></Route>
            <Route path='/add-recipe-ingredient-to-recipe/:id' component={AddRecipeIngredientToRecipe}></Route>
            <Route path='/delete-recipe/:id' component={DeleteRecipe}></Route>
          </Switch>
        </div>

        <div className="row">
          <Footer />
        </div>
    </div>
  );
}

export default App;
