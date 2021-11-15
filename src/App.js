import React, { useState } from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Transactions from './Components/Transactions'
import PrivateRoute from "./Components/PrivateRoute"
import TransactionForm from './Components/TransactionForm'
import Notifications from './Components/Notifications'
import ReactNoficationComponent from './Components/ReactNotification'
import { onMessageListener } from "./config/firebase";

import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const [show, setShow] = useState(false)
    const [notification, setNotfication] = useState({ title: "", body: ""})

    console.log(show, notification)

    onMessageListener()
    .then((payload) => {
        setShow(true)
        setNotfication({
            title: payload.notification.title,
            body: payload.notification.body
        })
        console.log(payload)
    })
    .catch((err) => console.log("Failed: ", err))
    

    return (
        <>
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
            <div>
                {show ? (
                    <ReactNoficationComponent
                        title={notification.title}
                        body={notification.body}
                    />
                ) : (
                    <></>
                )}
                <Notifications />
                {//<Fader text="Hello React"></Fader>
                }
            </div>
        </>
    )
}

export default App;
