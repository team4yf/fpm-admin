import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Dashboard from './modules/Dashboard/index'
import Application from './modules/Application/index'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
  ),
 document.getElementById('app'))
