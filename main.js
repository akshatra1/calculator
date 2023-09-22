// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const input = document.querySelector(".input");
    const buttons = document.querySelectorAll(".button");
  
    // Add click event listener to all buttons
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const buttonText = button.textContent;
  
        // Handle different button clicks
        switch (buttonText) {
          case "=":
            try {
              // Evaluate the expression in the input field
              input.value = eval(input.value);
            } catch (error) {
              // Handle invalid expressions
              input.value = "Error";
            }
            break;
          case "C":
            // Clear the input field
            input.value = "";
            break;
          default:
            // Append the clicked button's text to the input field
            input.value += buttonText;
            break;
        }
      });
    });
  });
  