import "./index.css";
import { Link } from "react-router-dom";
export function Main() {
  return (
    <main>
      <section className="rules">
        <h2> Regles </h2>
        <p> Bienvenue dans Smash Card ! 🎉 </p>
        <p>
          Le but du jeu est simple : trouve toutes les paires de cartes le plus
          rapidement possible.
        </p>
        <p>Voici les règles pour jouer :</p>
        <ul className="listrules">
          <li>Retourne les cartes une par une pour découvrir leur image.</li>
          <li>
            Trouve les paires identiques en mémorisant les emplacements des
            cartes.
          </li>
          <li>
            Dès que tu retrouves deux cartes identiques, elles restent visibles.
          </li>
          <li>Continue jusqu'à ce que toutes les paires soient découvertes.</li>
        </ul>
        <p>Fais de ton mieux pour terminer la partie en un minimum de temps.</p>
        <p>
          À toi de jouer et de montrer ta mémoire et ta rapidité ! Bonne chance
          ! 🃏⏱️
        </p>
      </section>

      <section className="button">
        <h2> Let's play </h2>
        <button type="button"> Choisissez une difficulté !</button>
        <Link className="falsebutton" to="/GamePage">
          Start the game !
        </Link>
      </section>
    </main>
  );
}
