import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i>  Início
            </Link>
            
            <Link to="/fotos">
                <i className="fa fa-image"></i>  Fotos
            </Link>
            <Link to="/promocao">
                <i className="fa fa-road"></i>  Promoção
            </Link>
            <Link to="/contato">
                <i className="fa fa-envelope"></i>  Contato
            </Link>
        </nav>
    </aside>