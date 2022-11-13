import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IngredientService from '../../services/IngredientService';


const SearchResult = (props) => {
    const [searchString, setSearchString] = useState(props.match.params.searchString)
    const [ingredients, setIngredients] = useState([])
    const [reload, setReload] = useState([])

    useEffect(() => {
        IngredientService.searchForIngredient(searchString).then((res) => {
            setIngredients(res.data);
        });
    }, [reload]);

    const initSearch = (e) => {
        e.preventDefault();
        setReload(searchString);
    }

    const searchStringHandler = (event) => {
        setSearchString(event.target.value);
    }


    return (
        <div>
            <div className="row">
                {/* column 1 */}
                <div className="col">
                    <div className='mt-5'>
                        <h2 >Search result</h2>
                    </div>

                    <div>
                        <button className='btn btn-outline-primary mt-4 mb-1' >
                            <Link to="/ingredients" className="nav-link active">
                                <i className="fa fa-arrow-left"></i>Back to list
                            </Link>
                        </button>
                    </div>

                    <table className="table table-hover table-hover">
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
                                                <button className='btn btn-outline-info mb-1 me-2' >
                                                    <Link to={`/get-ingredient/${ingredient.id}`} className="nav-link active">
                                                        <i className="fas fa-circle-info"></i>Detail
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
                <div className="col mt-5">
                    <form role="search">
                        <input type="text" name="search" className="form-inline" placeholder="Search ingredient" onChange={searchStringHandler}></input>
                        <button className='btn btn-outline-success ms-1' onClick={initSearch}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;