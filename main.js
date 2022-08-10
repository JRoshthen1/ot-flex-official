//Open and close navmenu
document.getElementById("navbarButton").onclick = function() {toggleNavMenu()};

function toggleNavMenu() {
  document.getElementById("navbarMenu").classList.toggle("openNavbarMenu");
  document.getElementById("burger1").classList.toggle("burgerLine1");
  document.getElementById("burger2").classList.toggle("burgerLine2");
  document.getElementById("burger3").classList.toggle("burgerLine3");
}
//Close navmenu by clicking on bg
document.getElementById("navbarMenu").onclick = function() {toggleNavMenu()};