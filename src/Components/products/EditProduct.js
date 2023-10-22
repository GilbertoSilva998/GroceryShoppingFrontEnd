import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function EditProduct() {

    let navigate=useNavigate();

    const {id}=useParams();

    const [product,setProduct] =useState({
        productNumber:"",
        productType:"",
        productItem: "",
        productDescription:""

    });

    const{productNumber, productType, productItem, productDescription}=product;

    const onInputChange= (e)=> {
        setProduct({...product, [e.target.name]: e.target.value});
    };

    useEffect(()=>{
        loadProduct();
    },[]);

    const onSubmit =async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/product/${id}`, product);
        navigate("/products");
    };

    const loadProduct =async ()=>{
        const result=await axios.get(`http://localhost:8080/product/${id}`);
        setProduct(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Product</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        {/*ProductNumber*/}
                        <div className="mb-3">
                            <label htmlFor="ProductNumber" className="form-label">
                                Product Number
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter product number"
                                name={productNumber}
                                value={productNumber}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*ProductType*/}
                        <div className="mb-3">
                            <label htmlFor="ProductType" className="form-label">
                                Product Type
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter product type"
                                name={productType}
                                value={productType}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*ProductItem*/}
                        <div className="mb-3">
                            <label htmlFor="ProductItem" className="form-label">
                                Product Item
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter product item"
                                name={productType}
                                value={productType}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*ProductDescription*/}
                        <div className="mb-3">
                            <label htmlFor="ProductDescription" className="form-label">
                                Product Description
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter product description"
                                name={productDescription}
                                value={productDescription}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Button*/}
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/products">
                            Cancel
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    )

}