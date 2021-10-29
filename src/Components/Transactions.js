import React, { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm"
import { Button, Card, Container, Table } from 'react-bootstrap'
import { fireDb } from "../firebase";

const Transactions = () => {

    var [transactionObjects,setTransactionObjects] = useState(0)

    useEffect(()=>{
        fireDb.on('value', snapshot=>{
            if(snapshot.val()!=null)
            setTransactionObjects({
                ...snapshot.val()
            })
        })
    },[])

    return(
        <>
            <Container className="d-flex align-items-center justify-content-center"
                style={{mindHeight: "100vh"}}>
                <div className="w-100" style={{ maxWidth: '9000px'}}>
                    <h1>Transaction Summary
                        <div className="float-right">
                            <button>
                                <img src="settingscog3.png" 
                                width="40" 
                                height="40"
                                />
                            </button>
                        </div>
                    </h1>
                    <Table striped bordered hover responsive>
                        <thead >
                            <tr>
                                <th>Account Type</th>
                                <th>Account Id</th>
                                <th>Amount</th>
                                <th>Balance</th>
                                <th>Location</th>
                                <th>Processing Date</th>
                                <th>Transaction Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            Object.keys(transactionObjects).map(id => {
                                return <tr key={id}>
                                    <td>{transactionObjects[id]["Account-Type"]}</td>
                                    <td>{transactionObjects[id]["Acct-id"]}</td>
                                    <td>{transactionObjects[id].Amount}</td>
                                    <td>{transactionObjects[id].Balance}</td>
                                    <td>{transactionObjects[id].Location}</td>
                                    <td>{transactionObjects[id]["Processing-Date"]}</td>
                                    <td>{transactionObjects[id]["Transaction-type"]}</td>
                                </tr>
                            })
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
     );
}

export default Transactions;
