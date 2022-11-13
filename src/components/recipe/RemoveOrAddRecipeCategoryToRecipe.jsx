import React from 'react';
import '../Style.css';


const RemoveOrAddRecipeCategoryToRecipe = (props) => {
    return (
        <div>
            <div className="col mt-5 ps-5">
                <h3>This recipe's categories</h3>
                <button className='btn btn-success btn-sm mt-1 mb-1' onClick={props.addRecipeCategoryToRecipe} >
                    <i className="fas fa-plus"></i>Add
                </button>

                <table className="table table-hover table-borderless table-sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.recipeCategories.map(
                                recipeCategory =>
                                    <tr key={recipeCategory.id}>
                                        <td>{recipeCategory.id} </td>
                                        <td>{recipeCategory.category}</td>
                                        <td>
                                            <button className='btn btn-outline-danger btn-sm mb-1 me-2' onClick={() => { props.removeRecipeCategoryFromRecipe(recipeCategory.id) }}>
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

export default RemoveOrAddRecipeCategoryToRecipe;