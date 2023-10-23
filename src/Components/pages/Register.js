import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Register() {

    let navigate=useNavigate();
    
    const [register, setRegister] = useState({
        name: "",
        surname: "",
        address: "",
        email: "",
        phone: "",
        password: "",
    });

    const { name, surname, address, email, phone, password } = register;

    const onInputChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/register", register);
        navigate("/login");
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Surname" className="form-label">
                        Surname
                    </label>
                    <input
                        type="text"
                        name="surname"
                        value={surname}
                        onChange={(e)=>onInputChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e)=>onInputChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Phone Number" className="form-label">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e)=>onInputChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e)=>onInputChange(e)}
                        required
                    />
                </div>
                <Link className="btn btn-outline-primary" to="/login">
                    Submit
                </Link>
                <Link className="btn btn-outline-danger mx-2" to="/">
                    Cancel
                </Link>
            </form>
        </div>
    );
}