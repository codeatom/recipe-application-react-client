import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCategoryService from '../../services/RecipeCategoryService';


const RecipeCategoryList = (props) => {
    const [recipeCategories, setRecipeCategories] = useState([])

    useEffect(() => {
        RecipeCategoryService.getRecipeCategories().then((res) => {
            setRecipeCategories(res.data);
        });
    }, []);


    return (
        <div>
            <div className='mt-4'>
                <h2 >Recipe Categories</h2>
            </div>

            {/* row 2 */}
            <div className="row">

                {/* column 1 */}
                <div className="col">
                    <button className='btn btn-success mt-4 mb-1' >
                        <Link to="/create-recipe-category" className="nav-link active">
                            <i className="fas fa-plus"></i>Add
                        </Link>
                    </button>

                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recipeCategories.map(
                                    recipeCategory =>
                                        <tr key={recipeCategory.id}>
                                            <td> {recipeCategory.id}  </td>
                                            <td> {recipeCategory.category}</td>
                                            <td>
                                                <button className='btn btn-outline-primary btn-sm mb-1 me-2' >
                                                    <Link to={`/get-recipe-category/${recipeCategory.id}`} className="nav-link active">
                                                        <i className="fas fa-circle-info"></i>Detail
                                                    </Link>
                                                </button>
                                                <button className='btn btn-outline-info btn-sm mb-1 me-2' >
                                                    <Link to={`/update-recipe-category/${recipeCategory.id}`} className="nav-link active">
                                                        <i className="fas fa-pen-to-square"></i>Edit
                                                    </Link>
                                                </button>
                                                <button className='btn btn-outline-danger btn-sm mb-1 me-2' >
                                                    <Link to={`/delete-recipe-category/${recipeCategory.id}`} className="nav-link active">
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
                <div className="col">
                    <h1></h1>
                </div>
            </div>
        </div>
    );
}

export default RecipeCategoryList;