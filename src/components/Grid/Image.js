import React, { useState } from "react";

export default function GalleryImage({photo, id}){
    const [ratio, setRatio] = useState(0);
    return(
        <img 
        onLoad={(e) => {
            setRatio(e.target.width/e.target.height);
        }}
        src={`https://joanneart.netlify.app/${photo.slice(3)}`}
            className={`${ratio < 1 ? 'vertical' : ''}`}
            alt={`grid object number ${id}`}
            />
    )
}