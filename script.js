// AI-generated code starts here
// This script adds small interactive behaviors for the Athletico Paranaense page.
// Student prompt: Toggle a player's short bio when clicking the player button

// Show a greeting in the console so students know the script loaded
console.log("Athletico page script loaded");

// Fill the current year in the footer for a small dynamic touch
document.addEventListener("DOMContentLoaded", function () {
  // Find the element with id="year" and put the current year inside it
  var yearEl = document.querySelector("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Add click handlers to each player button to show/hide the bio
  // We toggle an "open" class instead of swapping display:none so CSS can animate it
  var buttons = document.querySelectorAll(".player-btn");
  var bios = document.querySelectorAll(".player-bio");

  // Initialize ARIA attributes for accessibility
  for (var i = 0; i < bios.length; i++) {
    bios[i].setAttribute("aria-hidden", "true");
  }

  for (var j = 0; j < buttons.length; j++) {
    var b = buttons[j];
    b.setAttribute("aria-expanded", "false");
    (function (btn) {
      btn.addEventListener("click", function (event) {
        var bio = btn.nextElementSibling;
        if (!bio) return;

        var isOpen = bio.classList.contains("open");
        if (isOpen) {
          bio.classList.remove("open");
          bio.setAttribute("aria-hidden", "true");
          btn.setAttribute("aria-expanded", "false");
        } else {
          bio.classList.add("open");
          bio.setAttribute("aria-hidden", "false");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    })(b);
  }
});

// AI-generated code ends here
