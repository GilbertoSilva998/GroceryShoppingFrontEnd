import React, {useState} from 'react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddCategory() {

    let navigate=useNavigate();

    const [category,setCategory] =useState({
        categoryName:"",
        categoryType:""

    });

    const{categoryName, categoryType}=category;

    const onInputChange= (e)=> {
        setCategory({...category, [e.target.name]: e.target.value});
    };

    const onSubmit =async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/category", category);
        navigate("/categories");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Category</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        {/*CategoryName*/}
                        <div className="mb-3">
                            <label htmlFor="Category Name" className="form-label">
                                Category Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter category name"
                                name={categoryName}
                                value={categoryName}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*CategoryType*/}
                        <div className="mb-3">
                            <label htmlFor="CategoryType" className="form-label">
                                Address
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter category type"
                                name={categoryType}
                                value={categoryType}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Button*/}
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/categories">
                            Cancel
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    )

}