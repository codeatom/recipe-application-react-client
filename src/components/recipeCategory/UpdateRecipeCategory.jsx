import React, { useState, useMemo } from 'react';
import RecipeCategoryService from '../../services/RecipeCategoryService';
import '../Style.css';


const UpdateRecipeCategory = (props) => {
    const [recipeCategoryId] = useState(props.match.params.id);
    const [category, setCategory] = useState("");

    useMemo(() => {
        RecipeCategoryService.getRecipeCategoryById(props.match.params.id).then((response) => {
            setCategory(response.data.category);
        });
    }, []);

    const editRecipeCategory = (e) => {
        e.preventDefault();
        let recipeCategory = {
            id: recipeCategoryId,
            category: category,
        };

        RecipeCategoryService.updateRecipeCategory(recipeCategoryId, recipeCategory).then(res => {
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
            <div className='row'>

                {/* column 1 */}
                <div className="col">
                    <div className='card mt-5'>
                        <div className='card-body'>
                            <div className='mb-5'>
                                <h3 className='text-center text-decoration-underline'>Edit Category</h3>
                            </div>

                            <form>
                                <div className='form-group'>
                                    <label className='boldFont mb-2'>Category :</label>
                                    <input className='form-control' placeholder='Enter category' id='category' name='category' value={category} onChange={handleCategory} />
                                </div>

                                <button className='btn btn-outline-success mt-3' onClick={editRecipeCategory}>
                                    <i className="fa-solid fa-check"></i>Save
                                </button>
                                <button className='btn btn-outline-danger mt-3 ms-3' onClick={cancel}>
                                    <i className="fa fa-times"></i>Cancel
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                {/* column 2 */}
                <div className="col mt-5 ps-5">
                    <h4></h4>
                </div>
            </div>
        </div>
    );
}

export default UpdateRecipeCategory;