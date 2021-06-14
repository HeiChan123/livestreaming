import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Events from "./Events";
import Profile from "./Profile";
import PaymentHistory from "./PaymentHistory";
import Payment from "./Payment";
function UserRoute() {
    return (
        <Switch>
            <Route path="/landing-page/events">
                <Events />
            </Route>
            <Route path="/landing-page/payment">
                <Payment/>
            </Route>
            <Route path="/landing-page/profile">
                <Profile />
            </Route>
            <Route exact path="/landing-page/payment-history">
                <PaymentHistory />
            </Route>
            
        </Switch>
    );
}

export default UserRoute;