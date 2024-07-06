// Hamburger menu

document.addEventListener("DOMContentLoaded", (event) => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Skill icons
  const skillIcons = {
    "fa-html5": "#E34F26",
    "fa-css3-alt": "#1572B6",
    "fa-js": "#F7DF1E",
    "fa-react": "#61DAFB",
    "fa-node-js": "#339933",
    "fa-python": "#3776AB",
    "fa-git-alt": "#F05032",
  };

  const skillItems = document.querySelectorAll(".skills li");
  skillItems.forEach((item) => {
    const icons = item.getAttribute("data-icon").split(",");

    item.addEventListener("mouseenter", (e) => {
      const modal = document.createElement("div");
      modal.className = "icon-modal";
      modal.innerHTML = icons
        .map((icon) => {
          const color = skillIcons[icon.split(" ")[1]] || "currentColor";
          return `<i class="${icon}" style="color: ${color};"></i>`;
        })
        .join("");

      document.body.appendChild(modal);

      const rect = item.getBoundingClientRect();
      modal.style.top = `${rect.top + window.scrollY - 50}px`;
      modal.style.left = `${
        rect.left + window.scrollX + rect.width / 2 - modal.offsetWidth / 2
      }px`;
    });

    item.addEventListener("mouseleave", () => {
      const modal = document.querySelector(".icon-modal");
      if (modal) {
        modal.remove();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  // Form submission
  const form = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);

    fetch(form.action, {
      method: form.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        displayMessage("Awesome! I will get back to you soon.", "success");
        form.reset();
      })
      .catch((error) => {
        displayMessage(
          "There was a problem with sending your message. Please try again.",
          "error"
        );
      });
  });

  function displayMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = "block";

    formMessage.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  }
});
