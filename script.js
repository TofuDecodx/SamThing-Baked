document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const menuButton = document.getElementById("menu-btn");
  const orderButton = document.getElementById("order-btn");
  const greetingPopup = document.getElementById("greeting-popup");
  const popupBtn = document.getElementById("popup-btn");
  const closePopup = document.getElementById("close-popup");
  const popupOverlay = document.getElementById("popup-overlay");

  function updateActiveNav(targetSection) {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      const targetNav = document.querySelector(`nav ul li a[href="${targetSection}"]`);
      if (targetNav) {
          targetNav.classList.add("active");
      }
  }

  navLinks.forEach((link) => {
      link.addEventListener("click", function () {
          updateActiveNav(this.getAttribute("href"));
      });
  });

  if (menuButton) {
      menuButton.addEventListener("click", function () {
          updateActiveNav("Menu.html#menu");
      });
  }

  if (orderButton) {
      orderButton.addEventListener("click", function () {
          updateActiveNav("contacts.html#contacts");
      });
  }

  // *Run popup only on the main page (index.html)*
  const currentPath = window.location.pathname;
  const isIndexPage = currentPath.endsWith("index.html") || currentPath === "/" || currentPath.endsWith("/");

  if (isIndexPage) {
      setTimeout(() => {
          greetingPopup.classList.add("show");
          popupOverlay.classList.add("show");
      }, 2000);
  }

  // Close popup function
  function closePopupFunc() {
      greetingPopup.classList.remove("show");
      popupOverlay.classList.remove("show");
  }

  // Close popup when clicking the button or 'X'
  popupBtn.addEventListener("click", function () {
      updateActiveNav("location.html"); // Highlight "Locations" in navbar
      closePopupFunc();
      setTimeout(() => {
          window.location.href = "location.html"; // Redirect to Locations after popup hides
      }, 100);
  });

  closePopup.addEventListener("click", closePopupFunc);

  // Close popup when clicking outside
  document.addEventListener("click", function (event) {
      if (!greetingPopup.contains(event.target) && event.target !== closePopup && event.target !== popupBtn) {
          closePopupFunc();
      }
  });
});
