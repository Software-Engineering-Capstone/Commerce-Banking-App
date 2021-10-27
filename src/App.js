import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './config/firebase';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Transactions from './components/Transactions'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route exact path="/" component={Transactions} />
                </Switch>
            </AuthProvider>
        </Router>
    )
}

export default App;
