import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavBar from './Components/NavBar';
import fire from './config/firebase';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Container className="d-flex align-items-center 
            justify-content-center"
            style={{mindHeight: "100vh"}}>
                <div className="w-100" style={{ maxWidth: '400px'}}>
                    <Signup />
                </div>
            </Container>
        </AuthProvider>

    )
}

export default App;
 