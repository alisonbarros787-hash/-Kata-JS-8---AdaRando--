import './App.css'
import { useState, useEffect } from 'react'
import CarteRando from './CarteRando'


// new URL(..., import.meta.url) demande à Vite de générer une URL
// valide vers ce fichier, même s'il est dans src/.
const urlRandonnees = new URL('./randonnees.json', import.meta.url)

// "function App()" : une seule syntaxe de déclaration de fonction,
// pas de mélange avec "const App() {}".
function App() {
  // State qui contiendra le tableau des randonnées une fois chargées.
  // Valeur initiale : un tableau vide, pour que .map() ne plante pas
  // avant que les données arrivent.
  const [randonnees, setRandonnees] = useState([])

  // State qui indique si le chargement est en cours.
  // useState(true) : on démarre avec "true" car au tout début,
  // le fetch n'a pas encore répondu.
  const [chargement, setChargement] = useState(true)

  // State qui contiendra un message d'erreur si le fetch échoue.
  // null = pas d'erreur pour l'instant.
  const [erreur, setErreur] = useState(null)

  // Un seul useEffect qui charge les données au montage du composant.
  // Le tableau de dépendances vide [] veut dire : "exécute une seule
  // fois, quand le composant apparaît à l'écran".
  useEffect(() => {
    // "ignore" sert à empêcher setState de s'exécuter si le composant
    // a été démonté (retiré de l'écran) avant que le fetch ne se
    // termine. Sans ça, React peut avertir d'un risque de "setState
    // sur un composant qui n'existe plus".
    let ignore = false

    // Fonction déclarée ICI, à l'intérieur du useEffect, pour que
    // "ignore" soit accessible directement (closure), sans avoir à
    // la passer en paramètre ni à la gérer en dehors de l'effet.
    const chargerDonnees = async () => {
      try {
        const reponse = await fetch(urlRandonnees)

        // reponse.ok vaut false si le serveur a répondu avec un code
        // d'erreur (404, 500...). fetch() ne rejette PAS automatiquement
        // dans ce cas, donc il faut vérifier ok soi-même.
        if (!reponse.ok) {
          throw new Error(`Erreur HTTP : ${reponse.status}`)
        }

        const data = await reponse.json()

        // ⚠️ À ADAPTER selon la vraie structure de ton JSON :
        // - si ton fichier est un tableau direct [ {...}, {...} ],
        //   garde : setRandonnees(data)
        // - si ton fichier est un objet { "results": [...] },
        //   utilise : setRandonnees(data.results ?? [])

        // On ne met à jour le state que si le composant est encore
        // affiché (ignore vaut toujours false à ce moment-là).
        if (!ignore) {
          setRandonnees(data)
        }
      } catch (e) {
        // Si le fetch échoue (réseau coupé, fichier introuvable,
        // JSON invalide...), on récupère le message d'erreur ici.
        if (!ignore) {
          setErreur(e.message)
        }
      } finally {
        // finally s'exécute toujours, que le try ait réussi ou échoué.
        // On arrête le "chargement" dans les deux cas, sauf si le
        // composant a déjà été démonté entre-temps.
        if (!ignore) {
          setChargement(false)
        }
      }
    }

    chargerDonnees()

    // Fonction de "nettoyage" : React l'exécute automatiquement quand
    // le composant est démonté (ou avant que l'effet ne se relance,
    // si le tableau de dépendances n'était pas vide). On y passe
    // "ignore" à true pour bloquer tout setState tardif.
    return () => {
      ignore = true
    }
  }, [])

  // Affichage conditionnel : tant que chargement vaut true,
  // on montre un message au lieu de la liste (qui serait vide).
  if (chargement) {
    return <p>Chargement des randonnées...</p>
  }

  // Si une erreur a été capturée, on l'affiche au lieu de la liste.
  if (erreur) {
    return <p>Erreur : {erreur}</p>
  }

  return (
    <section>
      {randonnees.map((rando) => (
        // key doit être unique pour CHAQUE élément de la liste.
        // On combine plusieurs champs pour limiter le risque de
        // doublon (mais un vrai "id" dans le JSON serait préférable).
        <CarteRando
          key={`${rando.nom}-${rando.difficulte}-${rando.denivele_m}-${rando.region}-${rando.balisee}`}
          // On passe "rando" (l'élément courant de la boucle),
          // pas "randonnees" (le tableau entier) !
          randonnee={rando}
        />
      ))}
    </section>
  )
}

export default App
