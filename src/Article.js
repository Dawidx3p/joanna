import React from "react";

export default function Article({article}){
    console.log(article);
    return (
        <div>
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
                    case 'img':
                        return <img src={part.content} alt='for the blog article'  key={key}/>;
                    default:
                        return null;
                }
            })}
            {article.ref && <button onClick={() => console.log('edytuje')}>Edytuj Artykuł</button>}
        </div>
    )
}