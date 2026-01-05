function Card({
  color,
  cardRef,
  transitionFinished,
  trasnsType,
  transX,
  width,
  gap,
  height,
  updateCard,
  index,
}) {
  const result = window.matchMedia("(max-width: 1200px)");
  if (transitionFinished) {
    return (
      <div
        className="card-app"
        style={{
          backgroundColor: `white`,
          width: `${width}vw`,
          height: `${height}vh`,
          marginRight: `${!result.matches ? gap : gap * 0.3}px`,
          transition: `${trasnsType}`,
          marginLeft: `${result.matches ? gap * 0.3 : 0}px`,
          transform: `translateX(${transX}px)`,
        }}
        ref={cardRef}
      >
        {color}
      </div>
    );
  } else {
    return (
      <div
        onClick={updateCard}
        className="card-app"
        ref={cardRef}
        data-value={index}
        style={{
          backgroundColor: `white`,
          width: `${width}vw`,
          height: `${height}vh`,
          marginRight: `${!result.matches ? gap : gap * 0.3}px`,
          marginLeft: `${result.matches ? gap * 0.3 : 0}px`,
        }}
      >
        {color}
      </div>
    );
  }
}

export default Card;
