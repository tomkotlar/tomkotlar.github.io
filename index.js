const overlay = document.querySelector('#overlay');
const closeMenu = document.querySelector('#close-menu');

document.querySelector('#open-menu').addEventListener('click', function() {
    overlay.classList.add('show-menu');
});
document.querySelector('#close-menu').addEventListener('click', function() {
    overlay.classList.remove('show-menu');
});


// change targeting the elements to querry selector and create functions