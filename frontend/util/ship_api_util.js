

export const fetchShip = (id,success) => {
  $.ajax({
    type: "GET",
    url: `//swapi.co/api/starships/${id}`,
    success: success
  });
};
