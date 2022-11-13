import React from 'react';
import '../Style.css';


const RemoveOrAddRecipeIngredientToRecipe = (props) => {
    return (
        <div>
            <div className="col mt-5 ps-5">
                <h3>This recipe,s ingredients</h3>
                <button className='btn btn-success btn-sm mt-1 mb-1' onClick={props.addRecipeIngredientToRecipe} >
                    <i className="fas fa-plus"></i>Add
                </button>

                <table className="table table-hover table-borderless table-sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Ingredient</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.recipeIngredients.map(
                                recipeIngredient =>
                                    <tr key={recipeIngredient.id}>
                                        <td>{recipeIngredient.id} </td>
                                        <td>{recipeIngredient.ingredientView.ingredientName}</td>
                                        <td>
                                            <button className='btn btn-outline-danger btn-sm mb-1 me-2' onClick={() => { props.removeRecipeIngredientFromRecipe(recipeIngredient.id) }} >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RemoveOrAddRecipeIngredientToRecipe;