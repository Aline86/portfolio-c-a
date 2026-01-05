import { ThemeContext } from "../../../Context/ThemeContext";
import { useContext } from "react";
import down from "./img/down.png";
function Card_1() {
  const { fr, en } = useContext(ThemeContext);
  return (
    <main class="main_formation">
      <header>
        <h1> {fr ? "Expérience Web" : "Web experience"} - </h1>
      </header>
      <section class="center_text">
        <section>
          <section class="section_dates">
            <div class="container">
              <div>
                <div class="job-title">
                  {fr ? "Développeuse Web" : "Web Developper"} -{" "}
                  <span class="">Einden</span>
                </div>
                <br />
                <span class="job-duration">CDI - 2022 - 2026</span>
              </div>
              <div>
                <div class="job-title">
                  {fr ? "Développeuse Web" : "Web Developper"} -{" "}
                  <span class="">Ayaline</span>
                </div>
                <br />
                <span class="job-duration">CDI - 2021 - 2022</span>
              </div>
              <div>
                <div class="job-title">
                  {fr ? "Développeuse Web" : "Web Developper"} -{" "}
                  <span class="">Alternetis</span>
                </div>
                <br />
                <span class="job-duration">
                  {fr
                    ? " - Stage 2020, Alternance 2020 - 2021"
                    : " - Internship 2020, Work-study 2020–2021"}
                </span>
              </div>
            </div>
          </section>
          <section>
            <div class="container">
              <ul>
                <li>
                  {fr
                    ? "Développement de middlewares de synchronisation de données en Symfony 6 et 7 avec l'utilisation de listeners, cronjobs, webhooks et appels API."
                    : "Development of data synchronization middlewares in Symfony 6 and 7, using listeners, cron jobs, webhooks, and API calls."}
                </li>
                <li>
                  {fr
                    ? "Analyse des besoins client et des API pour développer des middlewares configurables et automatisés de synchronisation des données avec mappage de structures de données différentes."
                    : "Analysis client requirements and APIs to develop configurable and automated data synchronization middlewares, including mapping between different data structures."}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div class="container">
              <ul>
                <li>
                  {fr
                    ? "Création de modules Prestashop pour l'affichage, la synchronisation des données, les fonctionnalités de paiement,etc. pour les versions 1.6, 1.7 et 8."
                    : "Development of PrestaShop modules for data display, synchronization, payment features, and more, for versions 1.6, 1.7, and 8."}
                </li>
                <li>
                  {fr
                    ? "Migration de modules et de sites Prestashop d'une version à une autre."
                    : "Migrated PrestaShop modules and websites between versions."}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div class="container">
              <ul>
                <li>
                  {fr
                    ? "Développement, optimisation et automatisation de scripts de reprises d’indexation (PHP, MySQL)."
                    : "Development, optimisation, and automation of reindexing scripts (PHP, MySQL)."}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div class="container">
              <ul>
                <li>
                  {fr
                    ? "Création de fonctionnalités front-end : Carousels,  Calendriers, Filtres par dates, Ajout de nouveaux visuels, Animations CSS sur des éléments visuels."
                    : "Designed and implemented front-end functionalities such as carousels, calendars, date filters, enhanced visuals, and CSS animations for interactive elements."}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div class="container">
              <ul>
                <li>
                  {fr
                    ? "Création de sites web en Symfony 5 et 6."
                    : "Development of websites using Symfony 5 and 6."}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div class="container">
              <ul>
                <li>
                  {fr
                    ? " Développement de fonctionnalités sur un site marchand ReactJS."
                    : "Development of features on a ReactJS e-commerce website."}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div class="container">
              <ul>
                <li>
                  {fr
                    ? "Reprise d’une application C# (Webforms) pour mettre à jour ses fonctionnalités, corriger les bugs et permettre l’envoi de fichiers et vidéos lourdes via une API."
                    : "Maintenance and enhancement of a C# (WebForms) application to update features, fix bugs, and enable the transfer of large files and videos via an API."}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div class="container">
              <ul>
                <li>
                  {fr
                    ? "Intervention sur des frameworks ayant une composante Symfony pour des projets divers."
                    : "Engaged in development and maintenance of diverse projects based on frameworks integrating Symfony components."}{" "}
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>
      <img
        src={down}
        alt="scroll down"
        class="down_img"
        title={
          fr
            ? "Scroller pour voir la suite"
            : "Scroll down for more information"
        }
      />
    </main>
  );
}

export default Card_1;
