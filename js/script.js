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
//Aşşağı kaydırma işlemi
function scrollToBottom() {
  window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
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
var toggle = document.getElementById('toggle');
var menuIcon = document.querySelector('.menu-icon');

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

//arkadan müzik başlatmak için konulacak butonlarım
function getAudioElement() {
  return document.getElementById('background-audio');
}


function playAudio() {
  const audio = getAudioElement();
  audio.play();
}


function pauseAudio() {
  const audio = getAudioElement();
  audio.pause();
}

function initializeEventListeners() {
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');

  playButton.addEventListener('click', playAudio);
  pauseButton.addEventListener('click', pauseAudio);
}


document.addEventListener('DOMContentLoaded', initializeEventListeners);
//liste için
$(document).ready(function(){
  // 1. Liste elemanlarına tıklandığında arka plan rengini değiştirme
  $(".book").click(function(){
    $(this).css("background-color", "yellow");
  });

  // 2. Liste elemanlarını gizleme
  $("#gizleButton").click(function(){
    $("#kitapListesi").hide();
  });

  // 3. Liste elemanlarını gösterme
  $("#gosterButton").click(function(){
    $("#kitapListesi").show();
  });
});