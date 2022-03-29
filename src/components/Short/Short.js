import React from "react";
import { Link } from "react-router-dom";

export default function Short({article}){
    return(
        
            <div className="thumbnail">
                <section>
                    <h3>{article.data.title}</h3>
                    <p>{article.data.description}</p>
                </section>
                <img src={`https://joanneart.netlify.app/${article.data.img.slice(3)}`} alt={`blog article ${article.data.title}`} />
                <nav><Link to={`/article/${article.ref['@ref'].id}`}>Edytuj Artykuł</Link></nav>
            </div>
        
        
    )
}