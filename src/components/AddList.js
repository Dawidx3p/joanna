import React, { useEffect } from "react";

export default function AddList({changeContent, content}){
    useEffect(() => {
        changeContent([''])
    },[changeContent])
    return(
    <ul className="article-form-list">
        {typeof(content)==='object' && content.map((li, key) => {
            return(
                <li key={key}>
                    <input type='text' value={li} onChange={(e) => changeContent(content.map((item, key2) => key===key2 ? e.target.value : item))}/>
                    <button className="button standard" onClick={(e) => {
                        e.preventDefault();
                        changeContent([...content, ''])}}>Dodaj kolejny</button>
                    <button className="button standard" onClick={(e) => {
                        e.preventDefault();
                        changeContent(content.filter((item, key2) => key2!==key))}}>Usuń</button>
                </li>
            )
        })
        }
    </ul>
    )
}