import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function Categories() {

    const [categories,setCategories]=useState([]);

    const {id}=useParams();

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        const result= await axios.get("http://localhost:8080/categoriess");
        setCategories(result.data);
    };

    const deleteCategory=async (id)=>{
        await axios.delete(`http://localhost:8080/category/${id}`);
        loadCategories();
    }

    return(
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Category Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((category, index)=>(
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{category.categoryName}</td>
                            <td>{category.categoryType}</td>
                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <Link className="btn btn-outline-primary mx-2" to={`/editcategory/${category.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteCategory(category.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}