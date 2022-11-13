import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import IngredientService from '../../services/IngredientService';
import '../Style.css';


const GetIngredient = (props) => {
    const [ingredientId] = useState(props.match.params.id);
    const [ingredientName, setIngredientName] = useState("");

    useMemo(() => {
        IngredientService.getIngredientById(props.match.params.id).then((response) => {
            setIngredientName(response.data.ingredientName);
        });
    }, []);


    return (
        <div>
            <div className="mt-5">
                <h3>Ingredient</h3>
            </div>

            <div className="card card-width mt-4">
                <div className="card-header bg-success text-white boldFont">
                    Ingredient Details
                </div>

                <div className="d-md-flex flex-row mb-3">
                    <div className="col-md-3 ps-3 boldFont" >
                        <span>Id</span>
                    </div>
                    <div className="col-md-9">
                        <span>{ingredientId}</span>
                    </div>
                </div>
                <div className="d-md-flex flex-row mb-3">
                    <div className="col-md-3 ps-3 boldFont">
                        <span>Name</span>
                    </div>
                    <div className="col-md-9">
                        <span>{ingredientName}</span>
                    </div>
                </div>
            </div>

            <button className='btn btn-outline-info mt-2' >
                <Link to={`/update-ingredient/${ingredientId}`} className="nav-link active">
                    <i className="fas fa-pen-to-square"></i>Edit
                </Link>
            </button>
            <button className='btn btn-outline-primary mt-2 ms-3' >
                <Link to="/ingredients" className="nav-link active">
                    <i className="fa fa-arrow-left"></i>Back
                </Link>
            </button>
        </div>
    );
}

export default GetIngredient;