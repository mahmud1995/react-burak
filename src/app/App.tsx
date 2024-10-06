import React from 'react';
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import { Link, Route, Router, Switch } from 'react-router-dom';

import { HomePage } from './screens/homePage';
import { ProductsPage } from './screens/productsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { HelpPage } from './screens/helpPage';

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/member-page">User</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </nav>

        <Switch> {/*home page "/" har doim ohirida bulish kere*/}
        
          <Route path="/product">
            <ProductsPage />
          </Route>

          <Route path="/orders">
            <OrdersPage />
          </Route>

          <Route path="/member-page">
            <UserPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
      </div>
  )
}


function Product() {
  return <Container>Product</Container>
}
export default App;
