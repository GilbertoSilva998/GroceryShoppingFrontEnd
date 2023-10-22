import React,{useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddDriver() {
    let navigate =useNavigate()

    const [driver, setDriver]=useState ({
        first_Name: "",
        last_Name: "",
        driver_License_Number: "",
        vehicle_Information: "",
        phone_Number:"",
        email:""
    })

    const {first_Name, last_Name, driver_License_Number, vehicle_Information, phone_Number, email}= driver

    const onInputChange=(e) => {
        setDriver(...driver, {[e.target.first_Name]:e.target.value})
    }
    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/driver", driver)
        navigate("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Driver</h2>

                    <form onSubmit={(e)=> onSubmit(e)}>
                    {/*First_Name*/}
                    <div className="mb-3">
                        <label htmlFor="FirstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your First Name"
                            name={first_Name}
                            value={first_Name}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    {/*Last_Name*/}
                    <div className="mb-3">
                        <label htmlFor="LastName" className="form-label">
                            Last Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your Last Name"
                            name={last_Name}
                            value={last_Name}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    {/*driver_License_Number*/}
                    <div className="mb-3">
                        <label htmlFor="DriverLicenseNumber" className="form-label">
                            Driver License Number
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your Driver License Number"
                            name={driver_License_Number}
                            value={driver_License_Number}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    {/*Vehicle_Information*/}
                    <div className="mb-3">
                        <label htmlFor="VehicleInformation" className="form-label">
                            Vehicle Information
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your Vehicle Information"
                            name={vehicle_Information}
                            value={vehicle_Information}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    {/*Phone*/}
                    <div className="mb-3">
                        <label htmlFor="PhoneNumber" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your Phone Number"
                            name={phone_Number}
                            value={phone_Number}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    {/*Email*/}
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Email
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your Email"
                            name={email}
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    {/*Button*/}
                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>
                    <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
                        Cancel
                    </Link>
                    </form>
                </div>
            </div>
        </div>
    )

}