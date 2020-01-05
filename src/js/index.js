// Navbar Scrolling
const navbar = document.getElementById("navbar");

window.onscroll = function() {
  "use strict";
  if (this.scrollY <= 10) {
      navbar.classList.remove("navbar-colored");
  } else {
      navbar.classList.add("navbar-colored");
  }
};
