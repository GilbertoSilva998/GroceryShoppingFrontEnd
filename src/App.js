import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar/Navbar";
import img from './Assets/Images/homepage.jpg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Components/users/AddUser";


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
            <Route exact path="/adduser" element={<AddUser />}/>
        </Routes>
        </Router>
        <div className="App">
            <header className="App-header">
                <img src="homepage.jpg" alt="Grocery Shopping" width="400" height="300" />
                <h1>Welcome to our Grocery Shopping System</h1>
            </header>
        </div>


    </div>


  );
}

export default App;

