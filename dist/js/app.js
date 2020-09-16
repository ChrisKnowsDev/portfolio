// Close Menu Overlay
function closeNav() {
  document.getElementById("nav-toggle").checked = false;
}

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const { hash } = this;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
