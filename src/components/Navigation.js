import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <nav className="main">
          <ul>
            <li><Link to='/'>Artykuły</Link></li>
            <li><Link to='/add_article'>Dodaj Artykuł</Link></li>
          </ul>
        </nav>
    )
}