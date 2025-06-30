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

  // for hamburger
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
  });


  // Open modal buttons
  const rentBtn = document.querySelector('.btn.rent');
  const sellBtn = document.querySelector('.btn.sell');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.close-btn');

  // Show modal when Rent or Sell is clicked
  if (rentBtn) {
    rentBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }

  if (sellBtn) {
    sellBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Optional: Click outside to close
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });



