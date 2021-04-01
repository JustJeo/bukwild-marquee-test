import React from 'react';
import { Switch, Route} from 'react-router-dom'

// Import all pages
import Industries from '../pages/Industries'
import Services from '../pages/Services'

const Routes = (props) => (
  <Switch>
    <Route exact path = '/industries' component = { Industries } />
    <Route exact path = '/services' component = { Services } />
  </Switch>
)

export default Routes