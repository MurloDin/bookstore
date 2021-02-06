import React from "react";
import "./SevicesSection.scss";
import ServiceCard from "../../ServiceCard";


const SevicesSection = () => {
    return (
        <section className="services-section">
            <div className="container">
                <img
                    src="/images/pic003.png"
                    alt=""
                />
                <div className="services-section__title">
                    Вы чувствуете себя следующим Чарльзом Диккенсом или Эриком Ларсоном?
                </div>
                <div className="col-8 offset-2">
                    <div className="services-section__desc">
                        Независимо от того, является ли ваша работа художественной или документальной, у нас есть что предложить.
                    </div>
                </div>
            </div>
            <div className="services-section__cards-wrapper">
                <ServiceCard title="Художественная литература"/>
                <ServiceCard title="Приключенчиские книги" imgPath="/images/pic005.jpg"/>
                <ServiceCard title="Биографии известных личностей" imgPath="/images/pic006.jpg"/>
            </div>
            <div className="services-section__cards-wrapper" style={{marginTop: "60px"}}>
                <ServiceCard title="Детективы" imgPath="/images/pic007.jpg"/>
                <ServiceCard title="Научная литература" imgPath="/images/pic008.jpg"/>
                <ServiceCard title="Электронные книги" imgPath="/images/pic009.jpg"/>
            </div>
        </section>
    );
};


export default SevicesSection;
