import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Login from './components/Login';
import Signup from './components/Signup';
import Transactions from './components/Transactions'
import TransactionForm from './components/TransactionForm'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute"
=======
import Login from './Components/Login';
import Signup from './Components/Signup';
import Transactions from './Components/Transactions'
import PrivateRoute from "./Components/PrivateRoute"
import TransactionForm from './Components/TransactionForm'

import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

>>>>>>> npm-fix-2
function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
<<<<<<< HEAD
                    <PrivateRoute exact path="/" component={Transactions} />
                    <PrivateRoute path="/transactionform" component={TransactionForm} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/Login" component={Login} />
=======
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <PrivateRoute exact path="/" component={Transactions} />
                    <PrivateRoute path="/transactionform" component={TransactionForm} />
>>>>>>> npm-fix-2
                </Switch>
            </AuthProvider>
        </Router>
    )
}

export default App;
