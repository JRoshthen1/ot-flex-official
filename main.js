//Open and close navmenu
document.getElementById("navbarButton",).onclick = function() {toggleNavMenu()};
function toggleNavMenu() {
  document.getElementById("navbarMenu").classList.toggle("openNavbarMenu");
}
//Close navmenu by clicking on bg
document.getElementById("navbarMenu").onclick = function() {toggleNavMenu()};
function toggleNavMenu() {
  document.getElementById("navbarMenu").classList.toggle("openNavbarMenu");
}