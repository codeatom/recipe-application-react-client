import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IngredientService from '../../services/IngredientService';
import '../Style.css';


const IngredientList = (props) => {
    const [ingredients, setIngredients] = useState([]);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        IngredientService.getIngredients().then((res) => {
            setIngredients(res.data);
        });
    }, []);

    const search = (e) => {
        e.preventDefault();
        props.history.push(`/search-result/${searchString}`);
    }

    const searchStringHandler = (event) => {
        setSearchString(event.target.value);
    }


    return (
        <div>
            <div className="row">
                <div className="col-6">
                    {/* column 1 */}
                    <div className='mt-4'>
                        <h2 >Ingredients</h2>
                    </div>

                    <div>
                        <button className='btn btn-success mt-4 mb-1' >
                            <Link to="/create-ingredient" className="nav-link active">
                                <i className="fas fa-plus"></i>Add
                            </Link>
                        </button>
                    </div>

                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Ingredient</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ingredients.map(
                                    ingredient =>
                                        <tr key={ingredient.id}>
                                            <td> {ingredient.id}</td>
                                            <td> {ingredient.ingredientName}</td>
                                            <td>
                                                <button className='btn btn-outline-primary btn-sm mb-1 me-2' >
                                                    <Link to={`/get-ingredient/${ingredient.id}`} className="nav-link active">
                                                        <i className="fas fa-circle-info"></i>Detail
                                                    </Link>
                                                </button>
                                                <button className='btn btn-outline-info btn-sm mb-1 me-2' >
                                                    <Link to={`/update-ingredient/${ingredient.id}`} className="nav-link active">
                                                        <i className="fas fa-pen-to-square"></i>Edit
                                                    </Link>
                                                </button>
                                                <button className='btn btn-outline-danger btn-sm mb-1 me-2' >
                                                    <Link to={`/delete-ingredient/${ingredient.id}`} className="nav-link active">
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
                <div className="col-6 mt-5">
                    <form>
                        <div role="search">
                            <input type="text" name="search" className="searchInputWidth" placeholder="Search ingredient" value={searchString} onChange={searchStringHandler}></input>
                            <button className='btn btn-outline-success ms-1' onClick={search}>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default IngredientList;