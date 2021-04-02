import React from 'react';
import { Switch, Route} from 'react-router-dom'

// Import all pages
import Home from '../pages/Home'
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'

const Routes = () => (
  <Switch>
    <Route path = '/' component = { Home } />
    <Route exact path = '/services' component = { Services } />
    <Route exact path = '/aboutus' component = { AboutUs} />
  </Switch>
)

export default Routes