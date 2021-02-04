import React, { useState } from "react";
import styles from "./carousel.module.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
<<<<<<< HEAD
import Carousel from "react-elastic-carousel"
import Slider from "react-slick";
import { ShowMovies } from "../ShowMovies";

function MovieRow({ items, title }) {
  const [scrollX, setScrollX] = useState(0);
  const [show, setShow] = useState(false)

  const settings = {
      slidesToShow: 9,
      slidesToScroll: 8,

  }

=======
import { useHistory } from "react-router-dom";

function MovieRow({ items, title }) {
  const [scrollX, setScrollX] = useState(0);
  const history = useHistory();
>>>>>>> 9833af9f1e36a0ee3be5e05f493dae17ce7fd9f0
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
<<<<<<< HEAD

  const handleEnter = () => {
    setShow(true)
  }

  const handleLeave = () => {
    setShow(false)
  }

  return (
    <div>
        
      <ShowMovies items = {items}/>
      <ShowMovies items = {items}/>

      <div>
        
=======
  return (
    <div className={styles.carousel}>
      <h2 style={{ color: "#fff" }}>{title}</h2>
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
          {items.map((item, key) => {
            return (
              <div
                onClick={() => history.push(`/video/${item.video}`)}
                key={key}
                className={styles.carousel__item}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            );
          })}
        </div>
>>>>>>> 9833af9f1e36a0ee3be5e05f493dae17ce7fd9f0
      </div>



    </div>
  );
}

export default MovieRow;
