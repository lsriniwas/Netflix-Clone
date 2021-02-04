import React, { useState } from "react";
import styles from "./carousel.module.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Backdrop, Fade, Modal, Paper } from "@material-ui/core";
import { MovieModal } from "../MovieModal";

function MovieRow({ items, title }) {
  const [scrollX, setScrollX] = useState(0);
  const [modalOpen,setModalOpen]=useState(false);
  const [item,setItem]=useState();
  const handleModalButton=()=>{
    setModalOpen(true)
    console.log("hello")
  }

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = 15 * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };
  return (
    <div className={styles.carousel}>
      <h2 style={{color:'#fff'}}>{title}</h2>
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
            items.map((item, key) =>  item.genre_ids.map(genre=> genre.name===title &&(
              <div key={key} className={styles.carousel__item} onClick={()=>{
                setItem(item)
                handleModalButton()
                
                }}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
              ))
            )}
        </div>
      </div>
      <Modal
        open={modalOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >   
            <MovieModal modalClose={setModalOpen} Movie={item}/>
            
      </Modal>
    </div>
  );
}

export default MovieRow;
