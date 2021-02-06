import React from "react";
import "./EventSection.scss";


const EventSection = () => {
    return (
        <section className="event-section">
            <div className="event-section__img"></div>
            <div className="event-section__content-wrapper">
                <div className="event-section__content-title">Пришло время</div>
                <div className="event-section__content-subtitle">почитать!</div>
                <button className="event-section__content-btn">Каталог</button>
            </div>
        </section>
    );
};


export default EventSection;
