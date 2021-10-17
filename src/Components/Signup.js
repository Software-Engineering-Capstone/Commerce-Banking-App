import React, { useRef, useState } from "react"
import { Card, Form, Button, Alert, Image } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
//import image from "../../public/fulllogo.png"

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef(); 
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

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
            } catch (e) {
                setError('Failed to create an account' + e)
            }

            setLoading(false)
    }

    return (
        <>
            <div class="commerce-bank-logo-padding">
                <Image src="fulllogo.png" class="commerce-bank-logo-padding" fluid />
            </div>
            <Card>
                <Card.Body>
                    {/* <div>
                        <img src="/fulllogo.png" alt="Commerce Bank" />
                    </div> */}
                    <h3 className="text-center mb-4">Sign Up</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} class="commerce-bank-dark-green-background" className="w-100" type="submit">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <a href="./Login">Log in</a>
            </div>
        </>
    )
}
