import React from "react";
import "./ProductCard.scss";


const ProductCard = ({item, onAddedToCart, basket, onIncrease, onDecrease, onDelete, onShow}
) => {
    return (
        <section className="product-card" style={basket && {marginTop: "20px"}}>
            <div className="product-card__img-wrapper">
                <img
                    src={`http://localhost:8000${item.photoLocation}`}
                    alt="book"
                    className="product-card__img"
                    onClick={onShow}/>
            </div>
            <div className="product-card__title">{item.title}</div>
            <div className="product-card__author">{item.author}</div>
            {basket ? (
                <div>
                    <div className="product-card__btn-wrapper">
                        <div
                            className="product-card__btn2"
                            onClick={onIncrease}
                            style={{cursor: "pointer"}}
                        >
                            +
                        </div>
                        <div className="product-card__btn2">{item.count}</div>
                        <div
                            className="product-card__btn2"
                            onClick={onDecrease}
                            style={{cursor: "pointer"}}
                        >
                            -
                        </div>
                    </div>
                    <div>
                        {item.total} руб.
                        {item.total < item.price * item.count && (
                            <div className="product-card__discount" style={{color: "rgba(1,1,1,.6)"}}>
                                {`${item.price * item.count} руб.`}
                            </div>
                        )}
                    </div>
                    <button
                        className="product-card__delete-btn"
                        onClick={onDelete}
                    >
                        x
                    </button>
                </div>
            ) : (
                <div className="product-card__wrapper">
                    <button
                        onClick={onAddedToCart}
                        className="product-card__btn">
                        {item.discount ? item.price - ((item.price * item.discount) / 100) : item.price} руб.
                    </button>
                    <div className="product-card__discount">{item.discount ? `${item.price} руб.` : ""}</div>
                </div>
            )
            }
        </section>
    );
};


export default ProductCard;