import * as React from 'react';
import Home from '../container/home/index';
import Recommend from '../container/recommend/index';
import Rank from '../page/rank';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/recommend" component={Recommend}></Route>
            <Route path="/rank" component={Rank}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router;