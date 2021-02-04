import React, { useState } from "react";
import styles from "./carousel.module.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function MovieRow({ items, title }) {
  const [scrollX, setScrollX] = useState(0);

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

  return (
    <div className={styles.carousel}>
      <h2>{title}</h2>
      <div className={styles.carousel__left} onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className={styles.carousel__right} onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className={styles.carousel__listarea}>
        <div
          className={styles.carousel__list}
          style={{
            marginLeft: scrollX,
            width: items.length * 150,
          }}
        >
          {items.length > 0 &&
            items.map((item, key) => (
              <div key={key} className={styles.carousel__item}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
