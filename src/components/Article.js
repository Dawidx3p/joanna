import React from "react";
import { Link } from "react-router-dom";

import Slider from './Slider/Slider';
import Grid from './Grid/Grid';

export default function Article({article}){
    return (
        <article>
            {article.data && article.data.article.map((part, key) => {
                switch(part.type){
                    case 'h1':
                        return <h1 key={key}>{part.content}</h1>;
                    case 'h2':
                        return <h2 key={key}>{part.content}</h2>;
                    case 'h3':
                        return <h3 key={key}>{part.content}</h3>;
                    case 'h4':
                        return <h4 key={key}>{part.content}</h4>;
                    case 'p':
                        return <p key={key}>{part.content}</p>;
                    case 'list':
                        return <ul key={key}>{part.content.map((item, key) => <li key={key}>{item}</li>)}</ul>;
                    case 'slider':
                        return <Slider key={key} imgs={part.content}/>;
                    case 'grid':
                        return <Grid key={key} photos={part.content}/>;
                    case 'img':
                        return <img src={`https://joanneart.netlify.app/${part.content.slice(3)}`} alt='for the blog article'  key={key}/>;
                    default:
                        return null;
                }
            })}
            {article.ref && <Link className="button primary" to={`/edit/${article.ref['@ref'].id}`}>Edytuj Artykuł</Link>}
        </article>
    )
}