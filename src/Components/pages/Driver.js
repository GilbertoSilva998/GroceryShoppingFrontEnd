import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import async from "async";
import axios from "axios";


export default function Driver() {

    const [drivers, setDriver]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadDrivers();
    }, []);

    const loadDrivers = async () =>{
        const result = await axios.get("http://localhost/driver/")
        setDriver(result.data);
    }

    const deleteDriver=async (id)=>{
        await axios.delete(`http://localhost:8080/driver/${id}`)
        loadDrivers();
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Driver License Number</th>
                        <th scope="col">Vehicle Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {drivers.map((driver, index)=>(
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{driver.first_Name}</td>
                            <td>{driver.last_Name}</td>
                            <td>{driver.driver_License_Number}</td>
                            <td>{driver.vehicle_Information}</td>
                            <td>{driver.phone_Number}</td>
                            <td>{driver.email}</td>

                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <Link className="btn btn-outline-primary mx-2" to={`/driver/${driver.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteDriver(driver.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}