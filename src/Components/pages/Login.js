import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    
    let navigate = useNavigate();

    const [login, setLogin] = useState({
        name: "",
        password: "",
    });

    const { name, password } = login;

    const onInputChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/login", login);
        navigate("/dashboard");
    };

    return (
        <div className="container">
            <h2>Login</h2>
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
                    <label htmlFor="Name" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e)=>onInputChange(e)}
                        required
                    />
                </div>
                <Link className="btn btn-outline-primary" to="/dashboard">
                    Submit
                </Link>
                <Link className="btn btn-outline-danger mx-2" to="/">
                    Cancel
                </Link>
            </form>
        </div>
    );
}