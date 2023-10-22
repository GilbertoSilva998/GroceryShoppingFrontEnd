import React, {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function ViewTransaction() {

    const [transaction, setTransaction]=useState({
        transaction_Type:"",
        date_Of_Transaction:"",
        amount: "",
        currency:"",
        status:""
    })

    const {id}=useParams();

    const loadTransactions =async () =>{
        const result = await axios.get(`http://localhost:8080/transaction/${id}`)
        setTransaction(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Driver Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of transaction id:
                            {transaction.id}
                            <ul className="list-group list-group-flush">
                                {/*Transaction_Type*/}
                                <li className="list-group-item">
                                    <b>Transaction Type</b>
                                    {transaction.transaction_Type}
                                </li>
                                {/*date_Of_Transaction*/}
                                <li className="list-group-item">
                                    <b>Transaction Date</b>
                                    {transaction.date_Of_Transaction}
                                </li>
                                {/*Amount*/}
                                <li className="list-group-item">
                                    <b>Amount</b>
                                    {transaction.amount}
                                </li>
                                {/*Currency*/}
                                <li className="list-group-item">
                                    <b>Currency</b>
                                    {transaction.currency}
                                </li>
                                {/*Status*/}
                                <li className="list-group-item">
                                    <b>Status</b>
                                    {transaction.status}
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
                    )

}