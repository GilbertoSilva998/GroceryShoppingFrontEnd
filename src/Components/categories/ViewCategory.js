import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function ViewCategory() {

    const [category, setCategory]=useState({
        categoryName:"",
        categoryType:""
    });

    const {id}=useParams();

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory=async ()=>{
        const result=await axios.get(`http://localhost:8080/category/${id}`);
        setCategory(result.data);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Category Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of category id : {category.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Category Name:</b>
                                    {category.categoryName}
                                </li>
                                <li className="list-group-item">
                                    <b>Category Type:</b>
                                    {category.categoryType}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/categories"}>Back to Categories</Link>

                </div>
            </div>
        </div>
    )
}