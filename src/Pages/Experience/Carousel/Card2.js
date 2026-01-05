import { ThemeContext } from "../../../Context/ThemeContext";
import React, { useEffect, useState, useContext } from "react";
function Card_2() {
  const { fr, en } = useContext(ThemeContext);
  return (
    <h2 className="flex-center">
      C#, PHP, Javascript, NodeJS, ReactJS, NextJS, Laravel, MySQL, CSS, HTML,
      JAVA, Python, Prestashop, Symfony, Docker, Git, GitHub, GitLab
    </h2>
  );
}

export default Card_2;
