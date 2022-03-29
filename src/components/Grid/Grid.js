import React from "react";
import Image from "./Image"

export default function Grid({photos}){

return(
    <div className='photo-grid'>
        {photos.map((photo, key) => <Image key={key} id={key} photo={photo}/>)}
    </div>
)
}