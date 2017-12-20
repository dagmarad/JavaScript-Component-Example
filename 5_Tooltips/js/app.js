/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */
 document.addEventListener("DOMContentLoaded", function(){
console.log("hej");
var help =document.querySelectorAll(".tooltip");
console.log(help);

help.forEach(function(element){
  element.addEventListener("mouseover", function (event){
    var span=document.createElement("span");
    span.classList.add("tooltipText");
    span.innerText=element.dataset.text;
    this.appendChild(span);
  })
})

help.forEach(function(element){
  element.addEventListener("mouseout", function (event){
    //var span=document.createElement("span");
    //span.classList.remove("tooltipText");
    //span.innerText=element.dataset.text;
    this.children[0].remove();
  })
})






});
