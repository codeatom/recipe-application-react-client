import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import RecipeCategoryService from '../../services/RecipeCategoryService';
import RemoveOrAddRecipeToRecipeCategory from './RemoveOrAddRecipeToRecipeCategory'
import '../Style.css';


const GetRecipeCategory = (props) => {
  const [recipeCategoryId] = useState(props.match.params.id);
  const [category, setCategory] = useState("");
  const [recipeViews, setRecipeViews] = useState([]);
  const [refreshToggle, setRefreshToggle] = useState(true);

  useMemo(() => {
    RecipeCategoryService.getRecipeCategoryById(props.match.params.id).then((response) => {
      setCategory(response.data.category);
      setRecipeViews(response.data.recipeViews);
    });
  }, [refreshToggle]);

  const addRecipeToRecipeCategory = () => {
    props.history.push(`/add-recipe-to-recipe-category/${recipeCategoryId}`);
  };

  const removeRecipeFromRecipeCategory = (recipeId) => {
    RecipeCategoryService.removeRecipe(recipeCategoryId, recipeId).then((response) => {
      setRefreshToggle(!refreshToggle);
    });
  };

  const cancel = () => {
    props.history.push('/recipe-categories');
  };


  return (
    <div>
      <div className="row">

        {/* column 1 */}
        <div className="col">
          <div className="mt-5">
            <h3>Category</h3>
          </div>

          <div className="card mt-4">
            <div className="card-header bg-success text-white boldFont">
              Category Details
            </div>

            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-3 ps-3 boldFont" >
                <span>Id</span>
              </div>
              <div className="col-md-9">
                <span>{recipeCategoryId}</span>
              </div>
            </div>
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-3 ps-3 boldFont">
                <span>Category</span>
              </div>
              <div className="col-md-9">
                <span>{category}</span>
              </div>
            </div>
          </div>

          <button className='btn btn-outline-info mt-2' >
            <Link to={`/update-recipe-category/${recipeCategoryId}`} className="nav-link active">
              <i className="fas fa-pen-to-square"></i>Edit
            </Link>
          </button>
          <button className='btn btn-outline-primary mt-2 ms-3' onClick={cancel}>
            <i className="fa fa-arrow-left"></i>Back
          </button>
        </div>

        {/* column 2 */}
        <div className="col mt-5 ps-5">
          <RemoveOrAddRecipeToRecipeCategory
            addRecipeToRecipeCategory={addRecipeToRecipeCategory}
            removeRecipeFromRecipeCategory={removeRecipeFromRecipeCategory}
            recipeViews={recipeViews}
          />
        </div>

      </div>
    </div>
  );
}

export default GetRecipeCategory;