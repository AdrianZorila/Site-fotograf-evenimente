fetch("preturi.json")
  .then((response) => response.json())
  .then((data) => {
    const listaPreturi = document.getElementById("lista-preturi");
    data.produse.forEach((produs) => {
      const li = document.createElement("li");
      li.textContent = `${produs.nume}: ${produs.pret} RON`;
      listaPreturi.appendChild(li);
    });
  })
  .catch((error) => console.error("Eroare la încărcarea JSON:", error));

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}
