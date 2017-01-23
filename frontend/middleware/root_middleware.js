import {applyMiddleware} from 'redux';
import SplashMiddleware from './splash_middleware';

const RootMiddleware = applyMiddleware(
  SplashMiddleware
);

export default RootMiddleware;
