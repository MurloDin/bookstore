import React, {useState} from "react";
import "./BasketPage.scss";
import ProductCard from "../ProductCard";
import {connect} from 'react-redux';
import {addedToCart, onDecrease, onDelete} from "../../actions";
import DeliveryForm from "../DeliveryForm";
import ModalWindow from "../ModalWindow";


const BasketPage = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const [showModal, setShowModal] = useState(false)
    const [book, setBook] = useState({})

    const handleOpenModal = (book) => {
        setBook(book);
        setShowModal(true);
        console.log(book);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <section className="basket-page">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="title" style={{marginTop: "30px"}}>Офрмление доставки</div>
                        <DeliveryForm total={total} items={items}/>
                    </div>
                    <div className="col-6" style={{textAlign: "center"}}>
                        <div className="title" style={{marginTop: "30px"}}>Корзина</div>
                        {
                            items.map((item, idx) => {

                                return (
                                    <ProductCard
                                        onIncrease={() => onIncrease(item._id)}
                                        onDecrease={() => onDecrease(item._id)}
                                        onDelete={() => onDelete(item._id)}
                                        onShow={() => handleOpenModal(item)}
                                        basket={true}
                                        item={item}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <ModalWindow modalIsOpen={showModal}
                             onCLose={handleCloseModal}
                             item={book}
                             basket={true}
                />
            </div>
        </section>
    );
};


const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: addedToCart,
    onDelete: onDelete,
    onDecrease: onDecrease
}


export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);