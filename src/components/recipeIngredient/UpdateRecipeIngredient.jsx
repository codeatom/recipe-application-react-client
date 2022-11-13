import React, { useState, useMemo } from 'react';
import RecipeIngredientService from '../../services/RecipeIngredientService';
import IngredientService from '../../services/IngredientService';


const UpdateRecipeIngredient = (props) => {
  const [recipeIngredientId] = useState(props.match.params.id);
  const [amount, setAmount] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [ingredientId, setIngredientId] = useState(0);
  const [ingredientName, setIngredientName] = useState("")
  const [ingredients, setIngredients] = useState([])

  useMemo(() => {
    RecipeIngredientService.getRecipeIngredientById(props.match.params.id).then((response) => {
      setAmount(response.data.amount);
      setMeasurement(response.data.measurement);
      setIngredientId(response.data.ingredientView.id);
      setIngredientName(response.data.ingredientView.ingredientName);
    });

    IngredientService.getIngredients().then((res) => {
      setIngredients(res.data);
    });
  }, []);

  const editRecipeIngredient = (e) => {
    e.preventDefault();
    let recipeIngredient = {
      id: recipeIngredientId,
      amount: amount,
      measurement: measurement,
      ingredientId: ingredientId,
    };

    RecipeIngredientService.updateRecipeIngredient(recipeIngredientId, recipeIngredient).then(res => {
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
      <div className='container'>
        <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
          <h3 className='text-center text-decoration-underline'>Update Recipe Ingredient</h3>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label className='boldFont'>Ingredient:</label>
                <select id="ingredientId" name="ingredientId" value={ingredientId} onChange={handlerIngredientId} className="form-control">
                  <option value={ingredientId}>{ingredientName}</option>
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

              <button className='btn btn-outline-success mt-3' onClick={editRecipeIngredient}>
                <i className="fa-solid fa-check"></i>Save
              </button>
              <button className='btn btn-outline-danger mt-3 ms-3' onClick={cancel}>
                <i className="fa fa-times"></i>Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateRecipeIngredient;