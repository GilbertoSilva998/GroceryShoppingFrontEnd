import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function Customers() {

    const [customers,setCustomers]=useState([]);

    const {id}=useParams();

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        const result= await axios.get("http://localhost:8080/customers");
        setCustomers(result.data);
    };

    const deleteCustomer=async (id)=>{
        await axios.delete(`http://localhost:8080/customer/${id}`);
        loadCustomers();
    }

    return(
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Customer First Name</th>
                        <th scope="col">Customer Last Name</th>
                        <th scope="col">Customer Phone</th>
                        <th scope="col">Customer Email</th>
                        <th scope="col">Customer Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer, index)=>(
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{customer.customerFName}</td>
                            <td>{customer.customerLName}</td>
                            <td>{customer.customerPhone}</td>
                            <td>{customer.customerEmail}</td>
                            <td>{customer.customerAddress}</td>
                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <Link className="btn btn-outline-primary mx-2" to={`/editcustomer/${customer.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteCustomer(customer.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}