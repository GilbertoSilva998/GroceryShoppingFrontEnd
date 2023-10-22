import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function ViewCustomer() {

    const [customer, setCustomer]=useState({
        customerFName:"",
        customerLName:"",
        customerPhone:"",
        customerEmail: "",
        customerAddress:""
    });

    const {id}=useParams();

    useEffect(() => {
        loadCustomer();
    }, []);

    const loadCustomer=async ()=>{
        const result=await axios.get(`http://localhost:8080/customer/${id}`);
        setCustomer(result.data);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Customer Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of customer id : {customer.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>First Name:</b>
                                    {customer.customerFName}
                                </li>
                                    <li className="list-group-item">
                                        <b>Last Name:</b>
                                        {customer.customerLName}
                                    </li>
                                <li className="list-group-item">
                                    <b>Phone:</b>
                                    {customer.customerPhone}
                                </li>
                                <li className="list-group-item">
                                    <b>Email:</b>
                                    {customer.customerEmail}
                                </li>
                                <li className="list-group-item">
                                    <b>Address:</b>
                                    {customer.customerAddress}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/customers"}>Back to Customers</Link>

                </div>
            </div>
        </div>
    )

}