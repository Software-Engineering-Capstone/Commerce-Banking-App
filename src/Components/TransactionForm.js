import React, { useRef, useState } from "react"
import { Form, Button, FloatingLabel, Col, Row, Container } from 'react-bootstrap'
import { fireDb } from "../firebase";
import { useHistory} from "react-router-dom";
import SettingsButton from "./SettingsButton"

//
// Look here for help with forms styling https://react-bootstrap.netlify.app/components/forms/
// Look here for youtube guide that I based our page on https://www.youtube.com/watch?v=pI4438IHBYY
//

const TransactionForm = (props) => {
    const initialFieldValues = {
        // These must match exactly with the attributes of the transaction table
        "Account-Type": '',  // An attribute with hyphens in the string must be encased in quotes
        "Acct-id": '',
        Amount: '',
        Balance: '',
        Location: '',
        "Processing-Date": '',
        "Transaction-type": ''
    }

    const accountType = useRef();
    const acctId = useRef(); 
    const amount = useRef();
    const balance = useRef();
    const location = useRef();
    const processingDate = useRef();
    const transactionType = useRef();
    const history = useHistory();

    var [values, setValues] = useState(initialFieldValues)
    var [currentId, setCurrentId] = useState('')

    // the name and value are properties of the elements on the page
    // they are used to populate the object that will be sent to the database via form submission
    // this function loads the payload to be sent to the database while the user is typing
    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const add = obj => {
        fireDb.push(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            }
        )
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        add(values)
        history.push("/")
    }

    return (
        <>
        {
            // The container below and div tag directly following it are used through out the 
            // project for their classes that keep the child elements aligned in the center 
            // and flex with the page
        }
            <Container className="d-flex align-items-center 
                justify-content-center"
                style={{mindHeight: "100vh"}}>
                {
                    // The maxWidth property controls the overall width of the page elements
                }
                <div className="w-100" style={{ maxWidth: '600px'}}>
                    <div className="small-padding w-100">
                        <h2>Transaction Form</h2>
                        <SettingsButton />
                        <Form autoComplete="off" onSubmit={handleFormSubmit}>
                            <Row>
                                <Form.Group as={Col} id="accountType">
                                    <FloatingLabel controlId="floatingInputGrid" label="Account Type">
                                        <Form.Control onChange={handleInputChange} name="Account-Type" value={values["Account-Type"]} type="text" 
                                        placeholder="Account Type" ref={accountType} required />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} id="acctId">
                                    <FloatingLabel controlId="floatingInputGrid" label="Account ID">
                                        <Form.Control onChange={handleInputChange} name="Acct-id" value={values["Acct-id"]} type="text" 
                                        placeholder="Account ID" ref={acctId} required />
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} id="amount" className="top-padding">
                                    <FloatingLabel controlId="floatingInputGrid" label="Amount">
                                        <Form.Control onChange={handleInputChange} name="Amount" value={values.Amount} type="text" 
                                        placeholder="Amount" ref={amount} required />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} id="balance" className="top-padding">
                                    <FloatingLabel controlId="floatingInputGrid" label="Balance">
                                        <Form.Control onChange={handleInputChange} name="Balance" value={values.Balance} type="text" 
                                        placeholder="Amount" ref={balance} required />
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} id="location" className="top-padding">
                                    <FloatingLabel controlId="floatingInputGrid" label="Location">
                                        <Form.Control onChange={handleInputChange} name="Location" value={values.Location} type="text" 
                                        placeholder="Amount" ref={location} required />
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} id="processingDate" className="top-padding">
                                    <FloatingLabel controlId="floatingInputGrid" label="Processing Date">
                                        <Form.Control onChange={handleInputChange} name="Processing-Date" value={values["Processing-Date"]} type="text" 
                                        placeholder="Processing Date" ref={processingDate} required />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} id="transactionType" className="top-padding">
                                    <FloatingLabel controlId="floatingInputGrid" label="Transaction Type">
                                        <Form.Control onChange={handleInputChange} name="Transaction-type" value={values["Transaction-type"]} type="text" 
                                        placeholder="Transaction Type" ref={transactionType} required />
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <div className="top-padding w-100">
                                <Button type="submit">Submit</Button>
                            </div> 
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default TransactionForm;