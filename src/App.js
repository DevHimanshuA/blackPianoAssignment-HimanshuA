import React from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
// importing all components necessary for routing
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Customer';

// functional component named - 'App'
const App = () => {
    return (
      <Router>
        <div class="main-wrapper">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/Components/Home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Components/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Components/Customer">Users</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/Components/About">
                    <About />
                </Route>
                <Route path="/Components/Customer">
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
