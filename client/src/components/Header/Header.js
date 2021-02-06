import React from "react";
import "./Header.scss";
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="page-header">
            <div className="page-header__img-wrapper">
                <img
                    src="/images/logo.png"
                    alt="logo"
                    className="page-header__img"
                />
            </div>
            <div className="page-header__nav-wrapper">
                <ul className="page-header__nav">
                    <li className="page-header__nav-item">Главная</li>
                    <li className="page-header__nav-item">О нас</li>
                    <li className="page-header__nav-item">Цены</li>
                    <li className="page-header__nav-item">Обратная связь</li>
                    <li className="page-header__nav-item">Контакты</li>
                    <li className="page-header__nav-item"><Link to='/books' style={{color: "rgba(1,1,1,.6)"}}>Каталог</Link></li>

                </ul>
            </div>
        </header>
    );
};


export default Header;
