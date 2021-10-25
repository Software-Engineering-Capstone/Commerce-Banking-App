import React, { useRef, useState } from "react"
import { Card, Form, Button, Alert, Image } from 'react-bootstrap'

//
// Look here for help with forms styling https://react-bootstrap.netlify.app/components/forms/
//
//

const TransactionForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }

    const emailRef = useRef();
    const passwordRef = useRef(); 
    const passwordConfirmRef = useRef();

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
            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Full Name" name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-row">
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Mobile" name="mobile"
                            value={values.mobile}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Email" name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Address" name="address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary btn-block" />
                </div>
            </form >

            {/* 
            
                The section below is how we can create the same form as above but with bootstrap

            */}
            <Form autoComplete="off" onSubmit={handleFormSubmit}>
                <Form.Group id="email">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <div class="small-padding w-100">
                    <Button className="w-100" type="submit">Create Account</Button>
                </div> 
            </Form>
        </>
    );
}

export default TransactionForm;