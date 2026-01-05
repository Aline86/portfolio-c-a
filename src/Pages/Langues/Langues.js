import React, { useEffect, useState, useContext } from "react";
import "./Langues.css";
import bubble1 from "../../img/bubble1.png";
import bubble1meaning from "../../img/bubble1meaning.png";
import bubble2meaning from "../../img/bubble2meaning.png";
import bubble3meaning from "../../img/bubble3meaning.png";
import bubble2 from "../../img/bubble2.png";
import bubble3 from "../../img/bubble3.png";
import Fancybox from "../../Fancybox";
import { ThemeContext } from "../../Context/ThemeContext";
export default function Langues(props) {
  const loader = document.querySelector(".loader");

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
        <div className="display_center full_h">
          <div className="bg-white-languages">
            <div className="de">
              <div className="more_size">{fr ? "allemand" : "german"}</div>
            </div>
            <div className="german"></div>
            <div className="rest"></div>
            <Fancybox options={{ infinite: false }}>
              <a
                id="bub"
                data-fancybox="gallery"
                data-sizes="(max-width: 300px) 200px, 200px"
                data-src={bubble1meaning}
                className="button button--secondary no-bg"
              >
                <img className="bigger-img" src={bubble1} alt="C1" />
              </a>
            </Fancybox>
            <br />
            <div className="en">
              <div className="more_size">{fr ? "anglais" : "english"}</div>
            </div>
            <div className="english"></div>
            <div className="rest1"></div>
            <Fancybox options={{ infinite: false }}>
              <a
                id="bub"
                data-fancybox="gallery"
                data-sizes="(max-width: 300px) 200px, 200px"
                data-src={bubble1meaning}
                className="button button--secondary no-bg"
              >
                <img className="bigger-img" src={bubble1} alt="C1" />
              </a>
            </Fancybox>
            <br />
            <div className="es">
              <div className="more_size">{fr ? "espagnol" : "spanish"}</div>
            </div>
            <div className="spanish"></div>
            <div className="rest2"></div>
            <Fancybox options={{ infinite: false }}>
              <a
                id="bub"
                data-fancybox="gallery"
                data-sizes="(max-width: 300px) 200px, 200px"
                data-src={bubble2meaning}
                className="button button--secondary no-bg"
              >
                <img className="bigger-img" src={bubble2} alt="C1" />
              </a>
            </Fancybox>
            <br />
            <div className="ru" id="russian">
              <div className="more_size">{fr ? "russe" : "russian"}</div>
            </div>
            <div className="russian"></div>
            <div className="rest3"></div>
            <Fancybox options={{ infinite: false }}>
              <a
                id="bub"
                data-fancybox="gallery"
                data-sizes="(max-width: 300px) 200px, 200px"
                data-src={bubble3meaning}
                className="button button--secondary no-bg"
              >
                <img className="bigger-img" src={bubble3} alt="C1" />
              </a>
            </Fancybox>
          </div>
        </div>
      ) : (
        props.showLoader()
      )}
    </>
  );
}
