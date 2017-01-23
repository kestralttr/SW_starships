

export const fetchShip = (id,success,error) => {
  $.ajax({
    type: "GET",
    url: `http://swapi.co/api/starships/${id}`,
    success: success,
    error: error
  });
};
