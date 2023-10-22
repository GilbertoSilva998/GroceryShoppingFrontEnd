import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function Products() {

    const [products,setProducts]=useState([]);

    const {id}=useParams();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result= await axios.get("http://localhost:8080/products");
        setProducts(result.data);
    };

    const deleteProduct=async (id)=>{
        await axios.delete(`http://localhost:8080/product/${id}`);
        loadProducts();
    }

    return(
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Product Number</th>
                        <th scope="col">Product Type</th>
                        <th scope="col">Product Item</th>
                        <th scope="col">Product Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, index)=>(
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{product.productNumber}</td>
                            <td>{product.productType}</td>
                            <td>{product.productItem}</td>
                            <td>{product.productDescription}</td>
                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <Link className="btn btn-outline-primary mx-2" to={`/editproduct/${product.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}