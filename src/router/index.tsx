import * as React from 'react';
import Home from '../container/home/index';
import {BrowserRouter, Route} from 'react-router-dom';

class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route path="/" component={Home}></Route>
      </BrowserRouter>
    )
  }
}

export default Router;