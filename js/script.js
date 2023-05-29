// MENU BURGER

// Récupère le bouton de bascule et la liste de navigation
var toggleButton = document.getElementById('navbar-toggle');
var menuList = document.getElementById('navbar-menu');

// Ajoute un écouteur d'événement pour le clic sur le bouton de bascule
toggleButton.addEventListener('click', function() {
  // Ajoute ou supprime la classe "active" sur la liste de navigation
  menuList.classList.toggle('active');
});
