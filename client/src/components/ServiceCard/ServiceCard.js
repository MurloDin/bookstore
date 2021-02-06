import React from "react";
import "./ServiceCard.scss";


const ServiceCard = ({imgPath="/images/pic004.jpg", title="Self-publishing"}) => {
    return (
        <section className="service-card">
            <div className="service-card__img-wrapper">
                <img
                    src={imgPath}
                    alt="image"
                    className="service-card__img"
                />
            </div>
            <div className="service-card__title">{title}</div>
        </section>
    );
};


export default ServiceCard;
