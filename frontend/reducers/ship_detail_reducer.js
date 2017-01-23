import {RECEIVE_SHIP, REMOVE_SHIP} from "../actions/ship_actions";
import {merge} from "lodash";

const _defaultState = {
  ship: null
};

const ShipDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  console.log("reducer action type: ", action.type);
  switch (action.type) {
    case RECEIVE_SHIP:
      newState["ship"] = action.ship;
      return newState;
    case REMOVE_SHIP:
      newState["ship"] = null;
      return newState;
    default:
      return state;
  }
};

export default ShipDetailReducer;
