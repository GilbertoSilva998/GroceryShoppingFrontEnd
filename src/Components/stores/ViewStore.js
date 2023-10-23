import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function ViewStore() {

    const [store, setStore]=useState({
        storeName:"",
        storeAddress:"",
        storeDescription:""
    });

    const {id}=useParams();

    useEffect(() => {
        loadStore();
    }, []);

    const loadStore=async ()=>{
        const result=await axios.get(`http://localhost:8080/store/${id}`);
        setStore(result.data);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Store Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of store id : {store.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Store Name:</b>
                                    {store.storeName}
                                </li>
                                <li className="list-group-item">
                                    <b>Store Address:</b>
                                    {store.storeAddress}
                                </li>
                                <li className="list-group-item">
                                    <b>Store Description:</b>
                                    {store.storeDescription}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/stores"}>Back to Stores</Link>

                </div>
            </div>
        </div>
    )

}