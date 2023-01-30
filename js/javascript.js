function conversie() {
  let  meters = document.getElementById('meters').value
  let  feet = meters * 3.28084
  document.getElementById('feet').value = feet.toString();
}
const boeken = new Map();
boeken.set('JavaScript', {
  uitgever: 'Boom Uitgevers',
  taal: 'Nederlands',
  prijs: 30.00
});
boeken.set('Webdesign', {
  uitgever: 'Boom Uitgevers',
  taal: 'Nederlands',
  prijs: 40.00
});
let boekenlijst = "";
boeken.forEach(function (key, val){
  boekenlijst += val + " " + key.uitgever + " " + key.prijs + "<br>";
})
document.getElementById("boeken").innerHTML = boekenlijst;

const films = new Map();
films.set('Films', {
  uitgever: 'Smile',
  taal: 'EN',
  prijs: 40.00
});
films.set('Series ', {
  uitgever: 'The Blacklist',
  taal: 'EN',
  prijs: 50.00
});
let favorietefilms = "";
films.forEach(function (key, val){
  favorietefilms += val + " " + key.uitgever + " " + key.prijs + "<br>";
})
document.getElementById("films").innerHTML = favorietefilms;
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}