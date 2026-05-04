window.onload = function() {
  var hamburger = document.getElementById("hamburger")
  var navLinks = document.getElementById("navLinks")
  
  document.addEventListener("click", function(event) {
  var nav = document.getElementById("navLinks")
  var hamburger = document.getElementById("hamburger")
  
  if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
    nav.classList.remove("open")
  }
})

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function() {
      navLinks.classList.toggle("open")
    })

    // Close menu when a link is clicked
    var links = navLinks.querySelectorAll("a")
    links.forEach(function(link) {
      link.addEventListener("click", function() {
        navLinks.classList.remove("open")
      })
    })
  }
}