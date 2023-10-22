import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

export default function ViewDriver() {

    const [driver, setDriver]=useState({
        first_Name: "",
        last_Name: "",
        driver_License_Number: "",
        vehicle_Information: "",
        phone_Number:"",
        email:""
    })

    const {id}=useParams();

    useEffect(() => {
        loadDrivers();
    }, []);

    const loadDrivers= async ()=>{
        const result=await axios.get(`http://localhost:8080/driver/${id}`)
        setDriver(result.data)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Driver Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of driver id:
                            {driver.id}
                            <ul className="list-group list-group-flush">
                                {/*First Name*/}
                                <li className="list-group-item">
                                    <b>First Name:</b>
                                    {driver.first_Name}
                                </li>
                                {/*Last Name    */}
                                <li className="list-group-item">
                                    <b>Last Name:</b>
                                    {driver.last_Name}
                                </li>
                                {/*Driver License Number*/}
                                <li className="list-group-item">
                                    <b>Driver License Number:</b>
                                    {driver.driver_License_Number}
                                </li>
                                {/*Vehicle Information*/}
                                <li className="list-group-item">
                                    <b>Vehicle Information:</b>
                                    {driver.vehicle_Information}
                                </li>
                                {/*Phone Number*/}
                                <li className="list-group-item">
                                    <b>Phone Number:</b>
                                    {driver.phone_Number}
                                </li>
                                {/*Email*/}
                                <li className="list-group-item">
                                    <b>Email:</b>
                                    {driver.email}
                                </li>

                            </ul>

                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>
    )

}