import React, { useState, useMemo } from 'react';
import RecipeService from '../../services/RecipeService';
import '../Style.css';


const Recipe = (props) => {
   const [recipeId] = useState(props.match.params.id);
   const [recipeName, setRecipeName] = useState("");
   const [instruction, setInstruction] = useState("");
   const [recipeCategories, setCategories] = useState([]);
   const [recipeIngredients, setIngredients] = useState([]);

   useMemo(() => {
      RecipeService.getRecipeById(recipeId).then((response) => {
         setRecipeName(response.data.recipeName);
         setInstruction(response.data.instruction.instruction);
         setCategories(response.data.recipeCategoryViews);
         setIngredients(response.data.recipeIngredientViews);

         console.log("==>", response.data)
      });
   }, []);


   return (
      <div>
         <div className='row'>

            {/* column 1 */}
            <div className='col-6'>

               <h4 className='mt-5 mb-2'>Recipe Ingredients</h4>
               <div className='mb-5'>
                  {
                     recipeIngredients.map(
                        recipeIngredient =>
                           <div key={recipeIngredient.id}>
                              <span className='pe-4'>{recipeIngredient.ingredientView.ingredientName}</span>
                              <span>{recipeIngredient.amount} {recipeIngredient.measurement}</span>
                           </div>
                     )
                  }
               </div>


               <h4>Directions</h4>
               <div>
                  <span>{instruction}</span>
               </div>
            </div>

            {/* column 2 */}
            <div className='col-6'>
               <h4 className='mt-5 ps-3 mb-2'>Categories of this recipe</h4>
               <ul className='ps-5'>
                  {
                     recipeCategories.map(
                        recipeCategory => <li>{recipeCategory.category}</li>
                     )
                  }
               </ul>

               <h2 className='mt-5 ms-5 fst-italic'>Place recipe image here</h2>
            </div>
         </div>
      </div>
   );
}

export default Recipe;