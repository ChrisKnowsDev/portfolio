// Close Menu Overlay
function closeNav() {
  document.getElementById('nav-toggle').checked = false;
}

// // Sticky Menu
// window.addEventListener("scroll", function() {
//   if (window.scrollY > 150) {
//     document.querySelector("#navbar").style.backgroundColor = "#fff";
//     document.querySelector("#navbar").style.color = "#333";
//     let navLinks = document.querySelectorAll("a");
//     navLinks.forEach(function(link) {
//       link.style.color = "#333";
//     });
//   } else {
//     document.querySelector("#navbar").style.backgroundColor = "transparent";
//     document.querySelector("#navbar").style.color = "#fff";
//     let navLinks = document.querySelectorAll("a");
//     navLinks.forEach(function(link) {
//       link.style.color = "#fff";
//     });
//   }
// });

// Close Menu Overlay
function closeNav() {
  document.getElementById("navi-toggle").checked = false;
}

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const { hash } = this;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
