// Close Menu Overlay
function closeNav() {
  document.getElementById('nav-toggle').checked = false;
}

// Hide and show menu on scroll
// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   const currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById('navbar').style.top = '0';
//   } else {
//     document.getElementById('navbar').style.top = '-50px';
//   }
//   prevScrollpos = currentScrollPos;
// };

// Hide nav on scroll
window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    document.querySelector("#navbar").style.opacity = 0;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

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
