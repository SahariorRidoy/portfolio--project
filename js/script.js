const one=document.getElementById('one')
const two=document.getElementById('two')
const four=document.getElementById('four')

const closeBtn=document.getElementById('close-button')
const portfolioPart=document.getElementById('portfolio_part');
portfolioPart.addEventListener('click',function(){
  one.style.display='none'
  four.style.display='block'
  two.style.display='none'
})

four.addEventListener('click',function(){
  one.style.display='none'
  four.style.display='none'
  two.style.display='block'
})
closeBtn.addEventListener('click',function(){
  one.style.display='block'
  four.style.display='none'
  two.style.display='none'
})
















// let porffolio_first_click = document.getElementById("portfolio_part")
// let porffolio_onscreen = document.getElementById("portfolio_click")
// let portfolio_main_cross = document.getElementById("cross_portfiloi")
// let porffolio_secound_click = document.querySelector(".designer_box")
// let porffolio_Third_click = document.querySelector(".portfolio_main")
// let footerHide=document.getElementById('footer')

// porffolio_first_click.addEventListener("click", function() {
//     porffolio_secound_click.style.opacity = "1";
//     porffolio_secound_click.style.visibility = "visible";
//     // porffolio_onscreen.style.opacity = "0";
//     porffolio_onscreen.style.visibility = "hidden";
//     footerHide.style.visibility='hidden'
// })
// porffolio_secound_click.addEventListener("click", function() {
//     porffolio_Third_click.style.top = "0";
//     porffolio_first_click.style.zIndex = "1001";
    
// })
// portfolio_main_cross.addEventListener("click", function() {
//     porffolio_secound_click.style.opacity = "0";
//     porffolio_secound_click.style.visibility = "hidden";
//     porffolio_Third_click.style.top = "1000%";
//     porffolio_onscreen.style.opacity = "1";
//     porffolio_onscreen.style.visibility = "hidden";
//     porffolio_first_click.style.zIndex = "999";

    
// })


// // Get the button:
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
