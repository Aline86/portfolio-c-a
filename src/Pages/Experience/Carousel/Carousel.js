import { useEffect, useState, useRef } from "react";
import "./styles/global.css";
import CarouselContainer from "./CarouselContainer";
import Card_1 from "./Card1";
import Card_2 from "./Card2";
export function Carousel({ width, height, gap, cardNumber }) {
  const [colors, setColors] = useState([<Card_1 />, <Card_2 />]);

  const [transitionFinished, setTransitionFinished] = useState(false);

  const cardRef = useRef();
  const [clic, setIsClic] = useState(false);
  const result = window.matchMedia("(max-width: 1200px)");
  const [cardValue, setCardValue] = useState(0);

  function updateCardEnd() {
    document.addEventListener("transitionend", function (e) {
      e.preventDefault();

      if (Array.isArray(colors) && colors.length === cardNumber) {
        let res = colors.splice(0, cardValue);

        let col = colors.concat(res);
        setColors(col);

        setIsClic(false);
      }
    });
  }

  function updateTransitionState(state) {
    setTransitionFinished(state);
  }

  function updateColors(state) {
    setTransitionFinished(state);
  }

  useEffect(() => {}, []);
  useEffect(() => {}, [colors]);
  return (
    <div className="body-container">
      {colors !== undefined &&
        Array.isArray(colors) &&
        colors.length === cardNumber && (
          <CarouselContainer
            width={width}
            height={height}
            gap={gap}
            updateColors={updateColors}
            colors={colors}
            transitionFinished={transitionFinished}
            updateTransitionState={updateTransitionState}
            cardRef={cardRef}
            setIsClic={setIsClic}
            setCardValue={setCardValue}
            updateCardEnd={updateCardEnd}
            clic={clic}
            cardValue={cardValue}
          />
        )}
    </div>
  );
}
