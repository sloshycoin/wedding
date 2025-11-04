// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("rsvp-modal");
  const openModalButtons = document.querySelectorAll("#open-modal, #open-modal-2");
  const closeModalButtons = document.querySelectorAll("#close-modal, #close-modal-2");
  const sendEmailButton = document.getElementById("send-email");

  // Open modal
  openModalButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
  });

  // Close modal
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });

  // Send email
  sendEmailButton.addEventListener("click", () => {
    const name = document.getElementById("invitee-name").value;
    const guests = document.getElementById("guest-count").value;
    const allergies = document.getElementById("food-allergies").value;

    const mailtoLink = `mailto:your-email@example.com?subject=RSVP&body=Name: ${encodeURIComponent(
      name
    )}%0D%0AGuests: ${encodeURIComponent(guests)}%0D%0AFood Allergies: ${encodeURIComponent(
      allergies
    )}`;
    window.location.href = mailtoLink;

    modal.style.display = "none";
  });

  // Custom number input functionality
  const decrementButton = document.querySelector(".decrement");
  const incrementButton = document.querySelector(".increment");
  const numberInput = document.querySelector("#guest-count");

  decrementButton.addEventListener("click", () => {
    const currentValue = parseInt(numberInput.value) || 0;
    if (currentValue > 0) {
      numberInput.value = currentValue - 1;
    }
  });

  incrementButton.addEventListener("click", () => {
    const currentValue = parseInt(numberInput.value) || 0;
    numberInput.value = currentValue + 1;
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
// Carousel functionality
document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("carousel");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  // Array to hold image paths
  let images = [];
  let currentIndex = 0;

  // Fetch images from the public/gallery/ directory
  async function loadImages() {
    try {
      // Simulate fetching image paths (replace this with an API call or server-side logic if needed)
      images = [
        "public/gallery/picture01.png",
      ];

      // Display the first image
      if (images.length > 0) {
        displayImage(currentIndex);
      }
    } catch (error) {
      console.error("Error loading images:", error);
    }
  }

  // Display the image at the current index
  function displayImage(index) {
    galleryContainer.style.backgroundImage = `url('${images[index]}')`;
    galleryContainer.style.backgroundSize = "1080px";
    galleryContainer.style.backgroundPosition = "center";
    galleryContainer.style.backgroundRepeat = "no-repeat";
    galleryContainer.style.borderRadius = "4px";
  }

  // Navigate to the previous image
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage(currentIndex);
  });

  // Navigate to the next image
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage(currentIndex);
  });

  // Load images on page load
  loadImages();
});