window.onscroll = function() {scrollFunction()};
 
function scrollFunction(x) {
  
  if (document.body.scrollTop > 53 || document.documentElement.scrollTop > 53) {
    document.getElementById("header__bottom").style.padding = "0.3rem 0rem";
    // document.getElementById("navBar").style.padding = "0rem 0rem";
    document.getElementById("header__bottom").style.top = "0px";
  }else {
    document.getElementById("header__bottom").style.padding = "1rem 0.3rem";
   
    document.getElementById("header__bottom").style.top = "53px";
  }

}




