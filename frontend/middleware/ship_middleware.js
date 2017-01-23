import {REQUEST_SHIP, receiveShip} from '../actions/ship_actions';
import {fetchShip} from '../util/ship_api_util';

const ShipMiddleware = ({getState,dispatch}) => next => action => {
  const shipSuccess = ship => dispatch(receiveShip(ship));

  switch(action.type) {
    case REQUEST_SHIP:
      fetchShip(shipSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default ShipMiddleware;
