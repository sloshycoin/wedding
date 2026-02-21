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
  sendEmailButton.addEventListener("click", async () => {
    const name = document.getElementById("invitee-name").value;
    const guests = document.getElementById("guest-count").value;
    const allergies = document.getElementById("food-allergies").value;

    const response = await fetch("/.netlify/functions/mailer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, guests, allergies }),
    });

    if (response.ok) {
      alert("RSVP email sent successfully!");
    } else {
      alert("Failed to send RSVP email. Please try again later.");
    }

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

// Translation dictionary
const translations = {
  "You're Invited!": "¡Estás invitado!",
  "Invitation": "Invitación",
  "Please join us for our wedding celebration": "Únase a nosotros para nuestra celebración de boda",
  "Saturday, November 7th, 2026 at 5:00 PM": "Sábado, 7 de noviembre de 2026 a las 5:00 PM",
  "by August 1st, 2026": "antes del 1 de agosto de 2026",
  "Guest Information": "Información para Los Invitados",
  "Guest Info": "Información",
  "We are so excited to celebrate this special day with you! Here are some details to help you plan your visit:": "¡Estamos muy emocionados de celebrar este día tan especial contigo! Aquí hay algunos detalles para ayudarte a planificar tu visita:",
  "Dress Code:": "Código de Vestimenta:",
  "Jeans are welcome, ties are optional and wear your best dancing shoes.": "Los jeans son bienvenidos, las corbatas son opcionales y usa tus mejores zapatos para bailar.",
  "Parking:": "Estacionamiento:",
  "Free parking is available at the venue.": "Hay estacionamiento gratuito disponible en el lugar.",
  "Accommodations:": "Alojamiento:",
  "More information to come...": "Más información próximamente...",
  "Contact:": "Contacto:",
  "If you have any questions, feel free to reach out to us at:": "Si tienes alguna pregunta, no dudes en contactarnos en:",
  "Schedule of Events": "Horario de Eventos",
  "Schedule": "Horario",
  "Guest Arrival": "Llegada de Invitados",
  "Wedding Ceremony": "Ceremonia de Boda",
  "Dinner Reception": "Recepción de Cena",
  "First Dance & Wedding Events": "Primer Baile y Eventos de Boda",
  "Dancing & Celebration": "Baile y Celebración",
  "Gallery": "Galería",
  "Our Story": "Nuestra Historia",
  "Story": "Historia",
  "How We Met": "Cómo Nos Conocimos",
  "About Olivia": "Sobre Olivia",
  "About Brendan": "Sobre Brendan",
  "RSVP": "Confirmar",
  "Guest Name:": "Nombre del Invitado:",
  "Guest Count:": "Número de Invitados:",
  "Food Allergies:": "Alergias Alimentarias:",
  "Close": "Cerrar",
  "Send": "Enviar",
  "Brendan and Olivia met nearly seven years ago after signing up for a recreational adult volleyball league—and landing on the same team. After one season together, the next was cut short by the COVID pandemic, and they lost touch as the world slowed down. A couple of years later, when volleyball leagues finally opened back up, they reconnected by joining another league with friends. Before long, they were spending more time together both on and off the court.": "Brendan y Olivia se conocieron hace casi siete años después de inscribirse en una liga recreativa de voleibol para adultos y aterrizar en el mismo equipo. Después de una temporada juntos, la siguiente se interrumpió debido a la pandemia de COVID y perdieron el contacto a medida que el mundo se desaceleraba. Un par de años más tarde, cuando las ligas de voleibol finalmente volvieron a abrir, se reconectaron al unirse a otra liga con amigos. Antes de que se dieran cuenta, estaban pasando más tiempo juntos tanto dentro como fuera de la cancha.",
  "Brendan would say that their first date happened after a day of volleyball at Cheesman Park, when they went out for ramen. Olivia insists it was not a date—but either way, that evening marked the beginning of something special. Today, they live together in Denver and are excited to start the next chapter of their lives with their puppy (and princess), Marley, by their side.": "Brendan diría que su primera cita ocurrió después de un día de voleibol en Cheesman Park, cuando salieron a comer ramen. Olivia insiste en que no fue una cita, pero de cualquier manera, esa noche marcó el comienzo de algo especial. Hoy, viven juntos en Denver y están emocionados de comenzar el próximo capítulo de sus vidas con su cachorro (y princesa), Marley, a su lado.",
  "Olivia works in the heart of Denver as a Quality Assurance Manager for a private medical device production company. She is thoughtful, driven, and deeply values time spent with the people she loves. Outside of work, Olivia enjoys volleyball, brunch outings, and being with family. She brings warmth, balance, and care into every space she’s in—and is often the one making sure everyone feels included and looked after.": "Olivia trabaja en el corazón de Denver como Gerente de Aseguramiento de Calidad para una empresa de producción de dispositivos médicos privados. Es reflexiva, motivada y valora profundamente el tiempo que pasa con las personas que ama. Fuera del trabajo, a Olivia le gusta el voleibol, las salidas a brunch y estar con su familia. Aporta calidez, equilibrio y cuidado a cada espacio en el que se encuentra, y a menudo es la que se asegura de que todos se sientan incluidos y atendidos.",
  "Brendan works as a Software Developer and currently works from home. He’s curious, steady, and happiest when building, cooking, or planning the next trip. Outside of volleyball, Brendan enjoys experimenting in the kitchen and traveling whenever possible. He’s a natural problem-solver with a calm presence, and he brings a sense of humor and thoughtfulness to everything he does.": "Brendan trabaja como desarrollador de software y actualmente trabaja desde casa. Es curioso, constante y más feliz cuando construye, cocina o planea el próximo viaje. Fuera del voleibol, a Brendan le gusta experimentar en la cocina y viajar siempre que puede. Es un solucionador de problemas natural con una presencia tranquila, y aporta un sentido del humor y consideración a todo lo que hace.",
  "Together, they are excited to embark on this new journey and create a beautiful life filled with love, laughter, and adventure.": "Juntos, están emocionados de embarcarse en este nuevo viaje y crear una vida hermosa llena de amor, risas y aventuras."
};

// Add a toggle for translation
let isSpanish = false;

function toggleTranslation() {
  if (isSpanish) {
    translatePage('en');
    document.getElementById("translate-button").textContent = "Español";
  } else {
    translatePage('es');
    document.getElementById("translate-button").textContent = "English";
  }
  isSpanish = !isSpanish;
}

// Updated translation function to handle both directions and normalize text
function translatePage(language) {
  document.querySelectorAll("*").forEach((element) => {
    if (element.children.length === 0 && element.textContent.trim() !== "") {
      const text = element.textContent.trim().replace(/\s+/g, " "); // Normalize spaces
      if (language === 'es') {
        const translation = translations[text];
        if (translation) {
          element.textContent = translation;
        }
      } else if (language === 'en') {
        const originalText = Object.keys(translations).find(key => translations[key] === text);
        if (originalText) {
          element.textContent = originalText;
        }
      }
    }
  });
}

// Update event listener to toggle translation
document.getElementById("translate-button").addEventListener("click", toggleTranslation);