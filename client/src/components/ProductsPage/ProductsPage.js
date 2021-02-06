import React, {useState, Component, useEffect} from "react";
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {fetchBooks, addedToCart} from '../../actions';
import "./ProductsPage.scss";
import ProductCard from "../ProductCard";
import {Link} from 'react-router-dom'
import ModalWindow from "../ModalWindow";


const ProductsPage = ({books, onAddedToCart, handleOpenModal, handleCloseModal, showModal, book}) => {

    const [count, setCount] = useState(6)
    const [filter, setFilter] = useState("")
    const [select, setSelect] = useState("")

    const handleChange = (event) => {
        setSelect(event.target.value);
    }
    console.log(select)
    return (
        <section className="products-page">
            <div className="container" style={{textAlign: "center"}}>
                <div className="row">
                    <div className="products-page__wrapper">
                        <div className="">
                            <div className="">Жанр</div>
                            <select value={select} onChange={handleChange}>
                                <option value="">Всё</option>
                                <option value="Фантастика">Фантастика</option>
                                <option value="Детективы">Детективы</option>
                                <option value="Фентези">Фентези</option>
                                <option value="Детская литература">Детская литература</option>
                                <option value="Научная литература">Научная литература</option>
                            </select>
                        </div>
                        <div className="" style={{marginLeft: "-80px"}}>
                            <div className="">Поиск</div>
                            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)}/>
                        </div>
                        <Link to='/basket' className="products-page__basket">Корзина</Link>
                    </div>
                </div>
                <div className="title">Список книг</div>
                <div className="row">
                    {
                        books.map((item, idx) => {
                            if (idx < count) {
                                if (select === "") {
                                    if (filter === "") {
                                        return (
                                            <div className="col-4">
                                                <ProductCard
                                                    onShow={() => handleOpenModal(item)}
                                                    onAddedToCart={() => onAddedToCart(item._id)}
                                                    item={item}
                                                />
                                            </div>
                                        )
                                    } else {
                                        if (item.title.indexOf(filter) !== -1 || item.author.indexOf(filter) !== -1) {
                                            return (
                                                <div className="col-4">
                                                    <ProductCard
                                                        onShow={() => handleOpenModal(item)}
                                                        onAddedToCart={() => onAddedToCart(item._id)}
                                                        item={item}
                                                    />
                                                </div>
                                            )
                                        }
                                    }
                                } else {
                                    if (item.category === select) {
                                        if (filter === "") {
                                            return (
                                                <div className="col-4">
                                                    <ProductCard
                                                        onShow={() => handleOpenModal(item)}
                                                        onAddedToCart={() => onAddedToCart(item._id)}
                                                        item={item}
                                                    />
                                                </div>
                                            )
                                        } else {
                                            if (item.title.indexOf(filter) !== -1 || item.author.indexOf(filter) !== -1) {
                                                return (
                                                    <div className="col-4">
                                                        <ProductCard
                                                            onShow={() => handleOpenModal(item)}
                                                            onAddedToCart={() => onAddedToCart(item._id)}
                                                            item={item}
                                                        />
                                                    </div>
                                                )
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    }
                </div>
                <ModalWindow modalIsOpen={showModal}
                             onCLose={handleCloseModal}
                             onAddedToCart={() => onAddedToCart(book._id)}
                             item={book}/>
                {count < books.length && (
                    <button
                        className="products-page__button"
                        onClick={() => setCount((count) => count + 6)}
                    >
                        Показать ещё
                    </button>
                )}
            </div>
        </section>
    );
};


const BookListContainer = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [book, setBook] = useState({})

    useEffect(() => {
        props.fetchBooks()
    }, [])

    const handleOpenModal = (book) => {
        setBook(book);
        setShowModal(true);
        console.log(book);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const {books, loading, error, onAddedToCart} = props;
    return <ProductsPage
        books={books}
        onAddedToCart={onAddedToCart}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        showModal={showModal}
        book={book}
    />
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    console.log("map", bookstoreService)

    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(addedToCart(id))
    };
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));

