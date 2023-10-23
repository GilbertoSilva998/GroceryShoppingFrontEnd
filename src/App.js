import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/navbar/Navbar";
import img from './Assets/Images/homepage.jpg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Components/users/AddUser";
import Users from "./Components/pages/Users";
import EditUser from "./Components/users/EditUser";
import AddCategory from "./Components/categories/AddCategory";
import EditCategory from "./Components/categories/EditCategory";
import Categories from "./Components/pages/Categories";
import AddProduct from "./Components/products/AddProduct";
import Products from "./Components/pages/Products";
import EditProduct from "./Components/products/EditProduct";
import AddStore from "./Components/stores/AddStore";
import EditStore from "./Components/stores/EditStore";
import AddCustomer from "./Components/customers/AddCustomer";
import EditCustomer from "./Components/customers/EditCustomer";
import Customers from "./Components/stores/Customers";
import Stores from "./Components/pages/Stores";
import Driver from "./Components/pages/Driver";
import EditDriver from "./Components/drivers/EditDriver";
import AddDriver from "./Components/drivers/AddDriver";
import Transactions from "./Components/pages/Transactions";
import AddTransaction from "./Components/transactions/AddTransaction";
import EditTransaction from "./Components/transactions/EditTransaction";
import { Helmet } from "react-helmet";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
import Dashboard from "./Components/dashboard/dashboard";

function App() {
    const headerStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '20px',
    };

    return (
        <div className="App">
            <Helmet>
                <title>Grocery Shopping System</title>
            </Helmet>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/dashboard" element={<Dashboard />} />
                        <Route exact path="/users" element={<Users />} />
                        <Route exact path="/adduser" element={<AddUser />} />
                        <Route exact path="/edituser/:id" element={<EditUser />} />
                        <Route exact path="/categories" element={<Categories />} />
                        <Route exact path="/addcategory" element={<AddCategory />} />
                        <Route exact path="/editcategory/:id" element={<EditCategory />} />
                        <Route exact path="/products" element={<Products />} />
                        <Route exact path="/addproduct" element={<AddProduct />} />
                        <Route exact path="/editproduct/:id" element={<EditProduct />} />
                        <Route exact path="/stores" element={<Stores />} />
                        <Route exact path="/addstore" element={<AddStore />} />
                        <Route exact path="/editstore/:id" element={<EditStore />} />
                        <Route exact path="/customers" element={<Customers />} />
                        <Route exact path="/addcustomer" element={<AddCustomer />} />
                        <Route exact path="/editcustomer/:id" element={<EditCustomer />} />
                        <Route exact path="/driver" element={<Driver />} />
                        <Route exact path="/adddriver" element={<AddDriver />} />
                        <Route exact path="/editdriver/:id" element={<EditDriver />} />
                        <Route exact path="/transactions" element={<Transactions />} />
                        <Route exact path="/addtransaction" element={<AddTransaction />} />
                        <Route exact path="/edittransaction/:id" element={<EditTransaction />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </Router>
            <header className="App-header">
                <img src={require('./Assets/Images/homepage.jpg')} alt="Grocery Shopping System" width="400" height="300" />
                <h1>Welcome to our Grocery Shopping System</h1>
            </header>
        </div>
    );
}

export default App;