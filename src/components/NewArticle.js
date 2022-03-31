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
    const [article_type, setArticleType] = useState('');

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
                if(type && (content.length >= 6 || ((type==='list' || type==='slider' || type==='grid') && content.length > 0))){
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
                    <option value='slider'>Slider</option>
                    <option value='grid'>Grid</option>
                </select>
                {(type!=='list' && type!=='slider' && type!=='grid') && <textarea placeholder="Zawartość..." name="content" rows="7" value={content} onChange={(e) => {
                    if(type==='h1'){
                        setContent(e.target.value.toUpperCase());
                    }else{
                        setContent(e.target.value);
                    }
                }}></textarea>}
                {(type==='list' || type==='slider' || type==='grid') && <AddList content={content} changeContent={changeContent}/>}
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value.toUpperCase())} placeholder='Tytuł bloga'></input>
                <input type='text' value={description} onChange={(e) => setDescritpion(e.target.value)} placeholder='Krótki opis'></input>
                <label htmlFor="link">Zdjęcie ma mieć ścieżkę "../imgs/folder/nazwa_zdj.jpg"</label>
                <input name="link" type='text' value={img} onChange={(e) => setImg(e.target.value)} placeholder='link do obrazka'></input>
                <select value={article_type} onChange={(e) => setArticleType(e.target.value)}>
                    <option value={''}>Wybierz tematykę</option>
                    <option value='Fotografia Artystyczna'>Fotografia Artystyczna</option>
                    <option value='Sesje Zdjęciowe'>Sesje Zdjęciowe</option>
                    <option value='Reportaże'>Reportaże</option>
                    <option value='Obrazy'>Obrazy</option>
                    <option value='Murale'>Murale</option>
                    <option value='Anioły'>Anioły</option>
                    <option value='Blog'>Blog</option>
                </select>
                <input className="button standard" type='submit' value='Dodaj element' />
                <input className="button primary" type='submit' value='Opublikuj' onClick={e => {
                    e.preventDefault();
                    if(current.length>0 && img && title && description && article_type){
                        createArticle({article: current, article_type, img, title, description, date: new Date()}).then((article) => {
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
                    }else if(!article_type){
                        setAlert('Nie ma podanej tematyki');
                    }else{
                        setAlert('Nie dodałaś żadnych elementów do Artykułu, albo czegoś nie ma');
                    }
                    
                }}/>
            </form>
            <EdditedArticle article={{data: {article: current}}} changeCurrent={(article) => setCurrent(article)}/>
            </main>
        </div>
    )
}