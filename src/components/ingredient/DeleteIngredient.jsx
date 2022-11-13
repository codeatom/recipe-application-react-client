import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import IngredientService from '../../services/IngredientService';
import '../Style.css';

const DeleteIngredient = (props) => {
    const [ingredientId] = useState(props.match.params.id);
    const [ingredientName, setIngredientName] = useState("");

    useMemo(() => {
        IngredientService.getIngredientById(props.match.params.id).then((response) => {
            setIngredientName(response.data.ingredientName);
        });
    }, []);

    const deleteIngredient = (e) => {
        e.preventDefault();
        IngredientService.deleteIngredient(ingredientId).then(res => {
            backToIngredientList();
        });
    }

    const backToIngredientList = () => {
        props.history.push('/ingredients');
    }


    return (
        <div>
            <div className='mt-5'>
                <h4>
                    Do you want to delete this ingredient?
                </h4>
            </div>

            <div className="card mt-5">
                <div className="d-md-flex flex-row mb-3">
                    <div className="col-md-3 ps-3 boldFont" >
                        <span>Id :</span>
                    </div>
                    <div className="col-md-9">
                        <span>{ingredientId}</span>
                    </div>
                </div>
                <div className="d-md-flex flex-row mb-3">
                    <div className="col-md-3 ps-3 boldFont">
                        <span>Name :</span>
                    </div>
                    <div className="col-md-9">
                        <span>{ingredientName}</span>
                    </div>
                </div>
            </div>

            <button className='btn btn-outline-danger mt-2' onClick={deleteIngredient}>
                <i className="fas fa-trash"></i>Delete
            </button>
            <button className='btn btn-outline-primary mt-2 ms-3' >
                <Link to="/ingredients" className="nav-link active">
                    <i className="fa fa-arrow-left"></i>Cancel
                </Link>
            </button>
        </div>
    );
}

export default DeleteIngredient;