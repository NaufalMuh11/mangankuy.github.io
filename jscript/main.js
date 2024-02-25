// script.js
// alert("Welcome To Our Website");


//  SLIDER GAMBAR
const slider = document.getElementById("slider");
let currentIndex = 0;

function changeSlide(index) {
  currentIndex = index;
  updateSlider();
}

function updateSlider() {
  const translateValue = -currentIndex * 100 + "%";
  slider.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 4;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 4) % 4;
  updateSlider();
}
setInterval(nextSlide, 5000);


// SUBMIT FORM KE SPREADSHEET

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz2Lz6GQfpbveNa6DyeDJlDcPJfMShbCHjvWxDYgfRnVv2zdrb03yzusiUqp9E4HdTp/exec";
const form = document.forms["study-club-form"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('open-btn');
  const closeBtn = document.getElementById('close-btn');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');

  openBtn.addEventListener('click', function () {
    popup.classList.add('visible');
    overlay.style.display = 'block';
  });

  closeBtn.addEventListener('click', function () {
    popup.classList.remove('visible');
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function () {
    popup.classList.remove('visible');
    overlay.style.display = 'none';
  });
  document.addEventListener("click", function (event) {
    if (!popup.contains(event.target) && event.target !== openBtn) {
      closePopup();
    }
  });
});
