const menuIcon = document.getElementById('menu-icon');
const menuContainer = document.querySelector('.menu-container');
const menuToggle = document.querySelector('.menu-toggle');

menuIcon.addEventListener('click', function(e) {
    e.stopPropagation(); 
    toggleMenu();
});

menuToggle.addEventListener('click', function() {
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const isMenuClicked = menuContainer.contains(e.target); 

    if (!isMenuClicked) {
        menuContainer.style.left = '-250px'; 
    }
});

function toggleMenu() {
    menuContainer.style.left = menuContainer.style.left === '0px' ? '-250px' : '0px'; 
}
