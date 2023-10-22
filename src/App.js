import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/navbar/Navbar";
import img from './Assets/Images/homepage.jpg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Components/users/AddUser";
import AddDriver from "./Components/drivers/AddDriver";
import Driver from "./Components/pages/Driver";
import Transactions from "./Components/pages/Transactions";


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
            <Route exact path="/addDriver" element={<AddDriver />}/>
            <Route exact path="/drivers" element={<Driver />}/>
            <Route exact path="/transactions" element={<Transactions />}/>

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

