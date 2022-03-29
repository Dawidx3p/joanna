import React from "react";
import { moveDown, moveUp } from "../utils";
import Grid from "./Grid/Grid";

import Slider from './Slider/Slider'

export default function EditedArticle({article, changeCurrent}){
    return (
        <article>
            {article.data && article.data.article.map((part, key) => {
                switch(part.type){
                    case 'h1':
                        return (
                            <div className="element" key={key}>
                                <h1>{part.content}</h1>
                                <div>
                                    <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                    <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                    <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                                </div>
                            </div>
                        )
                    case 'h2':
                        return (
                            <div className="element" key={key}>
                                <h2>{part.content}</h2>
                                <div>
                                    <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                    <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                    <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                                </div>
                            </div>
                        )
                    case 'h3':
                        return (
                            <div className="element" key={key}>
                                <h3>{part.content}</h3>
                                <div>
                                    <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                    <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                    <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                                </div>
                            </div>
                        )
                    case 'h4':
                        return (
                            <div className="element" key={key}>
                                <h4>{part.content}</h4>
                                <div>
                                    <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                    <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                    <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                                </div>
                            </div>
                        )
                    case 'p':
                        return (
                            <div className="element" key={key}>
                                <p>{part.content}</p>
                                <div>
                                    <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                    <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                    <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                                </div>
                            </div>
                        )
                    case 'slider':
                        return (
                            <div className="element" key={key}>
                                <Slider imgs={part.content}/>
                                <div>
                                    <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                    <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                    <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                                </div>
                            </div>
                        )
                    case 'grid':
                        return (
                            <div className="element" key={key}>
                                <Grid photos={part.content}/>
                                <div>
                                    <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                    <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                    <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                                </div>
                            </div>
                        )
                    case 'list':
                        return (
                            <div className="element" key={key}>
                                <ul>{part.content.map((item, key) => <li key={key}>{item}</li>)}</ul>
                                <div>
                                    <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                    <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                    <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                                </div>
                            </div>
                        )
                    case 'img':
                        return(
                            <div className="element" key={key}>
                                <img src={`https://joanneart.netlify.app/${part.content.slice(3)}`} alt='for the blog article'  key={key}/>
                                <div>
                                    <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                    <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                    <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                                </div>
                            </div>
                        )
                    default:
                        return null;
                }
            })}
        </article>
    )
}