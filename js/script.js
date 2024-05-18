// Sayfayı aşağı kaydırdığınızda yukarı kaydıran buton gösterme işlevi
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}



// Yukarı kaydırma işlevi
function scrollToTop() {
   
    window.scrollTo({top:0,behavior:"smooth"})
   
}
//carousel
; $(document).ready(function () {
  var slideIndex = 0;

  showSlides();

  function showSlides() {
    var i;
    var slides = $(".carousel-item");
    for (i = 0; i < slides.length; i++) {
      $(slides[i]).hide();
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    $(slides[slideIndex - 1]).show();
    setTimeout(showSlides, 4000);
  }

  $('.prev').click(function () {
    slideIndex--;
    if (slideIndex < 1) { slideIndex = $(".carousel-item").length }
    showSlides();
  });

  $('.next').click(function () {
    slideIndex++;
    if (slideIndex > $(".carousel-item").length) { slideIndex = 1 }
    showSlides();
  });
});




//paragrafları büyütme
function boldText(paragraf) {
  paragraf.style.fontWeight = "bold";
}

function normalizeText(paragraf) {
  paragraf.style.fontWeight = "normal";
}

$(document).ready(function () {
  $('.burger').click(function () {
      $('.nav-links').slideToggle();
  });
});


//navbar
toggle.addEventListener('change', function () {
  if (toggle.checked) {
    menuIcon.textContent = '✖';
  } else {
    menuIcon.textContent = '☰';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('change', function () {
    if (toggle.checked) {
      navLinks.style.display = 'block'; // Menüyü görünür yap
    } else {
      navLinks.style.display = 'none'; // Menüyü gizle
    }
  });
});
 //yazar carouseli
 document.addEventListener("DOMContentLoaded", function() {
  const carouselContainer = document.querySelector(".carousel-container");
  const carousel = carouselContainer.querySelector(".carousel-yazarlar");
  const width = carousel.offsetWidth;
  let scrollAmount = 0;

  function scrollCarousel() {
    // Carousel konteynırını sağa doğru carousel genişliği kadar kaydırma işlemi yapılır
    scrollAmount += width;
    if (scrollAmount >= carousel.scrollWidth) {
      scrollAmount = 0;
    }
    carouselContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  // Carousel konteynırını her 2 saniyede bir otomatik olarak sağa kaydır
  setInterval(scrollCarousel, 2000);
});