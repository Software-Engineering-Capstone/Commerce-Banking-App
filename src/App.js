import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Transactions from './components/Transactions'
import TransactionForm from './components/TransactionForm'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute"
function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <PrivateRoute exact path="/" component={Transactions} />
                    <PrivateRoute path="/transactionform" component={TransactionForm} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/Login" component={Login} />
                </Switch>
            </AuthProvider>
        </Router>
    )
}

export default App;
