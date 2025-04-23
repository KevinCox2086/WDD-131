//mission.js

const themeSelector = document.querySelector('#theme');
const bodyElement = document.body;
const logoImage = document.querySelector('.logo');

const blueLogoPath = 'byui-logo_blue.webp';
const whiteLogoPath = 'byui-logo_white.png';

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        bodyElement.classList.add('dark');
        logoImage.src = whiteLogoPath;
        logoImage.alt = "BYUI logo (white)";
    } else {
        bodyElement.classList.remove('dark');
        logoImage.src = blueLogoPath;
        logoImage.alt = "BYUI logo";
    }
}

themeSelector.addEventListener('change', changeTheme);