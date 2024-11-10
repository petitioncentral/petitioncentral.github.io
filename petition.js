const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');  
const num = urlParams.get('ps');
const topdsc = urlParams.get('topdsc');
const maindsc = urlParams.get('maindsc');
console.log(title)          
$("#titl").text(title)
$("#num").text(num+" people have signed this.")
$("#topdesc").text(topdsc)
$("#maindesc").text(maindsc)
$("#signnow").on("click",function(){
    console.log("clicked!")
})