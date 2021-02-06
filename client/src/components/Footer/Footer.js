import React from "react";
import "./Footer.scss";


const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 center-pos">
                        <img src="/images/footer_logo.png" alt="logo"/>
                    </div>
                    <div className="col-4 center-pos">
                        <div className="page-footer__text">
                            В течение многих лет наша издательская компания выбирала лучших авторов из числа остальных,
                            ежегодно улучшая качество чтения для миллионов американцев!
                        </div>
                    </div>
                    <div className="col-4 center-pos">

                        <ul className="page-footer__list">
                            <div className="page-footer__text" style={{display: "inline"}}>
                                Контакты
                            </div>
                            <li><span>г.Гомел ул.Крестьянская 22</span></li>
                            <li><span>+375 1223 1312</span></li>
                            <li><span>meepo@mail.ru</span></li>
                            <li><span>goodbook.org</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
