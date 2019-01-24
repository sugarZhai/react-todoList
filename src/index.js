import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Login from './Login'
import Home from './Home'


render((
  <Router history={hashHistory}>
  <Route path="/" component={Login}/>
  <Route path="/home" component={Home}/>
</Router>
), document.getElementById('app'))