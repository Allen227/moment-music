import * as React from 'react';
import Recommend from '../page/Recommend/view';
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