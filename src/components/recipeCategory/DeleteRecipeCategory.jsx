import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import RecipeCategoryService from '../../services/RecipeCategoryService';


const DeleteRecipeCategory = (props) => {
  const [recipeCategoryId] = useState(props.match.params.id);
  const [category, setCategory] = useState("");

  useMemo(() => {
    RecipeCategoryService.getRecipeCategoryById(props.match.params.id).then((response) => {
      setCategory(response.data.category);
    });
  }, []);

  const deleteRecipeCategory = (e) => {
    e.preventDefault();
    RecipeCategoryService.deleteRecipeCategory(recipeCategoryId).then(res => {
      backToCategoryList();
    });
  }

  const backToCategoryList = () => {
    props.history.push('/recipe-categories');
  }


  return (
    <div>
      <div className="row">
        <div className="col">
          <div className='mt-5'>
            <h4>
              Do you want to delete this recipe category?
            </h4>
          </div>

          <div className="card mt-5">
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-3 ps-3 boldFont" >
                <span>Id :</span>
              </div>
              <div className="col-md-10">
                <span>{recipeCategoryId}</span>
              </div>
            </div>
            <div className="d-md-flex flex-row mb-3">
              <div className="col-md-3 ps-3 boldFont">
                <span>Category :</span>
              </div>
              <div className="col-md-10">
                <span>{category}</span>
              </div>
            </div>
          </div>

          <button className='btn btn-outline-danger mt-2' onClick={deleteRecipeCategory}>
            <i className="fas fa-trash"></i>Delete
          </button>
          <button className='btn btn-outline-primary mt-2 ms-3' >
            <Link to="/recipe-categories" className="nav-link active">
              <i className="fa fa-arrow-left"></i>Cancel
            </Link>
          </button>
        </div>

        <div class="col mt-5 ps-5">
          <h4></h4>
        </div>
      </div>
    </div>
  );
}


export default DeleteRecipeCategory;