// Mobile Menu Toggle
const menuButton = document.querySelector('#menu-button');
const navList = document.querySelector('header nav ul');

if (menuButton && navList) {
    menuButton.addEventListener('click', () => {
      navList.classList.toggle('hide');
    });
}

// Handle window resize for menu
function handleResize() {
  if (!navList) return;
  if (window.innerWidth > 1000) {
    navList.classList.remove('hide');
  } else {
    // Only hide if it's currently shown
    if (!navList.classList.contains('hide')) {
        navList.classList.add('hide');
    }
  }
}
window.addEventListener('resize', handleResize);
if (navList) {
    handleResize(); // Initial check
}

// Image Viewer

// Create viewer HTML
function viewerTemplate(picSrc, altText) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${picSrc}" alt="${altText}">
    </div>`;
}

// Close the viewer
function closeViewer() {
  const viewerElement = document.querySelector('.viewer');
  if (viewerElement) {
    viewerElement.remove();
  }
}

// Handle clicks in the gallery
function viewHandler(event) {
  // Check if the clicked item is an image
  if (event.target.tagName === 'IMG') {
    const clickedImage = event.target;
    const smallImageSrc = clickedImage.getAttribute('src');
    const altText = clickedImage.getAttribute('alt');

    // Build full image path (requires 'imagename-full.jpeg' files)
    const srcParts = smallImageSrc.split('-');
    // IMPORTANT: Assumes your full images are named like 'norris-full.jpeg'
    const fullImageSrc = `${srcParts[0]}-full.jpeg`;

    // Add viewer to page
    const viewerHTML = viewerTemplate(fullImageSrc, altText);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);

    // Add listener to the new close button
    const closeBtn = document.querySelector('.viewer .close-viewer');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeViewer);
    }
  }
}

// Listen for clicks in the gallery section
const galleryElement = document.querySelector('.gallery');
if (galleryElement) {
    galleryElement.addEventListener('click', viewHandler);
}