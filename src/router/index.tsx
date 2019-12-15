import * as React from 'react';
import Recommend from '../container/recommend/index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Recommend}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;