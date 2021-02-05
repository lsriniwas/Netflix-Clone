import React from "react";
import { ShowMovies } from "../ShowMovies";
import styles from "./carousel.module.css";


function MovieRow({ items, title, isTvShow }) {
  return (
    <div className={styles.movies__container}>
      <h2 className={styles.genereh2}>{title}</h2>
      <ShowMovies items={items} isTvShow={isTvShow} />
    </div>
  );
}

export default MovieRow;
