import './App.css';
import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./component/Login";
import Admin from "./component/Admin";
import LandingPage from "./component/LandingPage";
// import Payment from "./component/Payment";
// import Validation from "./component/Validation"
// import Events from "./component/user/Events";
function App() {
  return (
    <Router>
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/landing-page">
          <LandingPage />
        </Route>
        {/* <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/validation">
          <Validation />
        </Route> */}
        {/* <Route path="/events">
          <Events />
        </Route> */}
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;