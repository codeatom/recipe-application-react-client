import React, { useState } from 'react';
import RecipeCategoryService from '../../services/RecipeCategoryService';
import '../Style.css';


const CreateRecipeCategory = (props) => {
    const [category, setCategory] = useState("");

    const saveRecipeCategory = (e) => {
        e.preventDefault();
        let recipeCategory = {
            category: category,
        };

        RecipeCategoryService.createRecipeCategory(recipeCategory).then(res => {
            props.history.push('/recipe-categories');
        });
    }

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    const cancel = () => {
        props.history.push('/recipe-categories');
    }


    return (
        <div>
            <div className='container'>
                <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
                    <h3 className='text-center text-decoration-underline'>Add Category</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label className='boldFont mt-3'>Category :</label>
                                <input className='form-control' placeholder='Category' id='category' name='category' value={category} onChange={handleCategory} />
                            </div>

                            <button className='btn btn-outline-success mt-3' onClick={saveRecipeCategory}>
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

export default CreateRecipeCategory;