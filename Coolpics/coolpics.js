// Get references to the button and the navigation list
const menuButton = document.querySelector('#menu-button');
const navList = document.querySelector('nav ul');

// Add event listener for the button click
menuButton.addEventListener('click', () => {
  // Toggle the 'hide' class on the navigation list
  navList.classList.toggle('hide');
});

// --- Add the following code ---

// Define the function to handle window resizing
function handleResize() {
  // Check the current width of the window
  if (window.innerWidth > 1000) {
    // If window is wider than 1000px, remove 'hide' class
    // This ensures the menu is visible in desktop view
    navList.classList.remove('hide');
  } else {
    // If window is 1000px or narrower, add 'hide' class
    // This resets the menu to hidden in mobile view on resize
    // Note: This will hide the menu even if it was open before resizing below 1000px
    navList.classList.add('hide');
  }
}

// Add an event listener to the window for the 'resize' event,
// calling handleResize whenever the window size changes.
window.addEventListener('resize', handleResize);

// Call handleResize once immediately when the script loads
// to set the correct initial state based on the starting window size.
handleResize();