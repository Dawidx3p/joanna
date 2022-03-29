import React from "react";

import Short from './Short/Short';
import Navigation from "./Navigation";

export default function Articles({articles}){
    return(
        <>
            <Navigation />
            <main>  
                {articles.map((article, key) => <Short key={key} article={article} />)}
            </main>
        </>
    )
}