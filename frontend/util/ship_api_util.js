

export const fetchShip = (id,success) => {
  $.ajax({
    type: "GET",
    url: `http://swapi.co/api/starships/${id}`,
    success: success
  });
};
