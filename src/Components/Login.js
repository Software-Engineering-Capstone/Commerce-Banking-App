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
            await login(emailRef.current.value, passwordRef.current.value) // calls signup function 
            history.push("/transactions")

        } catch (e) {
            setError('Failed to Login' + e)
        }

        setLoading(false)
    }

    return (
        <>
            <Container className="d-flex align-items-center 
                justify-content-center"
                style={{mindHeight: "100vh"}}>
                <div className="w-100" style={{ maxWidth: '400px'}}>
                    <div class="small-padding">
                        <Image src="fulllogo.png" class="commerce-bank-logo-padding" fluid />
                    </div>

                    <Card>
                        <Card.Body>
                            <h3 className="text-center mb-4">Login</h3>
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
                                <div class="small-padding w-100">
                                    <Button disabled={loading} className="w-100" type="submit">Login</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">

                        New to Commerce Bank? <Link to="./">Create account </Link>
                    </div>
                </div>
        </Container>
        </>
    )
}
