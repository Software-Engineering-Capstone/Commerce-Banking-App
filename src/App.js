import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './config/firebase';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
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
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={Signup} />
                            <Route exact path="/" component={Signup} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
        </Container>

    )
}

export default App;
