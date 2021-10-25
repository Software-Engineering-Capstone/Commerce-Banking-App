import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Transactions from './Components/Transactions'
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
  );
}

export default App;
