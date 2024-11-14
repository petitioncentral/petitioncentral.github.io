const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');  
const num1 = urlParams.get('ps');
const num = Number(num1);
const topdsc = urlParams.get('topdsc');
const maindsc = urlParams.get('maindsc');
const idd = urlParams.get('id');
const id = Number(idd)-1;
console.log(id)
let myd;
console.log(title)          
$("#titl").text(title)
$("#num").text(num+" people have signed this.")
$("#topdesc").text(topdsc)
$("#maindesc").text(maindsc)
$("#signnow").on("click",function(){
    if(localStorage.getItem("petcenhassigned"+id)){
        alert("Please, do not double sign this petition.")
    }else{
      var settings = {
        "url": "https://getpantry.cloud/apiv1/pantry/e538f229-8b8d-43ec-bf6f-945f5b441cf6/basket/Petitions",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
         myd=response;
         myd.pets[id].ps=num+1;
         
      });
      var settings2 = {
        "url": "https://getpantry.cloud/apiv1/pantry/e538f229-8b8d-43ec-bf6f-945f5b441cf6/basket/Petitions",
        "method": "PUT",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({myd}),
      };
      
      $.ajax(settings2).done(function (response) {
        console.log(response);
      });
    }
})