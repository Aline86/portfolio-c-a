import React, { useEffect, useState } from "react";
import "./Experience.css";
import { Carousel } from "./Carousel/Carousel";

export default function Experience(props) {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const setLoading = () => {
    setIsLoaded(true);
    props.hideLoader();
  };

  useEffect(() => {
    function handleResize() {
      setRefreshKey((prev) => prev + 1);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setLoading();
  }, []);

  return (
    <>
      {isLoaded ? (
        <div>
          <div className="full_h">
            <div className="container_all">
              <div className="margins">
                <div className="header_page_exp_">
                  <Carousel
                    key={refreshKey} // ← La clé force le remount complet
                    height={70}
                    width={80}
                    gap={30}
                    cardNumber={2}
                  />
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
