import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function Stores() {

    const [stores,setStores]=useState([]);

    const {id}=useParams();

    useEffect(() => {
        loadStores();
    }, []);

    const loadStores = async () => {
        const result= await axios.get("http://localhost:8080/stores");
        setStores(result.data);
    };

    const deleteStore=async (id)=>{
        await axios.delete(`http://localhost:8080/store/${id}`);
        loadStores();
    }

    return(
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Store Name</th>
                        <th scope="col">Store Address</th>
                        <th scope="col">Store Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {stores.map((store) => (
                        <tr key={store.id}>
                            <th scope="row">{store.id}</th>
                            <td>{store.storeName}</td>
                            <td>{store.storeAddress}</td>
                            <td>{store.storeDescription}</td>
                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <Link className="btn btn-outline-primary mx-2" to={`/editstore/${store.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteStore(store.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}