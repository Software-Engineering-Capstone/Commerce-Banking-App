import React, { useState, useEffect } from "react"
import { Container, Table } from 'react-bootstrap'
import { Dimensions } from "react-native"
import { fireDb } from "../firebase"
import FloatingButton from "./FloatingButton"
import SettingsButton from "./SettingsButton"

//
// Look here for youtube guide that I based our page on https://www.youtube.com/watch?v=pI4438IHBYY
//
const Transactions = () => {

    var [transactionObjects,setTransactionObjects] = useState(0)
    var width = Dimensions.get('window').width;
    var headerPadding;

    if (width < 751) {
        headerPadding="page-header bottom-padding top-padding"
    } else {
        headerPadding="page-header bottom-padding"
    }

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
        {
            // The container below and div tag directly following it are used through out the 
            // project for their classes that keep the child elements aligned in the center 
            // and flex with the page
        }
            <Container className="d-flex align-items-center justify-content-center"
                style={{mindHeight: "100vh"}}>
                    
                <div className="w-100" style={{ maxWidth: '1000px'}}>
                    <div>
                        <div class={headerPadding}>
                            <h1 className="inline-header">
                                Transaction Summary
                                <SettingsButton />
                            </h1>
                        </div>
                    </div>
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
                    <FloatingButton />
                </div>
                
            </Container>
        </>
     );
}

export default Transactions;
