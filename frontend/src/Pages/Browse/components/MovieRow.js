import React, { useState } from "react";
import { ShowMovies } from "../ShowMovies";
import styles from "./carousel.module.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Backdrop, Fade, Modal, Paper } from "@material-ui/core";
import { MovieModal } from "../MovieModal";

function MovieRow({ items, title, isTvShow }) {
  return (
    <div className={styles.movies__container}>
      <h2 className={styles.genereh2}>{title}</h2>
      <ShowMovies items={items} isTvShow={isTvShow} />
    </div>
  );
}

export default MovieRow;
