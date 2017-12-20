/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener("DOMContentLoaded", function(){


var navli =document.querySelectorAll(".nav >ul >li");


navli.forEach(function(element){
  element.addEventListener("mouseover", function(event){
    var navlili=element.firstElementChild;
    if (navlili!==null){
      navlili.style.display="block";
    }
  });
});

navli.forEach(function(element){
  element.addEventListener("mouseout", function(event){
    var navlili=element.firstElementChild;
    if (navlili!==null){
      navlili.style.display="none";
    }
  });
});














   })
