var settings = {
    "url": "https://getpantry.cloud/apiv1/pantry/e538f229-8b8d-43ec-bf6f-945f5b441cf6/basket/Petitions",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
  };
  var x;
  $.ajax(settings).done(function (response) {
    
    var x= response;
    var id = localStorage.getItem("petcenid")
    var place = x.pets[id-1]
    console.log(id)
    console.log(place.title)
    $("#tit").text(place.title)
  });