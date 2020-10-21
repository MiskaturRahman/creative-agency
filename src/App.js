import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import CustomerDashboard from './Components/CustomerDashboard/CustomerDashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';
import OrderForm from './Components/OrderForm/OrderForm';
import OrderList from './Components/OrderList/OrderList';
import NavBar from './Components/Home/NavBar/NavBar';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/service/:id">
            <CustomerDashboard />
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <PrivateRoute path="/CustomerDashboard/order">
            <OrderForm />
          </PrivateRoute>

          <PrivateRoute path="/CustomerDashboard/orderlist">
            <OrderList />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
