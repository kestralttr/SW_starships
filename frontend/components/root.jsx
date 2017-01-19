import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';
import SplashContainer from '/splash/splash_container';
import App from './app';

const Root = ({store}) => {

  return (<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SplashContainer}/>
      </Route>
  </Router>
  </Provider>
  );
};
export default Root;
