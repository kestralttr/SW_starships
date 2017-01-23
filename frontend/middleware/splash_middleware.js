import {REQUEST_SHIP, receiveShip} from '../actions/ship_actions';
import {fetchShip} from '../util/ship_api_util';

const SplashMiddleware = ({getState,dispatch}) => next => action => {
  const shipSuccess = ship => dispatch(receiveShip(ship));

  console.log("middleware action type: ", action.type);
  switch(action.type) {
    case REQUEST_SHIP:
      fetchShip(action.id, shipSuccess);
      console.log("fetching ship");
      return next(action);
    default:
      return next(action);
  }
};

export default SplashMiddleware;
