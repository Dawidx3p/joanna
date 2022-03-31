import React, {useState} from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navigation(){
  const navigate = useNavigate()
  const [burgerOpen, setBurger] = useState(false)
    return(
      <>
        <nav className="main">
          <ul>
            <li><NavLink to='/'>Artykuły</NavLink></li>
            <li><NavLink to='/add_article'>Dodaj Artykuł</NavLink></li>
          </ul>
        </nav>
        <nav className='burger'>
          {useLocation().pathname!=='/' && <div onClick={() => {
            navigate(-1);
            setBurger(false);
          }} className='back'>← Go back</div>}
          <div className='container' onClick={() => setBurger(prev => !prev)}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          {burgerOpen && <ul>
            <li><NavLink to='/'>Artykuły</NavLink></li>
            <li><NavLink to='/add_article'>Dodaj Artykuł</NavLink></li>
          </ul>}
        </nav>
      </>
    )
}