import React, { useState, useEffect } from 'react';
import RecipeIngredientService from '../../services/RecipeIngredientService';
import IngredientService from '../../services/IngredientService';


const CreateRecipeIngredient = (props) => {
  const [ingredientId, setIngredientId] = useState(0);
  const [amount, setAmount] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    IngredientService.getIngredients().then((res) => {
      setIngredients(res.data);
    });
  }, []);

  const saveRecipeIngredient = (e) => {
    e.preventDefault();
    let recipeIngredient = {
      ingredientId: ingredientId,
      amount: amount,
      measurement: measurement,
    };

    RecipeIngredientService.createRecipeIngredient(recipeIngredient).then(res => {
      props.history.push('/recipe-ingredients');
    });
  };

  const handlerIngredientId = (event) => {
    setIngredientId(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handlerMeasurement = (event) => {
    setMeasurement(event.target.value);
  };

  const cancel = () => {
    props.history.push('/recipe-ingredients');
  };


  return (
    <div>
      <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
        <h3 className='text-center text-decoration-underline'>Add Recipe Ingredient</h3>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label className='boldFont'>Ingredient:</label>
              <select id="ingredientId" name="ingredientId" defaultValue={0} value={ingredientId} onChange={handlerIngredientId} className="form-control">
                <option value="0" disabled>select ingredient</option>
                {ingredients.map(ingredient => (
                  <option key={ingredient.id} value={ingredient.id}>{ingredient.ingredientName}</option>
                ))}
              </select>
            </div>

            <div className='form-group mt-4'>
              <label className='boldFont'>Amount:</label>
              <input className='form-control' placeholder='enter amount' id='amount' name='amount' value={amount} onChange={handleAmount} />
            </div>

            <div className='form-group mt-4'>
              <label className='boldFont'>Measurement:</label>
              <select id="measurement" name="measurement" defaultValue={""} value={measurement} onChange={handlerMeasurement} className="form-control">
                <option value="" disabled>select measurement</option>
                <option value="G">G</option>
                <option value="HG">HG</option>
                <option value="KG">KG</option>
                <option value="ML">ML</option>
                <option value="CL">CL</option>
                <option value="DL">DL</option>
                <option value="TSP">TSP</option>
                <option value="TBSP">TBSP</option>
              </select>
            </div>

            <button className='btn btn-outline-success mt-3' onClick={saveRecipeIngredient}>
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

export default CreateRecipeIngredient;