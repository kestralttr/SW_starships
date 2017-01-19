import {combineReducers} from 'redux';
import ShipDetailReducer from './ship_detail_reducer';

const RootReducer = combineReducers({
  shipDetail: ShipDetailReducer
});

export default RootReducer;
