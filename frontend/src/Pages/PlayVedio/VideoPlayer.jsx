import React, { useEffect } from 'react';
import ReactJWPlayer from 'react-jw-player';
import YouTube from 'react-youtube'

function VideoPlayer(props) {
    let playlist = [{
      title: "Bumblebee",
      //description: "###",
      image: "https://image.tmdb.org/t/p/original/lN6Z8FZrtpphQyuI6yYdTZi6x3G.jpg",
      sources: [{
      file: "http://api.themoviedb.org/3/movie/157336/videos?api_key=6bb5d740e8a1ab3796e7f0b7d5c47d91",
        label: '4K',
        'type': 'mp4',
        primary: 'html5',

      }
      ],
      
    }]
   
		
    return (
        <iframe width="100%" title="hello" height="99%" src="https://www.youtube.com/embed/psFf4KXJZoQ?autoplay=1&showinfo=0&controls=0&mute=1&rel=0" frameborder="0" autoplay="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
  
    );
}

export default VideoPlayer;