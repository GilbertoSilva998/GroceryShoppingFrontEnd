import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-1"
                        alt="Logo"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                >
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="btn btn-outline-light" to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-light" to="/register">
                                Register
                            </Link>
                        </li>
                    </ul>
                    <Link className="btn btn-outline-light" to="/users">User</Link>
                    <Link className="btn btn-outline-light" to="/categories">Category</Link>
                    <Link className="btn btn-outline-light" to="/products">Product</Link>
                    <Link className="btn btn-outline-light" to="/drivers">Driver</Link>
                    <Link className="btn btn-outline-light" to="/transactions">Transaction</Link>
                    <Link className="btn btn-outline-light" to="/customers">Customer</Link>
                    <Link className="btn btn-outline-light" to="/stores">Store</Link>
                </div>
            </div>
        </nav>
    );
}