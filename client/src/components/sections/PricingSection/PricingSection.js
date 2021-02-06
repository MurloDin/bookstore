import React from "react";
import "./PricingSection.scss";
import PriceCard from "../../PriceCard";


const PricingSection = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <div className="pricing-section__title">Мы так же помогаем писателям</div>
                <div className="row">
                    <div className="col-3">
                        <PriceCard
                            title="Дизайн книги"
                            price="300"
                            desc="Мы позаботимся о том, чтобы ваша книга выглядела наилучшим образом!"
                        />
                    </div>
                    <div className="col-3">
                        <PriceCard
                            title="Публикация"
                            price="1200"
                            desc="Положитесь на нас и зарабатывайте новую фан-базу читателей!"
                        />
                    </div>
                    <div className="col-3">
                        <PriceCard
                            title="Редакция"
                            price="700"
                            desc="Исправление ошибок и форматирование - это то, что мы делаем!"
                        />
                    </div>
                    <div className="col-3">
                        <PriceCard
                            title="Электронная книга"
                            price="800"
                            desc="Продвижение вашей электронной книги будет для нас честью!"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default PricingSection;
