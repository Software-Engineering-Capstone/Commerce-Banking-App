import React, { useRef, useState } from "react"
import { Card, Form, Image, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from '../context/AuthContext'
import { Link, useHistory} from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('') // 
            setLoading(true) // disables submit button
            await login(emailRef.current.value, passwordRef.current.value) // calls login function 
            history.push("/")

        } catch (e) {
            setError('Failed to Login' + e)
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

<div class="commerce-bank-dark-green-background">
    <Container className="d-flex align-items-center justify-content-center" 
                    style={{minHeight: "100vh"}}>
                <div className="w-100" style={{ maxWidth: '525px'}}>  

                    <Card>
                        <Card.Body>
                        <Image src="fulllogo.png" class="commerce-bank-logo-padding" fluid />
                            <h3 id="cardTitle" className="text-center mb-4 top-padding">Login</h3>

                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Customer ID (or email)</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label class="top-padding">Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <div class="text-center top-padding">
                                    <Button disabled={loading} className="w-75" type="submit">Login</Button>
                                </div>
                            </Form>
                        </Card.Body>
                        <div className="w-100 text-center mt-2 small-padding">
                        New to Commerce Bank? <Link to="./Signup">Create account </Link>
                        </div>
                    </Card>
                </div>
        </Container>
    </div>
    </>
    )
}

/*
FIXME: CENTER LOGIN BUTTON FOR BOTH SIGNIN AND LOGIN PAGES
*/