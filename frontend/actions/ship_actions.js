export const REQUEST_SHIP = "REQUEST_SHIP";
export const RECEIVE_SHIP = "RECEIVE_SHIP";
export const REMOVE_SHIP = "REMOVE_SHIP";

export const receiveShip = (ship) => ({
  type: RECEIVE_SHIP,
  ship: ship
});

export const requestShip = (searchString) => ({
  type: REQUEST_SHIP,
  searchString: searchString
});

export const removeShip = () => ({
  type: REMOVE_SHIP
});
