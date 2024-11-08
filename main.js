var ua = detect.parse(navigator.userAgent);
//  main.js
if(ua.browser.family==!"Chrome"){
    $("#notchrome").hide()
    alert("This page is not available on any browser other then chrome. Thank you for your understanding.")
    $("#chrome").hide()
    $("#ntchrome").show()
    $(".topnav").hide()
} else{ 
    $("#notchrome").hide()
}

function onButton(id){
$("#"+id).on("click",function(){
    localStorage.setItem("petcenid",id)
    window.location.href="petition.html"
})
}
alert(ua.browser.family)
//  GET request using fetch()
