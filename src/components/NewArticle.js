import React, { useCallback, useState } from "react";
import { createArticle } from "../api";
import AddList from "./AddList";
import EdditedArticle from "./EditedArticle";

export default function NewArticle(){
    const [type, setType] = useState('');
    const [content, setContent] = useState('');
    const [current, setCurrent] = useState([]);

    const changeContent = useCallback((content) => {
        setContent(content)
    },[])

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if(type && (content.length >= 10 || (type==='list' && content.length > 0))){
                    setCurrent(prev => [...prev, {type, content}])
                }else if(type){
                    console.log('za krótki tekst minimum 10 znaków');
                }else{
                    console.log('Wybierz rodzaj elementu')
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
                <input type='submit' value='Dodaj element' />
                <input type='submit' value='Opublikuj' onClick={e => {
                    e.preventDefault();
                    createArticle(current).then(() => {
                        console.log('Pomyślnie stworzono Artykuł');
                        setCurrent([]);
                    })
                }}/>
            </form>
            <EdditedArticle article={{data: {article: current}}} changeCurrent={(article) => setCurrent(article)}/>
        </div>
    )
}