const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});


const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content');

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });


    btns[manual].classList.add("active");

    slides[manual].classList.add("active");

    contents[manual].classList.add("active");

}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
})






window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});



const navLinks = document.querySelectorAll('#navlinks');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const section = document.querySelector(link.getAttribute('href'));
    const sectionTop = section.offsetTop;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  });
});

// for slowmo or smoothness

const galleryVideo = document.querySelector('.gallery-video');
galleryVideo.playbackRate = 0.8;

