import React from 'react';

function VideoPlayer({link}) {
    
    return (
        <iframe style = {{position: "absolute", top: 0}} width="100%" title="hello" height="50%" src={`https://www.youtube.com/embed/${link}?autoplay=1&showinfo=0&controls=0&mute=1&rel=0`} frameBorder="0" autoplay="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    );
}
export default VideoPlayer;