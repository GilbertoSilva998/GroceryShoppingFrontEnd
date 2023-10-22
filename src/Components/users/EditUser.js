import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function EditUser() {

    let navigate=useNavigate();

    const {id}=useParams();

    const [user,setUser] =useState({
        userName:"",
        userAddress:"",
        userEmail: "",
        userPhone:""

    });

    const{userName, userAddress, userEmail, userPhone}=user;

    const onInputChange= (e)=> {
        setUser({...user, [e.target.name]: e.target.value});
    };

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit =async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");
    };

    const loadUser =async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        {/*Name*/}
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name={userName}
                                value={userName}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Address*/}
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Address
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your address"
                                name={userAddress}
                                value={userAddress}
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
                                placeholder="Enter your email"
                                name={userEmail}
                                value={userEmail}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Phone*/}
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Phone
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your phone"
                                name={userPhone}
                                value={userPhone}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Button*/}
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    )

}
