import React, { useCallback, useState } from "react";

import { createArticle } from "../api";
import { useAlert } from "../customHooks";

import AddList from "./AddList";
import EdditedArticle from "./EditedArticle";
import Navigation from "./Navigation";

export default function NewArticle({addArticle}){
    const [type, setType] = useState('');
    const [content, setContent] = useState('');
    const [current, setCurrent] = useState([]);
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescritpion] = useState('');

    const [alert, setAlert] = useAlert('');

    const changeContent = useCallback((content) => {
        setContent(content)
    },[])

    return(
        <div>
            <Navigation />
            <main>
            {alert && <div className="alert">{alert}</div>}
            <form className="article-form" onSubmit={e => {
                e.preventDefault();
                if(type && (content.length >= 6 || (type==='list' && content.length > 0))){
                    setCurrent(prev => [...prev, {type, content}])
                }else if(type){
                    setAlert('za krótki tekst minimum 6 znaków');
                }else{
                    setAlert('Wybierz rodzaj elementu')
                }
            }}>
                <select value={type} onChange={(e) => {
                    setContent('');
                    setType(e.target.value)}}>
                    <option value={''}>Wybierz opcje</option>
                    <option value='h1'>Nagłówek 1</option>
                    <option value='h2'>Nagłówek 2</option>
                    <option value='h3'>Nagłówek 3</option>
                    <option value='p'>Paragraf</option>
                    <option value='list'>Lista</option>
                    <option value='img'>Obraz</option>
                </select>
                {type!=='list' && <textarea placeholder="Zawartość..." name="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>}
                {type==='list' && <AddList content={content} changeContent={changeContent}/>}
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Tytuł bloga'></input>
                <input type='text' value={description} onChange={(e) => setDescritpion(e.target.value)} placeholder='Krótki opis'></input>
                <input type='text' value={img} onChange={(e) => setImg(e.target.value)} placeholder='link do obrazka'></input>
                <input className="button standard" type='submit' value='Dodaj element' />
                <input className="button primary" type='submit' value='Opublikuj' onClick={e => {
                    e.preventDefault();
                    if(current.length>0 && img && title && description){
                        createArticle({article: current, img, title, description, date: new Date()}).then((article) => {
                            setAlert('Pomyślnie stworzono Artykuł');
                            addArticle(article);
                            setCurrent([]);
                            setImg('');
                            setTitle('');
                        })
                    }else if(!img){
                        setAlert('Nie ma podanego linku do zdjęcia');
                    }else if(!title){
                        setAlert('Nie ma tytułu');
                    }else if(!description){
                        setAlert('Nie ma opisu');
                    }else{
                        setAlert('Nie dodałaś żadnych elementów do Artykułu');
                    }
                    
                }}/>
            </form>
            <EdditedArticle article={{data: {article: current}}} changeCurrent={(article) => setCurrent(article)}/>
            </main>
        </div>
    )
}