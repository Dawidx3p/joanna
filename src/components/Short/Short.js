import React from "react";
import { Link } from "react-router-dom";

export default function Short({article}){
    return(
        
            <div className="small-thumbnail" style={{backgroundImage: `url('https://joanneart.netlify.app/${article.data.img.slice(3)}')`}}>
                <section>
                    <h3>{article.data.title}</h3>
                </section>
                <nav><Link to={`/article/${article.ref['@ref'].id}`}>Edytuj Artykuł</Link></nav>
            </div>
        
        
    )
}