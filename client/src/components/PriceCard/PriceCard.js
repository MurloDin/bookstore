import React from "react";
import "./PriceCard.scss";


const PriceCard = ({title, price, desc}) => {
    return (
        <section className="price-card">
            <div className="price-card__title-wrapper">
                <div className="price-card__title">{title}</div>
                <hr style={{width: "60%"}}/>
                <hr style={{width: "30%"}}/>
            </div>
            <div className="price-card__price-wrapper">
                <div>от</div>
                <div className="price-card__price">{price} руб.</div>
                <div>за 20 страниц</div>
            </div>
            <div className="price-card__desc">{desc}</div>
            {/*<button className="price-card__btn">Подробнее</button>*/}
        </section>
    );
};


export default PriceCard;
