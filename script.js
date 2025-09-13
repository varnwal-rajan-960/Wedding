
function toggleHamburger(element) {
  const hamburger = element.querySelector('.hamburger-animated');
  hamburger.classList.toggle('open');

  const isHamburgerVisible = $('.navbar-toggler').is(':visible');
  const isScrolledLessThan50 = $(document).scrollTop() < 50;

  // Check if menu is now open (after toggle)
  const isMenuOpen = hamburger.classList.contains('open');

  if (isHamburgerVisible && isScrolledLessThan50 && isMenuOpen) {
      $('.mainNav').addClass('hamburgerclicked');
  } else {
      $('.mainNav').removeClass('hamburgerclicked');
  }
}

$(document).ready(function () {

  // 1. AOS Initialization
  AOS.init({
      duration: 1000,
      once: true,
  });

  // 2. Navbar Shrink on Scroll
  $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
          $('.mainNav').addClass('scrolled');
      } else {
          $('.mainNav').removeClass('scrolled');
      }
  });

  // 3. Smooth Scrolling for Nav Links
  $('.nav-link').on('click', function (event) {
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top - 70 // Adjust for fixed navbar height
          }, 800, function () {
              // window.location.hash = hash; // This line can be distracting
          });
      }
  });

  // 4. Countdown Timer
  // Set the date we're counting down to
  var countDownDate = new Date("Oct 25, 2025 14:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the respective elements
      $('#days').html(days);
      $('#hours').html(hours);
      $('#minutes').html(minutes);
      $('#seconds').html(seconds);

      // If the count down is finished, write some text
      if (distance < 0) {
          clearInterval(x);
          $('#countdown').html("<h2>The Wedding Day is Here!</h2>");
      }
  }, 1000);

  // 5. Wedding Party Slider (Swiper JS)
  $(function () {
      $('.wedding-party-slider').each(function () {
          new Swiper(this, {
              loop: true,
              slidesPerView: 1,
              spaceBetween: 30,
              pagination: {
                  el: $(this).find('.swiper-pagination')[0],
                  clickable: true
              },
              breakpoints: {
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 40 },
                  1024: { slidesPerView: 4, spaceBetween: 50 }
              }
          });
      });
  });

  // 6. Lightbox2 Initialization
  if (typeof lightbox !== "undefined") {
      lightbox.option({
          resizeDuration: 200,
          wrapAround: true,
          disableScrolling: true
      });
  }
});

window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  const body = document.body;
  setTimeout(() => {
      loader.classList.add('loader-hidden');
      body.classList.remove('loading');

  }, 2500);
});