# WORK IN PROGRESS

# Cahier des charges

CAHIER DES CHARGES

Une navbar avec "Portfolio" à gauche, et à droite des liens vers les éléments de la page : A prpos, Parcours, Projet, Compétences, Contacct
En scrollant vers le bas, la navbar reste en haut puis disparait. En scrollant vers le haut depuis ailleurs de la page, elle réaparait en mode fixé au haut de l'écran, et redisparait si on scroll vers le bas


Une rubrique "Mon Parcours" avec une timeline verticale qui se déroule à mesure que l'on scroll vers le bas. Des évènements (carte avec un titre, du texte, peut être un bouton-lien en savoir plus vers un site externe, une icone qui s'affichce sur)

Une rubrique "Mes Projets" avec en haut un filtre contenant un radio button :
- Scolaire
- Personnel
- Professionnel
Chaque projet est représenté par une carte composé d'une image, puis en dessous d'un titre puis de texte explicatif, en dessous, une liste de technologies utilisées puis des boutons "En savoir plus" et [Lien vers le github] pour accéder au repo du projet

Une rubrique "Mes Compétences" contenant des cartes avec un titre style "Systèmes" ou "Langages de programmation" puis une liste de technos sous la forme image et nom de la techno en dessous.

Une rubrique "Contact" Contenant une liste de boutons vers des réseaux sociaux style linkedin, github...

# Run

1. Install docker

2. Run 

```bash
docker-compose up --build
```
