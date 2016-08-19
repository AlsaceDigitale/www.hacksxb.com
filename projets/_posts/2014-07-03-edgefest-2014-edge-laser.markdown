---
layout: post
title:  "EdgeFest 2014 : Edge Laser"
date:   2016-08-09 09:22:48 +0200
description: "Lors du festival EdgeFest de 2014, les membres de la communauté HackSXB ont conçu des mini-jeux projetés pour l'occasion sur la façade de la médiathèque André Malraux avec un projecteur laser."
---
Lors du festival EdgeFest de 2014, les membres de la communauté HackSXB ont conçu des mini-jeux projetés pour l'occasion sur la façade de la médiathèque André Malraux avec un projecteur laser.

### Concept

Le principe de cet évènement est de s'approprier la presqu'île en la "hackant" à notre manière. Le but est de montrer l'impact d'Alsace Digitale et de sa communauté sur l'îlot Malraux.

Après une étude approfondie qui nous a fait abandonner une première version à base de LEDs, nous avons prévu de permettre de jouer à des jeux vidéos sur la médiathèque.

### Installation physique

L'installation est constituée de 3 éléments de base :

* Des manettes de jeu sur le quai Jeanne Helbling (manettes de XBOX)
* Un projecteur Laser et un PC le contrôlant à La Plage
* La surface de projection constituée par la médiathèque


<img src="{{ site.url }}/assets/img/projet-edgelaser-installation.jpg" style="margin: 20px auto;" alt="installation">

### Contributeurs

C'est là où ça devient marrant : tout le monde peut contribuer !

La joyeuse équipe du HackSXB a dévelopé pour vous une API faisant abstraction des contraintes matérielles. Vous allez pouvoir, dans la moiteur de votre appartement (où La Plage lors des soirées dédiées), développer un jeu qui s'affichera sur la médiathèque.

Vous avez "simplement" à développer la boucle principale de votre jeu, c'est à dire analyser les entrées au clavier (ou manette) et décider quoi dessiner.

Les implémentations de l'API sont les suivantes :

* PHP
* Python

Pour commencer à développer votre jeu dans le simulateur, clonez le dépôt Github suivant : https://github.com/morgan-linux/edge-laser-simulator.

Ce repo Git contient aussi une implémentation de référence en PHP de client de l'API. Bientôt la suite !

### API

Normalement vous n'avez pas besoin de lire ce document à moins de vouloir implémenter l'API dans un nouveau langage. Edge Laser Control - Protocole d'affichage