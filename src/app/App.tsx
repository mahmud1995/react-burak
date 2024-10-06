import React from 'react';
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { About } from "./screens/About"
import { Users } from "./screens/Users"
function App() {
  return (
      <div>
        <nav>
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
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>

        <Switch> {/*home page "/" har doim ohirida bulish kere*/}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  )
}

function Home() {
  return <Container>Home</Container>
}
function Product() {
  return <Container>Product</Container>
}
export default App;
