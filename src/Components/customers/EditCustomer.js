import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function EditCustomer() {

    let navigate=useNavigate();

    const {id}=useParams();

    const [customer,setCustomer] =useState({
        customerFName:"",
        customerLName:"",
        customerPhone:"",
        customerEmail: "",
        customerAddress:""
    });

    const{customerFName, customerLName, customerPhone, customerEmail, customerAddress}=customer;

    const onInputChange= (e)=> {
        setCustomer({...customer, [e.target.name]: e.target.value});
    };

    useEffect(()=>{
        loadCustomer();
    },[]);

    const onSubmit =async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/customer/${id}`, customer);
        navigate("/customers");
    };

    const loadCustomer =async ()=>{
        const result=await axios.get(`http://localhost:8080/customer/${id}`);
        setCustomer(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Customer</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        {/*CustomerFName*/}
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Customer First Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter customer first name"
                                name={customerFName}
                                value={customerFName}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*CustomerLName*/}
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Customer Last Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter customer last name"
                                name={customerLName}
                                value={customerLName}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*CustomerPhone*/}
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Customer Phone
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter customer phone"
                                name={customerPhone}
                                value={customerPhone}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*CustomerEmail*/}
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Customer Email
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter customer email"
                                name={customerEmail}
                                value={customerEmail}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*CustomerAddress*/}
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Customer Address
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter customer address"
                                name={customerAddress}
                                value={customerAddress}
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
