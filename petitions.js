var ua = detect.parse(navigator.userAgent);
//  main.js
if(ua.browser.family==!"Chrome"){
    $("#ntchrome").hide()
    alert("Hey use chrome!")
    $("#chrome").hide()
    $("#ntchrome").show()
    $(".topnav").hide()
} else{ 
    $("#notchrome").hide()
}


alert(ua.browser.family)
//  GET request using fetch()

  
    // Converting received data to JSON
    
 
        // Create a variable to store HTML
        
        var settings = {
            "url": "https://getpantry.cloud/apiv1/pantry/e538f229-8b8d-43ec-bf6f-945f5b441cf6/basket/Petitions",
            "method": "GET",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
          };
          var y;
          $.ajax(settings).done(function (response) {
            console.log(response);
         y= response;
         for(var i = 0; i<y.pets.length;i++){
            $("#pets").append("<button id ='pet"+i+"'>"+y.pets[i].title+"</button>")
            $("#pet"+i).on("click",function(){
                localStorage.setItem("petcenid",i)
                window.location.href="petition.html?title=BOB"
                console.log("clicked") 
            })
           }
          });
        // Loop through each data and add a table row
        
        
       
   
    

