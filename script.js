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
  // We use simple querySelectorAll and a for loop so students can read it easily
  var buttons = document.querySelectorAll(".player-btn");
  for (var i = 0; i < buttons.length; i++) {
    // For each button, add a click event listener
    buttons[i].addEventListener("click", function (event) {
      // The clicked button is event.currentTarget
      var btn = event.currentTarget;
      // The bio is the nextElementSibling in the DOM we added in HTML
      var bio = btn.nextElementSibling;
      if (!bio) return; // nothing to do if no bio found

      // Toggle bio visibility by changing its CSS display property
      if (bio.style.display === "block") {
        bio.style.display = "none";
      } else {
        bio.style.display = "block";
      }
    });
  }
});

// AI-generated code ends here
