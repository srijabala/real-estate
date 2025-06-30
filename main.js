const hearts = document.querySelectorAll('.fav-icon');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('fa-solid');   // fills the heart
    heart.classList.toggle('fa-regular'); // un-fills the heart
    heart.classList.toggle('active');     
  });
});

// search in property
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".property-card");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector(".property-title").textContent.toLowerCase();
      const location = card.querySelector(".property-location").textContent.toLowerCase();

      if (title.includes(searchTerm) || location.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // for icon
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
  });

