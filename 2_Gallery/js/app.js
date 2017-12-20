document.addEventListener("DOMContentLoaded", function(){
/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/1.png">
   <button class="close">Close</button>
 </div>
*/

console.log("działa");
var list = document.querySelectorAll("li");
var body = document.querySelector("body");

  list.forEach(function(element){
  element.addEventListener("click", function(event){
   var address = this.querySelector('img').getAttribute('src');
   console.log(address);
   var button = document.createElement("button");
   var div = document.createElement("div");
   button.classList.add("close");
   button.innerText="close";
   div.classList.add("fullScreen");
   div.innerHTML="<img src='"+address+"'>";

   div.appendChild(button);
   body.appendChild(div);
   button.addEventListener("click", function(event){
     div.remove();
   })


  })
})






})
