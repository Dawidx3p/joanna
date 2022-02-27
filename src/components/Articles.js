import React from "react";

import Article from './Article';
import Navigation from "./Navigation";

export default function Articles({articles}){
    return(
        <>
            <Navigation />
            <main>  
                {articles.map((article, key) => <Article key={key} article={article} />)}
            </main>
        </>
    )
}