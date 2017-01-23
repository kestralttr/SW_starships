import {applyMiddleware} from 'redux';
import ShipMiddleware from './ship_middleware';

const RootMiddleware = applyMiddleware(
  ShipMiddleware
);

export default RootMiddleware;
