import React from "react";
import TransactionForm from "./TransactionForm"
import { Button, Card, Container, Table } from 'react-bootstrap'

const Transactions = () => {

    const addOrEdit = obj=>{
        fireDBRef.child('contacts').push(
            obj,
            err => {
                if (err)
                    console.log(err)
                }
        )

    }
    return(
        <>
            <Container className="d-flex align-items-center justify-content-center"
                style={{mindHeight: "100vh"}}>
                <div className="w-100" style={{ maxWidth: '9000px'}}>
                    <h1>Tranaction Summary
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
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Blah</td>
                                <td>Blah</td>
                                <td>Blah</td>
                                <td>
                                    Blah
                                </td>
                            </tr>
                            {/* {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td>Blah</td>
                                        <td>Blah</td>
                                        <td>Blah</td>
                                        <td>
                                            Blah
                                        </td>
                                    </tr>
                                })
                            } */}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
     );
}

export default Transactions;
