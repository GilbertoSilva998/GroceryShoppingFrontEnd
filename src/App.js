import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/navbar/Navbar";
//import img from './Assets/Images/homepage.jpg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Components/users/AddUser";
import Users from "./Components/pages/Users";
import EditUser from "./Components/users/EditUser";
import AddCategory from "./Components/categories/AddCategory";
import EditCategory from "./Components/categories/EditCategory";
import Categories from "./Components/pages/Categories";
import AddProduct from "./Components/products/AddProduct";
import Products from "./Components/pages/Products";


function App() {

    const headerStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '20px',
    };

  return (
    <div className="App">
        <Router>
            <Navbar/>
        <Routes>
            <Route exact path="/users" element={<Users/>}/>
            <Route exact path="/adduser" element={<AddUser/>}/>
            <Route exact path="/edituser/:id" element={<EditUser/>}/>
            <Route exact path="/categories" element={<Categories/>}/>
            <Route exact path="/addcategory" element={<AddCategory/>}/>
            <Route exact path="/editcategory/:id" element={<EditCategory/>}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route exact path="/addproduct" element={<AddProduct/>}/>
        </Routes>
        </Router>
        <div className="App">
            <header className="App-header">
                <img src="" alt="Grocery Shopping System" width="400" height="300" />
                <h1>Welcome to our Grocery Shopping System</h1>
            </header>
        </div>


    </div>


  );
}

export default App;

