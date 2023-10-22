import React, {useState} from 'react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddCustomer() {

    let navigate=useNavigate();

    const [customer,setCustomer] =useState({
        customerFName:"",
        customerLName:"",
        customerPhone:"",
        customerEmail: "",
        customerAddress:""
    });

    const{customerFName, customerLName, customerAddress, customerEmail, customerPhone}=customer;

    const onInputChange= (e)=> {
        setCustomer({...customer, [e.target.name]: e.target.value});
    };

    const onSubmit =async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/customer", customer);
        navigate("/customers");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Customer</h2>

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
                        <Link className="btn btn-outline-danger mx-2" to="/customers">
                            Cancel
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    )

}
