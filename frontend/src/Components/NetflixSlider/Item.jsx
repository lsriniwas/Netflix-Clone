import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.scss'



function Item({movie}) {
    console.log(movie)
    return (
        <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <img src="https://image.tmdb.org/t/p/original/6al048Lat3eLVQOuKtc9h6Tu94d.jpg" alt="" />
          <div className='movie-info' style={{height:"80px",backgroundColor:"black"}}>

          </div>
        </div>
      );
    }}
  </SliderContext.Consumer>
    );
}

export default Item;

