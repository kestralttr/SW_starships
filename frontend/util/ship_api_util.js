

export const fetchShip = (id,success) => {
  $.ajax({
    type: "GET",
    url: `https://swapi.co/api/starships/${id}/`,
    success: success
  });
};
