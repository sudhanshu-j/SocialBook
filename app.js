// Get all menu items with the class "menu-item"
const menuItem = document.querySelectorAll(".menu-item");

// Function to remove the "active" class from all menu items
const changeActive = () => {
  // Loop through each menu item and remove the "active" class
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

// Add an event listener to each menu item
menuItem.forEach((item) => {
  // When a menu item is clicked, run the following code
  item.addEventListener("click", () => {
    // Remove the "active" class from all menu items
    changeActive();

    // Add the "active" class to the clicked menu item
    item.classList.add("active");

    // Check if the clicked menu item has an ID of "notification"
    if (item.id != "notification") {
      // If it's not the notification menu item, hide the notification popup
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      // If it's the notification menu item, show the notification popup
      document.querySelector(".notification-popup").style.display = "block";

      // Hide the notification count
      document.querySelector(
        "#notification .notification-count"
      ).style.display = "none";
    }
  });
});

// Get the message notification element
const messageNotification = document.querySelector("#msg-notification");

// Get the messages element
const messages = document.querySelector(".messages");

// Add an event listener to the message notification element
messageNotification.addEventListener("click", () => {
  // Add a box shadow to the messages element
  messages.style.boxShadow = "0 0 1rem var(--primary-color)";

  // Hide the message count
  messageNotification.querySelector(".notification-count").style.display =
    "none";

  // After 3 seconds, remove the box shadow from the messages element
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 3000);
});

// ===================== Theme Settings Modal Logic ===================== //

// Get the theme button element
const themeBtn = document.querySelector("#theme");

// Get the theme settings element
const themeSettings = document.querySelector(".custom-theme");

// Get all font size elements
const allFontSizes = document.querySelectorAll(".choose-size span");

// Get the HTML root element
const htmlRoot = document.querySelector(":root");

// Function to open the theme settings modal
const openThemeSettings = () => {
  // Show the theme settings modal
  themeSettings.style.display = "grid";
};

// Function to close the theme settings modal
const closeThemeSettings = (e) => {
  // Check if the clicked element is the theme settings modal
  if (e.target.classList.contains("custom-theme")) {
    // If it is, hide the theme settings modal
    themeSettings.style.display = "none";
  }
};

// ===================== Font Size Modal Logic ===================== //

// Remove active class from font size elements
const removeSizeActive = () => {
  // Loop through each font size element and remove the "active" class
  allFontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

// Add an event listener to each font size element
allFontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    // Remove the "active" class from all font size elements
    removeSizeActive();

    let fontSize;

    // Toggle the "active" class on the clicked font size element
    size.classList.toggle("active");

    // Set the font size based on the clicked font size element
    if (size.classList.contains("f-size-1")) {
      fontSize = "10px";
      htmlRoot.style.setProperty("--top-left-sticky", "5.4rem");
      htmlRoot.style.setProperty("--top-right-sticky", "5.4rem");
    } else if (size.classList.contains("f-size-2")) {
      fontSize = "13px";
      htmlRoot.style.setProperty("--top-left-sticky", "5.4rem");
      htmlRoot.style.setProperty("--top-right-sticky", "-7rem");
    } else if (size.classList.contains("f-size-3")) {
      fontSize = "16px";
      htmlRoot.style.setProperty("--top-left-sticky", "-2rem");
      htmlRoot.style.setProperty("--top-right-sticky", "-17rem");
    } else if (size.classList.contains("f-size-4")) {
      fontSize = "19px";
      htmlRoot.style.setProperty("--top-left-sticky", "-5rem");
      htmlRoot.style.setProperty("--top-right-sticky", "-25rem");
    } else if (size.classList.contains("f-size-5")) {
      fontSize = "22px";
      htmlRoot.style.setProperty("--top-left-sticky", "-12rem");
      htmlRoot.style.setProperty("--top-right-sticky", "-35rem");
    }

    // Change the font size of HTML elements
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// ===================== Color Modal Logic ===================== //

// Get the color picker element
// Select all the color picker elements inside the ".choose-color" container
const colorPicker = document.querySelectorAll(".choose-color span");

// Function to remove the "active" class from all color picker elements
const removeColorActive = () => {
  colorPicker.forEach((color) => {
    color.classList.remove("active"); // Remove 'active' class from each element
  });
};

// Iterate over each color picker element to add a click event listener
colorPicker.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue; // Declare a variable to store the primary color hue

    removeColorActive(); // Remove 'active' class from all color pickers before adding it to the clicked one

    // Check which color element was clicked and set the primaryHue accordingly
    if (color.classList.contains("color-1")) {
      primaryHue = 252; // Blue
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52; // Yellow-green
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352; // Pinkish-red
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152; // Green
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202; // Light-blue
    }

    // Add 'active' class to the clicked color element
    color.classList.add("active");

    // Set the CSS custom property '--primary-color-hue' to the selected hue
    htmlRoot.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// ======================= Background Color Logic ======================= //

// Select the background color picker elements
const bg1 = document.querySelector(".choose-bg .bg-1");
const bg2 = document.querySelector(".choose-bg .bg-2");
const bg3 = document.querySelector(".choose-bg .bg-3");

// Variables to store the lightness values for different backgrounds
let lightLightness;
let whiteLightness;
let darkLightness;

// Function to apply the background color changes by updating CSS variables
const changeBackgroundColor = () => {
  htmlRoot.style.setProperty("--light-lightness", lightLightness);
  htmlRoot.style.setProperty("--white-lightness", whiteLightness);
  htmlRoot.style.setProperty("--dark-lightness", darkLightness);
};

// Event listener for bg1 button click
bg1.addEventListener("click", () => {
  // Add 'active' class to bg1 and remove it from bg2 and bg3
  bg1.classList.add("active");
  bg2.classList.remove("active");
  bg3.classList.remove("active");

  // Reload the page to reset any custom changes (background reset to default)
  window.location.reload();
});

// Event listener for bg2 button click
bg2.addEventListener("click", () => {
  // Set custom lightness values for bg2
  lightLightness = "15%"; // Slightly darker light areas
  whiteLightness = "20%"; // Off-white areas
  darkLightness = "95%"; // Almost black

  // Add 'active' class to bg2 and remove it from others
  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");

  // Apply the background color changes using the function
  changeBackgroundColor();
});

// Event listener for bg3 button click
bg3.addEventListener("click", () => {
  // Set custom lightness values for bg3 (darker theme)
  lightLightness = "0%"; // Completely dark light areas
  whiteLightness = "10%"; // Dim white areas
  darkLightness = "95%"; // Almost black

  // Add 'active' class to bg3 and remove it from others
  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");

  // Apply the background color changes
  changeBackgroundColor();
});

// ===================== Theme Settings Modal Logic ===================== //

// Event listener to open the theme settings modal when the theme button is clicked
themeBtn.addEventListener("click", openThemeSettings);

// Event listener to close the theme settings modal when clicked outside the modal
themeSettings.addEventListener("click", closeThemeSettings);
