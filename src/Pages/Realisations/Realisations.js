import React, { useEffect, useState, useContext } from "react";
import resa from "../../img/resa.png";
import psychologue from "../../img/psychologue.png";
import welcome from "../../img/welcomepoitiers.png";
import cms from "../../img/nextjs.png";
import grid from "../../img/grid.png";
import carousel from "../../img/carousel.png";
import "./Realisation.css";
import { ThemeContext } from "../../Context/ThemeContext";
export default function Realisations(props) {
  const loader = document.querySelector(".loader");
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { fr, en } = useContext(ThemeContext);
  const setLoading = () => {
    setIsLoaded(true);
    props.hideLoader();
  };

  useEffect(() => {
    setLoading();
  }, []);
  return (
    <>
      {isLoaded ? (
        <div className="bg mt">
          <h2 className="title">
            {fr
              ? "Quelques réalisations sur le temps personnel"
              : "Selected work carried out during my personal time"}
          </h2>
          <br />
          <br />
          <div className="flex-wrap">
            <div>
              {fr ? (
                <>
                  <div>
                    <h2>AUTO FORMATION DOCKER</h2>
                  </div>
                  <div>
                    <h3>
                      Exemple de création d'un environnement docker - site de
                      réservation de rendez-vous - LARAVEL 8 - projet étudiant
                      de 2021
                    </h3>
                    <br />
                  </div>

                  <br />
                  <div>
                    <h4 className="small">
                      J'ai créé un docker de développement pour ce vieux site
                      (création d'un docker-compose avec un bind volume pour le
                      développement de nouvelles fonctionnalités, ajout de
                      PHPMyAdmin pour pouvoir vérifier que tout fonctionne bien
                      au niveau BDD, Dockerfile pour adapter l'image officielle
                      de Laravel en fonction des besoins du projet etc) -
                      Laravel / JS - Ajax - PHP - CSS / Tous les calendriers (FO
                      et BO) A l'époque es calendriers ont été codés à la main
                      en Javascript - il ne s'agit pas de plugins -
                    </h4>
                    <br />
                  </div>

                  <br />
                  <div className="align-center">
                    <a
                      className="link"
                      target="_blank"
                      href="https://github.com/Aline86/docker"
                    >
                      Voir le code d'un docker de développement
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3>AUTO FORMATION DOCKER</h3>
                  </div>

                  <br />
                  <div>
                    <h3>
                      {" "}
                      creation of a development docker environment - old
                      appointment reservation website in Laravel 8 -{" "}
                    </h3>
                  </div>

                  <br />
                  <div className="align-center">
                    <a
                      className="link"
                      target="_blank"
                      href="https://github.com/Aline86/docker"
                    >
                      See code for a development docker
                    </a>
                  </div>

                  <br />
                  <div>
                    <h4 className="small">
                      I created a development Docker setup for this legacy
                      website (including the creation of a Docker Compose file
                      with a bind volume for developing new features, adding
                      phpMyAdmin to check that everything works correctly at the
                      database level, and a Dockerfile to adapt the official
                      Laravel image to the project’s specific needs, etc.).
                      Technologies: Laravel / JavaScript – Ajax – PHP – CSS. All
                      calendars (front office and back office): at the time, the
                      calendars were hand-coded in JavaScript — they are not
                      plugins.
                    </h4>
                  </div>
                </>
              )}
            </div>
            <div>
              {fr ? (
                <>
                  <div>
                    <h2>MEMORY JAVA / JAVAFX</h2>
                  </div>
                  <div>
                    <h3>
                      Création d'un jeu de Memory en Java / JavaFX pour
                      pratiquer la POO et me remettre à niveau en Java - modèle
                      MVC actuellement
                    </h3>
                    <br />
                  </div>

                  <br />
                  <div>
                    <h4 className="small">
                      L'application est en cours de développement mais un
                      certain nombre de fonctionnalités ont déjà été devloppées
                      - voir le git.
                    </h4>
                    <br />
                    <div className="align-center">
                      <a
                        className="link"
                        href="https://github.com/Aline86/memory_java"
                      >
                        Voir le code du Mémory POO en Java / JavaFX / MVC
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3>AUTO FORMATION DOCKER</h3>
                  </div>

                  <br />
                  <div>
                    <h3>
                      {" "}
                      Creation of a Memory game in Java / JavaFX to practise
                      object-oriented programming and refresh my Java skills —
                      currently using the MVC pattern. -{" "}
                    </h3>
                  </div>

                  <br />
                  <div>
                    <h4 className="small">
                      The application is still under development, with several
                      features already implemented (see Git).
                    </h4>

                    <br />
                    <div className="align-center">
                      <a
                        className="link"
                        href="https://github.com/Aline86/memory_java"
                      >
                        View the Java / JavaFX / MVC OOP Memory game code
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div>
              <div data-aos="fade-left" data-aos-id="super-duper">
                <a
                  href="https://github.com/Aline86/memory_java"
                  target="_blank"
                >
                  <img
                    className="full_width"
                    alt="réservation rendez-vous"
                    src={resa}
                  />
                </a>
              </div>

              <div>
                <h2>
                  {fr
                    ? "Création d'un site configurable et personnalisable React / PHP"
                    : "Creation of a configurable and customisable website using React / PHP"}{" "}
                </h2>
                <h4 className="small">
                  {fr
                    ? "Voici deux exemples d'utilisation :"
                    : "Here are two examples of how it can be used :"}
                </h4>

                <br />

                <div data-aos="fade-left" data-aos-id="super-duper">
                  <a
                    href="https://nextjs-static-cm.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="full_width"
                      alt="site configurable"
                      src={cms}
                    />
                  </a>
                </div>
                <br />
                <br />
                <div data-aos="fade-left" data-aos-id="super-duper">
                  <a href="https://welcomepoitiers.fr/" target="_blank">
                    <img
                      className="full_width"
                      alt="configurable website"
                      src={welcome}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2>
                {fr
                  ? "Création d'une grille CSS JS permettant de conserver le ratio des images - HTML / CSS / JS"
                  : "Creation of a CSS / JavaScript grid that preserves image aspect ratios"}{" "}
              </h2>
              <br />
              <div data-aos="fade-right" data-aos-id="super-duper">
                <a
                  href="https://github.com/Aline86/grid_ratio_pictures"
                  target="_blank"
                >
                  <img
                    className="full_width"
                    alt={
                      fr
                        ? "Création d'une grille configurable"
                        : "Creation of a configurable grid"
                    }
                    src={grid}
                  />
                </a>
              </div>

              <div>
                <h2>
                  {fr
                    ? "Création d'un composant de carousel React réutilisable et configurable - React JS"
                    : "Creation of a reusable and configurable React carousel component"}{" "}
                </h2>

                <br />
                <div className="align-center">
                  {" "}
                  <a
                    href="https://github.com/Aline86/composant_carousel_react"
                    target="_blank"
                    className="link"
                  >
                    {fr
                      ? "Voir le code du composant React de carousel"
                      : "See React component carousel code"}{" "}
                  </a>
                </div>
                <br />
                <br />
                <a
                  href="https://composant-carousel-react.vercel.app/"
                  target="_blank"
                >
                  <img
                    className="full_width"
                    alt={
                      fr
                        ? "Lien vers le code du composant React de carousel"
                        : "See the source code for the React carousel component"
                    }
                    src={carousel}
                  />
                </a>
              </div>
            </div>

            <div>
              <h2>
                {fr
                  ? "Création d'un site vitrine pour une psychologue libérale - HTML / CSS / JS"
                  : "Creation of a showcase website for a liberal psychologist - HTML / CSS / JS"}{" "}
              </h2>
              <br />
              <div data-aos="fade-right" data-aos-id="super-duper">
                <a href="https://psychologue-durand.fr/" target="_blank">
                  <img
                    className="full_width"
                    alt={
                      fr
                        ? "Site psychologue libérale"
                        : "Site for a liberal psychologist"
                    }
                    src={psychologue}
                  />
                </a>
              </div>
              <div>
                {" "}
                <a href="https://psychologue-durand.fr/" target="_blank"></a>
              </div>
            </div>
            <div>
              <br />

              <div>
                <br />
                <br />
                <h3>
                  {fr
                    ? "Lien vers quelques projets Github"
                    : "Link towards a few Github's project"}
                </h3>
                <br />
                <div className="align-center">
                  <a className="link" href="https://github.com/Aline86">
                    https://github.com/Aline86
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        props.showLoader()
      )}
    </>
  );
}
