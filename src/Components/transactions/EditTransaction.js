import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import async from "async";


export default function AddTransaction() {

    let navigate =useNavigate()

    const{id}=useParams()

    const [transaction, setTransaction]=useState({
        transaction_Type:"",
        date_Of_Transaction:"",
        amount: "",
        currency:"",
        status:""
    })

    const {transaction_Type, date_Of_Transaction, amount, currency,status}= transaction

    const onInputChange=(e)=>{
        setTransaction(...transaction, {[e.target.transaction_Type]:e.target.value})
    }

    useEffect(() => {
        loadTransactions();
    }, []);

    const onSubmit=async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/transacion", transaction)
        navigate("/")
    }

    const loadTransactions =async () =>{
        const result = await axios.get(`http://localhost:8080/transaction/${id}`)
        setTransaction(result.data)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Transaction</h2>

                    <form onSubmit={(e)=> onSubmit(e)}>
                        {/*Transaction_Type*/}
                        <div className="mb-3">
                            <label htmlFor="Transaction_Type" className="form-label">
                                Transaction Type
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your Transaction Type"
                                name={transaction_Type}
                                value={transaction_Type}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Date_Of_Transaction*/}
                        <div className="mb-3">
                            <label htmlFor="Date_Of_Transaction" className="form-label">
                                Date of Transaction
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the Transaction Date"
                                name={date_Of_Transaction}
                                value={date_Of_Transaction}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Amount*/}
                        <div className="mb-3">
                            <label htmlFor="Amount" className="form-label">
                                Amount
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the amount"
                                name={amount}
                                value={amount}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Currency*/}
                        <div className="mb-3">
                            <label htmlFor="Currency" className="form-label">
                                Currency
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the Currency"
                                name={currency}
                                value={currency}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Status*/}
                        <div className="mb-3">
                            <label htmlFor="Status" className="form-label">
                                Status
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the status"
                                name={status}
                                value={status}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*Button*/}
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )

}