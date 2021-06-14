import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import EventManagement from "./EventManagement";
import OrderManagement from "./OrderManagement";
import Reports from "./reports/Reports";

function AdminRoute() {
    return (
        <Switch>
            <Route path="/landing-page/event-management">
                <EventManagement />
            </Route>
            <Route path="/landing-page/order-management">
                <OrderManagement />
            </Route>
            <Route path="/landing-page/reports">
                <Reports />
            </Route>
        </Switch>
    );
}

export default AdminRoute;