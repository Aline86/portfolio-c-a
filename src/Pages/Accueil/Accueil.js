import React, { useEffect, useContext, useState } from "react";
import "./Accueil.css";
import video from "../../img/video.mp4";

import css3 from "../../img/css3.png";
import html5 from "../../img/html5.png";
import react from "../../img/react.png";
import nodejs from "../../img/nodejs.png";
import js from "../../img/js.png";
import php from "../../img/php.png";
import prestashop from "../../img/prestashop.png";
import symfony from "../../img/symfony.png";
import sql from "../../img/sql.png";
import laravel from "../../img/laravel.png";
import java from "../../img/java.png";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThemeContext } from "../../Context/ThemeContext";

export default function Accueil(props) {
  const loader = document.querySelector(".loader");
  const { fr, en } = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  const setLoading = () => {
    setIsLoaded(true);
    props.hideLoader();
    onLoadedData();
  };
  useEffect(() => {
    setLoading();
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div>
          <div className="bg-image">
            <div className="bg-white">
              <div className="bg-name">
                <h1>CLAIRE-ALINE HAESTIE</h1>
              </div>
            </div>
            <div className="bg-acc">
              <video
                style={{ opacity: isVideoLoaded ? 1 : 0 }}
                autoPlay
                playsInline
                loop
                muted
                step="0.1"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="scroll scroll1"></div>
          <div className="scroll scroll2"></div>
          <div className="full_height_acc">
            <div className="languages">
              <h2>
                {fr
                  ? "Technologies abordées en formation et en entreprise :"
                  : "Technologies studied at university and at work"}
              </h2>
              <div className="flex2">
                <img className="acc_img" alt="html" src={html5} />
                <img className="acc_img" alt="css3" src={css3} />
                <img className="acc_img" alt="js" src={js} />
                <img className="acc_img" alt="react" src={react} />
                <img className="acc_img" alt="nodejs" src={nodejs} />
                <img className="acc_img" alt="mysql" src={sql} />
                <img className="acc_img" alt="java" src={java} />
                <img className="acc_img" alt="php" src={php} />
                <img className="acc_img" alt="symfony" src={symfony} />
                <img className="acc_img" alt="laravel" src={laravel} />
                <img className="acc_img" alt="prestashop" src={prestashop} />
              </div>
            </div>
            <div className="container">
              <div className="flex">
                <div className="container_small">
                  <h2 className="white">Contact</h2>
                  <p className="mail white">ca.haestie@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        props.showLoader()
      )}
    </div>
  );
}
