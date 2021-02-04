import React from "react";
import styles from "./ShowMovies.module.css"
import { SingleItem } from "./SingleItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ShowMovies = ({items}) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        cssEase: "linear"
    }


    return (
            <Slider {...settings} >
                {
                    items.map((item) => (
                        <SingleItem item = {item}/>
                    ))
                }
            </Slider>
    )
}