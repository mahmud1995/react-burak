import React from 'react';
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import { Link, Route, Router, Switch, useLocation } from 'react-router-dom';

import HomePage from './screens/homePage';
import ProductsPage from './screens/productsPage';
import OrdersPage from './screens/ordersPage';
import UserPage from './screens/userPage';
import HelpPage from './screens/helpPage';
import HomeNavbar from './components/headers/HomeNavbar';
import OtherNavbar from './components/headers/OtherNavbar';
import Footer from './components/footer';
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";


function App() {
  const location = useLocation();
  console.log("location:", location);
  return (
      <>
{/*home page "/" har doim ohirida bulish kere*/}
        {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
        <Switch>

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
        <Footer />
      </>
  )
}


function Product() {
  return <Container>Product</Container>
}
export default App;
