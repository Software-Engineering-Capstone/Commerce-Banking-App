import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Login from './components/Login';
import Transactions from './components/Transactions'
import TransactionForm from './components/TransactionForm'
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
