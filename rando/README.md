# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Un premier composant

Crée un composant Entete qui affiche un titre et une phrase de présentation. Rien de dynamique, juste du JSX.

Affiche-le depuis App.

Les trois pièges de la semaine 10, à vérifier dès maintenant :

    className et non class
    Un composant commence par une majuscule
    Le JSX ne renvoie qu'un seul élément racine

3 — Une carte, avec des props

Crée CarteRando, qui reçoit une randonnée et affiche son nom, sa difficulté, sa durée et son dénivelé.

Place randonnees.json dans src/ et importe-le :

import randonnees from './randonnees.json';

Affiche d'abord une seule carte, en passant randonnees[0]. Vérifie que ça marche avant d'aller plus loin.

    La question à te poser : qu'est-ce que ce composant a besoin de savoir pour faire son travail ? Rien de plus que la randonnée qu'on lui donne.

4 — La liste

Crée ListeRandos, qui reçoit le tableau complet en props et affiche une CarteRando par randonnée.

C'est ici qu'intervient .map() — et la key.

Ta hiérarchie ressemble maintenant à ça :

App
├── Entete
└── ListeRandos          ← reçoit le tableau
    └── CarteRando       ← reçoit une randonnée

5 — Un affichage conditionnel

Dans CarteRando, affiche une mention « Balisée » uniquement si balisee vaut true.

Trois randonnées sur douze ne le sont pas : vérifie que la mention n'apparaît que sur les bonnes.
6 — Un quatrième composant

Sors la difficulté dans son propre composant, EtiquetteDifficulte, qui reçoit la difficulté en props et l'affiche.

C'est un composant minuscule, et c'est volontaire : un composant n'a pas besoin d'être gros pour être utile.
Bonus

Si tu as fini et que tu veux aller plus loin :

    Un compteur « 12 randonnées » dans l'en-tête
    Un style différent selon la difficulté
    Un useState avec des boutons pour filtrer par difficulté

Le troisième bonus est celui qui se rapproche le plus de mardi. Mais ne le commence pas si les six étapes ne sont pas solides.
Les questions de révision

Dans un fichier notes.md, réponds avec tes mots :

    Qu'est-ce qu'une prop ? D'où vient-elle, et qui décide de sa valeur ?
    Pourquoi React a besoin d'une key sur les éléments d'une liste ?
    EtiquetteDifficulte est tout petit. Qu'est-ce qu'on gagne à en faire un composant ?
    Pourquoi className et pas class ?
    En une phrase : qu'est-ce qui te revient facilement, et qu'est-ce que tu avais oublié ?

Rendu

Le lien de ton dépôt GitHub, contenant le projet et ton notes.md.

⚠️ Vérifie que node_modules n'est pas versionné.
Vérifie avant de rendre

    [ ] Le projet a été créé de zéro, par toi
    [ ] Les 12 randonnées s'affichent
    [ ] Quatre composants : Entete, ListeRandos, CarteRando, EtiquetteDifficulte
    [ ] Chacun reçoit ce dont il a besoin en props, rien de plus
    [ ] La mention « Balisée » n'apparaît que sur les randonnées balisées
    [ ] Aucun avertissement key dans la console
    [ ] notes.md répond aux cinq questions

	