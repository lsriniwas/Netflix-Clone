import React from 'react';
import { useParams } from 'react-router-dom';

function VideoPlayer(props) {
    const {id} = useParams()
    return (
        <iframe width="100%" title="hello" height="99%" src={`https://www.youtube.com/embed/${id}?autoplay=1&showinfo=0&controls=0&mute=1&rel=0`} frameBorder="0" autoplay="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
  
    );
}

export default VideoPlayer;