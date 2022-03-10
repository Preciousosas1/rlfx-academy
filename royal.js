





 var angle = 0;
 function galleryspin(sign) { 
 spinner = document.querySelector("#spinner");
 if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
 spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
 }





//   on scroll

//  $(document).ready(function () {
//   let v = $(".container");
//   console.log(v);
  
//   $(".contain").on("scroll", function (e) {
//     maxScrollLeft = e.currentTarget.scrollWidth - e.currentTarget.clientWidth;
//     if(e.currentTarget.scrolldown >= maxScrolldown){
//       $('add').css('background', 'black')
//     }else{
//       $('.add').css('background', 'black')
//     }
//             });
  
// });
