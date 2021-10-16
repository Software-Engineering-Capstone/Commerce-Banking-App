import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavBar from './Components/NavBar';
import fire from './config/firebase';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Container className="d-flex align-items-center 
        justify-content-center"
        style={{mindHeight: "100vh"}}>
            <div className="w-100" style={{ maxWidth: '400px'}}>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <Route path="/signup" component={Signup} />
                            <Route exact path="/" component={Dashboard} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
        </Container>

    )
}

export default App;
 