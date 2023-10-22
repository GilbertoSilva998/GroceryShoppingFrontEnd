import React, {useState} from 'react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddStore() {

    let navigate=useNavigate();

    const [store,setStore] =useState({
        storeName:"",
        storeAddress:"",
        storeDescription: ""
    });

    const{storeName, storeAddress, storeDescription}=store;

    const onInputChange= (e)=> {
        setStore({...store, [e.target.name]: e.target.value});
    };

    const onSubmit =async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/store", store);
        navigate("/stores");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Store</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        {/*StoreName*/}
                        <div className="mb-3">
                            <label htmlFor="StoreName" className="form-label">
                                Store Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter store name"
                                name="storeName"
                                value={storeName}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*StoreAddress*/}
                        <div className="mb-3">
                            <label htmlFor="StoreAddress" className="form-label">
                                Store Address
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter store address"
                                name="storeAddress"
                                value={storeAddress}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*StoreDescription*/}
                        <div className="mb-3">
                            <label htmlFor="StoreDescription" className="form-label">
                                Store Description
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter store description"
                                name="storeDescription"
                                value={storeDescription}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Button*/}
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/stores">
                            Cancel
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    )

}
