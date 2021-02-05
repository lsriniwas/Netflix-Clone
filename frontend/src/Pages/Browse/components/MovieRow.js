import React, { useState } from "react";
import { ShowMovies } from "../ShowMovies";
import styles from "./carousel.module.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Backdrop, Fade, Modal, Paper } from "@material-ui/core";
import { MovieModal } from "../MovieModal";

function MovieRow({ items, title, isTvShow }) {
  return (
    <div>
      <h2 style={{ margin: 0, padding: 0, marginLeft: "6vw", color: "#fff" }}>
        {title}
      </h2>
      <ShowMovies items={items} isTvShow={isTvShow} />
    </div>
  );
}

export default MovieRow;
