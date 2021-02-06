import React, {useEffect} from "react";
import Modal from 'react-modal';

import "./modal_window.scss";


const ModalWindow = ({
                         modalIsOpen, onCLose,onAddedToCart,basket=false,
                         item: {
                             title,
                             photoLocation,
                             desc,
                             price,
                             author,
                             pages,
                             discount,
                         }
                     }) => {

    useEffect(() => Modal.setAppElement('body'), [])

    return (
        <Modal isOpen={modalIsOpen}
               onRequestClose={onCLose}
               contentLabel="Book description"
               className="modal-window"
               overlayClassName="Overlay">
            <button onClick={onCLose}
                    className="modal-window__btn"/>
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-boundary_center">
                        <img src={`http://localhost:8000${photoLocation}`}
                             alt="photo"
                             className="modal-window__img"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="modal-window__wrapper">
                        <div className="modal-window__title">{title}</div>
                        <div className="modal-window__desc">{desc}</div>
                        <div className="modal-window__desc">Автор : {author}</div>
                        <div className="modal-window__desc">Страниц : {pages}</div>
                        {
                            basket ? (
                                    <div style={{marginTop: "30px"}}>
                                        <div className="modal-window__price">
                                            {discount ? price - ((price * discount) / 100) : price} руб.
                                        </div>
                                        <div className="product-card__discount modal-window__price2">{discount ? `${price} руб.` : ""}</div>
                                    </div>
                            ) : (
                                <div style={{marginTop: "60px"}}>
                                    <button
                                        onClick={onAddedToCart}
                                        className="product-card__btn">
                                        {discount ? price - ((price * discount) / 100) : price} руб.
                                    </button>
                                    <div className="product-card__discount" style={{marginLeft: "18%"}}>{discount ? `${price} руб.` : ""}</div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </Modal>
    );
};

export default ModalWindow;
