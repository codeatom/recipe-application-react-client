import React, { useState, useMemo } from 'react';
import IngredientService from '../../services/IngredientService';
import '../Style.css';


const UpdateIngredient = (props) => {
    const [ingredientId] = useState(props.match.params.id);
    const [ingredientName, setIngredientName] = useState("");

    useMemo(() => {
        IngredientService.getIngredientById(props.match.params.id).then((response) => {
            setIngredientName(response.data.ingredientName);
        });
    }, []);

    const editIngredient = (e) => {
        e.preventDefault();
        let ingredient = {
            id: ingredientId,
            ingredientName: ingredientName
        };

        IngredientService.updateIngredient(ingredientId, ingredient).then(res => {
            props.history.push('/ingredients');
        });
    }

    const ingredientNameHandler = (event) => {
        setIngredientName(event.target.value);
    }

    const cancel = () => {
        props.history.push('/ingredients');
    }


    return (
        <div>
            <div className='card card-width mt-5'>
                <div className='card-body'>
                    <div className='mb-5'>
                        <h3 className='text-center text-decoration-underline'>Edit Ingredient</h3>
                    </div>

                    <form>
                        <div className='form-group'>
                            <label className='boldFont'>Ingredient name:</label>
                            <input className='form-control' placeholder='Ingredient Name' id='ingredientName' name='ingredientName' value={ingredientName} onChange={ingredientNameHandler} />
                        </div>

                        <button className='btn btn-outline-success mt-3' onClick={editIngredient}>
                            <i className="fa-solid fa-check"></i>Save
                        </button>
                        <button className='btn btn-outline-danger mt-3 ms-3' onClick={cancel}>
                            <i className="fa fa-times"></i>Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateIngredient;