import { Container, Grid } from '@material-ui/core';
import React from 'react';

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Curriculum from './pages/Curriculum/Curriculum';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Contacto from './pages/Contacto/Contacto';



function App() {
  return (
    <Container className='top'>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={3} lg={3} >
          <Profile />
        </Grid>

        <Grid item xs>
          <Router>

            <Header />

            <div className="main_content container_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/contacto">
                  <Contacto />
                </Route>
                <Route path="/">
                  <Curriculum />
                </Route>
              </Switch>
            </div>

          </Router>

          <Footer />

        </Grid>

      </Grid>
    </Container>

  );
}

export default App;
