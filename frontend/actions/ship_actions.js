export const REQUEST_SHIP = "REQUEST_SHIP";
export const RECEIVE_SHIP = "RECEIVE_SHIP";
export const REMOVE_SHIP = "REMOVE_SHIP";

export const receiveShip = (ship) => ({
  type: RECEIVE_SHIP,
  ship: ship
});

export const requestShip = (id) => ({
  type: REQUEST_SHIP,
  id: id
});

export const removeShip = () => ({
  type: REMOVE_SHIP
});
