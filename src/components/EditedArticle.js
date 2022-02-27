import React from "react";
import { moveDown, moveUp } from "../utils";

export default function EditedArticle({article, changeCurrent}){
    return (
        <article>
            {article.data && article.data.article.map((part, key) => {
                switch(part.type){
                    case 'h1':
                        return (
                            <div key={key}>
                                <h1>{part.content}</h1>
                                <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                            </div>
                        )
                    case 'h2':
                        return (
                            <div key={key}>
                                <h2>{part.content}</h2>
                                <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                            </div>
                        )
                    case 'h3':
                        return (
                            <div key={key}>
                                <h3>{part.content}</h3>
                                <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                            </div>
                        )
                    case 'h4':
                        return (
                            <div key={key}>
                                <h4>{part.content}</h4>
                                <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                            </div>
                        )
                    case 'p':
                        return (
                            <div key={key}>
                                <p>{part.content}</p>
                                <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                            </div>
                        )
                    case 'list':
                        return (
                            <div key={key}>
                                <ul>{part.content.map((item, key) => <li key={key}>{item}</li>)}</ul>
                                <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                            </div>
                        )
                    case 'img':
                        return(
                            <div key={key}>
                                <img src={part.content} alt='for the blog article'  key={key}/>
                                <button onClick={() => changeCurrent(moveUp(article.data.article, key))}>w górę</button>
                                <button onClick={() => changeCurrent(moveDown(article.data.article, key))}>w dół</button>
                                <button onClick={() => changeCurrent(article.data.article.filter((li, key2) => key!==key2))}>usuń</button>
                            </div>
                        )
                    default:
                        return null;
                }
            })}
        </article>
    )
}