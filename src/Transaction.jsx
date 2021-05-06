import React, { useState } from 'react';
import './Transaction.scss';
import { Input } from 'antd';
import moment from 'moment';

const Transaction = () => {
    const [balance, setBalance] = useState(500);
    const [amount, setAmount] = useState(50);
    const [transactions, setTransactions] = useState([])
    console.log(balance)
    const addClick = () => {
        const newbalance = balance + Number(amount);
        setBalance(newbalance)
        const transaction = {
            date: new Date(),
            type: 'Add',
            amount,
        }
        const updateTransaction = [...transactions, transaction];
        setTransactions(updateTransaction);
        console.log("addclick")
    }

    const removeClick = () => {
        if (balance > Number(amount)) {
            const newbalance = balance - Number(amount);
            setBalance(newbalance)
            const transaction = {
                date: new Date(),
                type: 'Remove',
                amount,
            }
            const updateTransaction = [...transactions, transaction];
            setTransactions(updateTransaction);
        }
        else {
            alert("Do not enter value more than balance")
        }
        console.log("removeclick")
    }

    return (
        <div className="container">
            <h1>EXPENSE TRACKER-BASIC</h1>
            <div className="balanceContainer">
                <div>Balance-{balance}</div>
                <Input type="number" pattern="[0-9]*" value={amount} onChange={e => setAmount(e.target.value)} />
                <div className="buttonContainer">
                    <button className="buttonContent" onClick={addClick}>Add</button>
                    <button className="buttonContent" onClick={removeClick}>Remove</button>
                </div>
            </div>
            <div className="transactionContainer">
                <h2>TRANSACTIONS</h2>
                <div>{transactions.map(item => (
                    <p>{moment(item.date.toLocaleString()).format()} - {item.amount} - {item.type}</p>
                ))}</div>
            </div>
        </div>
    )
}

export default Transaction