/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener("DOMContentLoaded", function(){

var next=document.querySelector('#nextPicture');
var prev=document.querySelector('#prevPicture');
var list=[...document.querySelectorAll("li")]
var indeks=0;

list[indeks].classList.add("visible");

next.addEventListener("click", function(event){
  list[indeks].classList.remove("visible");
  if(indeks<list.length-1){
    indeks++;
  } else {
    indeks=0;
  }
    list[indeks].classList.add("visible");
});


prev.addEventListener("click", function(event){
  list[indeks].classList.remove("visible");
  if(indeks>0){
    indeks--;
  } else {
    indeks=list.length-1;
  }
  list[indeks].classList.add("visible");
});


/*
[...list].forEach(function(element,index,array){
    indexy= index;
    console.log(indexy);
    element.addEventListener("click",function(event){
      this.classList.add("visible");
    })
})
*/


});
