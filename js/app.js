document.addEventListener("DOMContentLoaded", function(){

 const liParagraph = [...document.querySelectorAll('li')];
 const hiddennParagraph = [...document.querySelectorAll('.block__image__paragraph')];
 for(var i=0; i<liParagraph.length; i++ ){
   liParagraph[i].addEventListener("mouseover", function (event){
     this.nextElementSibling.classList.remove('block__image__paragraph');
   })
 }
 for(var i=0; i<liParagraph.length; i++ ){
   liParagraph[i].addEventListener("mouseout", function (event){
     this.nextElementSibling.classList.toggle('block__image__paragraph');
   })
 }


  });
