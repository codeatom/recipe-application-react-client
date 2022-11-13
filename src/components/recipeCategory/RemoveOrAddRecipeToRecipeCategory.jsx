import React from 'react';
import '../Style.css';


const RemoveOrAddRecipeToRecipeCategory = (props) => {
    return (
        <div>
            <div className="col mt-5 ps-5">
                <h4>This category's ingredients</h4>
                <button className='btn btn-success btn-sm mb-1' onClick={props.addRecipeToRecipeCategory} >
                    <i className="fas fa-plus"></i>Add recipe to category
                </button>

                <table className="table table-hover table-borderless table-sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Recipe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.recipeViews.map(
                                recipeView =>
                                    <tr key={recipeView.id}>
                                        <td>{recipeView.id} </td>
                                        <td>{recipeView.recipeName}</td>
                                        <td>
                                            <button className='btn btn-outline-danger btn-sm mb-1 me-2' onClick={() => { props.removeRecipeFromRecipeCategory(recipeView.id) }} >
                                                <i className="fas fa-trash"></i>Remove
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

export default RemoveOrAddRecipeToRecipeCategory;

