import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="sidebar">
                <ul>
                    <li>
                        <Link className="btn btn-outline-light" to="/pages/users">Users</Link>
                    </li>
                    <li>
                        <Link className="btn btn-outline-light" to="/pages/products">Products</Link>
                    </li>
                    <li>
                        <Link className="btn btn-outline-light"  to="/pages/driver">Driver</Link>
                    </li>
                    <li>
                        <Link className="btn btn-outline-light" to="/pages/stores">Stores</Link>
                    </li>
                    <li>
                        <Link className="btn btn-outline-light" to="/pages/categories">Categories</Link>
                    </li>
                    <li>
                        <Link className="btn btn-outline-light" to="/pages/customers">Customers</Link>
                    </li>
                    <li>
                        <Link className="btn btn-outline-light" to="/pages/transactions">Transaction</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <header className="header">
                    <h1>Welcome to the dashboard</h1>
                </header>
            </div>
        </div>
    );
};

export default Dashboard;