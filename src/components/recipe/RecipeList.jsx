import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeService from '../../services/RecipeService';


const RecipeList = (props) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        RecipeService.getRecipes().then((res) => {
            setRecipes(res.data);
        });
    }, []);


    return (
        <div>
            <div className='mt-4'>
                <h2 >Recipes</h2>
            </div>

            <div className="row">

                {/* column 1 */}
                <div className="col-8">
                    <button className='btn btn-success  mt-4 mb-1' >
                        <Link to="/create-recipe" className="nav-link active">
                            <i className="fas fa-plus"></i>Add
                        </Link>
                    </button>

                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Instruction</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recipes.map(
                                    recipe =>
                                        <tr key={recipe.id}>
                                            <td> {recipe.id}</td>
                                            <td> {recipe.recipeName}</td>
                                            <td> {recipe.instruction.instruction}</td>
                                            <td>
                                                <button className='btn btn-outline-primary btn-sm mb-1 me-2' >
                                                    <Link to={`/get-recipe/${recipe.id}`} className="nav-link active">
                                                        <i className="fas fa-circle-info"></i>Detail
                                                    </Link>
                                                </button>
                                                <button className='btn btn-outline-info btn-sm mb-1 me-2' >
                                                    <Link to={`/update-recipe/${recipe.id}`} className="nav-link active">
                                                        <i className="fas fa-pen-to-square"></i>Edit
                                                    </Link>
                                                </button>
                                                <button className='btn btn-outline-danger btn-sm mb-1 me-2' >
                                                    <Link to={`/delete-recipe/${recipe.id}`} className="nav-link active">
                                                        <i className="fas fa-trash"></i>Delete
                                                    </Link>
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                {/* column 2 */}
                <div className="col-4">
                    <h1></h1>
                </div>
            </div>
        </div>
    );
}

export default RecipeList;