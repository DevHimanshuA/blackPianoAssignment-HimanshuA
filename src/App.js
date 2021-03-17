import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';

// functional component named - 'App'
const App = () => {
    return (
      <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Components/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Components/Users">Users</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/Components/About">
                    <About />
                </Route>
                <Route path="/Components/Users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>
    );
}
export default App;
