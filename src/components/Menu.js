
const menuToggle = document.getElementById('menu-toggle'); 
const menu = document.querySelector('.menu');

// Abre e Fecha Menu
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open'); // Adiciona ou remove a classe 'open' para mostrar ou esconder o menu
});
