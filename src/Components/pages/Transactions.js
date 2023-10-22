import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

export default function Transactions() {

    const [transactions, setTransaction]=useState([]);

    const {id}=useParams();

    useEffect(() => {
        loadTransactions();
    }, []);

    const loadTransactions = async ()=>{
        const result = await axios.get("http://localhost:8080/transaction/")
        setTransaction(result.data)
    }

    const deleteTransaction=async (id) =>{
        await axios.delete(`http://localhost:8080/transaction/${id}`)
        loadTransactions();
    }

    return(
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Transaction Type</th>
                        <th scope="col">Date of Transaction</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction, index)=>(
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{transaction.transaction_Type}</td>
                            <td>{transaction.date_Of_Transaction}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.currency}</td>
                            <td>{transaction.status}</td>

                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <Link className="btn btn-outline-primary mx-2" to={`/transaction/${transaction.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteTransaction(transaction.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    )

}