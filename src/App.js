import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Transactions from './Components/Transactions'
import PrivateRoute from "./Components/PrivateRoute"
import TransactionForm from './Components/TransactionForm'

import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <PrivateRoute exact path="/" component={Transactions} />
                    <PrivateRoute path="/transactionform" component={TransactionForm} />
                </Switch>
            </AuthProvider>
        </Router>
    )
}

export default App;
