import React, { useState } from 'react';
import IngredientService from '../../services/IngredientService';
import '../Style.css';


const CreateIngredient = (props) => {
    const [ingredientName, setIngredientName] = useState("");


    const saveIngredient = (e) => {
        e.preventDefault();
        let ingredient = {
            ingredientName: ingredientName,
        };

        IngredientService.createIngredient(ingredient).then(res => {
            backToIngredients();
        });
    }

    const ingredientNameHandler = (event) => {
        setIngredientName(event.target.value);
    }

    const backToIngredients = () => {
        props.history.push('/ingredients');
    }


    return (
        <div>
            <div className='container'>
                <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
                    <h3 className='text-center text-decoration-underline'>Add Ingredient</h3>
                    <div className='card-body'>
                        <form>
                            <div>
                                <label className='boldFont m-2'>Ingredient name:</label>
                                <input className='form-control' placeholder='Ingredient Name' id='ingredientName' name='ingredientName' value={ingredientName} onChange={ingredientNameHandler} />
                            </div>

                            <button className='btn btn-outline-success mt-3' onClick={saveIngredient}>
                                <i className="fa-solid fa-check"></i>Save
                            </button>
                            <button className='btn btn-outline-danger mt-3 ms-3' onClick={backToIngredients}>
                                <i className="fa fa-times"></i>Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateIngredient;