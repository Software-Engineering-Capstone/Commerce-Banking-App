import React, { useRef, useState } from "react"
import { Card, Form, Button, Alert, Image, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory} from "react-router-dom";

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef(); 
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
                return setError('Passwords do not match')
            }

            try {
                setError('')
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value)
                history.push("/transactions")
            } catch (e) {
                setError('Failed to create an account' + e)
            }

            setLoading(false)
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
                <div className="w-100" style={{ maxWidth: '400px'}}>
                    <div class="small-padding">
                        <Image src="fulllogo.png" class="commerce-bank-logo-padding" fluid />
                    </div>
                    <Card>
                        <Card.Body>
                            <h3 className="text-center mb-4">Create a new account</h3>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label class="top-padding">Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label class="top-padding">Confirm Password</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>
                                <div class="small-padding w-100">
                                    <Button disabled={loading} className="w-100" type="submit">Create Account</Button>
                                </div> 
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <a href="./Login">Log in</a>
                    </div>
                </div>
            </Container>
        </>
    )
}
