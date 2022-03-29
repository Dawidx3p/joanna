import React, { useEffect, useState } from "react";

export default function Slider({imgs}){

    const [pointer, setPointer] = useState(0);
    const [intervalId, setIntervalId] = useState(0);

    useEffect(() => {
        let pointerInsider = 0;
        const intervalId = setInterval(() => {
            pointerInsider++;
            console.log(pointerInsider);
            if(pointerInsider<imgs.length){
                setPointer(pointerInsider);
            }else{
                pointerInsider=0;
                setPointer(pointerInsider);
            }
            
        }, 4000)
        setIntervalId(intervalId);
        return () => clearInterval(intervalId)
    }, [imgs.length])
    return(
        <>
        <div className="slider">
            <div className="container" style={{marginLeft: '-'+100*pointer+'%', width: 100*imgs.length+'%'}}>
                {imgs.map((img,key) => <img 
                    key={key}
                    className="slider-img"
                    alt="something about this" 
                    src={`https://joanneart.netlify.app/${img.slice(3)}`}/>
                )}
            </div>
            <form className="controls">
            {imgs.map((img, key) => {
                return(
                    <input key={key} type="radio" value={key} id={`radio-btn${key}`} checked={pointer===key} name="radio-btn" onChange={() => {
                        setPointer(key);
                        clearInterval(intervalId);
                    }}/>
                )
            })}
        </form>
        </div>
        
    </>
    )
}