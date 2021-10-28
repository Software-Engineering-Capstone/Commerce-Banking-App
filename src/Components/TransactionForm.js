import React, { useRef, useState } from "react"
import { Card, Form, Button, Alert, Image, FloatingLabel, Col, Row, Container } from 'react-bootstrap'

//
// Look here for help with forms styling https://react-bootstrap.netlify.app/components/forms/
//
//

const TransactionForm = (props) => {
    const initialFieldValues = {
        accountType: '',
        acctId: '',
        amount: '',
        balance: '',
        location: '',
        processingDate: '',
        transactionType: ''
    }

    const accountType = useRef();
    const acctId = useRef(); 
    const amount = useRef();
    const balance = useRef();
    const location = useRef();
    const processingDate = useRef();
    const transactionType = useRef();

    var [values, setValues] = useState(initialFieldValues)


    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        <>
            {/* 
            
                The section below is how we can create the same form as above but with bootstrap

            */}
            <Container className="d-flex align-items-center 
                justify-content-center"
                style={{mindHeight: "100vh"}}>
                <div className="w-100" style={{ maxWidth: '600px'}}>
                <div class="small-padding w-100">
                    <h2>Transaction Form</h2>

                    <Form autoComplete="off" onSubmit={handleFormSubmit}>
                        <Row>
                            <Form.Group as={Col} id="accountType">
                                <FloatingLabel controlId="floatingInputGrid" label="Account Type">
                                    <Form.Control type="text" placeholder="Account Type" ref={accountType} required />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} id="acctId">
                                <FloatingLabel controlId="floatingInputGrid" label="Account ID">
                                    <Form.Control type="text" placeholder="Account ID" ref={acctId} required />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} id="amount" className="top-padding">
                                <FloatingLabel controlId="floatingInputGrid" label="Amount">
                                    <Form.Control type="text" placeholder="Amount" ref={amount} required />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} id="balance" className="top-padding">
                                <FloatingLabel controlId="floatingInputGrid" label="Balance">
                                    <Form.Control type="text" placeholder="Amount" ref={balance} required />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} id="location" className="top-padding">
                                <FloatingLabel controlId="floatingInputGrid" label="Location">
                                    <Form.Control type="text" placeholder="Amount" ref={location} required />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} id="processingDate" className="top-padding">
                                <FloatingLabel controlId="floatingInputGrid" label="Processing Date">
                                    <Form.Control type="text" placeholder="Processing Date" ref={processingDate} required />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} id="transactionType" className="top-padding">
                                <FloatingLabel controlId="floatingInputGrid" label="Transaction Type">
                                    <Form.Control type="text" placeholder="Transaction Type" ref={transactionType} required />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <div class="top-padding w-100">
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