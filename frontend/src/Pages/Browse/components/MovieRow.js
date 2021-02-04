import React, { useState } from "react";
import { ShowMovies } from "../ShowMovies";

function MovieRow({ items, title }) {
  const [scrollX, setScrollX] = useState(0);
  const [show, setShow] = useState(false);

  const settings = {
    slidesToShow: 9,
    slidesToScroll: 8,
  };

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  const handleEnter = () => {
    setShow(true);
  };

  const handleLeave = () => {
    setShow(false);
  };

  return (
    <div>
      <ShowMovies items={items} />
    </div>
  );
}

export default MovieRow;
