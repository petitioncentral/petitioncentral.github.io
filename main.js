var ua = detect.parse(navigator.userAgent);
//  main.js
if(ua.browser.family==="Chrome"){
    $("#notchrome").hide()
    
} else{ 
    alert("Hey use chrome!")
    $("#chrome").hide()
    $("#notchrome").show()
}
function onButton(id){
$("#"+id).on("click",function(){
    localStorage.setItem("petcenid",id)
    window.location.href="petition.html"
})
}
alert(ua.browser.family)
//  GET request using fetch()
fetch("https://getpantry.cloud/apiv1/pantry/e538f229-8b8d-43ec-bf6f-945f5b441cf6/basket/Petitions")
  
    // Converting received data to JSON
    .then(response => response.json())
    .then(json => {
 
        // Create a variable to store HTML
        
      
        // Loop through each data and add a table row
        var x = json;
        console.log(x.numofpets)
       for(var i = 0; i<x.petitions.length;i++){
        $("#pets").append("<button id = 'pet"+i+"'>"+x.petitions[i].title+"</button>")
        onButton("pet"+i)
       }
   
    
});
