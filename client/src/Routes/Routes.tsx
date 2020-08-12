import React from 'react'
import Main from '../Components/Main/Main'

import { HashRouter, Route, Switch } from 'react-router-dom';

import './Routes.scss'

export const Routes = () => {
  return (
    <div className="router-wrapper">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </HashRouter>
    </div>
  )
}