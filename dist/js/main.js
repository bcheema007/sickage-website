// Sticky menu background
window.addEventListener('scroll', function() {
  if(window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
// If any link in the navbar is clicked, then run the function.
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        // Subtracting 100 helps to keep navbar from covering information when the scroll occurs.
        scrollTop: $(hash).offset().top - 70
      },
      // Speed at which scroll occurs
      800
    );
  }
});