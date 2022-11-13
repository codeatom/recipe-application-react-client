import React, { useState, useEffect } from 'react';
import RecipeService from '../../services/RecipeService';


const Home = (props) => {
   const [recipes, setRecipes] = useState([]);

   useEffect(() => {
      RecipeService.getRecipes().then((res) => {
         setRecipes(res.data);
      });
   }, []);

   const showRecipeDetails = (recipeId) => {
      props.history.push(`/recipe/${recipeId}`);
   };

   return (
      <div>

         <div className='mt-4'>
            <h2 >Recipes</h2>
         </div>

         {
            recipes.map(
               recipe =>
                  <a onClick={() => { showRecipeDetails(recipe.id) }}>
                     <div className="card mt-4 card-width center-text">
                        <div className="d-md-flex flex-row mb-3">
                           <div className="col-md-2 ps-3 boldFont mt-4 mb-3">
                              <span>
                                 {recipe.recipeName}
                              </span>
                           </div>
                        </div>
                     </div>
                  </a>
            )
         }

      </div>
   );
}

export default Home;