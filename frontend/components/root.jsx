import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';
import SplashContainer from './splash/splash_container';
import ShipDetailContainer from './ship_detail/ship_detail_container';
import App from './app';

const Root = ({store}) => {

  const _ensureShipDetailValid = (nextState,replace) => {
    const shipDetail = store.getState().shipDetail.ship;
    if (!shipDetail) {
      replace('/');
    }
  };

  return (<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SplashContainer}/>
        <Route path="shipdetail" component={ShipDetailContainer}>

        </Route>
      </Route>
  </Router>
  </Provider>
  );
};
export default Root;
